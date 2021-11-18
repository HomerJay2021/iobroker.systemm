'use strict';
const fetch = require('node-fetch');
let thisAdapter;
class systemmApi{
 constructor(inAdapter) {
		thisAdapter = inAdapter;
		thisAdapter.log.debug('Class smart M is ready to go');
	} 
  async Start(){
   const url = 'http://Master-Unit-7/api/v2/functiondata/groups?groups=DATEN_DISPLAY_BETREIBER';
	  thisAdapter.log.info('Try to load: ' + url);
		try{
			await fetch(url)
				.then((response) => {
					if(response.status == '204'){
						thisAdapter.log.debug('Login successfull');				
					} else {
						thisAdapter.log.debug('Loin failed' + JSON.stringify(response));	
						throw 'Login failed';
					}	
				
				});
		} catch(error){
			thisAdapter.log.error('Error: ' + error);
		} 
  }
  
}

module.exports = systemmApi;
