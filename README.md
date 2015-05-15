# Ionic Material 
*Alpha version released April 21, 2015*
*Ask to be a collaborator.*

## API and Demo App (in-browser simulation)
http://ionicmaterial.com/demo/ (Use the ☰ menu for API sections)

Install via bower:
**bower install ionic-material**

# Quick Start
## Step 1: Install using [Bower](http://bower.io) 

```shell
 cd PROJECT_DIRECTORY_HERE
 bower install ionic-material
```

### Step 3: Add Ionic Material stylesheets and scripts
Add `ionic.material.min.css` and `ionic.material.min.js` to your `index.html`

```html 
    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="lib/ionic-material/ionic.material.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <script src="lib/ionic/js/ionic.bundle.js"></script>
    <script src="lib/ionic-material/ionic.material.min.js"></script>
```

### Step 2: Add `RobotoDraft` font (by **Google**)
CDN version:
```html
 <link href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500,700,400italic' rel='stylesheet' type='text/css'>
```

Using bower? check out [RobotoDraft by RaiButera on Github](https://github.com/raibutera/robotodraft) 

```shell
bower install robotodraft 
```

**using Sass?** instructions for [raibutera/robotodraft](https://github.com/raibutera/robotodraft) + scss:
```scss
$RobotoDraftFontPath: "../fonts"; // REMINDER: edit as appropriate!
$RobotoDraftFontName: "RobotoDraft";
$RobotoDraftFontVersion: "1.0.0";

@import "/PATH/TO/YOUR/PROJECT'S/bower_components/robotodraft/sass/robotodraft.scss";    // REMINDER: edit as appropriate!
```
**NB**: the above assumes you are using bower

4) you are all set to go! :thumbsup:

## Sample App
Ionic demo app "Thronester" is found within './demo' - You can also run 'index.html' locally to view in a webkit browser on a computer.

## Builds
Instructions:
- `npm install`
- `gulp build` (or `gulp style` for just the stylesheets)

Look at `gulpfile.js` for how the process works.

## Development 
TODO: Webpack builds

## Contributing
See our [CONTRIBUTING INSTRUCTIONS](./CONTRIBUTING.md)

## Website
[http://ionicmaterial.com/](http://ionicmaterial.com/)

## Where We're Going

1. Full UI Kit w/ dozens of templates for rapid application development. Inspired by amazing kits like: https://ui8.net/product/material-ui-kit.

2. Increase animation performance. We're really stretching the limits of hybrid app animations - if **you** have ideas on performance adjustments, we're all ears and would love the insight.

3. Port animate.js with bezier curve adjustments to match "authentic motion" spec of Material Design.

4. Bug fixes

I devote as much time as I can, but my full-time position will always rank first. This means community help is needed to guarantee the maturation of this project. You guys are awesome, and I am grateful for all the help/support. 

## About Ionic Material

Ionic material is aimed at being an extension library for the Ionic Framework, meaning you won't change the way you develop your Ionic hybrid apps to have them materialized. Ionic Material aims to integrate the best representations of Material Design into a single add-on library for Ionic Developers. With the Polymer Project, ngMaterial, and other open source projects arising, we aim to be actively engaged and aligned with these, and other, related projects.

As a 100% free open-source project, **developer participation is encouraged**, as much or little as possible.
