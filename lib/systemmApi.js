'use strict';
const fetch = require('node-fetch');
let thisAdapter;
class systemmApi{
 constructor(inAdapter) {
		thisAdapter = inAdapter;
		thisAdapter.log.debug('Class gardenaApiConnector is ready to go');
	} 
  async Start(){
   const url = 'http://master-unit';
		try{
			await fetch(url,
				{
					method: 'GET',
				  cache: 'no-cache',
					
					responseType: 'json'
				})
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
