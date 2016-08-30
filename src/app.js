
import routing from './app.config';
import center from './center';
import ps from './ps';


module.exports = angular.module('app', [center,ps])
	.config(routing);
