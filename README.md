gulp-static-seed
---

> Compact project seed using gulp to create static sites with components


## Why?

Mainly because [gulp](http://gulpjs.com/) is great!

❤ Streams ❤

Gulp is a build tool that works by piping source files through transformation streams to produce built files. It generally works concurrently and this means it’s quick, with a little extra effort it can be nice and efficient too. It prefers code-over-configuration so it feels natural for developers and is super flexible.


## The Seed

* Basic project layout encourages the use of components.
* Whilst part of the scaffold is labelled `pages` nothing is stopping you writing a single page app—it’s only a start point after all.
* Uses [less](http://lesscss.org/) for styling.
* Uses [hogan](http://twitter.github.io/hogan.js/) for templating.
* Incorporates [bower](http://bower.io/) into the scaffolding.
* Adds a watch task and live reload server to let you develop super-quick.


## Installation

```
git clone git@github.com:mattstyles/gulp-static-seed.git project-name
cd project-name
rm -rf .git
npm install
gulp watch -o
```


## Did you say components?

See the wiki.


## Gulpfile

### Build

Output goes to `/dist/`.

```
gulp
```

To add a production flag use `-p`,

```
gulp -p
```

To run a dev build (unminified) `-d`,

```
gulp watch -d
```

### Bump

To bump a patch version use,

```
gulp bump
```

or specify a version

```
gulp bump -b 0.2.7
```

### Watch Task

```
gulp watch
```

To open a file use `-o`.
Specify the filepath relative to the built `/dist/` directory.
Will default to opening `/dist/index.html`.

```
gulp watch -o filename
```

To expose a watch build to the network use `-e`,

```
gulp watch -oe
```

To work on individual pages you’ll want a dev build,

```
gulp watch -d -o filename
```


## Project Scaffold

`/build/` - contains additional gulp-tasks and build meta

`/src/pages/` - individual page templates

`/src/components/` - template/less/js for each component

`/src/core/` - assets/less/js for core functionality

`/dist/` - the built bundle of pages
