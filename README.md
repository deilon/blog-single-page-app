# Blog Single Page Application (Angular 8+)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

<br />
<br />

> ## **About**

<p>This web application is for my learning purposes, samples of use cases in angular. The goal of this app is to test the different approaches in angular specifically angular 8+</p>

<br/>
<br />
<br />

> ## **Prerequisites**

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

### Node.js
Angular requires Node.js version 10.9.0 or later.
* To check your version, run node -v in a terminal/console window.
* To get Node.js, go to nodejs.org.


### NPM package manager
Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.

This setup guide uses the npm client command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

<br />
<br />


>## Installation of the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:

```bash
npm install -g @angular/cli
```


<br />
<br />
<br />

> ## Installation of Blog Single Page App
Navigate to root folder and install node modules
```bash
npm install
``` 

I have also included extra packages to my app which is:
* lightslider (Jquery carousel slider)
* bootstrap
* jquery

```bash
npm install lightslider
npm install bootstrap
npm install jquery
```

After npm installation the newly installed libraries/packages must be included to **angular.json** file.

```typescript
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "node_modules/lightslider/dist/css/lightslider.css"
    "src/styles.css",
],
"scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/lightslider/dist/js/lightslider.js",
    "src/assets/js/slider.js"
]
```

<br />
<br />
<br />

> ## Running the app
To run the app go to root directory and run the angular cli command:
```bash
ng serve
```
Open project on your web browser **localhost:4200**

<br />
<br />

## Credits 

**MIT** &copy; Deilon Cutamora 
