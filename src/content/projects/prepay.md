---
title: PrePay - prepaid energy
summary: A prepaid energy portal that shows budget-stretched households how many days of power they have left, and helps them add money before the lights go out.
outcome: Real prepay customers scored the first design 58.5 on the System Usability Scale. After simplifying the dashboard around one question, the final round scored 87.5, and leadership funded the MVP.
depth: case-study
discipline: ux
client: KUBRA
years: 2018–2019
tags: [Research, Usability testing, Dashboard, Utilities]
order: 0
highlights:
  - { value: '87.5', label: 'SUS score with real prepay customers, up from 58.5' }
  - { value: '4', label: 'Rounds of usability testing' }
  - { value: '23', label: 'Customer messages mapped by channel and trigger' }
  - { value: '21 → 8', label: 'Respondents screened down to real prepay participants' }
cover: ./images/prepay/kitchen.webp
coverAlt: "The Prepay dashboard on a laptop and phone in a kitchen, showing $45.21 remaining credit and 20 days left"
coverPosition: center
---

<p class="cs-kicker">Internal testers loved the first wireframes. Real prepay customers didn't. Listening to them, and rebuilding the dashboard around one question, is what made this product work.</p>

<div class="cs-phases cs-wide" aria-label="Process">
  <a href="#discover"><span>01</span><strong>Discover</strong>Who uses prepay, and what blocks them</a>
  <a href="#explore"><span>02</span><strong>Explore</strong>Personas, journeys, messages, roughs</a>
  <a href="#test-1-and-2-the-score-drops"><span>03</span><strong>Test</strong>Four rounds, one big dip</a>
  <a href="#where-it-went-next"><span>04</span><strong>Listen</strong>MVP, next steps, learnings</a>
</div>

## The problem

Since the 2008 recession and COVID, rising energy costs have left budget-stretched households struggling to plan for and keep up with their bills. One tight month can mean falling into debt or losing power.

<ul class="stats-row cs-stats cs-wide">
  <li><strong>$23B</strong><span>U.S. utility debt, up from $10.5B</span></li>
  <li><strong>1 in 6</strong><span>Households behind on energy bills</span></li>
  <li><strong>3.5M</strong><span>Utility shutoffs in 2024</span></li>
  <li><strong>+78%</strong><span>Shutoffs at PPL after the 2008 recession</span></li>
</ul>

Prepaid energy removes the risk of a growing bill. But in 2018 it swapped that risk for a different one: a sudden shutoff, followed by a phone call to get the power back on.

<div class="cs-compare3 cs-wide" role="group" aria-label="How each billing model fails or works for the customer">
  <div class="cs-lane">
    <p class="cs-lane-label">Postpaid</p>
    <ol><li>Use power all month</li><li>Bill arrives, bigger than expected</li><li class="bad">Debt builds quietly</li></ol>
  </div>
  <div class="cs-lane">
    <p class="cs-lane-label">Prepaid, before</p>
    <ol><li>Balance drops with no warning</li><li class="bad">Power shuts off</li><li class="bad">Call a rep to reconnect</li></ol>
  </div>
  <div class="cs-lane good">
    <p class="cs-lane-label">Prepaid, the goal</p>
    <ol><li>See days of power left</li><li>Get warned before it runs out</li><li class="ok">Add money yourself, power stays on</li></ol>
  </div>
</div>

## My role

> **To add:** your role, the team and who you worked with at KUBRA.

KUBRA builds white-label customer experiences for utilities, so Prepay had to work inside any utility's brand. In these designs, that's "ABC Energy" or "Riverside Utilities".

## Discover

There's no national data on who uses prepaid energy. So I ranked seven customer segments using utility program records, regulatory filings and surveys. Three segments made up most users: low and moderate income households, people who can't pass a credit check or pay a deposit, and renters who move often. Younger adults were the growth segment. Directional, not exact, but enough to know who to design for.

The market was small and focused on the utility, not the customer. Two platforms, Exceleron and PayGo, ran most U.S. prepay programs: 2M+ customers across 75+ utilities in 23 states. SRP M-Power was the biggest single program, with about 115,000 customers. Existing tools were built to collect payment, not to help people stay powered.

