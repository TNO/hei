# Database for Human Enhancement Interventions

Web application to display Human Enhancement Interventions Technologies.

## Development

Using `pnpm` or `npm`:

```bash
git clone https://github.com/TNO/hei.git
cd hei
pnpm i
npm start
```

## Installation

```bash
npm run build:domain
```

## TODO

- [ ] Add specific capabilities
- [ ] Initialize similar technologies based on existing specific capabilities?
- [ ] Add a page to compare technologies (
  - Category
	- Main capability + HPE classification (gecombineerd dus bv ‘Physical enhancement’)
	- Invasive
	- Maturity
	- Booster
	- Incubation
	- Effect duration
	- Side effects
	- Individual differences
	- Evidence direction
	- Evidence quality/score
	- Availability
- [ ] Add bookmark to technology page (so you can bookmark it from there too)
- [ ] Combine main capability with HPE category, e.g. MENTAL ENHANCEMENT
- [ ] Add search filters
  - [x] Zoekbox die keywords zoekt in alles wat nu in tabblad Technologies staat, Technology title, specific capability, examples in practice en mechanism (verander ‘Filter’ in ‘Search’)
  - [x] Main capability
  - [ ] Specific capability (als het mogelijk is automatisch de lijst inkorten o.b.v. geselecteerde Main capability), anders werken met koppen in de lijst.
  - [x] Technology category
  - [x] Invasiveness
  - [x] Booster
  - [x] Maturity (high, medium, low)
  - [ ] Ethical considerations (alleen none, unknown en yes)
  - [ ] Evidence direction
  - [ ] Evidence quality
  - [x] Availability
  - [x] Bookmark (!!)
- [ ] Warn when deleting a technology
- [x] First block is a description
- [x] De-duplicate technologies: Merge by title