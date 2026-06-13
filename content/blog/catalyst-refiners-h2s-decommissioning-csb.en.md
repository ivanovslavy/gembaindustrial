![A weathered steel chemical-storage tank wall, sun on the side, rust streaks running from the vents — the kind of vessel that is no longer in active service but still has residue on the inside.](/images/blog/catalyst-refiners-h2s-decommissioning-csb/hero.jpg)

*Image: Eric Prouzet on Unsplash.*

The plant was supposed to be empty by June. On the morning of April 22, 2026, a crew at Catalyst Refiners' facility in Nitro, West Virginia — a subsidiary of Ames Goldsmith Corporation, which recovers silver and reprocesses ethylene-oxide catalyst — was cleaning a tank as part of shutting the site down for good.

Then two chemicals met inside that tank that should never have shared the same space: nitric acid and a proprietary cleaning agent the company calls M2000A. The two reacted and produced hydrogen sulfide — a fast, deadly gas. Within minutes, two employees were dead and 21 more were on their way to hospital, one in critical condition.

The U.S. Chemical Safety Board — the federal agency that investigates chemical accidents — opened a full investigation the next day. CSB Chairperson Steve Owens framed it in one sentence in the April 23 press release: *"We are opening an investigation into this tragic incident to determine how it happened and identify ways to help prevent something like this from happening again."* The final report won't land for twelve to twenty-four months. This piece is the version a crew lead can use this week.

## What is known from the public record

Catalyst Refiners' Nitro plant (1580 First Avenue South, on the Kanawha River between the communities of Institute and Nitro) reclaimed silver from spent catalyst and turned used ethylene-oxide catalysts back into usable inventory. Both of those businesses routinely handle sulfur-bearing materials — metal sulfides and organic-sulfur intermediates. Ames Goldsmith announced the plant's closure earlier this year and had been working through a phased shutdown, aiming to be fully decommissioned by June 2026.

Here are the bare facts from the CSB release, Ames Goldsmith's corporate statement, and reporting in *Chemistry World*, WV MetroNews, and West Virginia Public Broadcasting:

- The incident began around 9:30 a.m. local time on April 22, 2026, during equipment cleaning and decommissioning of a tank.
- Nitric acid (HNO₃) and a proprietary cleaning agent the company calls M2000A were mixed during the work.
- The reaction released hydrogen sulfide. Per the company's statement, the fumes stayed inside the building; fence-line monitoring picked up no release beyond the site.
- Two employees died on site. Twenty-one others were hospitalised, one in critical condition. More than thirty people in total sought medical care.
- The West Virginia Department of Environmental Protection ran air monitoring across the site. The CSB opened a parallel investigation. OSHA enforcement involvement is expected. A precautionary shelter-in-place order covered the surrounding community for several hours.

The names of the deceased are in the public record. This blog refers to them as the two entrants — the lesson doesn't depend on who.

## Why nitric acid and a tank cleaner should never share a tank

Nitric acid is a strong acid and a strong oxidiser — meaning it readily strips electrons from other chemicals, which is what makes it so reactive. M2000A is a proprietary cleaning chemistry — its exact recipe isn't public, but cleaning agents used in silver-recovery work are almost always built around sulfur: thiosulfate, dithionite, organic mercaptans, or similar species that grab onto reactive metals tightly enough to lift them off the vessel walls. That sulfur-grabbing-metal bond is the whole point of the chemistry. The sulfur is what makes the cleaner work.

Now put that sulfur in contact with a concentrated oxidising acid, and the reaction runs in a direction every first-year inorganic chemistry textbook covers: the acid oxidises the sulfide, the sulfur breaks free of its parent molecule, and the leftover reactive sulfur comes off as hydrogen sulfide gas — along with sulfur dioxide and nitrogen oxides, depending on the exact amounts and temperature. In a small tank with leftover product still clinging to the inside walls, you can make hydrogen sulfide faster than a plant building's ventilation can clear it. The CSB hasn't published the precise mechanism yet. They will. The safety data sheet (SDS) for *both* materials lists the other class as *incompatible* in plain print. SDS sheets, though, don't get read in the heat of a decommissioning schedule.

Hydrogen sulfide kills more workers, by sheer body count, than any other gas you routinely meet in industry. At 100 ppm it's immediately dangerous to life and health. At 300 ppm — completely realistic in a sealed building where the gas is actively being made — workers lose the ability to smell it within seconds of walking in. At 700 ppm, a single breath knocks a person out. Our [earlier piece on PEMEX Deer Park](/en/blog/pemex-deer-park-flange-misidentification) covered the misidentified-flange version of this same exposure curve. Catalyst Refiners is the version where the gas was made by the work itself, not leaked from a process line.

