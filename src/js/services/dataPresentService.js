export default class DataPresentService {
    constructor($http) {
    	this.$http = $http;

    }

    callTest(){
    	return "call service success";
    }
}
