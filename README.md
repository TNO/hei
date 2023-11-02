# s

Web application to display human performance optimization technologies.

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

- [x] Add specific capabilities
- [x] Initialize similar technologies based on existing specific capabilities?
- [x] Add a page to compare technologies
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
- [x] Add bookmark to technology page (so you can bookmark it from there too)
- [x] Combine main capability with HPE category, e.g. MENTAL ENHANCEMENT
- [x] Add search filters
  - [x] Search box for keywords Technology title, specific capability, examples in practice and mechanism
  - [x] Main capability
  - [x] Specific capability.
  - [x] Technology category
  - [x] Invasiveness
  - [x] Booster
  - [x] Maturity (high, medium, low)
  - [x] Ethical considerations (only none, unknown en yes)
  - [x] Evidence direction
  - [x] Evidence quality
  - [x] Availability
  - [x] Bookmark (!!)
- [x] Warn when deleting a technology
- [x] First block is a description
- [x] De-duplicate technologies: Merge by title