---
title: EZ-PAY+
summary: The payment platform utilities, government agencies and insurers use to let their customers pay bills, fines, permits and more, across web, mobile and other channels. I led the design team that took it from research to launch and beyond.
outcome: A flow redesigned around the most common case, paying a single bill, that still lets customers pay several accounts or payables at once. Launched in 2024, it now handles every kind of payable in one experience.
depth: case-study
discipline: ux
client: KUBRA
years: 2021–2026
role: UX design team lead
team: 2 UX designers
tags: [Payments, Team leadership, Stakeholder alignment, Flow mapping]
order: 0.75
highlights:
  - { value: '40%+', label: 'Of U.S. and Canadian households reached by KUBRA’s customer experience suite' }
  - { value: '1', label: 'Page to pay a single bill: amount, method and date' }
  - { value: '4', label: 'Kinds of payables in one experience' }
  - { value: '7', label: 'Ways to pay, from cards and bank accounts to cash and digital wallets' }
cover: ./images/ezpay/hero.webp
coverAlt: "A customer on the couch holding a phone showing the EZ-PAY+ payment page: $125.00 due, with amount, method and date"
coverPosition: 62% 45%
---

<p class="cs-kicker">We redesigned EZ-PAY+ around the most common case, paying a single bill, without losing the customers who need to pay several accounts or payables at once.</p>

## Overview

> **My role:** UX design team lead
>
> **Team:** 1 senior UX designer and 1 UX designer
>
> **Timeline:** 2021 to 2024, research to MVP launch, with updates shipping through 2026

EZ-PAY+ is part of KUBRA's suite of customer experience solutions, which together reach more than 40% of households in the U.S. and Canada. At that scale, small friction in a payment flow adds up fast.

<div class="cs-who cs-wide" aria-label="Who uses EZ-PAY+">
  <div><span class="cs-who-icon" aria-hidden="true">⚡</span><strong>Utilities</strong><em>Monthly bills</em></div>
  <div><span class="cs-who-icon" aria-hidden="true">🏛</span><strong>Government agencies</strong><em>Fines, permits, licenses</em></div>
  <div><span class="cs-who-icon" aria-hidden="true">🛡</span><strong>Insurers</strong><em>Premiums</em></div>
</div>

I didn't design the screens myself. I set design direction, planned and orchestrated the team's work, kept design on track for release milestones, and helped shape the product roadmap.

<div class="cs-learn cs-four-up cs-wide">
  <div><span>Plan</span><strong>Planning the work.</strong><p>Mapped flows with our senior designer, defined the bodies of work and split them across the team.</p></div>
  <div><span>Guide</span><strong>Guiding quality.</strong><p>Ran design reviews and joined feature planning, tying decisions to user goals and business needs.</p></div>
  <div><span>Deliver</span><strong>Driving delivery.</strong><p>Owned progress toward release milestones and helped negotiate scope across the business.</p></div>
  <div><span>Shape</span><strong>Shaping the roadmap.</strong><p>Helped decide what shipped in the MVP and what came next.</p></div>
</div>

## The challenge

The legacy EZ-PAY experience had grown disconnected. Paying wasn't intuitive, the interface felt dated, and technical debt made even small improvements hard to ship.

The biggest problem was structural.

<div class="cs-compare3 cs-wide cs-two" role="group" aria-label="Paying a single bill, before and after">
  <div class="cs-lane">
    <p class="cs-lane-label">Before: built for the exception</p>
    <ol><li>I want to pay one bill</li><li class="bad">Sent through a multi-item process</li><li class="bad">Extra steps for a single bill</li></ol>
  </div>
  <div class="cs-lane good">
    <p class="cs-lane-label">After: built for the common case</p>
    <ol><li>I want to pay one bill</li><li>Amount, method and date, on one page</li><li class="ok">Paid</li></ol>
  </div>
</div>

## Key decisions

### 1. Design for the common case: a single bill

We redesigned the flow around the most common case: paying a single bill. Customers who need to pay several accounts or payables at once didn't lose anything. Their path appears as soon as they have more than one item to pay.

<div class="cs-fork cs-wide" role="img" aria-label="Diagram: a customer paying a single bill goes straight to one payment page; a customer with several accounts or payables chooses what to pay, then pays them together">
  <div class="cs-node root">Customer arrives</div>
  <div class="cs-fork-q"><span>How many items?</span></div>
  <div class="cs-fork-paths">
    <div class="cs-fork-path main">
      <p class="cs-fork-label">A single bill <em>The common case</em></p>
      <div class="cs-node">One page<small>Amount · method · date</small></div>
      <div class="cs-node done">Paid</div>
    </div>
    <div class="cs-fork-path">
      <p class="cs-fork-label">Several at once <em>Accounts or payables</em></p>
      <div class="cs-node">Choose what to pay<small>Appears only when needed</small></div>
      <div class="cs-node">Pay them together</div>
    </div>
  </div>
