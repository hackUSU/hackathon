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

__NOTE:__

Before you commit any code, make sure you run

```
npm run build
```

to finalize changes. This step is necessary because the Webpack dev server builds in memory, saving tons of time by not going back and forth to disc.
