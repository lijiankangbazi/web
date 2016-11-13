import routing from './app.routes';
import uirouter from 'angular-ui-router';

import dataPresentCtrl from './controllers/dataPresentCtrl';
import changeLogCtrl from './controllers/changeLogCtrl';
import services from './app.config.service';

module.exports = angular.module('app', [uirouter,services])
	.config(routing)
  	.controller('dataPresentCtrl', dataPresentCtrl)
  	.controller('changeLogCtrl', changeLogCtrl);
