import $ from 'jquery';

export default class DataPresentController {
	
	constructor(dataPresentService) {
		this.dataPresentService = dataPresentService;
		this.callresult = "not being called";
		this.default = "alert-warning";
	}


	testCallService(){ 
		this.callresult = "call controller success ," + this.dataPresentService.callTest();
		this.default = "alert-info";
	}

}
