/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */

const Bundler = require('parcel-bundler');
const Path = require('path');

// Single entrypoint file location:
const entryFiles = [
  Path.join(__dirname, '..', 'srcFront', 'index.html')
];
const OuputDir = Path.join(__dirname, '..', 'www');
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];
console.log(entryFiles);
console.log(OuputDir);

// Bundler options
const options = {
  outDir: OuputDir, // The out directory to put the build files in, defaults to dist
  // publicUrl: '/html/spinaltwin/', // The url to serve on, defaults to '/'
  watch: false, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: false, // Enabled or disables caching, defaults to true
  contentHash: false, // Disable content hash from being included on the filename
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
  target: 'browser', // Browser/node/electron, defaults to browser
  bundleNodeModules: true, // By default, package.json dependencies are not included when using 'node' or 'electron' with 'target' option above. Set to true to adds them to the bundle, false by default
  logLevel: 3, // 5 = save everything to a file, 4 = like 3, but with timestamps and additionally log http requests to dev server, 3 = log info, warnings & errors, 2 = log warnings & errors, 1 = log errors
  hmr: false, // Enable or disable HMR while watching
  presets: ['es2017'],
  runtimeCompiler: true,
  hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
  hmrHostname: '', // A hostname for hot module reload, default to ''
  detailedReport: false // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};
if (process.env.NODE_ENV === 'development') {
  console.log("development mode ON");
  options.watch = true;
  options.cache = true;
  options.cacheDir = Path.join(OuputDir, '.cache'); // The directory cache gets put in, defaults to .cache
  options.hmr = true;
}

const bundler = new Bundler(entryFiles, options);
module.exports = { bundler };

// (async function () {
//   // Initializes a bundler using the entrypoint location and options provided
//   const bundler = new Bundler(entryFiles, options);

//   // Run the bundler, this returns the main bundle
//   // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
//   // const bundle = await bundler.bundle();
//   const bundle = await bundler.serve();
// })();
