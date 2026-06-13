![Industrial refinery complex at dusk, process towers and vessels lit against a darkening sky](/images/blog/givaudan-caramel-runaway-reactor-csb/hero.jpg)

*Image: Naturalist Boat on Unsplash.*

On the afternoon of November 12, 2024, a vent valve on a 2,500-gallon
reactor at a Louisville, Kentucky plant stuck shut. The reactor was
cooking sugar into caramel coloring — about as far from "hazardous
process" as most people would picture. The crew did what crews do when a
valve misbehaves: they stayed at the panel and tried to work the problem.

The U.S. Chemical Safety Board later calculated they had more than three
minutes to walk out. Two of them never did.

The CSB released its final report on the Givaudan Sense Colour explosion
on May 27, 2026 (investigation **2024-06-I-KY**). Two workers were
killed. Three more were seriously hurt. And a section of the reactor was
thrown past the fence line into a neighbor's yard. The Board's
chairperson summed it up in five words: "a catastrophe waiting to
happen." This is the longer version — read from the chair of the people
who work on equipment like this for a living.

## What the report actually says

Reactor 6 was running a batch of caramel coloring when the sugar
ingredient began to decompose. Decomposition is not the same as the
normal cook — it is a runaway. Think of it like a campfire that suddenly
catches its own fuel and roars out of control. The sugar broke down and
generated non-condensable gases — gases that will not turn back into
liquid — faster than the vessel could vent them. The pressure climbed
past anything the reactor was built to hold.

The emergency relief system that was supposed to be the last line of
defense opened. And it was nowhere near big enough.

The CSB's number on that is blunt: the relief system would have needed to
be roughly **four times larger** to handle the pressure this reaction
produced. It had been undersized since it was installed in 2021. The
vessel ruptured, and a piece of it traveled hundreds of feet.

The quote that matters most is from CSB Chairperson Steve Owens:

> "The reactor's pressure relief system was not designed to release
> pressure from a reaction like this, and Givaudan did not recognize the
> potential for a runaway reaction to happen."

Read that twice. The relief device was not undersized because someone
did the math wrong. It was undersized because the runaway reaction it
needed to protect against was never on anyone's list. You cannot size a
relief valve for a scenario you have not identified. The supervisory
investigator said the same thing in plainer language: the company "did not
understand the severe reactive hazards associated with the sugar
ingredients used in its caramel coloring process."

## The part that should bother you: it was sugar

If this had been a hydrocracker reactor or an ethylene oxide drum, the
hazard would have been obvious from the gate badge onward. Everyone who
works around a refinery reactor treats it as something that can hurt you.
The trap at Givaudan was that the feedstock was sugar — a material whose
safety data sheet, per the investigation, did not even document the
decomposition temperature or what happens past it.

That is the "what looked routine went sideways" pattern in its purest
form. Nobody walks into a caramel-coloring batch expecting a detonation.
The reactive hazard was real the whole time. It just never got written
down, never got tested, never made it into a process hazard analysis —
the formal study a plant does to find the ways a process can go wrong. The
CSB's recommendation list now includes third-party reactivity testing on
the sugar ingredients — the kind of test that, done once before 2021,
would have flagged the relief sizing problem on paper instead of in a
neighborhood.

For anyone doing contract work across multiple sites, this is the harder
lesson — harder than "size your relief valves." It is this: the
benign-looking units are where the gaps live. The reactors that everyone
treats with skull-and-crossbones caution get the analyses. The "it's just
sugar" vessels get overlooked, and a relief header sized off an assumption
rides along for three years until the day the assumption breaks.

## The vent valve nobody fixed

Two facts from the investigation sit badly next to each other. First,
the vent valve that was used to cool the reactor had reportedly been
malfunctioning for months before the explosion; the final report did not
pin down exactly why it failed on the day. Second, a similar explosion had
already happened at this same facility back in 2003.

So the immediate trigger — a stuck cooling valve — was a known bad actor.
And the failure mode — a reactor going over pressure — had a precedent on
site going back two decades. Neither got run to ground. That is not a
story about a freak component. It is a story about a maintenance backlog
and a near-miss memory that both got quietly normalized.

Crews see this constantly. A valve that "sticks sometimes" becomes a
valve you work around. A relief device that nobody has revalidated
becomes a relief device everyone assumes is fine. The standard procedure
is to treat a recurring nuisance fault as a defect report, not a knack you
learn to live with. But the day-to-day pressure to keep the batch moving
pushes the other way — and it keeps pushing until the nuisance fault is
the headline.

![Bank of industrial process pipework and valves running along a unit](/images/blog/givaudan-caramel-runaway-reactor-csb/mid.jpg)

