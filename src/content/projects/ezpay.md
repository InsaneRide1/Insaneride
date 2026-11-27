---
title: EZ-PAY+
summary: The payment platform utilities, government agencies and insurers use to let their customers pay bills, fines, permits and more, across web, mobile and other channels. I led the design team that took it from research to launch and beyond.
outcome: A short, focused flow for the customer paying one bill, with the cart still there for customers paying several. Launched in 2024, it now handles every kind of payable in one experience.
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
  - { value: '$300B', label: 'In annual trade at one seaport client' }
---

<p class="cs-kicker">Most people paying a bill want to pay one bill. EZ-PAY+ made them fill a cart. We flipped that around, without losing the customers who really do pay for several things at once.</p>

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

<div class="cs-compare3 cs-wide cs-two" role="group" aria-label="Paying one bill, before and after">
  <div class="cs-lane">
    <p class="cs-lane-label">Before: every payment is a cart</p>
    <ol><li>I want to pay one bill</li><li class="bad">Pushed into a multi-item cart</li><li class="bad">A process built for several items</li></ol>
  </div>
  <div class="cs-lane good">
    <p class="cs-lane-label">After: one bill, one page</p>
    <ol><li>I want to pay one bill</li><li>Amount, method and date, on one page</li><li class="ok">Paid</li></ol>
  </div>
</div>

## Key decisions

### 1. Pay one bill first, cart second

We redesigned the flow around the most common case. The cart didn't go away. It became a second path that appears only when a customer actually has several items to pay.

<div class="cs-fork cs-wide" role="img" aria-label="Diagram: a customer with one item goes straight to a single payment page; a customer with several items sees the cart, then pays them together">
  <div class="cs-node root">Customer arrives</div>
  <div class="cs-fork-q"><span>How many items?</span></div>
  <div class="cs-fork-paths">
    <div class="cs-fork-path main">
      <p class="cs-fork-label">One <em>Most customers</em></p>
      <div class="cs-node">One page<small>Amount · method · date</small></div>
      <div class="cs-node done">Paid</div>
    </div>
    <div class="cs-fork-path">
      <p class="cs-fork-label">Several <em>Some customers</em></p>
      <div class="cs-node">Cart appears<small>Only when it's needed</small></div>
      <div class="cs-node">Pay them together</div>
    </div>
  </div>
</div>

### 2. Bringing sales and marketing along

This was the hardest part of the project. Sales and marketing had heard from many clients that multi-item payments were essential, and they were wary of moving the cart out of the spotlight. Their concern was real, even though most paying customers never used the cart.

Rather than treat it as design against sales, we looked at the research together.

<div class="cs-merge cs-wide" role="img" aria-label="Diagram: what sales heard and what research showed came together in one compromise">
  <div class="cs-merge-in">
    <div><p class="eyebrow">Sales and marketing heard</p><strong>“Clients need multi-item payments.”</strong></div>
    <div><p class="eyebrow">Research showed</p><strong>A real need for some, not the majority.</strong></div>
  </div>
  <div class="cs-merge-out"><p class="eyebrow">The compromise</p><strong>Keep the cart fully supported. Show it only when it's needed.</strong></div>
</div>

<blockquote class="cs-quote"><p>The best outcome came from finding a compromise, not winning an argument.</p></blockquote>

### 3. Flow mapping before screens

Payments touch many systems and edge cases. Before any designs, the team mapped full flows end to end, so designers and stakeholders shared one picture of the moving pieces.

<figure class="cs-wide cs-map">
  <svg viewBox="0 0 960 350" role="img" aria-label="Simplified flow map: from choosing what to pay, through amount, payment method and date, to confirmation, with branches for several items and each kind of payment method">
    <g class="ln">
      <path d="M150 180 H210" /><path d="M330 180 H390" /><path d="M510 180 H570" /><path d="M690 180 H750" />
      <path d="M90 205 V290 H210" />
      <path d="M330 290 H360 Q390 290 390 260 V205" />
      <path d="M450 155 V110" /><path d="M255 110 H645" />
      <path d="M255 110 V85" /><path d="M385 110 V85" /><path d="M515 110 V85" /><path d="M645 110 V85" />
    </g>
    <g class="nd">
      <rect x="30" y="155" width="120" height="50" rx="12" class="start" /><text x="90" y="185">Choose item</text>
      <rect x="210" y="155" width="120" height="50" rx="12" class="hi" /><text x="270" y="185">Amount</text>
      <rect x="390" y="155" width="120" height="50" rx="12" class="hi" /><text x="450" y="185">Method</text>
      <rect x="570" y="155" width="120" height="50" rx="12" class="hi" /><text x="630" y="185">Date</text>
      <rect x="750" y="155" width="150" height="50" rx="12" class="end" /><text x="825" y="185">Confirmation</text>
      <rect x="210" y="265" width="120" height="50" rx="12" class="alt" /><text x="270" y="295">Cart</text>
      <rect x="200" y="35" width="110" height="50" rx="12" class="alt" /><text x="255" y="61">Bank</text>
      <rect x="330" y="35" width="110" height="50" rx="12" class="alt" /><text x="385" y="61">Card</text>
      <rect x="460" y="35" width="110" height="50" rx="12" class="alt" /><text x="515" y="61">Cash</text>
      <rect x="590" y="35" width="110" height="50" rx="12" class="alt" /><text x="645" y="61">Wallets</text>
    </g>
    <text x="150" y="250" class="note">Several items</text>
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
  <li><span>2024</span><strong>MVP launch</strong><em>One page for one bill, cart when needed</em></li>
  <li class="on"><span>2026</span><strong>Every payable</strong><em>Bills, invoices, orders and open amounts</em></li>
</ol>

### Built to handle every kind of payment

<div class="cs-learn cs-four-up cs-wide">
  <div><span>Ongoing</span><strong>Bills</strong><p>Utility and recurring account bills.</p></div>
  <div><span>One-time</span><strong>Invoices</strong><p>Tickets, fines and one-off charges.</p></div>
  <div><span>Order-based</span><strong>Orders</strong><p>Permits and licenses.</p></div>
  <div><span>Open amount</span><strong>Payments</strong><p>Donations and other freeform amounts.</p></div>
</div>

<ul class="cs-chips cs-wide" aria-label="Ways to pay">
  <li>Card</li><li>Bank account</li><li>PIN-less debit</li><li>Cash</li><li>Apple Pay</li><li>Google Pay</li><li>PayPal</li>
</ul>

<ul class="stats-row cs-stats cs-wide">
  <li><strong>2024</strong><span>MVP launch, with updates shipping through 2026 without disrupting customers</span></li>
  <li><strong>$300B</strong><span>In annual trade at a major seaport now paying through EZ-PAY+</span></li>
  <li><strong>4</strong><span>Kinds of payables in one experience</span></li>
</ul>

<div class="cs-insight">
  <p class="cs-insight-label">Reception</p>
  <p>The redesign drew positive feedback from our sales team, the same team that had worried about the cart, and from clients.</p>
</div>

## What I learned

<div class="cs-learn cs-wide cs-two-up">
  <div><span>01</span><strong>Sales insight matters, even when it pulls a different way.</strong><p>Sales teams focus on client value more than user goals, but their perspective made our solution stronger.</p></div>
  <div><span>02</span><strong>Flow mapping pays for itself.</strong><p>Mapping the whole experience upfront simplified complex ideas and gave the team a full view of what we were delivering.</p></div>
</div>

