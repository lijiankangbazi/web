/*jshint browser:true */
'use strict';  
// load dependencies
import './main';  
// load the main app file
import appModule from './app';  
// replaces ng-app="appName"
angular.element(document).ready(function () {  
  angular.bootstrap(document, [appModule.name], {
    //strictDi: true
  });
});