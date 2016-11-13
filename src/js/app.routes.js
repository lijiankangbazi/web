routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];
export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

   $stateProvider
	  .state('datapresent', {
	      url: '/datapresent',
	      template: require('../partials/data_present.html'),
	      controller: 'dataPresentCtrl',
	      controllerAs: 'dataPresent'
	   }).state('changelog', {
	      url: '/changelog',
	      template: require('../partials/change_log.html'),
	      controller: 'changeLogCtrl',
	      controllerAs: 'changeLog'
	   });
}
