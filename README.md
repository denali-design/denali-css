# Denali CSS Library

[![npm](https://img.shields.io/npm/v/denali-css?color=red)](https://www.npmjs.com/package/denali-css-theme)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/denali-design/denali-css)
[![slack](https://img.shields.io/badge/slack-Denali-3570f4.svg)](https://denali-design.slack.com/app_redirect?channel=general)
[![GitHub](https://img.shields.io/github/license/denali-design/denali-css)](https://github.com/denali-design/denali-css/blob/master/LICENSE.md)

## Table of contents
 
- [Denali CSS Library](#denali-css-library)
  - [Table of contents](#table-of-contents)
  - [Background](#background)
  - [Example Projects](#example-projects)
  - [Quick Install](#quick-install)
      - [Installation](#installation)
  - [Browser Support](#browser-support)
  - [Versioning](#versioning)
  - [Contribute](#contribute)
  - [Maintainers](#maintainers)
  - [License](#license)

---

## Background

Introducing Denali V3, a dynamic theme built upon the robust foundation of Daisy UI. By harnessing the power of Daisy UI, developers can effortlessly access the extensive range of components and utilities provided by TailwindCSS, resulting in unparalleled flexibility. Our primary objective is to foster seamless consistency between design and development, enabling a swift workflow and simplified maintenance. 

You can view [Daisy Ui Components](https://daisyui.com/components/) and all [TailwindCSS Utilities]( https://tailwindcss.com/)

## Example Projects
- [PostCSS Build](https://github.com/denali-design/denali-example-project)
- [TailwindCSS & LiveServer](https://github.com/denali-design/denali-example-project)


## Quick Install

#### Installation
1. Install TailwindCSS by running the following command:
```
npm install tailwindcss
```

2. Next up install Denali CSS Theme Package
```
npm install denail-css-theme
```

3. Now you will need to create a "tailwind.config.js" file in your main folder directory. Add the following:

```
module.exports = {
    presets:[
      require('denali-css-theme/tailwindcss.config.js')
    ],
    content: ['./public/*.html'],
  }
```
Modify content key to match your type of file format. This will be used to purge any unused styles.

4. Create am "app.css" in the same directory. Paste the following imports: 
```
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

5. If you already have a compiler setup use that or you can use TailwindCSS directly and live-server. You would run 

```
npm install 'npm-run-all';
```


And then update you package.json scripts with the following:


```
{
  "scripts": {
       "watch:css": "npx tailwindcss ./tailwind.config.js -i ./app.css -o public/output.css",
    "serve": "live-server ./public",
    "dev": "npm run watch:css & npm run serve",
    "all": "npm-run-all watch:css serve"
  },
}

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

- **Jon Kilroy** kilroy@yahooinc.com
- **Anusha Ganti** annapoorna.ganti@yahooinc.com
- **Trevor Greenleaf** trevor.greenleaf@yahooinc.com


## License

Code licensed under the MIT license. See [LICENSE file](https://github.com/denali-design/denali-css/blob/master/LICENSE.md) for terms.

