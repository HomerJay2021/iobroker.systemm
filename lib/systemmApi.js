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
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
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
