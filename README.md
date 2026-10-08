# DevX

Public site for [DevX Solution](https://devxsolution.online), an early-stage studio building DevX.

DevX is a hosted workspace for software teams. It prepares a pull-request brief, answers questions about a connected repository, and drafts a changelog line from the change. The product is in early access.

Contact: [contact@devxsolution.online](mailto:contact@devxsolution.online)

## Preview

Open `index.html` in a browser. There is no build step.

## Put it on devxsolution.online

The contact address is already on this domain. If email routing is on Cloudflare, keep the nameservers there and attach the site as a Cloudflare Pages project:

1. Create a Pages project from this repository.
2. Leave the build command empty and set the output directory to `/`.
3. Add the custom domain `devxsolution.online`.

GitHub Pages works too. This folder includes a `CNAME` file. Point the apex at GitHub with these A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Point `www` at `<github-user>.github.io`.
