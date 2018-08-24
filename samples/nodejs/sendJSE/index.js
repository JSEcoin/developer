const axios = require('axios');

const APIEndPoint ='https://api.jsecoin.com/v1.7/balance/server/0/';

axios({
	method: 'GET',
	url: APIEndPoint,
	headers: {
		'Content-Type': 'application/json',
		'Authorization': 'pSU6viDX94MXUPDGzm58OFoij92SLmnr',
	},
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