### A constraint shaped the research

Client contracts and utility mandates blocked access to real customers. So the first test round had to be internal, and I found real prepay users through a friends-and-family recruit.

<figure class="cs-funnel">
  <div class="cs-funnel-bar" style="--w:100%"><strong>21</strong> people responded to the recruit</div>
  <div class="cs-funnel-bar" style="--w:38%"><strong>8</strong> real prepay users</div>
  <figcaption>Screening for current prepay customers. Most of the eight fit two or three of the top segments.</figcaption>
</figure>

<div class="cs-goals cs-wide">
  <div>
    <p class="eyebrow">User goals</p>
    <ul><li>Keep the power on</li><li>Control spending</li><li>Know where the balance stands</li><li>Plan top-ups around payday</li><li>Restore power fast, on their own</li></ul>
  </div>
  <div>
    <p class="eyebrow">Business goals</p>
    <ul><li>Reduce bad debt</li><li>Cut the cost to serve</li><li>Fewer shutoffs, faster reconnection</li><li>Grow adoption and retention</li><li>Improve CSAT and NPS</li></ul>
  </div>
</div>

<div class="cs-insight">
  <p class="cs-insight-label">Three bets</p>
  <ol>
    <li><strong>Early warnings prevent shutoffs.</strong></li>
    <li><strong>Seeing the balance and planning around payday builds control.</strong></li>
    <li><strong>Self-service reconnection reduces stress and cost.</strong></li>
  </ol>
</div>

## Explore

Bev and Creed were the core targets. Troy was the opportunity: younger, digital-first and growing.

<div class="cs-trio cs-wide">
  <a href="/case-studies/prepay/persona-bev.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/persona-bev.webp" alt="Persona sheet for Bev Goldberg, the Guardian: 42, part-time job, $30,000 household income, top motivation keeping the lights on, biggest pain no low-balance warning" width="1000" height="1344" loading="lazy" /></a>
  <a href="/case-studies/prepay/persona-creed.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/persona-creed.webp" alt="Persona sheet for Creed Bratton" width="1000" height="1344" loading="lazy" /></a>
  <a href="/case-studies/prepay/persona-troy.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/persona-troy.webp" alt="Persona sheet for Troy Barnes" width="1000" height="1344" loading="lazy" /></a>
</div>

<blockquote class="cs-quote"><p>“Account transparency and reminders are important… Life happens, and if anything comes up, I like knowing my fish tank isn’t going to be shut off because I got tied up.”</p><cite>Bev Goldberg, persona built from field research</cite></blockquote>

Mapping Bev's and Creed's first 60 days on prepay showed where it breaks: the surprise shutoff, and for Creed, cash payments that depend on trips to a store. From there I sketched the optimal journey, five stages from learning about prepay to adding money, with what the customer does, feels and says at each step.

<figure class="cs-wide cs-sketch-pair">
  <a href="/case-studies/prepay/journey-sketch.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/journey-sketch.webp" alt="Pencil sketch of the optimal user journey" width="1800" height="1266" loading="lazy" /></a>
  <a href="/case-studies/prepay/journey.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/journey.webp" alt="Restyled optimal user journey: learns about prepay, signs up, monitors usage, receives alerts, recharges account" width="1800" height="1267" loading="lazy" /></a>
  <figcaption>The optimal journey, from first sketch to the version the team designed against.</figcaption>
</figure>

### Communication is the product

Most of the value lands outside the app, in the warnings that arrive before the balance runs out. So I inventoried every message by channel and trigger: 23 messages across email, in-app banners, pop-ups and SMS.

