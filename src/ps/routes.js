routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
  .state('ps', {
      url: '/ps',
      template: require('./ps.html'),
      controller: 'PsController',
      controllerAs: 'ps'
    });
}
