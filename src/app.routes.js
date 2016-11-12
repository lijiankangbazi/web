routing.$inject = ['$urlRouterProvider', '$locationProvider','$stateProvider'];
export default function routing($urlRouterProvider, $locationProvider,$stateProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

   $stateProvider
	  .state('ps', {
	      url: '/ps',
	      template: require('./partials/ps/ps.html'),
	      controller: 'psCtrl',
	      controllerAs: 'ps'
	   }).state('center', {
	      url: '/',
	      template: require('./partials/center/center.html'),
	      controller: 'centerCtrl',
	      controllerAs: 'center'
	    });
}
