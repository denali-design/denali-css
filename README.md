# Denali CSS Library

[![npm](https://img.shields.io/npm/v/denali-css?color=red)](https://www.npmjs.com/package/denali-css)
[![Build Status][status-image]][status-url]
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/denali-design/denali-css)
[![slack](https://img.shields.io/badge/slack-Denali-3570f4.svg)](https://denali-design.slack.com/app_redirect?channel=general)
[![GitHub](https://img.shields.io/github/license/denali-design/denali-css)](https://github.com/denali-design/denali-css/blob/master/LICENSE.md)

## Table of contents
 
- [Background](#background)
- [Quick Start](#quick-start)
- [Install](#install)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [Contribute](#contribute)
- [License](#license)

---

## Background

The Denali System Language was created by the Platforms and Technology Design team at Yahoo as a scalable method for designing and developing visually consistent and functional internal products. Denali’s CSS framework allows developers to implement the Denali System Language in their projects. The framework is lightweight and flexible. It supports theming through custom variables which means the visual appearance of Denali’s components can be easily adapted to fit the visual style of any brand. Additionally, components are framework independent allowing you to take what you need and leave the rest.

You can view the Denali’s entire component library on [www.denali.design](https://denali.design/).


## Quick Start

Check out our [guide](https://denali-design.github.io/denali-css/?path=/story/get-started-installation--page).


## Install

#### Prerequisites

You will need the following installed to run the site:

1. [Node](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)
3. [Ruby](https://www.ruby-lang.org/)
4. [Dart Sass](http://compass-style.org/)

> Note: This guide assumes you have the prerequisites installed locally and will not go over install instructions for them. Refer to their websites for guidance if necessary.

#### Installation

Clone or download this repository.
```
denali-system-language/denali-css.git
```

Use any command line tool and navigate to where you downloaded the repository.
```
cd path-to-folder/denali-css
```

Use NPM to install packages.
```
npm install
```

###### Compile SCSS

Watch for SCSS changes
```
npm run sass-watch
```

Build SCSS minified files
```
npm run sass-build
```

###### Storybook Docs

To view storybook docs use the command below.
```
npm run storybook
```

###### SCSS & Storybook
To watch SCSS files and build storybook docs at the same time
```
npm run start
```


## Browser Support
Learn more about the browsers and devices we support [here](https://denali.design/browsers).
- **Chrome** on Android, Windows, macOS, and Linux
- **Firefox** on Windows, macOS, and Linux
- **Safari** on iOS and macOS


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this [repository](https://github.com/denali-design/denali-css/tags).


## Contribute

To start contributing to Denali, have a look at our guidelines, as well as pointers on where to start making changes, in our [contributing guide](https://github.com/denali-design/denali-css/blob/master/CONTRIBUTE.md).


## Maintainers

- **Chas Turansky** cturansky@yahooinc.com
- **Jon Kilroy** kilroy@yahooinc.com
- **Anusha Ganti** annapoorna.ganti@yahooinc.com
- **Trevor Greenleaf** trevor.greenleaf@yahooinc.com



## License

Code licensed under the MIT license. See [LICENSE file](https://github.com/denali-design/denali-css/blob/master/LICENSE.md) for terms.

[status-image]: https://cd.screwdriver.cd/pipelines/3067/badge
[status-url]: https://cd.screwdriver.cd/pipelines/3067
