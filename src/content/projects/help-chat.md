---
title: Help chat experience
summary: A simple chat flow that points people to the right help articles first, reducing support calls.
depth: case-study
discipline: ux
client: Infusionsoft
years: TBD
tags: [Research, Support, Conversational UI]
order: 2
highlights:
  - { value: '~50%', label: 'Fewer repeat-question calls' }
  - { value: '15K–25K', label: 'Estimated monthly support calls after launch, down from 25K–30K' }
  - { value: '+1–2', label: 'Point increase on a 5-star call rating (estimated)' }
cover: ./images/help-chat/flow.webp
coverAlt: "Flow diagram of the help chat experience from greeting to agent hand-off"
---

<p class="cs-kicker">Half of all support calls were questions the help center already answered. A friendly chat that pointed people to those answers first gave agents time for the hard problems.</p>

## The challenge

Support calls were expensive, and many questions already had answers in the help center. Before AI chat tools existed, we set out to design a conversation-based chatbot that guided owners to those answers first, so support agents could focus on harder problems and recommend marketplace tools that helped owners grow.

<ul class="stats-row cs-stats cs-wide">
  <li><strong>25K–30K</strong><span>Support calls a month</span></li>
  <li><strong>~50%</strong><span>Of calls were repeat questions</span></li>
  <li><strong>8</strong><span>Support team members interviewed</span></li>
  <li><strong>9</strong><span>Steps in the chat flow</span></li>
</ul>

> **Users:** small business owners using Infusionsoft to improve their marketing campaigns.

## My role

> **Role:** Lead UX designer
>
> **Team:** 4 people: me, a product manager, a front-end developer and an engineer
>
> **Owned:** research, conversation flows, UX and UI

## Research

I interviewed 8 people from the support team, 5 agents and 3 team leads, and walked through existing support flows with them to learn what customers asked and how agents answered. Support analytics and conversations with managers showed us the most common questions.

<div class="cs-learn cs-wide cs-four-up">
  <div><span>01</span><strong>A few questions drove most calls.</strong><p>The most common questions had to be matched to the best guided content in our learning system.</p></div>
  <div><span>02</span><strong>Two kinds of users.</strong><p>Some wanted a quick answer to get back to work. Others needed real help, usually from a tier-two agent.</p></div>
  <div><span>03</span><strong>Some questions shouldn't be gated.</strong><p>Keywords and phrases spotted questions that should skip the FAQ and go straight to an agent.</p></div>
  <div><span>04</span><strong>It had to feel human.</strong><p>A robotic chat would frustrate owners, so the conversation needed a natural, simple pattern.</p></div>
</div>

<blockquote class="cs-quote"><p>Answer the quick questions fast. Get everyone else to a person, faster.</p><cite>The principle behind the flow</cite></blockquote>

## The flow

The experience follows nine steps: get the person's name, ask their question, recommend articles, check whether the recommendation fit, rate the experience, and, if needed, refer them to a new agent with a visible place in the queue and a chat board.

<figure class="cs-wide">
  <a href="/case-studies/help-chat/flow.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/flow.webp" alt="Flow diagram of the help chat experience from greeting to agent hand-off" width="1800" height="1248" loading="lazy" /></a>
  <figcaption>The end-to-end chat flow, from greeting to agent hand-off.</figcaption>
</figure>

<figure class="cs-annot cs-wide">
  <div class="cs-annot-img">
    <a href="/case-studies/help-chat/recommend-articles.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/recommend-articles.webp" alt="Support chat recommending three help articles and asking “Are any of these helpful?” with No and Yes buttons" width="1061" height="835" loading="lazy" /></a>
    <span class="pin" style="--x:32.5%;--y:24.5%">1</span>
    <span class="pin" style="--x:67%;--y:31%">2</span>
    <span class="pin" style="--x:51%;--y:57%">3</span>
  </div>
  <ol class="cs-notes">
    <li><strong>A face and a name.</strong> The chat greets people by name, so it feels like a conversation, not a form.</li>
    <li><strong>Answers first.</strong> The question is matched to a few help articles before anyone waits for an agent.</li>
    <li><strong>One simple check.</strong> “Are any of these helpful?” decides whether to wrap up or hand off to a person.</li>
  </ol>
</figure>

<div class="cs-strip cs-wide" tabindex="0" aria-label="Chat screens in order, scroll sideways">
  <figure><a href="/case-studies/help-chat/get-name.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/get-name.webp" alt="Chat asking for the visitor's name" width="1061" height="836" loading="lazy" /></a><figcaption>1. Get their name</figcaption></figure>
  <figure><a href="/case-studies/help-chat/ask-question.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/ask-question.webp" alt="Chat asking for the visitor's question" width="1061" height="835" loading="lazy" /></a><figcaption>2. Ask their question</figcaption></figure>
  <figure><a href="/case-studies/help-chat/recommend-articles.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/recommend-articles.webp" alt="Chat recommending help articles" width="1061" height="835" loading="lazy" /></a><figcaption>3. Recommend articles</figcaption></figure>
  <figure><a href="/case-studies/help-chat/recommendation-fit.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/recommendation-fit.webp" alt="Chat asking if there are other questions" width="1061" height="836" loading="lazy" /></a><figcaption>4. Check the fit</figcaption></figure>
  <figure><a href="/case-studies/help-chat/rate-your-experience.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/rate-your-experience.webp" alt="Chat asking the visitor to rate the experience" width="1061" height="836" loading="lazy" /></a><figcaption>5. Rate the experience</figcaption></figure>
  <figure><a href="/case-studies/help-chat/refer-to-new-agent.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/refer-to-new-agent.webp" alt="Chat offering to refer the visitor to a level 2 representative" width="1061" height="836" loading="lazy" /></a><figcaption>6. Hand off to an agent</figcaption></figure>
  <figure><a href="/case-studies/help-chat/in-queue.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/in-queue.webp" alt="Chat showing the visitor's place in the queue" width="1061" height="837" loading="lazy" /></a><figcaption>7. Show their place in line</figcaption></figure>
  <figure><a href="/case-studies/help-chat/chat-board.webp" class="zoom cs-zoom"><img src="/case-studies/help-chat/chat-board.webp" alt="Live chat with a support agent" width="1061" height="836" loading="lazy" /></a><figcaption>8. Chat with an agent</figcaption></figure>
</div>

## Outcome

The chatbot answered common questions before they reached an agent. Owners who needed a quick answer got one, and those who needed real help reached support faster.

<ul class="stats-row cs-stats cs-wide">
  <li><strong>~50%</strong><span>Fewer repeat-question calls</span></li>
  <li><strong>15K–25K</strong><span>Estimated monthly calls, down from 25K–30K</span></li>
  <li><strong>+1–2</strong><span>Point increase on a 5-star call rating (estimated)</span></li>
</ul>

<div class="cs-insight">
  <p class="cs-insight-label">More time for growth</p>
  <p>With fewer repeat questions, support could focus on complex issues and on recommending marketplace tools, instead of answering the same questions again.</p>
</div>
