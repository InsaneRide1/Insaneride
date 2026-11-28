---
title: BizHQ+
summary: KUBRA's B2B platform for utility, municipal and community companies to manage their consumers' accounts, access, payments, invoices, documents and notifications. It replaced iDoxs, a legacy product that had fallen behind both its users and the rest of KUBRA's ecosystem.
outcome: Five clients have migrated from iDoxs to BizHQ+, with about ten more in progress during my time on the project.
depth: case-study
discipline: ux
client: KUBRA
years: 2020 onward
role: UX design lead
team: 3 product designers
tags: [Research, B2B platform, Team leadership, Payments]
order: 0.5
highlights:
  - { value: '5', label: 'Client migrations completed from iDoxs' }
  - { value: '~10', label: 'More migrations in progress' }
  - { value: '1', label: 'Place to find the caller, replacing a third-party lookup tool' }
  - { value: '3', label: 'Product designers led, working in parallel' }
cover: ./images/bizhq/hero.webp
coverAlt: "BizHQ+ open on a laptop in an office, showing a consumer profile for Joe Smith, next to a call-center headset"
coverPosition: center
---

<p class="cs-kicker">On every call, the first job is finding the caller. Our legacy tool was so hard to use that CSRs looked people up somewhere else. BizHQ+ had to win back that first moment, and fix everything behind it.</p>

## Overview

> **My role:** UX design lead
>
> **Team:** 3 product designers, in partnership with UX Research, UX Writing and UI Design
>
> **Timeline:** research began in 2020

<div class="cs-goals cs-wide">
  <div>
    <p class="eyebrow">Customer service reps (CSRs)</p>
    <p>Handle live customer calls, and need answers in seconds while the caller waits.</p>
  </div>
  <div>
    <p class="eyebrow">CSR managers</p>
    <p>Control permissions and client-wide configurations for their teams.</p>
  </div>
</div>

## The problem

iDoxs had three problems, each larger in scope than the last.

<div class="cs-learn cs-wide">
  <div><span>01 · Usability</span><strong>Scattered and dated.</strong><p>The tasks a CSR needed on a call were spread across disconnected screens. Nothing felt intuitive under the pressure of a live customer.</p></div>
  <div><span>02 · Flexibility</span><strong>Payment system disconnect.</strong><p>iDoxs handled account-based billing, but invoices, orders and freeform payments were all managed outside it. Clients with more than one kind of payable had no single place to see them.</p></div>
  <div><span>03 · Platform</span><strong>Cut off from everything else.</strong><p>The biggest gap. iDoxs sat outside KUBRA's ecosystem, so no real-time data flowed between administration, reporting and the consumer experience.</p></div>
</div>

<blockquote class="cs-quote"><p>Rebuilding the UI alone would have fixed the first problem. BizHQ+ had to solve all three.</p></blockquote>

## The complexity

A single consumer or business could link one-to-many accounts, often spread across multiple premises. An account holder could also have several connected profiles tied to the same account. Every feature, from payments to documents to notifications, had to respect that structure, and CSRs had to make sense of it in seconds.

<div class="cs-tree cs-wide" role="img" aria-label="Diagram: a consumer links to many accounts across premises, and each account can have several connected profiles">
  <div class="cs-node root">Consumer or business</div>
  <div class="cs-branch">
    <div class="cs-col"><div class="cs-node">Account 1</div><div class="cs-leaf">Premise A</div><div class="cs-leaf">Profiles: Jane, Joe</div></div>
    <div class="cs-col"><div class="cs-node">Account 2</div><div class="cs-leaf">Premise B</div><div class="cs-leaf">Profiles: Joe, Kay</div></div>
    <div class="cs-col"><div class="cs-node">Invoice or order</div><div class="cs-leaf">Freeform payable</div><div class="cs-leaf">Profiles: Joe</div></div>
  </div>
</div>

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <a href="/case-studies/bizhq/account-wireframe.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/account-wireframe.webp" alt="Wireframe of the utility account page showing account details, AutoPay settings owned by Joe Smith, four linked consumer profiles, and document settings" width="2000" height="1572" loading="lazy" /></a>
    <span class="pin" style="--x:46.8%;--y:8.9%">1</span>
    <span class="pin" style="--x:20%;--y:56.1%">2</span>
    <span class="pin" style="--x:65.6%;--y:42.8%">3</span>
    <span class="pin" style="--x:19.8%;--y:73.6%">4</span>
  </div>
  <ol class="cs-notes">
    <li><strong>The essentials up top.</strong> Account, last bill, balance and due date stay visible on every tab.</li>
    <li><strong>Who owns the AutoPay.</strong> One profile owns the payment, even when several people share the account.</li>
    <li><strong>Every linked profile.</strong> Four people on one account, each with their own notification settings.</li>
    <li><strong>Settings that cascade.</strong> Document preferences apply to the account and every linked profile.</li>
  </ol>
