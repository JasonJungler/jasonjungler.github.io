# Jason Chang — personal site

This is a static portfolio and writing site built with [Lume](https://lume.land/) and Deno.

## Local development

```sh
deno task serve
```

The site is available at `http://localhost:3000`. For a production build without starting a server:

```sh
deno task build
```

The generated site is written to `_site/`. `deno task check` runs a dry build for CI-style validation.

## Writing

Add Markdown posts under `src/blog/` with `layout: post.vto` front matter when publishing begins. The blog index and RSS endpoint are already in place.
