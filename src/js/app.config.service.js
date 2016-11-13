
import dataPresentService from './services/dataPresentService';
import changeLogService from './services/changeLogService';


module.exports = angular.module('services', [])
	.service('dataPresentService',dataPresentService)
	.service('changeLogService',changeLogService)
	.name;