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

if [ -f "$SITE_DIR/.env.blog" ]; then
  set -a
  # shellcheck disable=SC1091
  . "$SITE_DIR/.env.blog"
  set +a
else
  echo "$LOG_PREFIX WARNING: .env.blog missing, hero-image generation will fail"
fi

# shellcheck disable=SC2016
/home/slavy/.local/bin/claude -p --dangerously-skip-permissions "$(cat <<'PROMPT'
You are the autonomous weekly blog writer for gembaindustrial.com.

Read these files first (strict order):
  1. /gembaindustrial.com/content/blog/CLAUDE.md
  2. /gembaindustrial.com/content/blog/story_vault.md
  3. /gembaindustrial.com/content/blog/posts.json

Your job TODAY: publish ONE grounded post — EN plus FULL BG and ES
translations (see TRANSLATIONS below) — following the
community-problem / incident-retelling process from CLAUDE.md.

DISCOVERY -- use WebSearch across:
  - CSB.gov investigation reports (recent published)
  - HSE UK safety alerts and COMAH public lessons
  - OSHA incident database for refinery / petrochemical incidents
  - Ipiecca, Concawe technical reports
  - Hydrocarbon Processing, Refinery Operations, Chemical Engineering News
    article abstracts
  - Reddit: r/chemicalengineering, r/oilandgasworkers
    (posts with >=20 upvotes, >=10 comments, last 30 days)
  - Catalyst manufacturer technical bulletins: BASF, Axens,
    Haldor Topsoe, Johnson Matthey

Honour rotation rules by reading posts.json:
  - never 3 consecutive posts in the same cluster
  - every 5th post is a pillar (2500+ words)

Pick ONE candidate that is specific (a named incident report, a specific
question asked by young techs, a catalyst manufacturer announcement with
contractor implications). Never write "top 10 safety tips" style posts.

DEEP RESEARCH: WebFetch the full incident report / thread / announcement.
Read the whole thing. Capture report number, date, location (if public),
and the key finding quote.

EMOTIONAL ANGLE: pick ONE hook category from CLAUDE.md -- usually
"the training doesn't cover this" or "what looked routine went sideways".

WRITE: 1500-2200 words, long-tail H1, following the 7-section recipe.
No "safety is paramount", no "today's modern refineries". Anonymize
individuals even if the source report names them (use role titles).

SELF-REVIEW: grep for Forbidden Vocabulary from CLAUDE.md + industrial
cliche list. Rewrite any hit.

BYLINE: "GEMBA Industrial crew" by default; "Slavcho Ivanov and the GEMBA
Industrial crew" ONLY if a story_vault.md entry is integrated.

HERO IMAGE (two options -- prefer Unsplash for refinery authenticity):

  Option A (preferred for Cluster 1 & 2) -- curated Unsplash:
    - Use WebFetch on unsplash.com/s/photos/<query> with queries like
      refinery-night, catalyst-loading, confined-space-entry, hydrocracker-vessel
    - Download the chosen photo to /gembaindustrial.com/public/images/blog/<slug>/hero.jpg
    - If a 2x version is available, save as hero@2x.jpg
    - Attribution line under the hero in the post body (mandatory):
        *Image: <photographer name> on Unsplash.*

  Option B (for Cluster 3 / abstract commentary) -- Flux.1 [dev]:
      node /gembaindustrial.com/scripts/generate-hero-image.cjs \
        --site gembaindustrial \
        --slug <post-slug> \
        --prompt "<specific industrial concept, moody, realistic>" \
        --public-root /gembaindustrial.com/public

  Frontmatter:
    hero: /images/blog/<slug>/hero.webp    (or hero.jpg for Unsplash)
    heroRetina: /images/blog/<slug>/hero@2x.webp   (or hero@2x.jpg)
  posts.json: hero_status: "generated" (Flux) or "unsplash" (Option A)

  Fallback -- if both Unsplash and Flux fail:
    hero: /images/blog/fallbacks/gembaindustrial-default.webp
    heroRetina: /images/blog/fallbacks/gembaindustrial-default@2x.webp
    posts.json: hero_status: "fallback"

  Never use "man in hard hat smiling" stock photos. Continue publishing
  even if all image sources fail (set hero:null + needs_image_update).

STRUCTURED DATA SIDECAR (mandatory):
  Write /gembaindustrial.com/content/blog/<slug>.schema.json with
  articleSchema (@type: Article) + faqSchema (@type: FAQPage). See
  CLAUDE.md "Structured data" section for shape.
  Validate:
      node /gembaindustrial.com/scripts/validate-schema.cjs \
        /gembaindustrial.com/content/blog/<slug>.schema.json
  If validation fails, FIX before publishing.


TRANSLATIONS (mandatory, owner rule 2026-07-05): after the EN post is final,
write FULL Bulgarian and Spanish translations as <slug>.bg.md and <slug>.es.md
— body-only (NO frontmatter), starting with the translated H1. Translate image
alt text, captions and Mermaid labels; keep URLs as-is. posts.json title and
excerpt must be objects with en/bg/es keys — fill all three with real
translations, and make internal blog links use /bg/ and /es/ paths.

PUBLISH:
    cd /gembaindustrial.com
    node generate-sitemap.cjs
    npm run build
    node prerender.cjs            # REQUIRED -- per-route SEO fix from earlier work
    sudo systemctl restart gembaindustrial

Save the post as /gembaindustrial.com/content/blog/<slug>.en.md. Prepend
the extended posts.json entry (source_url, source_type, source_date,
emotional_hook, word_count, first_hand_story_used, hero_status).

source_type values for this site: "csb_investigation", "hse_uk_alert",
"osha_incident", "industry_publication", "reddit", "catalyst_bulletin".

FAILURE MODES:
  - No quality candidate today: log NO_QUALITY_CANDIDATE to stderr and
    exit non-zero. Skip the week. Filler posts break the authenticity bet.
  - Report URL broken: pick another candidate.
  - Fal.ai fails and Unsplash fails: publish with hero:null and flag in
    posts.json.

Never publish BG or ES translations. Never name individuals from incident
reports. Never use "man in hard hat smiling" stock photos. TODAY = $(date -I).
PROMPT
)" \
  --allowedTools "Read,Write,Edit,Bash,Glob,Grep,WebSearch,WebFetch" \
  --max-turns 60

echo "$LOG_PREFIX Done."