</div>

<div class="cs-phones cs-wide">
  <figure><a href="/case-studies/ezpay/details.webp" class="zoom cs-zoom"><img src="/case-studies/ezpay/details.webp" alt="Payment details screen: $125.00 due, with Amount, Method and Date rows and a Continue button" width="884" height="1828" loading="lazy" /></a><figcaption>1. Amount, method and date</figcaption></figure>
  <figure><a href="/case-studies/ezpay/method.webp" class="zoom cs-zoom"><img src="/case-studies/ezpay/method.webp" alt="Select payment method sheet with add bank, add card, pay cash, saved cards and accounts, Apple Pay and Google Pay" width="884" height="1828" loading="lazy" /></a><figcaption>2. Every way to pay</figcaption></figure>
  <figure><a href="/case-studies/ezpay/date.webp" class="zoom cs-zoom"><img src="/case-studies/ezpay/date.webp" alt="Select date calendar with today, the selected date and the due date marked" width="884" height="1828" loading="lazy" /></a><figcaption>3. Pick a date</figcaption></figure>
</div>

### 2. Bringing sales and marketing along

This was the hardest part of the project. Sales and marketing had heard from many clients that multi-item payments were essential, and they were wary of designing around a single bill. Their concern was real: some customers do need to pay several accounts or payables at once, even though most pay just one bill.

Rather than treat it as design against sales, we looked at the research together.

<div class="cs-merge cs-wide" role="img" aria-label="Diagram: what sales heard and what research showed came together in one compromise">
  <div class="cs-merge-in">
    <div><p class="eyebrow">Sales and marketing heard</p><strong>“Clients need multi-item payments.”</strong></div>
    <div><p class="eyebrow">Research showed</p><strong>Most pay a single bill. Some need to pay several at once.</strong></div>
  </div>
  <div class="cs-merge-out"><p class="eyebrow">The compromise</p><strong>Design for the single bill. Keep paying several at once fully supported.</strong></div>
</div>

<blockquote class="cs-quote"><p>The best outcome came from finding a compromise, not winning an argument.</p></blockquote>

### 3. Flow mapping before screens

Payments touch many systems and edge cases. Before any designs, the team mapped full flows end to end, so designers and stakeholders shared one picture of the moving pieces.

<figure class="cs-wide cs-map">
  <svg viewBox="0 0 960 350" role="img" aria-label="Simplified flow map: from choosing what to pay, through amount, payment method and date, to confirmation, with branches for several items and each kind of payment method">
    <g class="ln">
      <path d="M150 180 H210" /><path d="M330 180 H390" /><path d="M510 180 H570" /><path d="M690 180 H750" />
      <path d="M90 205 V290 H180" />
      <path d="M360 290 Q390 290 390 260 V205" />
      <path d="M450 155 V110" /><path d="M255 110 H645" />
      <path d="M255 110 V85" /><path d="M385 110 V85" /><path d="M515 110 V85" /><path d="M645 110 V85" />
    </g>
    <g class="nd">
      <rect x="30" y="155" width="120" height="50" rx="12" class="start" /><text x="90" y="185">Choose item</text>
      <rect x="210" y="155" width="120" height="50" rx="12" class="hi" /><text x="270" y="185">Amount</text>
      <rect x="390" y="155" width="120" height="50" rx="12" class="hi" /><text x="450" y="185">Method</text>
      <rect x="570" y="155" width="120" height="50" rx="12" class="hi" /><text x="630" y="185">Date</text>
      <rect x="750" y="155" width="150" height="50" rx="12" class="end" /><text x="825" y="185">Confirmation</text>
      <rect x="180" y="265" width="180" height="50" rx="12" class="alt" /><text x="270" y="295">Choose what to pay</text>
      <rect x="200" y="35" width="110" height="50" rx="12" class="alt" /><text x="255" y="61">Bank</text>
      <rect x="330" y="35" width="110" height="50" rx="12" class="alt" /><text x="385" y="61">Card</text>
      <rect x="460" y="35" width="110" height="50" rx="12" class="alt" /><text x="515" y="61">Cash</text>
      <rect x="590" y="35" width="110" height="50" rx="12" class="alt" /><text x="645" y="61">Wallets</text>
    </g>
    <text x="150" y="250" class="note">Several accounts or payables</text>
  </svg>
  <figcaption>A simplified flow map. The real maps covered every system and edge case behind each step.</figcaption>