<figure class="cs-annot cs-wide cs-tall">
  <div class="cs-annot-img">
    <img src="/case-studies/prepay/comm-inventory.webp" alt="Communication inventory table listing 23 messages by trigger and channel: email, in-app banner, in-app pop-up and SMS" width="1400" height="2275" loading="lazy" />
    <span class="pin" style="--x:3%;--y:13.5%">1</span>
    <span class="pin" style="--x:3%;--y:50%">2</span>
    <span class="pin" style="--x:94%;--y:27.6%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>A four-step activation path.</strong> Approval, welcome, onboarding and first payment, in priority order.</li>
    <li><strong>Balance alerts are the core.</strong> Low balance, at risk, weather and usage spikes, each tied to a system, utility or user trigger.</li>
    <li><strong>SMS where it matters.</strong> Text is the backup channel for anything that could lead to a shutoff.</li>
  </ol>
</figure>

### Three ways to answer “Am I OK?”

I started desktop-first because the portal would sit inside each utility's website, and planned the mobile version once the core needs were proven. The roughs explored three ways to show where an account stands: a Days Left gauge, a balance trend and an estimate-payment slider.

<div class="cs-trio cs-wide">
  <figure><img src="/case-studies/prepay/sketch-days-left.webp" alt="Rough dashboard sketch with a Days Left gauge showing 14 days" width="1200" height="1294" loading="lazy" /><figcaption>Days Left gauge</figcaption></figure>
  <figure><img src="/case-studies/prepay/sketch-balance.webp" alt="Rough dashboard sketch with a balance trend" width="1000" height="1078" loading="lazy" /><figcaption>Balance trend</figcaption></figure>
  <figure><img src="/case-studies/prepay/sketch-estimate.webp" alt="Rough dashboard sketch with an estimate payment slider" width="1000" height="1078" loading="lazy" /><figcaption>Estimate payment slider</figcaption></figure>
</div>

## Test 1 and 2: the score drops

**Round 1** was an internal benchmark: 10 KUBRA employees, 12 timed tasks and a System Usability Scale (SUS) survey. It scored **80.25**, with 80–100% task success. Every payment method, pausing power and alert settings hit 100%. The weakest task was finding the account balance, at 80%.

**Round 2** ran the same tasks with 8 real prepay customers. The score fell to **58.5**, below the industry average of 68.

<figure class="cs-chart cs-wide" aria-labelledby="sus-title">
  <p class="cs-chart-title" id="sus-title">System Usability Scale score by test round</p>
  <div class="cs-bars" role="list">
    <div class="cs-bar internal" role="listitem" style="--v:80.25" tabindex="0" aria-label="Round 1, internal, 10 people: 80.25"><span class="cs-val">80.25</span><span class="cs-tip">Round 1 · 10 KUBRA employees · 12 tasks</span></div>
    <div class="cs-bar" role="listitem" style="--v:58.5" tabindex="0" aria-label="Round 2, 8 prepay customers: 58.5"><span class="cs-val">58.5</span><span class="cs-tip">Round 2 · 8 prepay customers · same tasks</span></div>
    <div class="cs-bar gap" role="listitem" aria-label="Round 3, qualitative study, no SUS score"><span class="cs-val">Qualitative</span></div>
    <div class="cs-bar" role="listitem" style="--v:87.5" tabindex="0" aria-label="Round 4, prepay customers: 87.5"><span class="cs-val">87.5</span><span class="cs-tip">Round 4 · prepay customers plus a few new people · new task set</span></div>
    <span class="cs-bench" style="--v:68"><span>68 average</span></span>
  </div>
  <div class="cs-axis" aria-hidden="true"><span>Round 1<small>Internal, n=10</small></span><span>Round 2<small>Customers, n=8</small></span><span>Round 3<small>Deficit study</small></span><span>Round 4<small>Customers</small></span></div>
  <figcaption>Scores run from 0 to 100. Gray is the internal benchmark; orange is real prepay customers.</figcaption>
</figure>

<div class="cs-insight">
  <p class="cs-insight-label">What real customers told us</p>
  <ul>
    <li>Finding the balance dropped from 80% to 70%, and two people needed help.</li>
    <li>Nobody connected with “Recharge Account”.</li>
    <li>The meter's good, low and dangerously low states weren't read.</li>
    <li>They liked the information, but felt overloaded.</li>
  </ul>
</div>

<blockquote class="cs-quote"><p>Internal confidence is not user validation.</p><cite>The turning point of the project</cite></blockquote>