</figure>

## Research: a day on the phones

Because iDoxs wasn't intuitive, we started from scratch. A designer from my team and one of our product managers spent a full day on-site with a client, observing live calls, taking notes and, where permitted, photos.

The biggest insight came from the first moment of every call: a CSR picks up and has to find the caller's account. iDoxs got this wrong.

<div class="cs-compare3 cs-wide cs-two" role="group" aria-label="How CSRs found a caller before and after">
  <div class="cs-lane">
    <p class="cs-lane-label">What CSRs actually did</p>
    <ol><li>Pick up the call</li><li class="bad">Look the caller up in a third-party tool</li><li class="bad">Switch to iDoxs just to see payments</li></ol>
  </div>
  <div class="cs-lane good">
    <p class="cs-lane-label">The new goal</p>
    <ol><li>Pick up the call</li><li>Search once, by whatever the caller knows</li><li class="ok">Account and payments, in one place, in seconds</li></ol>
  </div>
</div>

<blockquote class="cs-quote"><p>Get a CSR from “hello” to the caller's account and payment details in seconds, in one place.</p><cite>The goal the research gave us</cite></blockquote>

### A search built around what callers know

CSRs can find a consumer by phone number, account number, address, first or last name, and more. Research showed name and address or premise were the most common lookups, and address or premise was also the fastest, so we put those first. Account number, the obvious choice on paper, was rarely useful: most callers didn't know theirs. The concept tested well with CSRs.

<div class="cs-rank cs-wide" aria-label="Search fields, in the order we prioritized them">
  <div class="top"><span>1</span><strong>Name</strong><em>Most common</em></div>
  <div class="top"><span>2</span><strong>Address or premise</strong><em>Common and fastest</em></div>
  <div><span>3</span><strong>Phone or email</strong><em>Supported</em></div>
  <div class="low"><span>4</span><strong>Account number</strong><em>Rarely known by callers</em></div>
</div>

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <a href="/case-studies/bizhq/search-results.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/search-results.webp" alt="Consumer search for “Smith” returning five consumers with last name, first name, primary email and mobile number" width="1600" height="1153" loading="lazy" /></a>
    <span class="pin" style="--x:12.8%;--y:10%">1</span>
    <span class="pin" style="--x:24.5%;--y:28.7%">2</span>
    <span class="pin" style="--x:72%;--y:33.8%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>Choose what to search.</strong> A consumer, an item or a payment, from one bar.</li>
    <li><strong>Consumers and subscribers.</strong> Results are split into two tabs.</li>
    <li><strong>Confirm in a glance.</strong> Email and mobile number help the CSR pick the right Smith while the caller is talking.</li>
  </ol>
</figure>

<div class="cs-trio cs-wide">
  <figure><a href="/case-studies/bizhq/search-empty.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/search-empty.webp" alt="Empty consumer search prompting the CSR to search by name, mobile number or email" width="1600" height="1154" loading="lazy" /></a><figcaption>1. Search by what the caller knows</figcaption></figure>
  <figure><a href="/case-studies/bizhq/search-results.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/search-results.webp" alt="Consumer search results" width="1600" height="1153" loading="lazy" /></a><figcaption>2. Pick the right person</figcaption></figure>
  <figure><a href="/case-studies/bizhq/consumer-info.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/consumer-info.webp" alt="Consumer profile for Joe Smith with profile, contact and security details" width="1600" height="1144" loading="lazy" /></a><figcaption>3. Everything about them, one tab away</figcaption></figure>
</div>

## Leading the team

The scope was too big for one designer, so we divided and conquered: each of my three designers owned different features, designed in parallel. Parallel work is fast, but it drifts. I put two practices in place to keep patterns and decisions consistent.

<div class="cs-goals cs-wide">
  <div>
    <p class="eyebrow">Regular pair design</p>
    <p>Designers paired on connected work, so everyone knew what was coming before it landed in their own area.</p>
  </div>
  <div>
    <p class="eyebrow">Peer reviews</p>
    <p>Reviews with my team and with designers on connected products caught gaps and misalignment early.</p>
  </div>
</div>

<div class="cs-insight">
  <p class="cs-insight-label">Key win</p>
  <p>The peer reviews became the most valuable collaboration in our entire product team. They kept design aware of where the product was heading, instead of reacting to it.</p>
</div>

I also partnered across disciplines: UX Research for user and client insights, UX Writing for copy, and UI Design for new components, interactions and accessibility.

## Getting unblocked

When we got blocked, it was usually for one of two reasons: stakeholder misalignment, or requirements nobody had foreseen. Misalignment was the faster fix. Quick user flows, small prototypes, user testing and mini-workshops got everyone on the same page.

One example: the product team was unsure how to build a CSR dashboard where consumer profiles could be searched and tagged across multiple payable types. Rather than jump into screens, we built quick flow maps of the full landscape, every connection between accounts, profiles and payable types. The maps exposed the gaps, so we could run targeted research and get answers from stakeholders just as fast.