## Decommissioning is the highest-risk operational state

The most consistent finding in forty years of process-safety research is this: accidents cluster around transition states. Startup, shutdown, turnaround, mothball, restart, decommissioning. The Center for Chemical Process Safety's *Guidelines for Process Safety During the Transient Operating Mode* (CCPS, 2021) pulled together industry data showing that non-routine operations — roughly 5 to 10 percent of operating hours — account for upwards of 50 percent of major incidents. Bluefield Process Safety's commentary on this incident put it bluntly: *startup, shutdown, and non-routine activities are the most dangerous times in a chemical processing facility.*

Decommissioning sits at the worst end of that curve, for four structural reasons:

1. **The contents are in an unusual state.** An operating tank has a known composition. A tank being decommissioned has a residue — possibly settled into layers, concentrated, with a layer of sludge on the floor. The SDS for the *product* the tank held in normal service is not the SDS for that residue.

2. **There's no muscle memory.** Operations run the same procedures hundreds of times a year. Decommissioning happens once. The first time you do the job is also the last time.

3. **Schedule pressure pushes the wrong way.** On a normal turnaround, the plant restart is waiting on the work — so the pressure pushes toward *getting it right*, because a botched restart loses production. Decommissioning has nothing waiting downstream. The pressure pushes toward *speed*. And pressure with nothing pushing back takes shortcuts.

4. **The people who knew the plant are leaving.** Operators move on to new postings as the plant winds down. The people who knew what was in tank 47 back in 2018 aren't standing on the deck in 2026.

For contractors, decommissioning is appealing work — predictable volumes, long timelines, a client who wants it done fast. It's also where the per-hour fatality rate looks worst. The transition state is the state in which mistakes get made.

![Brown and black industrial pipework — the kind of feeder, drain, and vent lines that connect a tank to the rest of the building and that are still pressure-bearing during decommissioning.](/images/blog/catalyst-refiners-h2s-decommissioning-csb/mid.jpg)

*Image: Joe Dudeck on Unsplash.*

## What the training card does not cover for tank cleaning

Standard hazard-communication training covers the SDS, GHS labels, and the rules for storing incompatible chemicals apart. What it doesn't cover well — and what the Nitro incident drags back into focus — is the *operational chemistry of the gunk left inside the tank.*

**The residue is the hazard, not the product.** When a tank holds Material A in normal service, the operating permit points to Material A's SDS. But when that same tank is being cleaned, the residue can include half-reacted intermediates, scale, sludge, and water — none of which appear on Material A's SDS. The whole reason you pick a cleaning agent is that it'll react with the residue. *That reaction* is the chemistry that matters.

**Jar tests are a missing ritual.** Before you mix a litre of cleaner with a tonne of residue, the lab version of that is a 50 ml test on the bench, with a thermometer in it, watched for an hour. On a decommissioning project, the closest thing to that is usually "we used this cleaner on the same kind of tank at the other site." That is not the same thing.

**Ventilation is sized for an empty building.** Most plant buildings are ventilated based on *air changes per hour* worked out from worst-case operating conditions — not from the worst-case rate of a chemistry that isn't supposed to be running at all. If the in-building reaction is making a kilogram of hydrogen sulfide a minute, no ordinary roof fan installed for routine process loss can keep up.

**Personal H₂S monitors are on the entrants, not the bystanders.** The crew member at the manway has a four-gas badge. The supervisor in the doorway taking notes doesn't. The forklift driver moving an empty tote doesn't. If the gas is being made by the work, it reaches the bystander first — the bystander is downwind in still indoor air.

**"Stop work" needs a better trigger than smell.** At low concentration, hydrogen sulfide has the rotten-egg smell every safety video describes. Above 100 ppm the smell vanishes. Above 300 ppm it never registers at all. A "stop work if you smell it" rule trains your crew to wait for a signal that disappears exactly when the danger is highest. The trigger has to be a number on a badge, not a feeling in your nose.

## What a crew lead can do on the next decommissioning entry

The CSB will eventually publish a report. The crew lead doesn't have to wait for it. Here's the punch list this incident adds to the standard tank-cleaning permit:

1. **Treat the cleaning chemistry and the residue as a planned reaction, not an accidental one.** Write the expected products on the permit. Confirm none of them is acutely toxic, flammable, or pyrophoric (catches fire in air on its own) at the expected concentration. If the SDS for either chemical lists the other as *incompatible*, stop and re-engineer the cleaning method.