## What changed

I rebuilt the dashboard around one question: **“Am I OK, and how do I add money?”**

<div class="cs-before-after cs-wide">
  <figure class="cs-annot">
    <p class="cs-tag">Before · round 1 rough</p>
    <div class="cs-annot-img">
      <img src="/case-studies/prepay/sketch-days-left.webp" alt="Round 1 dashboard rough with tabs for Days Left, Balance and Estimate Payment and a Recharge Account button" width="1200" height="1294" loading="lazy" />
      <span class="pin" style="--x:44%;--y:10.5%">1</span>
      <span class="pin" style="--x:66%;--y:26%">2</span>
      <span class="pin" style="--x:60%;--y:58%">3</span>
    </div>
  </figure>
  <figure class="cs-annot">
    <p class="cs-tag good">After · MVP</p>
    <div class="cs-annot-img">
      <img src="/case-studies/prepay/hifi-no-alert.webp" alt="MVP dashboard with Account Status, Days Left and Power Status side by side and an Add Money button" width="1400" height="1226" loading="lazy" />
      <span class="pin" style="--x:44%;--y:19%">1</span>
      <span class="pin" style="--x:34%;--y:30%">2</span>
      <span class="pin" style="--x:60%;--y:58%">3</span>
    </div>
  </figure>
  <ol class="cs-notes">
    <li><strong>Days Left and balance together.</strong> The balance was hidden behind a tab. Now it sits next to the Days Left gauge, always visible.</li>
    <li><strong>“Recharge Account” became “Add Money”.</strong> Name things the way customers think, not the way the system works.</li>
    <li><strong>Less on the first screen.</strong> Usage, comparisons and alerts moved lower, so the top answers “Am I OK?” at a glance.</li>
  </ol>
</div>

## Every account state

A prepay dashboard has to work when things go wrong, not only when they're fine. I designed one state per situation, from a healthy balance to a weather moratorium that holds off disconnection.

<div class="cs-strip cs-wide" tabindex="0" aria-label="Dashboard states, scroll sideways">
  <figure><img src="/case-studies/prepay/lofi-good.webp" alt="Wireframe: good balance, 13 days remaining" width="1000" height="876" loading="lazy" /><figcaption><b class="dot good"></b>Good balance</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-at-risk.webp" alt="Wireframe: at-risk balance" width="1000" height="876" loading="lazy" /><figcaption><b class="dot warn"></b>At risk</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-power-off.webp" alt="Wireframe: power off" width="1000" height="876" loading="lazy" /><figcaption><b class="dot bad"></b>Power off</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-paused.webp" alt="Wireframe: power paused by the customer" width="1000" height="876" loading="lazy" /><figcaption><b class="dot"></b>Power paused</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-moratorium.webp" alt="Wireframe: power on hold during a moratorium" width="1000" height="876" loading="lazy" /><figcaption><b class="dot warn"></b>Moratorium hold</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-autopay.webp" alt="Wireframe: automatic payment notice" width="1000" height="930" loading="lazy" /><figcaption><b class="dot good"></b>Automatic payment</figcaption></figure>
  <figure><img src="/case-studies/prepay/lofi-notification.webp" alt="Wireframe: heat warning notification" width="1000" height="930" loading="lazy" /><figcaption><b class="dot warn"></b>Weather alert</figcaption></figure>
</div>

The hardest logic was what happens when a balance goes negative, or a customer carries old debt into prepay. I mapped the paydown and deficit flows before designing those screens.

<figure class="cs-wide">
  <a href="/case-studies/prepay/deficit-flow.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/deficit-flow.webp" alt="Flow diagram for manual deficit handling" width="2200" height="662" loading="lazy" /></a>
  <figcaption>Manual deficit handling. Select to view larger.</figcaption>
</figure>

**Round 3** was a qualitative study with customers carrying a paydown balance, across three scenarios: paying after payday, coming home to find the power off, and paying only the minimum.