<blockquote class="cs-quote"><p>Solving a problem in high-fidelity designs is like navigating a corn maze on foot. A flow map is the drone view.</p><cite>The most important thing I taught my team: know when to step out of design and start mapping</cite></blockquote>

## Every way clients get paid

BizHQ+ handles utility accounts alongside parking tickets, hunting licenses, invoices, orders and freeform payments, all in one payment history.

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <a href="/case-studies/bizhq/item-types.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/item-types.webp" alt="Payment search filtered by item type, with options for utility accounts, parking tickets, hunting license and inmate fund, above a list of payments with status chips" width="1440" height="1024" loading="lazy" /></a>
    <span class="pin" style="--x:31.5%;--y:14.8%">1</span>
    <span class="pin" style="--x:21%;--y:28.8%">2</span>
    <span class="pin" style="--x:90%;--y:28.8%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>Filter by what was paid for.</strong> Utility accounts, parking tickets, licenses and more.</li>
    <li><strong>Mixed payables, one list.</strong> Every item type sits side by side, with its own item number.</li>
    <li><strong>Status and next action.</strong> Clear status chips, with Refund or Cancel right on the row.</li>
  </ol>
</figure>

<figure class="cs-wide">
  <a href="/case-studies/bizhq/payment-details.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/payment-details.webp" alt="Payment details panel showing the account, payer, amounts, fees, status and a history of authorization and settlement events" width="1600" height="1138" loading="lazy" /></a>
  <figcaption>Payment details: every amount, fee and status change in one panel, so a CSR can answer “where's my payment?” without leaving the call.</figcaption>
</figure>

### Setting up AutoPay, start to finish

<div class="cs-strip cs-wide" tabindex="0" aria-label="AutoPay setup screens in order, scroll sideways">
  <figure><a href="/case-studies/bizhq/wallet-1.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/wallet-1.webp" alt="Account with no AutoPay and a Set up AutoPay button" width="1600" height="1156" loading="lazy" /></a><figcaption>1. No AutoPay yet</figcaption></figure>
  <figure><a href="/case-studies/bizhq/wallet-2.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/wallet-2.webp" alt="AutoPay setup with an empty wallet offering Add card or Add bank" width="1600" height="1156" loading="lazy" /></a><figcaption>2. Empty wallet</figcaption></figure>
  <figure><a href="/case-studies/bizhq/wallet-3.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/wallet-3.webp" alt="Add bank account form" width="1600" height="1156" loading="lazy" /></a><figcaption>3. Add a bank account</figcaption></figure>
  <figure><a href="/case-studies/bizhq/wallet-4.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/wallet-4.webp" alt="AutoPay setup with the new bank account selected and a confirmation message" width="1600" height="1156" loading="lazy" /></a><figcaption>4. Back in the flow</figcaption></figure>
  <figure><a href="/case-studies/bizhq/reminders.webp" class="zoom cs-zoom"><img src="/case-studies/bizhq/reminders.webp" alt="Notification settings with payment reminders turned on" width="1600" height="1156" loading="lazy" /></a><figcaption>5. Payment reminders</figcaption></figure>
</div>

An empty wallet doesn't send the CSR away. They add a card or bank account inside the AutoPay flow and land right back where they started.

## Outcomes

<ul class="stats-row cs-stats cs-wide">
  <li><strong>5</strong><span>Client migrations completed from iDoxs to BizHQ+</span></li>
  <li><strong>~10</strong><span>More migrations in progress during my time on the project</span></li>
  <li><strong>1</strong><span>Place to find the caller, replacing a third-party lookup tool</span></li>
</ul>

<div class="cs-learn cs-wide">
  <div><span>Flexibility</span><strong>Multiple payable sources.</strong><p>Invoices, orders and freeform payments, alongside account-based billing.</p></div>
  <div><span>Platform</span><strong>Connected to KUBRA's ecosystem.</strong><p>Real-time data across administration, reporting and end-consumer products.</p></div>
  <div><span>Practice</span><strong>A design practice the team relied on.</strong><p>Peer reviews became the most valuable collaboration across the product team.</p></div>
</div>

Throughout, we kept returning to user and client insights to guide product improvements and drive feature adoption.

## What I learned

<div class="cs-learn cs-wide">
  <div><span>01</span><strong>Parallel design needs shared rituals.</strong><p>Splitting the work got us speed. Pairing and peer reviews kept that speed from turning into inconsistency.</p></div>
  <div><span>02</span><strong>Know when to zoom out.</strong><p>On a system this connected, the fastest path through a hard problem was often to stop designing screens and map the whole landscape first.</p></div>
  <div><span>03</span><strong>Alignment is a design deliverable.</strong><p>Quick flows, prototypes and workshops often did more to unblock the product than any finished screen.</p></div>
</div>