2. **Bench-test before you add the bulk.** A 100 ml jar test — a sample of the residue, the cleaning agent at the same concentration, and a temperature probe — tells you in 30 minutes whether the reaction runs hot, throws off a gas, or does something the procedure never named.

3. **Continuous H₂S, SO₂, and NOₓ monitoring across the whole building floor, not just at the manway.** Several fixed monitors, action level set at 5 ppm H₂S (below the OSHA ceiling of 10 ppm), and a vibrating-alarm wristband on every single person inside the building.

4. **A written incompatibility matrix in the cleaning project's master permit.** Every chemical brought into the building goes in the matrix, with each pair marked compatible / incompatible / unknown. *Unknown* gets treated exactly like *incompatible.*

5. **Ventilation sized for the worst-case generation rate, not the historical air-change rate.** Work out how much gas you'd produce if the cleaning agent hit the entire residue at once, and size the extraction for that. Confirm the fan starts on tested power before the cleaning agent ever comes off the pallet.

6. **A separate decommissioning HAZOP, not a clipboard JHA.** A real hazard-and-operability study — a structured, line-by-line walkthrough of what could go wrong — with the original process engineers if you can still reach them, focused on the residue rather than the original product. CCPS guidance is explicit on this.

None of these six items is new. All six appear in CCPS *Transient Operating Mode* guidance, in OSHA 1910.119 PSM appendices, and in the chemical-engineering curriculum at any accredited university. The new part is carrying the list across the threshold of a plant that's closing in eight weeks — where the procedural rigour is naturally winding down at the very moment the chemistry is winding up.

## The thing the report will not put in writing

The plant was due to close in June. The chemicals were due to leave. The hazard was supposed to leave with them. Decommissioning accidents read so cruelly in hindsight because the work is voluntary — nobody was ever going to operate this tank again — and the same people who would have spent the next month winding down their jobs spent it instead at a memorial service.

Treat decommissioning as the highest-risk window in the asset's whole life, not the lowest. Read the residue's SDS, not the product's. Run the jar test. Put the monitor on the bystander. And when the cleaning chemistry and the residue meet for the first time, do it on a workbench with a fume hood between you and the reaction — not on the deck of a tank with a building full of people downwind.

The CSB will tell us what went wrong at Catalyst Refiners. The procedural change that prevents the next one is available now.

## Credit and further reading

- U.S. Chemical Safety and Hazard Investigation Board, *CSB Opens Investigation into Fatal Chemical Incident at Catalyst Refiners Facility in West Virginia*, press release, April 23, 2026. ([CSB release](https://www.csb.gov/us-chemical-safety-board-opens-investigation-into-fatal-chemical-incident-at-catalyst-refiners-facility-in-west-virginia-/))
- Ames Goldsmith Corporation, public statement on the Catalyst Refiners incident, April 22, 2026, as reported by WV MetroNews. ([WV MetroNews](https://wvmetronews.com/2026/04/22/ames-goldsmith-confirms-fatal-tragedy-in-kanawha-county-plant-occurred-during-decommissioning-work/))
- *Chemistry World*, "Fatal incident at US catalyst refiner under investigation," April 2026. ([Chemistry World](https://www.chemistryworld.com/news/fatal-incident-at-us-catalyst-refiner-under-investigation/4023351.article))
- Bluefield Process Safety, "Two Dead in West Virginia," April 2026 — commentary on decommissioning as a transient-mode hazard. ([Bluefield](https://bluefieldsafety.com/2026/04/two-dead-in-west-virginia/))
- Center for Chemical Process Safety, *Guidelines for Process Safety During the Transient Operating Mode* (Wiley, 2021). The reference text on startup, shutdown, and decommissioning risk.
- OSHA 29 CFR 1910.119 — Process Safety Management of Highly Hazardous Chemicals. The U.S. regulatory baseline for management of change during decommissioning campaigns.

GEMBA Industrial's BA specialists run breathing-apparatus standby, atmospheric monitoring, and confined-space rescue cover for refinery, petrochemical, and catalyst-plant work across the EU — including decommissioning campaigns where the residue chemistry is the principal hazard. SCC/VCA-certified crews, four-person core scalable to twelve, with the incompatibility matrix on the permit before any cleaning agent comes off the pallet. If your next mothballing window includes a tank that has not been opened in years, [get in touch](https://gembaindustrial.com/en/contact) — we would rather have the conversation about *what is inside the tank* before the jar test, not after.