<div class="cs-goals cs-wide cs-three">
  <div><p class="eyebrow">Worked</p><ul><li>Every person found their account status and the path to Add Money</li><li>They linked the balance to days remaining</li></ul></div>
  <div><p class="eyebrow">Didn't work</p><ul><li>How the estimate was calculated</li><li>The risk signal</li><li>Controlling power</li><li>The minimum payment</li></ul></div>
  <div><p class="eyebrow">Unexpected</p><ul><li>Power outages came up as a shared pain point</li><li>A rewards idea sparked interest, set aside for later</li></ul></div>
</div>

## Test 4: the score recovers

Round 4 brought back the same customer group, plus a few new people, with a new task set: pay $55, set a recurring payment, pay cash at the nearest store, find the old balance owed, price 8 more days of power, compare March year over year, pause power, and respond to a heat alert.

<ul class="stats-row cs-stats cs-wide">
  <li><strong>87.5</strong><span>SUS score, “excellent”, up from 58.5</span></li>
  <li><strong>80–100%</strong><span>Task success across the set</span></li>
  <li><strong>87.5%</strong><span>Spotted the heat warning and changed alert settings</span></li>
  <li><strong>75%</strong><span>Power calculator, the weakest task and the next fix</span></li>
</ul>

<div class="cs-table cs-wide">

| Bet | Design answer | Evidence |
| --- | --- | --- |
| Early warnings prevent shutoffs | At Risk state, low-balance and heat alerts, a 14-day reminder, the communication inventory | 87.5% found the heat warning and changed alert settings (round 4) |
| Seeing the balance builds control | Days Left and balance together, the power estimate, automatic payments | Finding the balance went from 70% (round 2) to every person (round 3) |
| Self-service reconnection | Power Off and negative credit states with Add Money up front, pause and resume power | Pausing power hit 100% in rounds 1 and 4, but controlling power was still unclear in round 3 |

</div>

The third bet is only partly proven. Pausing power worked, but people still weren't sure how to control it, so it stayed on the list.

## The MVP

One screen answers “Am I OK?” in every state. Here's Bev, two days from running out.

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <img src="/case-studies/prepay/hifi-at-risk.webp" alt="MVP dashboard in the at-risk state: $10.21 remaining credit, 2 days left marked At Risk, Add Money button, Pause Your Power button, payment history and paydown balance" width="1800" height="1577" loading="lazy" />
    <span class="pin" style="--x:32.5%;--y:19.5%">1</span>
    <span class="pin" style="--x:34%;--y:30%">2</span>
    <span class="pin" style="--x:58%;--y:36%">3</span>
    <span class="pin" style="--x:95%;--y:37%">4</span>
    <span class="pin" style="--x:88.5%;--y:6%">5</span>
    <span class="pin" style="--x:32%;--y:92%">6</span>
  </div>
  <ol class="cs-notes">
    <li><strong>Balance first.</strong> Remaining credit is the biggest thing on the page.</li>
    <li><strong>Add Money, right under it.</strong> The answer to “what do I do?” sits next to the question.</li>
    <li><strong>Days, not dollars.</strong> Two days left, flagged At Risk in red, is easier to act on than $10.21.</li>
    <li><strong>Self-service power.</strong> Pause and resume without calling a rep.</li>
    <li><strong>Weather heads-up.</strong> A hot week burns through credit faster, so the forecast is always in view.</li>
    <li><strong>Paydown in plain sight.</strong> Old debt and how much of each payment goes to it, with no surprises.</li>
  </ol>
</figure>

<div class="cs-trio cs-wide cs-four">
  <figure><img src="/case-studies/prepay/hifi-no-alert.webp" alt="Dashboard with a good balance" width="1400" height="1226" loading="lazy" /><figcaption><b class="dot good"></b>Good</figcaption></figure>
  <figure><img src="/case-studies/prepay/hifi-at-risk.webp" alt="Dashboard at risk" width="1800" height="1577" loading="lazy" /><figcaption><b class="dot bad"></b>At risk</figcaption></figure>
  <figure><img src="/case-studies/prepay/hifi-negative.webp" alt="Dashboard with negative credit during a weather moratorium" width="1400" height="1304" loading="lazy" /><figcaption><b class="dot warn"></b>Negative credit, on hold</figcaption></figure>
  <figure><img src="/case-studies/prepay/hifi-autopay.webp" alt="Dashboard with automatic payment set and a heat warning" width="1400" height="1290" loading="lazy" /><figcaption><b class="dot good"></b>Automatic payment set</figcaption></figure>
