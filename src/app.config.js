import ps from './controllers/ps/psCtrl';
import center from './controllers/center/centerCtrl';
import routing from './app.routes';
import uirouter from 'angular-ui-router';
module.exports = angular.module('app', [uirouter])
	.config(routing)
  	.controller('psCtrl', ps)
  	.controller('centerCtrl', center);
