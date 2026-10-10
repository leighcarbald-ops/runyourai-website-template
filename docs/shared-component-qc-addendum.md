# Shared Component Library — Website Build & QC Addendum (PROPOSED)

Status: **Review-branch consolidation of the user-provided governing website rules plus supplemental component/QC checks. No changes to live production.**

## Precedence and boundaries
1. Follow existing project-specific website standards, QC gates and README first. Where an established rule conflicts with an example component, **the established rule wins**.
2. Keep current sites and deployment configurations unchanged unless explicitly approved.
3. Use a shared component **catalog**, not a shared global CSS bundle: each client's branding and layout must remain distinct.
4. The baseline for small-business demos is the repo's `business.js`-configured, dependency-free HTML/CSS/JS workflow and GitHub Pages. React/TypeScript/shadcn components can be archived as reference but are not drop-in assets for these sites.
5. Treat new libraries and marketplace code as untrusted: audit source, dependency licenses, security posture and external network behavior before adoption.
6. No fabricated business claims, reviews, credentials, ratings, guarantees, pricing, addresses, hours or customer testimonials. Verify content and use clearly identified demonstration content when needed.

## Governing standard: production-ready, conversion-first website builds

**Core principle:** Business-specific content + conversion architecture + strong technical QC + high-end visual polish.

A demo must be designed as if the prospect could approve it today and the *same implementation* could become their live website. Converting it to production should primarily mean verifying/replacing content, configuring integrations/domain, and final QC—not rebuilding the site.

### Mandatory website-build standards
1. **Business-specific design:** Match industry, actual services, audience, geography, imagery, tone, layout, CTAs and visitor journey. Do not swap names into generic templates and call that a finished demo.
2. **Conversion-first architecture:** Every page and major section has a job in the customer journey. Use helpful service information, credible trust signals, clear next steps and low-friction ways to call, book, order or request a quote. The website must help *the client's customers* make a decision.
3. **High-end visual polish:** Strong typography, intentional whitespace, hierarchy, coherent colors, quality category-appropriate photography, polished cards/sections, responsive composition and restrained, purposeful interactions.
4. **Appropriate real-site structure:** Typically Home / About / Services / Contact when appropriate, but choose pages and user flows based on business needs; do not force four pages.
5. **Mobile first:** Design and test phone-sized layouts as primary experiences, not desktop adaptations.
6. **Functional production-like interactions:** Navigation, buttons, lightboxes, forms, CTAs and social/contact links should work whenever practical. Clearly label intentionally nonfunctional external integrations in demos.
7. **Business accuracy:** Do not fabricate real prospects' facts, reviews, service claims, ratings, prices, guarantees or history. Only invent business details when expressly authorized for a fictional/general demo; don't quietly blur the distinction.
8. **Demo-to-live portability:** Maintain clean, maintainable architecture that can be promoted to production without recreating the site.
9. **Cross-page consistency:** Inspect repeated elements on *every page*: header/footer, navigation, typography, button styles, spacing, business terminology, social/contact details, service references, pricing boxes and totals. Pricing shown in different places must match.
10. **Technical QC:** Check mobile/desktop behavior, real image loading and interactions, links, forms, accessibility, metadata/SEO, performance and edge cases before delivery.
11. **Sales-quality benchmark:** Judge the finished result by professional production quality and usefulness to the prospect's customers—not by whether it is barely adequate for a discounted price.

### Non-negotiable final review
- [ ] Explain the purpose and next action of every page; demonstrate at least one complete customer conversion path end to end.
- [ ] Verify actual business details and imagery are relevant and approved.
- [ ] Review actual rendered pages at phone, tablet and desktop sizes—including every page, not just the homepage.
- [ ] Verify repeated pricing, labels, navigation, contact details and visual patterns agree across pages.
- [ ] Verify all major interactions work, or are explicitly identified as disconnected demo integrations.
- [ ] Confirm the demonstrated code can transition to production without a rewrite.
- [ ] Record specific PASS / FAIL / NOT TESTED outcomes and evidence. Do not describe untested functionality as working.

## Component catalog admission gate
- [ ] Source URL, author, license/version and attribution obligations recorded; license permits intended commercial use.
- [ ] Original source preserved with provenance; derivative tracked separately.
- [ ] Runtime/framework dependencies and asset licenses recorded; no silent React/Tailwind/shadcn installs in static projects.
- [ ] Missing imports, CSS utilities, props and interaction destinations identified.
- [ ] Component follows semantic HTML and meaningful heading hierarchy.
- [ ] CTA navigates to a verified target or performs an implemented action; no inert buttons.
- [ ] Component has configurable content, theme tokens, keyboard/focus states and accessible labels.
- [ ] No unapproved analytics, trackers, external scripts, secrets or remote API dependence.
- [ ] Unit/demo tests and visual screenshots at mobile/tablet/desktop widths; known limitations recorded.
- [ ] Approval status marked Candidate / Tested / Approved / Deprecated; reuse only Approved components.

## Existing website build gates — reinforce, never downgrade
- [ ] Start with verified business details and category-appropriate content and imagery.
- [ ] Confirm all services, hours, location, phone, email, pricing and claims against supplied or public facts.
- [ ] Use visually varied, industry-specific photography; confirm every image URL loads, is correctly licensed, and no inappropriate duplicates or missing assets exist.
- [ ] Ensure intentional page design, consistent section theme/backgrounds, hierarchy, spacing, color and typography; avoid generic filler and accidental contrasting blocks.
- [ ] Validate every navigation item, CTA, form, tap-to-call, email, map and outbound link, including success and error paths.
- [ ] Test 320px, 375px, 768px and 1440px layouts for overflow, cropping, contrast, typography and tap-target usability.
- [ ] Verify keyboard-only navigation, visible focus, accessible names, labels, alt text, reduced-motion handling and contrast; aim for WCAG 2.2 AA.
- [ ] Check mobile performance, image optimization, lazy loading, console errors, broken links and script failures. Measure when possible; never report unperformed tests as passed.
- [ ] Verify metadata, title, description, social preview, business contact information and appropriate indexing behavior.
- [ ] Verify no real customer data, keys, passwords, private data or incorrect demo claims enter public pages or repositories.
- [ ] Verify static-site compatibility with GitHub Pages, relative paths, deployment branch and mobile/desktop preview; don't change DNS or production without approval.
- [ ] Preserve functional behavior and perform regression checks before/after component changes.

## First candidate: 21st.dev `CtaSection1`
Original React code imports `@/components/ui/button`, `lucide-react`, and a missing `@/components/ui/cta-section-1-utils/tagline`; it also uses app-specific CSS utilities: `section-padding-y`, `container-padding-x`, `section-title-gap-lg`, `heading-lg`. Its button lacks a destination/action. The provided demonstration needs no Unsplash image.

For the static-site version, implement a semantic `section`, heading and descriptive copy, a real anchor CTA with configurable `href`, local theme CSS variables, a simple inline decorative arrow if desired, and no build/runtime dependencies. Do not claim React source is portable without conversion.

## Evidence required at final QC
For each applicable check, record **PASS / FAIL / NOT TESTED / NOT APPLICABLE**, how it was tested, and any screenshot/console/URL evidence. Block launch on unresolved functional, security, content-truth, or major accessibility failures. A passing test count alone does not substitute for visual inspection.

## Rollout
1. Keep this addendum on a review branch until approved against the canonical QC policy (if held in another repository or path).
2. Pilot one disposable demo with an approved component.
3. Compare visual quality, accessibility, responsiveness and performance against an equivalent build without it.
4. Only after review, add catalog discovery guidance to individual projects; do not bulk-modify existing sites.