</div>

### Adding money, any way they pay

Card, bank, automatic payments and cash. Round 1 testers didn't know that cash meant a barcode and a trip to a store, so cash came with a short explainer.

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <img src="/case-studies/prepay/pay-cash.webp" alt="Make a payment screen with Cash selected, a How Cash Payments Work link, and a slider suggesting $55 adds about 25 days" width="1123" height="910" loading="lazy" />
    <span class="pin" style="--x:39.5%;--y:14%">1</span>
    <span class="pin" style="--x:58%;--y:25%">2</span>
    <span class="pin" style="--x:44%;--y:50%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>Cash is a first-class option</strong> for customers like Creed who don't use cards.</li>
    <li><strong>“How cash payments work”</strong> opens a three-step explainer.</li>
    <li><strong>Dollars become days.</strong> “$55.00 adds about 25 days” turns a payment into a plan.</li>
  </ol>
</figure>

<div class="cs-trio cs-wide">
  <figure><img src="/case-studies/prepay/cash-1.webp" alt="How to pay with cash, step 1: choose how to receive a payment barcode" width="694" height="600" loading="lazy" /><figcaption>1. Get a barcode</figcaption></figure>
  <figure><img src="/case-studies/prepay/cash-2.webp" alt="How to pay with cash, step 2: take the barcode to a payment location" width="694" height="600" loading="lazy" /><figcaption>2. Take it to a store</figcaption></figure>
  <figure><img src="/case-studies/prepay/cash-3.webp" alt="How to pay with cash, step 3: show the barcode to the cashier and pay" width="694" height="600" loading="lazy" /><figcaption>3. Show it and pay</figcaption></figure>
</div>

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <img src="/case-studies/prepay/power-estimate.webp" alt="Power estimate screen with a recommended weekly amount, a paydown breakdown and a Days Left gauge with an alert at 15 days" width="1123" height="712" loading="lazy" />
    <span class="pin" style="--x:30%;--y:38%">1</span>
    <span class="pin" style="--x:65%;--y:57%">2</span>
    <span class="pin" style="--x:30%;--y:73%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>A suggested amount</strong> based on their own weekly average.</li>
    <li><strong>Their alert, on the gauge.</strong> The customer sees exactly when they'll be warned.</li>
    <li><strong>Paydown math, shown.</strong> 25% of every payment goes to old debt.</li>
  </ol>
</figure>

With the core proven on desktop, the experience moved to mobile.

<figure class="cs-wide">
  <a href="/case-studies/prepay/mobile-sketches.webp" class="zoom cs-zoom"><img src="/case-studies/prepay/mobile-sketches.webp" alt="Sketches of the mobile Prepay screens" width="1800" height="1057" loading="lazy" /></a>
  <figcaption>Mobile sketches for the responsive version.</figcaption>
</figure>

## Where it went next

The test results gave stakeholders and leadership enough confidence to fund the MVP as a platform for utilities. Sales used the demo to land statements of work, and marketing used it with prospects. Design moved on to deeper flows, interaction design, responsive mobile and accessibility.

To know it worked after launch, we committed to tracking shutoff rate, low and zero-balance events, days between top-ups, reconnection time, support call volume, enrollment, churn and NPS.

## What I learned

<div class="cs-learn cs-wide">
  <div><span>01</span><strong>Internal testing is a benchmark, not validation.</strong><p>80.25 from colleagues, 58.5 from customers. Same tasks, same screens.</p></div>
  <div><span>02</span><strong>Name things the way users think.</strong><p>“Add Money”, not “Recharge Account”. “In-person payment”, not “Cash”.</p></div>
  <div><span>03</span><strong>In prepay, the warning is the product.</strong><p>The dashboard and messages exist so the next shutoff never comes as a surprise.</p></div>
</div>
