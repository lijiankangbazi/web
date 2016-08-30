import routing from './routes';
import uirouter from 'angular-ui-router';
// import routing from './routes';
import CenterController from './centerCtrl';

export default angular.module('app.center', [uirouter])
  .config(routing)
  .controller('centerCtrl', CenterController)
  .name;
