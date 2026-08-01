---
layout: layout.vto
templateEngine: [vto, md]
title: Software Engineer
description: Jason Chang is a software engineer working on the Dell VxRail team, with a background in systems, backend, and full-stack development.
url: /
timelineTopYear: 2026
timelineBottomYear: 2011
timelineYears:
  - 2026
  - 2025
  - 2024
  - 2023
  - 2022
  - 2021
  - 2020
  - 2019
  - 2018
  - 2017
  - 2016
  - 2015
  - 2014
  - 2013
  - 2012
  - 2011
experience:
  - company: Dell Technologies / VxRail
    role: Senior Software Engineer
    dates: Apr. 2026 – Present
    startDate: "2026-04-01"
    endDate: present
    startYear: 2026
    endYear: 2026
    lane: 4
    color: "#3e6f7a"
    current: true
    summary: Building next-generation AI-first architecture for enterprise infrastructure as part of the VxRail team.
  - company: Thingnario
    role: Senior Data Engineer
    dates: Dec. 2024 – Apr. 2026
    startDate: "2024-12-01"
    endDate: "2026-04-01"
    startYear: 2024
    endYear: 2026
    lane: 2
    color: "#5f7b64"
    summary: Large-scale data pipelines, Redis and Spark optimization, Kubernetes, Airflow, test automation, and production reliability.
  - company: Aquila
    role: Founding Back-end Engineer
    dates: Jul. 2024 – Nov. 2024
    startDate: "2024-07-01"
    endDate: "2024-11-01"
    startYear: 2024
    endYear: 2024
    lane: 1
    color: "#6b5d8d"
    summary: Backend architecture, infrastructure migration from Alibaba Cloud to AWS, Go/Gin CASB services, and Vue/Flask security tooling.
  - company: D4 Auction
    role: Co-Founder / Back-end Developer
    dates: Jun. 2023 – Dec. 2023
    startDate: "2023-06-01"
    endDate: "2023-12-01"
    startYear: 2023
    endYear: 2023
    lane: 3
    color: "#b07a4a"
    summary: Backend architecture, database design, Blizzard OAuth, scalability, and rapid user onboarding.
  - company: Appier Inc.
    role: Senior Software Engineer
    dates: Jul. 2022 – Jul. 2024
    startDate: "2022-07-01"
    endDate: "2024-07-01"
    startYear: 2022
    endYear: 2024
    lane: 0
    color: "#a14c5a"
    summary: Internal platforms for ITAM and sales enablement, IAM automation, Vertex AI translation, and SaaS integrations.
  - company: Quanta Computer Inc.
    role: Back-end Engineer
    dates: Jun. 2021 – Apr. 2022
    startDate: "2021-06-01"
    endDate: "2022-04-01"
    startYear: 2021
    endYear: 2022
    lane: 1
    color: "#255b8e"
    summary: AI inference backend for CT-image analysis, APIs, raw dataset transformation, and 3D outputs.
  - company: Pipeline Examination System
    role: Primary Software Engineer
    dates: Dec. 2017 – Jun. 2021
    startDate: "2017-12-01"
    endDate: "2021-06-01"
    startYear: 2017
    endYear: 2021
    lane: 0
    color: "#7c7a3a"
    summary: Concurrent ingestion from edge devices, AI inference pipeline design, and staged processing workers.
  - company: NSRRC
    role: System Engineer
    dates: Dec. 2017 – Dec. 2020
    startDate: "2017-12-01"
    endDate: "2020-12-01"
    startYear: 2017
    endYear: 2020
    lane: 1
    color: "#7288a1"
    summary: System engineering support for NSRRC research infrastructure.
  - company: NTHU
    role: M. Sc. in Department of Engineering and System Science
    dates: Sep. 2015 – Aug. 2017
    startDate: "2015-09-01"
    endDate: "2017-08-01"
    startYear: 2015
    endYear: 2017
    lane: 1
    color: "#9b6c55"
    summary: Graduate study in engineering and system science.
  - company: NTHU
    role: B. Sc. in Interdisciplinary Program of Nuclear Science
    dates: Sep. 2011 – Jun. 2015
    startDate: "2011-09-01"
    endDate: "2015-06-01"
    startYear: 2011
    endYear: 2015
    lane: 0
    color: "#4c7e8a"
    summary: Undergraduate study in interdisciplinary nuclear science.
---

<section class="intro wrap" aria-labelledby="intro-title">
  <p class="eyebrow">Software engineer · Taiwan</p>
  <h1 id="intro-title">Jason Chang</h1>
  <p class="intro-title">Building dependable software for complex systems.</p>
  <div class="intro-grid">
    <p class="summary">I’m a software engineer with a background in systems engineering, backend development, and full-stack applications. I enjoy understanding how things work, making them more reliable, and keeping the resulting experience clear for the people who use them.</p>
    <div class="social-links" aria-label="Social links">
      <a href="https://github.com/JasonJungler">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/jason-chang-882aba82/">LinkedIn <span aria-hidden="true">↗</span></a>
      <a href="https://leetcode.com/JasonJungler/">LeetCode <span aria-hidden="true">↗</span></a>
      <a href="mailto:{{ site.email }}">Email <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</section>

<section id="career" class="content-section wrap" aria-labelledby="career-title">
  <div class="section-label"><span>01</span><span>CAREER</span></div>
  <div class="section-content">
    <div class="timeline-shell" style="--timeline-top-year: {{ timelineTopYear }}; --timeline-bottom-year: {{ timelineBottomYear }};">
      <div class="timeline-graph" aria-hidden="true">
        <span class="timeline-axis"></span>
        {{ for year of timelineYears }}
        <div class="timeline-anchor" style="--year: {{ year }};">
          <span class="timeline-anchor-dot"></span>
          <span class="timeline-anchor-label">{{ year }}</span>
        </div>
        {{ /for }}
        {{ for item of experience }}
        <div class="timeline-track" style="--lane: {{ item.lane }}; --track-color: {{ item.color }};" data-current="{{ item.current }}" data-start-date="{{ item.startDate }}" data-end-date="{{ item.endDate }}">
          <span class="timeline-track-line"></span>
          <span class="timeline-track-dot timeline-track-dot--start"></span>
          <span class="timeline-track-dot timeline-track-dot--end"></span>
        </div>
        {{ /for }}
      </div>
      <div class="timeline-cards">
        {{ for item of experience }}
        <article class="timeline-card" style="--track-color: {{ item.color }};" data-current="{{ item.current }}">
          <div class="timeline-card-head">
            <span class="timeline-swatch" aria-hidden="true"></span>
            <div class="timeline-meta">
              <span>{{ item.dates }}</span>
            </div>
          </div>
          <h3>{{ item.role }}</h3>
          <p class="company">{{ item.company }}</p>
          <p>{{ item.summary }}</p>
        </article>
        {{ /for }}
      </div>
    </div>
  </div>
</section>
