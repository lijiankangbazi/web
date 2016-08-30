export default class CenterController {
  constructor($http) {
    this.message = 'World';
    this.$http = $http;
  }

  changeName() {
  	debugger;
    this.message = 'angular-tips';
    this.$http.get("",{
    	
    });
  }
}
