# Ionic Material

[![Join the chat at https://gitter.im/zachsoft/Ionic-Material](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/zachsoft/Ionic-Material?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Ionic Framework ♥ Material Design

#### NB: all versions pre-1.0 are intended as a work in progress 'Alpha'
[![GitHub version](https://badge.fury.io/gh/zachsoft%2Fionic-material.svg)](http://badge.fury.io/gh/zachsoft%2Fionic-material)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

See our [releases](https://github.com/zachsoft/ionic-material/releases) and other [versions](https://github.com/zachsoft/ionic-material/tags)

## Demo and Documentation
### Codepen
- [Codepen by @raibutera](http://codepen.io/Rai/pen/rVjzoX?)

### Documentation
- [Documentation Application by @zachsoft @ ionicmaterial.com](http://ionicmaterial.com/demo/) 
(Use the ☰ menu for Documentation sections)

- [Ionic Material on Readme.io (REALLY WIP)](http://ionicmaterial.readme.io/v0.3)

<small> **NB:** Note: It is recommended that when creating an issue, you demonstrate the problem by forking the codepen.</small>

# Quick Start
## Step 1: Install using [Bower](http://bower.io) 

```shell
 cd /PATH/TO/YOUR/PROJECT
 bower install ionic-material
```

### Step 2: Add `RobotoDraft` font (by **Google**)
#### Via CDN:
```html
 <link href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic' rel='stylesheet' type='text/css'>
```

#### via Bower 
Check out [RobotoDraft by RaiButera on Github](https://github.com/raibutera/robotodraft) 

```shell
bower install robotodraft 
```

**using Sass?** instructions for [raibutera/robotodraft](https://github.com/raibutera/robotodraft) + scss:

```scss
$RobotoDraftFontPath: "../fonts"; // REMINDER: edit as appropriate!
$RobotoDraftFontName: "RobotoDraft";
$RobotoDraftFontVersion: "1.0.0";

@import "/PATH/TO/YOUR/PROJECT/bower_components/robotodraft/sass/robotodraft.scss";    // REMINDER: edit as appropriate!
```
**NB**: the above assumes you are using [Bower](http://bower.io)

### Step 3: Add Ionic Material stylesheets and scripts
Add `ionic.material.min.css` and `ionic.material.min.js` to your `index.html`

```html 
    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="lib/ionic-material/dist/ionic.material.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <script src="lib/ionic/js/ionic.bundle.js"></script>
    <script src="lib/ionic-material/dist/ionic.material.min.js"></script>
```

### Step 4: Inject Ionic & Ionic Material into your Ionic App 

```javascript
    var app = angular.module('YOUR_APP_NAME', ['ionic', 'ionic-material']);
```

### Step 5: Where appropriate, inject *ionicMaterialInk* and/or *ionicMaterialMotion*

The angular services `ionicMaterialInk` and `ionicMaterialMotion` are used to activate animations.

**You are all set to go!** :thumbsup:

### Activating Animations

**NB:** Make sure the relevant services are injected into your controllers.

In your controllers: 
- `ionicMaterialInk.displayEffect()` (will need to happen once on controller activation and then repeat every time the objects update)
- `ionicMaterialMotion.ripple()` (etc.)

## Sample App
Ionic demo app "Thronester" is found within './demo' - You can also run 'index.html' locally to view in a webkit browser on a computer.

## Builds
Instructions:
- `npm install`
- `gulp build` (or `gulp style` for just the stylesheets)

Look at `gulpfile.js` for how the process works.

## Development 
This project uses [Webpack](http://webpack.github.io/)

## Contributing
See our [CONTRIBUTING INSTRUCTIONS](./CONTRIBUTING.md)

## Website
[http://ionicmaterial.com/](http://ionicmaterial.com/)

## FAQ
### What is Ionic Material?
Ionic material is aimed at being an extension library for the Ionic Framework, meaning you won't change the way you develop your Ionic hybrid apps to have them materialized. Ionic Material aims to integrate the best representations of Material Design into a single add-on library for Ionic Developers. With the Polymer Project, ngMaterial, and other open source projects arising, we aim to be actively engaged and aligned with these, and other, related projects.

As a 100% free open-source project, **developer participation is encouraged**, as much or little as possible.

### Can I use Ionic and Angular Material together?
*Ionic* and *Angular Material* are fairly incompatible (you can add them to the same project, but the styling will be extremely inconsistent and none of the UI components will work cross-framework, eg. an ionic side menu with material tabs). Ionic is 1.0 and angular material is still pre-1.0. 

**Ionic Material** is best explained as a "material extension" to Ionic, rather than to Angular as a whole. The difference isn't just semantics - Ionic Material extends the actual ionic framework namespace (in JS), renders material styles on the ionic elements (following ionic's conventions), and will aim to follow the releases of Ionic, and support material theming, ink, and motion for any new Ionic release.

Ionic Material will pull in the best ideas of Angular Material, Paper/Polymer, etc. and by the same tune, Ionic Material will also abstract the parts of the framework that would be beneficial outside of ionic apps (like animations, motions) into their standalone git projects so they can be adopted for use in -any- web project that uses material design.

### How can I contribute?
Please see our [contribution guidelines](CONTRIBUTING.md)

Want to become an official collaborator? Please contact @zachsoft


## Roadmap and the Future 
See [Milestones](https://github.com/zachsoft/ionic-material/milestones)

### Rough Ideas
0. Complete implementation of Material Design specification.

1. Full UI Kit w/ dozens of templates for rapid application development. Inspired by amazing kits like: https://ui8.net/product/material-ui-kit.

2. Increase animation performance. We're really stretching the limits of hybrid app animations - if **you** have ideas on performance adjustments, we're all ears and would love the insight.

3. Port animate.js with bezier curve adjustments to match "authentic motion" spec of Material Design.

4. Bug fixes
