import $ from 'jquery'; 
export default class CenterController {
  constructor($http) {
    this.message = 'World';
    this.$http = $http;
  }

  changeName() {
    let list = [
      {a:3,b:7},
      {a:4,b:8},
      {a:5,b:9}
    ];
    let list2 = list.filter(item =>item.a==3 || item.b==9);
    console.log(list2);

    $("#ss").text("test jquery");

    this.message = 'angular-tips';
    this.$http.get("",{
    	
    });
  }
}
