# hackathon

Remember, keep it simple!

We are using webpack and webpack-dev-server to bundle and run our development server. This has several benefits:
* Webpack bundles all our files, including compiling our Sass, into one bundle.js file
* Webpack watches all our files and automagically recompiles whenever there is a change in the Sass or Javascript
* We can use Commonjs style require (like in Node) in our Javascript to modularize our code
* Hot module reloading is a thing, making it so when you change Javascript or Sass, the browser refreshes automagically

Just make sure you have Node and NPM installed. If you don't already have them, get them from [the node website](https://nodejs.org/en/).

After cloning the repo, run

```
npm install
```

to install dependencies. You then can run 

```
npm run dev
```

to start the development server. You can then navigate your browser to `localhost:8080` and Webpack will take care of the rest!

## Explanation of npm scripts and packages

Here is a list of all the npm scripts you can run and what they do.

```
npm run build
```
This command will run `webpack` to combine all Javascript and Sass into one `bundle.js` file in the root of the project.

```
npm run dev
```
This command will run `webpack-dev-server`, which watches all your Javascript and Sass files, compiles them when there are changes, and serves your `index.html` file at `localhost:8080`. It will automatically refresh the browser when you make a change so you don't constantly have to hit the refresh button.

```
npm run add
```
This command stages `bundle.js` in git. You probably won't ever use this directly.

```
npm run precommit
```
This command does `run-s build add`. The `run-s` part comes from the NPM package `npm-run-all`, and runs the following commands sequentially. So, this does `npm run build`, and when it's done it runs `npm run add`. You probably won't ever use this command directly either. The NPM package Husky will run this automatically every time you commit.