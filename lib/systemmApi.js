'use strict';
const fetch = require('node-fetch');
let thisAdapter;
class systemmApi{
 constructor(inAdapter) {
		thisAdapter = inAdapter;
		thisAdapter.log.debug('Class smart M is ready to go');
	} 
  async Start(host){
   const url = host;//'http://Master-Unit-7/api/v2/functiondata/groups?groups=DATEN_DISPLAY_BETREIBER';
	  thisAdapter.log.info('Try to load: ' + url);
		try{
			const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  
   
  });
		
				//.then((response) => {
					if(response.status == '200'){
						const data = response.clone().json().catch(() => response.text());
						thisAdapter.log.info('Login successfull' + response.json() + ' Status: ' + response.status + data.val);				
					} else {
						thisAdapter.log.info('Login failed' + response.json() + ' Status: ' + response.status );	
						throw 'Login failed';
					}	
				
				//});
		} catch(error){
			thisAdapter.log.error('Error: ' + error);
		} 
  }
  
}

module.exports = systemmApi;
