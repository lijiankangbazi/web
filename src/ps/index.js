import routing from './routes';
import uirouter from 'angular-ui-router';
// import routing from './routes';
import PsCtrl from './psCtrl';

export default angular.module('app.ps', [uirouter])
  .config(routing)
  .controller('psCtrl', PsCtrl)
  .name;
