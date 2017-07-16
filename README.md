# README #

q-ui is a foundation for my client-side web applications. It's implemented using modern technologies such as
ES6, [React](https://github.com/facebook/react)
and [Redux](https://github.com/reactjs/redux),
[UIKit](https://github.com/uikit/uikit) for the UIs 
and [SASS](https://github.com/sass/sass) for styling.

## The goal ##

I have created this project in order to have a starting point for my apps. It always requires some time to setup all the
boilerplate for supporting some basic features (i18n, branding, specialized build
variants for mobile/desktop packages) that are typically not present
in any other React starter project. I am very fond of UIKit framework
which I prefer for creating visual components.

## Features ##
* Support for i18n (with [i18next](https://github.com/i18next/i18next)
and [react-i18next](https://github.com/i18next/react-i18next))
* Support for branded builds - using [preprocess](https://github.com/jsoverson/preprocess)
to determine which set
of styles is going to be built - nice when you create similar apps for different
clients.
* TODO: Build variants dependent on target device - very often mobile
 and desktop versions differ in functionality and it's better to have
 different builds for desktop and mobile - usually the mobile
 bundle could be significantly smaller which improves rendering time.

## Running the project ##
Run `npm install` to install all dependencies

### Runninng the project in dev mode ###
Run `npm start` to run the project in development mode with brand set to
_default_.

Run `npm start:some_brand` to run project with specific brand.


### Building production package ###
Run `npm run build` to build the app with default branding
or
run `npm run build:some_brand` to run the project with specific brand.

Serve dist folder on any server of your choice.

### Package size analysis ###
Use `npm run startAndAnalyzeBundle` and `npm run buildAndAnalyzeBundle` commands
which open your browser and display a graph showing you sizes of each
module in the bundle. Give all the credit to
[webpack-bundle-analyze](https://github.com/th0r/webpack-bundle-analyzer).

## Creating new brand ##
The project has only one _default_ brand.
In order to add a brand called eg. _new_brand_:
* copy ```styles/default``` to ```styles/new_brand```
* edit ```styles/new_brand/_variables.scss``` as you like
* add preprocessor condition in ```styles/_variables.scss``` to include
variables for your new brand:
```
/* @if BRAND='default' */
@import "./new_brand/variables";
/* @endif */
```
* Use preprocessor conditions in any js, jsx, scss, html file
If you want to determine which content is brand-specific.

## Contributing ##
PRs and suggestions are all welcome :D

## License ##
MIT