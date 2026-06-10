---
title: "Forgotten Work Lights: The Dow Plaquemine FME Lesson"
slug: "forgotten-work-lights-dow-plaquemine-fme"
date: "2026-04-28"
lastUpdated: "2026-04-28"
author: "GEMBA Industrial crew"
cluster: "safety-compliance"
tags:
  - csb
  - foreign-material-exclusion
  - fme
  - confined-space-entry
  - turnaround
  - contractors
  - ethylene-oxide
  - dow-plaquemine
readingTime: 9
excerpt: "The CSB's February 2026 report on the Dow Plaquemine ethylene oxide explosion comes down to one detail: portable work lights left inside a reflux drum. Here is what the closure form missed."
hero: "/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero.jpg"
heroRetina: "/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero@2x.jpg"
---

![Chemical plant lit at night, taken from a distance — a quiet view of the kind of unit where slow degradation goes unnoticed.](/images/blog/forgotten-work-lights-dow-plaquemine-fme/hero.jpg)

*Image: PilMo Kang on Unsplash.*

In May 2023, a maintenance crew climbed out of a reflux drum at Dow's Glycol II Ethylene Oxide Finishing unit in Plaquemine, Louisiana. The vessel had been opened for a routine turnaround. Someone signed the closure form. The unit was buttoned up and put back into service. Eight weeks later, on the night of July 14, multiple explosions tore through the unit and released more than 31,000 pounds of ethylene oxide into the air. A shelter-in-place order went out to hundreds of nearby residents. The CSB's final report, [released on 26 February 2026](https://www.csb.gov/us-chemical-safety-board-releases-investigation-report-on-the-2023-explosion-and-toxic-ethylene-oxide-release-at-dow-plant-in-plaquemine-louisiana/), traces the whole sequence back to one detail: portable work lights left inside the drum.

This is a post about what the closure form did not say.

## What actually happened

The CSB report walks the chain of failures in detail. We will give the short version, then sit with the part contractors recognise.

In May 2023, Dow shut the Glycol II unit for planned maintenance. Workers entered a reflux drum — a vessel that holds liquid and vapour ethylene oxide during normal operation — to perform internal work. When the job wrapped, the drum was closed and the unit restarted. Two portable work lights were left inside. Over the following weeks, they degraded. Metal debris from the lights worked its way through the drum, eventually puncturing a rupture disc on the pressure-relief piping.

That is the moment everything else followed from. The rupture disc was the boundary between the EtO process side and the relief piping. With the disc compromised, ethylene oxide began bleeding into the relief header — about 50 feet of pipe that was supposed to be inerted with nitrogen, so any process leakage stayed below the lower flammability limit.

It was not. The nitrogen had silently leaked down over time. Air had filled the piping. EtO entered, mixed with oxygen, found an ignition source, and the flame front travelled the 50 feet back to the relief valve, lifted it, and entered the reflux drum's vapour space. EtO can decompose explosively once it gets going. The drum failed catastrophically. Multiple secondary explosions followed.

Two failures, in series, neither of which alone would have been catastrophic. The lights would have stayed harmless if the inerting was real. The inerting failure would have stayed harmless if the disc was intact. Process safety almost always works that way.

CSB Chairperson Steve Owens summarised the human side in plain language: *"The workers did not remove all the work lights from inside the drum, and Dow did not have an effective procedure in place to ensure that they did so."*

## The closure form was a checkbox

The detail that should sit on every turnaround manager's desk is buried in the report: Dow's Vessel/Nozzle Closure Form, the document that authorised closing the drum, *"provided no guidance on how to check for debris or ensure clean and free of debris; it functioned as a checklist only."*

Read that twice. The form had a box. Someone ticked the box. The box did not specify how to verify the inside of a vessel was clean. There was no instruction to use a mirror, a borescope, or even a structured walk-around. The standard practice on the day was a flashlight beam through the manway, sometimes from a single angle, by whoever happened to be the last person looking.

Anyone who has worked turnarounds knows what this looks like. The shift is ending. The vessel has had four trades through it in the last ten days — entry crew, mechanical, NDT, blasting. The job pack lists the manway gasket and the bolt-up torque. It does not list the count of tools that went in versus the count of tools that came out. The permit writer is two units over closing another job. The standby man is making a coffee. The closure form is on the desk. *Vessel inspected — clean. Initials. Time-stamp.* Box ticked.

A flashlight beam through a manway, into a vessel with internals casting shadows, is not an inspection. It is a hope.

![Industrial machinery with pipes and tanks indoors — the kind of unit where one missed item can sit unnoticed for weeks.](/images/blog/forgotten-work-lights-dow-plaquemine-fme/mid.jpg)

*Image: Haberdoedas on Unsplash.*

## Where the contractor sits in this

The CSB makes a point that lands hard for anyone running a contracting crew. Investigators noted that *"contractors were frequently the last in the vessel"* with unclear accountability for final cleanup. Multiple trades cycled through the drum during the May 2023 work. When the last person left, who confirmed what was inside? The report could not draw a clean line.

We have seen this exact pattern on every turnaround we have worked. The rotation of trades inside a vessel is rarely documented at the level of "who signed the inside off as empty." The mechanical crew leaves and assumes the next entrant will pick up anything they missed. The NDT contractor enters, does their pass, leaves. The cleaning crew comes through and may or may not be told about loose hardware from earlier work. The closure form treats the vessel as a single object that was either clean or not at one moment in time, not as a vessel that has been entered and exited by twenty people over a week.

Foreign material exclusion — FME, in turbomachinery and confined-space terminology — is the discipline that closes that gap. On nuclear and aerospace work, FME is a religion: every tool tagged, every entry logged, tool counts reconciled in and out, an FME monitor at the manway. On petrochemical turnarounds it is uneven. Some operators run it tightly. Many do not.

Dow's post-incident response was to create what they call a *Global Foreign Materials Exclusion Standard*, addressing tool inventory and final inspection criteria. That is the right corrective action. The unsettling part is that a Tier-1 operator with a serious process safety programme did not already have one.

## What the standard procedure should look like

This is the part the training card does not cover. The card teaches gas testing, atmosphere monitoring, retrieval rigs, communications. It does not teach the boring administrative ritual that actually keeps work lights out of vessels. The standard procedure on a tightly run job — and the one a crew lead can ask for on Monday morning — has four pieces.

**A pre-entry tool log.** Before the entry begins, every tool, every light, every rag, every soft good gets listed on a sheet posted at the manway. Not described — listed, by count and serial where applicable. Two LED work lights, model X, serial Y, Y+1. Three 1/2-inch socket sets. Six mechanic's rags. The list grows when a tool is added during the shift. This is fifteen minutes of admin and it is the entire spine of what comes next.

**A reconciliation at exit.** Every time a person comes out, the list is reviewed. Every time the entry closes for the shift, the list is reconciled — items in equals items out, and any item still inside is recorded as still inside. The standby man owns this list. Not the entry supervisor, not the permit writer. The standby — because they are the only person whose entire job is to be at the manway.

**A pre-closure walk by a nominated person.** Before the manway gets bolted up, a single named person — the entry supervisor on most crews — does a final inside check with a mirror or borescope, not a flashlight at arm's length. That person signs the closure form. Their signature is the assertion that nothing was left inside. If they were not the last entrant, they enter for the check. There is no version of "well, the last guy was in there an hour ago and said it was fine."

**A post-closure verification with the operator.** The contractor's closure does not become final until the unit operator countersigns that the closure form's content was understood. This is the seam where ownership transitions, and it is where things get dropped. NFPA's confined-space-entry guidance — and the related ASSP standard for entering confined spaces — both treat the closure as a documented hand-off, not a tickbox. Dow's old form did not.

If your turnaround pack does not include all four pieces, the gap is not academic. It is the gap that wrote 47 pages of CSB report.

## The lesson for crew leads

Three things to take into your next pre-job briefing.

First, ask to see the closure form before the job starts, not on the last day. If the form is a tickbox sheet rather than a verification protocol, raise it. The time to push back on a Vessel/Nozzle Closure Form that does not specify *how* the vessel will be checked is during planning, when there is space to write the procedure differently. By the time the closure is happening, schedule pressure has eaten everything.

Second, run the FME log even if the operator does not ask for it. Crews with SCC/VCA training drill confined-space entry and gas testing — the FME log is the next discipline up. It is a clipboard, a pen, and a standby man who writes things down. It does not require new equipment or a software system. It requires a crew lead who treats the count as a non-negotiable part of the entry, the same way they treat the gas test.

Third, accept that you will be the last person in the vessel. Contracting crews rotate, but on most turnarounds the final pre-closure entry is a contractor. That puts the FME assertion on you. The CSB language about "contractors were frequently the last in the vessel" was not blame — it was a description of where the procedural seam fell. Knowing that you sit on that seam is the difference between a clean closure and a tickbox.

The Plaquemine drum exploded because two failures aligned. One of them was an inerting system the operator owned. The other was a closure form that anyone on the manway could have caught and pushed back on. The operator owns the inerting. The closure is shared.

## Further reading

- CSB final investigation report: *Explosions and Toxic Ethylene Oxide Release at Dow Louisiana Operations, Plaquemine* — [release page on csb.gov](https://www.csb.gov/us-chemical-safety-board-releases-investigation-report-on-the-2023-explosion-and-toxic-ethylene-oxide-release-at-dow-plant-in-plaquemine-louisiana/), 26 February 2026.
- NFPA 326, *Standard for the Safeguarding of Tanks and Containers for Entry, Cleaning, or Repair* — closure-side guidance.
- NFPA 69, *Standard on Explosion Prevention Systems* — the inerting and oxygen-monitoring requirements that the relief piping at Plaquemine did not meet.
- ASSP Z117.1, *Safety Requirements for Entering Confined Spaces* — covers post-entry vessel cleanliness in language a closure form can be built from.

If you are scoping a turnaround and want a closure protocol that survives audit rather than a tickbox, talk to us. We bring four BA specialists scalable to twelve, SCC/VCA certified through TÜV Rheinland, and the kind of FME discipline that reads as boring on a procedure document and load-bearing on a vessel.
