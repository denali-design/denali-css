# Denali CSS Library

![version](https://img.shields.io/badge/version-0.4.3-blue.svg) [![slack](https://img.shields.io/badge/slack-Denali-3570f4.svg)](https://denali-design.slack.com/app_redirect?channel=general)
<!-- ![npm](https://img.shields.io/badge/npm-1.2.3-red.svg) -->
<!-- ![build](https://img.shields.io/badge/build-1.2.3-brightgreen.svg) -->

## Table of contents
- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Browser support](#browser-support)
- [Versioning](#versioning)
- [Contribute](#contribute)
- [License](#license)

---

## Background
The Denali System Language was created by the Platforms and Technology Design team at Verizon Media as a scalable method for designing and developing visually consistent and functional internal products. Denali’s CSS framework allows developers to implement the Denali System Language in their projects. The framework is lightweight and flexible. It supports theming through custom variables which means the visual appearance of Denali’s components can be easily adapted to fit the visual style of any brand. Additionally, components are framework independent allowing you to take what you need and leave the rest.

You can view the Denali’s entire component library complete with corresponding code snippets and documentation on the [getting started page](https://denali-design.github.io/denali-site/documentation/get-started).

## Install

#### Prerequisites
You will need the following installed to run the site:

1. [Node](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)
3. [Ruby](https://www.ruby-lang.org/)
4. [Sass](http://compass-style.org/)
5. [Gulp](https://gulpjs.com/)

> Note: This guide assumes you have the prerequisites installed locally and will not go over install instructions for them. Refer to their websites for guidance if necessary.

#### Generating Icon Font
After all prerequisites are installed follow these instructions to run a local version of this repository.

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

#### Usage

To spin up local server to view demo files use the command below. This will also watch the SCSS files for any changes and will output a CSS file in the dist/css folder. After you should be prompted with a success message with the localhost url available to view.

```
gulp serve
```

## Browser Support
-  **Chrome** on Android, Windows, macOS, and Linux
-  **Firefox** on Windows, macOS, and Linux
-  **Safari** on iOS and macOS

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the tags on this [repository](https://github.com/denali-design/denali-css/tags).

## Contribute
To start contributing to Denali, have a look at our guidelines, as well as pointers on where to start making changes, in our [contributing guide](CONTRIBUTE.md).

## Maintainers
- **Jay Torres** | *Dir Product Design for Core Platforms* (torresr@verizonmedia.com)
- **Chris Esler** | *Principle Software Dev Engineer* (cesler@verizonmedia.com)
- **Chas Turansky** | *Product Designer & Front-End Dev* (cturansky@verizonmedia.com)
- **Jazmin Orozco** | *Product Designer* (jorozco@verizonmedia.com)
- **Marco Sandoval** | *Product Designer* (msandoval@verizonmedia.com)

## License
Code licensed under the MIT license. See [LICENSE file](LICENESE.md) for terms.