*Image: bilge tekin on Unsplash.*

## From the contractor's chair

GEMBA's crews are breathing-apparatus and confined-space people. We are
in and around vessels like Reactor 6 on turnarounds — we are not running
the batch recipe. So take this as a contractor reading a public report,
not a post-mortem of the operator. Three things in this one transfer
directly to anyone who works on or near process equipment.

**Do not inherit the relief assumption.** When you pull a relief valve
for a turnaround, test it, and reinstall it, you are confirming one thing:
that the device works to its setpoint. You are not confirming that the
setpoint and the orifice are right for every scenario the vessel can see.
Those are different questions, owned by different people, and the Givaudan
report is what it looks like when the second question never got asked. If
a client hands you a relief device to service, the device passing the
bench test tells you nothing about whether it would have saved anyone here.

**Watch where the people are.** The two workers who died were in a
control room located about 40 feet from Reactor 6, and the room was not
built to take a blast. It collapsed. On a turnaround, the equivalent
question is where the temporary trailers, break tents, and muster points
sit relative to live equipment — decisions that get made fast under
schedule pressure and rarely get a siting study. Forty feet of clear
ground is not a safe distance from a vessel that can rupture; it is just
the distance that happened to be available.

**Respect the evacuation clock.** The hardest line in the whole report is
that there were more than three minutes to get out, and the instinct was
to stay and troubleshoot. That instinct is not stupidity — it is the same
competence that makes someone good at the job. SCC/VCA refresher training
drills the "stop, leave, account for everyone" response precisely because
the natural pull, when equipment misbehaves, is to lean in and fix it. The
training exists to override the instinct. And the Givaudan timeline is the
cost of the instinct winning.

## This is not a food-plant problem

It is easy to file Givaudan under "weird stuff that happens at food
factories" and move on. That would be a mistake. A runaway exotherm — a
reaction that makes heat faster than the system can shed it — that outruns
its relief device is one of the oldest failure modes in process
chemistry, and refineries and petrochemical units carry their own
versions. Hydroprocessing reactors hold a temperature-runaway scenario
that crews drill around during startup. Peroxide buildup in ether and
diene streams, autopolymerization in monomer service, water hitting hot
oil — the chemistry differs, but the shape of the event does not. A
reaction speeds up, generates gas or heat faster than the system can
shed it, and the relief path becomes the only thing standing between the
vessel and the fence line.

What makes the Givaudan case useful is that it strips the problem down to
the bones. There was no exotic catalyst, no high-pressure hydrogen, no
sour gas — just sugar and a relief device sized for the wrong scenario.
If a reactive runaway can hide inside a caramel batch for three years,
then the question for every other unit is not whether the relief is
installed and tested. It is whether anyone has revisited the scenario the
relief was sized against since the last time the feed, the recipe, or the
throughput changed. Relief sizing does not expire on a date stamp. It
expires quietly — the first time reality drifts away from the assumption
on the original calculation sheet.

## The lesson, for a crew lead and a first-year tech

If you run a crew: the units that scare everyone are not the ones that
will catch you. Your blind spot is the "low-hazard" vessel where the
process hazard analysis is thin, the relief sizing is old, and the
reactive behavior of the feed was never tested. Ask what the worst-case
scenario is for the equipment you are about to open, and ask who sized
the relief for it and when. If the answer is a shrug, that is your finding.

If you are new: when something on a panel or a manifold starts behaving
wrong and you do not understand why, the move is not to crowd in closer.
The move is to back out to a known-safe position and call it. The people
at Givaudan who stayed to troubleshoot were not careless — they were
doing the thing that usually works. The report is a reminder that "usually
works" and "survives the one time it doesn't" are not the same standard.

## Credit & further reading

- **U.S. Chemical Safety Board — Givaudan Sense Colour Explosion,
  investigation 2024-06-I-KY.** Final report released May 27, 2026.
  [csb.gov/givaudan-sense-colour-explosion](https://www.csb.gov/givaudan-sense-colour-explosion-/)
- **CSB news release:** [Final Report on Fatal 2024 Explosion at Givaudan
  Facility in Louisville, Kentucky](https://www.csb.gov/us-chemical-safety-board-releases-final-report-on-fatal-2024-explosion-at-givaudan-facility-in-louisville-kentucky/)

All twelve of the CSB's recommendations from this investigation were open
at the time of release, covering reactivity testing, relief system
design, facility siting for occupied buildings, process safety
management, and broader changes the Board asked of EPA and OSHA on
reactive chemical hazards. The full report is worth the read in its own
words — the summary above is ours, the findings are theirs.
