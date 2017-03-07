See https://github.com/aurelia/dialog/issues/257

Install using:

* `npm install`
* `jspm install`
* `typings install`

Build with: `gulp build` (or `gulp watch`)

Run with something like [live server](https://www.npmjs.com/package/live-server): `live-server public/`

See `src/app/view-models/index.ts`, line #19 vs #21.

Notes:

* Uses TypeScript 2.2.1
* Uses Gulp v4 (make sure that you have `gulp-cli` installed globally)
* Uses jspm 0.17.0-beta.40 (with systemjs v0.20.9)
