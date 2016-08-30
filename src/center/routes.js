routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('center', {
      url: '/',
      template: require('./center.html'),
      controller: 'centerCtrl',
      controllerAs: 'center'
    });
}
