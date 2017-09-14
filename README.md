# GeekProfile

Write your profile in Markdown and publish it on GitHub Page.
- Demo: http://hackjutsu.com/geek-profile/


## Install dependencies

```bash
npm install
```


## Customize your Profile

- Customize your profile/CV/resume at `profile/src/index.md`.
- Put your customized CSS in `profile/src/css/site.css`.


## Build

```bash
npm run-script build
```
Static website will be generated at `profile/public`.


## Release

```bash
npm run-script release
```
Static website will be generated and moved to `./docs`.
Push this project to your GitHub repo's master branch and set `master branch /docs folder` as the GitHub Page source.



# License

[MIT @Raindeer44](./LICENSE)

Forked from [geek-profile by CosmoX](https://github.com/cosmox/geek-profile)
