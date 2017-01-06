// load main.scss file
require("./src/assets/sass/main.sass");


// load all .js file from modules
var reqModuleJS = require.context("./src/modules", true, /^(.*\.(js$))[^.]*$/igm);
reqModuleJS.keys().forEach(function (key) {
    reqModuleJS(key);
});
// load all .js file from shared
var reqSharedJS = require.context("./src/shared", true, /^(.*\.(js$))[^.]*$/igm);
reqSharedJS.keys().forEach(function (key) {
    reqSharedJS(key);
});
// load all .js file from services
var reqServicesJS = require.context("./src/services", true, /^(.*\.(js$))[^.]*$/igm);
reqServicesJS.keys().forEach(function (key) {
    reqServicesJS(key);
});

//load angular app
require('./src/app');