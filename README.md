# tools.georgemcintosh.com

A very simple static site — a little like Linktree, but a hand-picked
collection of sites and tools. Each entry has a name, a link and a
description.

## Adding a site

Edit [`links.js`](links.js) and add an entry to the `LINKS` array:

```js
{
  name: "My favourite tool",
  url: "https://example.com",
  description: "Why it's worth a look.",
}
```

Entries render top to bottom in the order listed. No build step — the page
reads the array directly.

## Local preview

It's plain HTML/CSS/JS, so open `index.html` in a browser, or serve the
folder:

```sh
python3 -m http.server
```

## Deployment

Pushes to `main` are deployed to GitHub Pages by the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The workflow
enables Pages (using GitHub Actions as the source) automatically on its first
run, so no manual Settings step is needed.

The custom domain `tools.georgemcintosh.com` is set via the [`CNAME`](CNAME)
file. Make sure DNS has a `CNAME` record for `tools` pointing at
`georgecodes.github.io`.