</figure>

<blockquote class="cs-quote"><p>Mapping the whole experience upfront surfaced complexity early, and made it easier to simplify.</p></blockquote>

### 4. A process that could absorb change

New requirements often arrived mid-stream, across EZ-PAY+ and other products. I set up a way of working that let the team close out the feature in progress, then move quickly into the next iteration.

<div class="cs-train cs-wide" role="img" aria-label="Diagram: a new requirement arriving mid-stream joins the next iteration, while the feature in progress is closed out and released">
  <div class="cs-train-new"><span>New requirement arrives</span></div>
  <div class="cs-train-row">
    <div class="cs-car now"><p class="eyebrow">Iteration 1</p><strong>Close out the feature in progress</strong><em>Ships on schedule</em></div>
    <div class="cs-car next"><p class="eyebrow">Iteration 2</p><strong>New requirement, mapped and planned</strong><em>Picked up right after</em></div>
    <div class="cs-car"><p class="eyebrow">Iteration 3</p><strong>And so on</strong><em>Updates keep rolling out</em></div>
  </div>
</div>

Combined with upfront flow mapping, this let us negotiate release plans that kept updates rolling out without disrupting customers or slipping milestones.

## Outcomes

<ol class="cs-timeline cs-wide" aria-label="EZ-PAY+ timeline">
  <li><span>2021</span><strong>Research</strong><em>Flows mapped, the single-bill case found</em></li>
  <li><span>2024</span><strong>MVP launch</strong><em>A single bill first, several at once when needed</em></li>
  <li class="on"><span>2026</span><strong>Every payable</strong><em>Bills, invoices, orders and open amounts</em></li>
</ol>

### Built to handle every kind of payment

<div class="cs-learn cs-four-up cs-wide">
  <div><span>Ongoing</span><strong>Bills</strong><p>Utility and recurring account bills.</p></div>
  <div><span>One-time</span><strong>Invoices</strong><p>Tickets, fines and one-off charges.</p></div>
  <div><span>Order-based</span><strong>Orders</strong><p>Permits and licenses.</p></div>
  <div><span>Open amount</span><strong>Payments</strong><p>Donations and other freeform amounts.</p></div>
</div>

<div class="cs-phones cs-pair cs-wide">
  <figure><a href="/case-studies/ezpay/confirmation.webp" class="zoom cs-zoom"><img src="/case-studies/ezpay/confirmation.webp" alt="Payment submitted screen for a parking ticket, with confirmation number, pending status, amount, service fee and total" width="884" height="1828" loading="lazy" /></a><figcaption>A parking ticket, paid like a utility bill</figcaption></figure>
  <figure><a href="/case-studies/ezpay/scheduled.webp" class="zoom cs-zoom"><img src="/case-studies/ezpay/scheduled.webp" alt="Scheduled payments list with one payment expanded, showing status, method, fee, total and a Cancel payment button" width="884" height="1828" loading="lazy" /></a><figcaption>Scheduled payments, with every detail in one place</figcaption></figure>
</div>

<ul class="cs-chips cs-wide" aria-label="Ways to pay">
  <li>Card</li><li>Bank account</li><li>PIN-less debit</li><li>Cash</li><li>Apple Pay</li><li>Google Pay</li><li>PayPal</li>
</ul>

<ul class="stats-row cs-stats cs-wide">
  <li><strong>2024</strong><span>MVP launch, with updates shipping through 2026 without disrupting customers</span></li>
  <li><strong>7</strong><span>Ways to pay, from cards and bank accounts to cash and digital wallets</span></li>
  <li><strong>4</strong><span>Kinds of payables in one experience</span></li>
</ul>

<div class="cs-insight">
  <p class="cs-insight-label">Reception</p>
  <p>The redesign drew positive feedback from our sales team, the same team that had worried about multi-item payments, and from clients.</p>
</div>

## What I learned

<div class="cs-learn cs-wide cs-two-up">
  <div><span>01</span><strong>Sales insight matters, even when it pulls a different way.</strong><p>Sales teams focus on client value more than user goals, but their perspective made our solution stronger.</p></div>
  <div><span>02</span><strong>Flow mapping pays for itself.</strong><p>Mapping the whole experience upfront simplified complex ideas and gave the team a full view of what we were delivering.</p></div>
</div>

<p class="cs-fine">Product screens shown use a demo brand and sample data.</p>
