#!/bin/bash
# ============================================================
# Automated blog writer for gembaindustrial.com
# 2026 community-problem SEO strategy: one grounded industrial problem
# retold per week (CSB / HSE UK / OSHA / industry publications / Reddit).
#   crontab: 0 9 * * 5  /gembaindustrial.com/auto-blog.sh >> /var/log/gembaindustrial-blog.log 2>&1
# ============================================================

set -e

SITE_DIR="/gembaindustrial.com"
BLOG_DIR="$SITE_DIR/content/blog"
LOG_PREFIX="[AUTO-BLOG-IND $(date '+%Y-%m-%d %H:%M')]"

echo "$LOG_PREFIX Starting..."

# Failure alert (owner-approved 2026-07-05): email Slavy if this run exits non-zero
# (auth error, crash, skipped week). Sender: /home/slavy/bin/blog-alert.cjs.
trap 'rc=$?; if [ "$rc" -ne 0 ]; then /usr/bin/node /home/slavy/bin/blog-alert.cjs "gembaindustrial.com" "exit=$rc; $(tail -c 900 /var/log/gembaindustrial-blog.log 2>/dev/null)" || true; fi' EXIT
cd "$SITE_DIR"

TOPIC_HINT="${1:-}"   # по желание: тема от оператора

if [ -f "$SITE_DIR/.env.blog" ]; then
  set -a
  # shellcheck disable=SC1091
  . "$SITE_DIR/.env.blog"
  set +a
else
  echo "$LOG_PREFIX WARNING: .env.blog missing, hero-image generation will fail"
fi

# shellcheck disable=SC2016
# 🔑 От 26.10.2026 писачът върви през Claude Agent SDK, а НЕ през Claude Code.
#    Причината: SDK се удостоверява САМО с ANTHROPIC_API_KEY (няма връщане към
#    абонаментната OAuth сесия), затова харчи ПРОМОЦИОНАЛНИТЕ кредити, а не купените,
#    и отпада режимът на провал „тих OAuth logout“ от 03.08.2026.
#    Брифът живее в /opt/blog-agent/briefs/gembaindustrial.md — там се редактира, не тук.
/usr/bin/node /opt/blog-agent/run.mjs gembaindustrial "$TOPIC_HINT"
echo "$LOG_PREFIX Done."

# Auto commit+push of new blog content (owner rule 2026-07-05).
# No-op if /gembaindustrial.com is not a git repo. Secret-scans staged diff; emails on push failure.
(
  cd /gembaindustrial.com || exit 0
  git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0
  git add content/blog public/images/blog public/sitemap.xml >/dev/null 2>&1 || true
  git diff --cached --quiet && exit 0
  if git diff --cached | grep -qiE "sk_live_|api[_-]?key *=|BEGIN (RSA |EC )?PRIVATE KEY|passwd|password *="; then
    echo "[auto-blog] SECRET SUSPECT in staged diff - NOT committing" >&2
    /usr/bin/node /home/slavy/bin/blog-alert.cjs "gembaindustrial.com" "auto-commit skipped: secret suspect in staged blog diff - review manually" || true
    exit 0
  fi
  git commit -q -m "blog: weekly auto-post $(date -I)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>" || exit 0
  if git push -q origin main; then
    echo "[auto-blog] blog content committed + pushed"
  else
    echo "[auto-blog] git push FAILED" >&2
    /usr/bin/node /home/slavy/bin/blog-alert.cjs "gembaindustrial.com" "weekly post published OK but git push FAILED - push manually from /gembaindustrial.com" || true
  fi
) || true
