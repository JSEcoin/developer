<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent"></div>
				</div>

				<div id="JSED-sampleOutputContainer">
					<nav id="JSED-sampleOutput">
						<ul>
							<li :class="{active: codeBase === 'CURL'}">
								<router-link v-bind:to="`/samples/blockchain/#CURL`" tag="a" v-on:click.native="changeCode('CURL', 'bash');">
									CURL
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'NodeJS'}">
								<router-link v-bind:to="`/samples/blockchain/#NodeJS`" tag="a" v-on:click.native="changeCode('NodeJS', 'javascript');">
									Node JS
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'VanillaJS'}">
								<router-link v-bind:to="`/samples/blockchain/#VanillaJS`" tag="a" v-on:click.native="changeCode('VanillaJS', 'javascript');">
									Vanilla JS
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'JQuery'}">
								<router-link v-bind:to="`/samples/blockchain/#JQuery`" tag="a" v-on:click.native="changeCode('JQuery', 'javascript');">
									JQuery
								</router-link>							
							</li>
						</ul>
					</nav>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="GetCurrentBlock" id="GetCurrentBlock"></a>
						<h4>Current Block ID</h4>
						<p>
							Request the latest Block Number.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Get Current Block</h4>
					<div>
<pre v-highlightjs="getCurrentBlock[codeBase]"><code :class="lang">
</code></pre>
					</div>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="GetBlockByID" id="GetBlockByID"></a>
						<h4>Get Block</h4>
						<p>
							Return all information associated with a block.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Get Block By ID</h4>
					<div>
<pre v-highlightjs="getBlockByID[codeBase]"><code :class="lang">
</code></pre>
					</div>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="ViewLedger" id="ViewLedger"></a>
						<h4>Ledger</h4>
						<p>
							Return a list of User IDs and their JSE balance.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>View Ledger</h4>
					<div>
<pre v-highlightjs="viewLedger[codeBase]"><code :class="lang">
</code></pre>
					</div>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="CheckUserBalance" id="CheckUserBalance"></a>
						<h4>Check User Balance</h4>
						<p>
							Query the blockchain by either User ID or Public Key to return their JSE balance.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Check User Balance By ID</h4>
					<div>
<pre v-highlightjs="checkUserBalanceByID[codeBase]"><code :class="lang">
</code></pre>
					</div>

					<h4>Check User Balance By Public Key</h4>
					<div>
<pre v-highlightjs="checkUserBalanceByPublicKey[codeBase]"><code :class="lang">
</code></pre>
					</div>
				</div>
			</div>

		</article>
	</div>
</template>

<script>
export default {
	name: 'walletAPI',
	data() {
		return {
			lang: 'javascript',
			codeBase: 'CURL',
			getCurrentBlock: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/currentblockid/auth/" \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/currentblockid/auth/';

axios({
  method: 'GET',
  url: APIEndPoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API KEY',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
`,
				VanillaJS: `
const APIEndPoint = 'https://api.jsecoin.com/v1.7/currentblockid/auth/';

fetch(APIEndPoint, {
  cache: 'no-cache',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API Key'
  },
}).then((response) => {
  return response.json();
}).catch((error) => {
  console.error('Error:', error)
}).then((balance) => {
  console.log('Success:', balance);
});`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/currentblockid/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			getBlockByID: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/getblock/12345/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/getblock/12345/auth/';

axios({
  method: 'GET',
  url: APIEndPoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API KEY',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
`,
				VanillaJS: `
const APIEndPoint = 'https://api.jsecoin.com/v1.7/getblock/12345/auth/';

fetch(APIEndPoint, {
  cache: 'no-cache',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API Key'
  },
}).then((response) => {
  return response.json();
}).catch((error) => {
  console.error('Error:', error)
}).then((balance) => {
  console.log('Success:', balance);
});`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/getblock/12345/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			viewLedger: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/ledger/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/ledger/auth/';

axios({
  method: 'GET',
  url: APIEndPoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API KEY',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
`,
				VanillaJS: `
const APIEndPoint = 'https://api.jsecoin.com/v1.7/ledger/auth/';

fetch(APIEndPoint, {
  cache: 'no-cache',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API Key'
  },
}).then((response) => {
  return response.json();
}).catch((error) => {
  console.error('Error:', error)
}).then((balance) => {
  console.log('Success:', balance);
});`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/ledger/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			checkUserBalanceByID: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/checkuserid/123/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkuserid/123/auth/';

axios({
  method: 'GET',
  url: APIEndPoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API KEY',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
`,
				VanillaJS: `
const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkuserid/123/auth/';

fetch(APIEndPoint, {
  cache: 'no-cache',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API Key'
  },
}).then((response) => {
  return response.json();
}).catch((error) => {
  console.error('Error:', error)
}).then((balance) => {
  console.log('Success:', balance);
});`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/checkuserid/123/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			checkUserBalanceByPublicKey: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/checkpublickey/0463c009ecaba659607fe096d1364add223956e446e6f7ac9d2d5f326b03dac8b3a7dba1c200c3ba1946283869588924e749b55876c887a6c2d4d150716a01f194/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkpublickey/0463c009ecaba659607fe096d1364add223956e446e6f7ac9d2d5f326b03dac8b3a7dba1c200c3ba1946283869588924e749b55876c887a6c2d4d150716a01f194/auth/';

axios({
  method: 'GET',
  url: APIEndPoint,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API KEY',
  },
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
});
`,
				VanillaJS: `
const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkpublickey/0463c009ecaba659607fe096d1364add223956e446e6f7ac9d2d5f326b03dac8b3a7dba1c200c3ba1946283869588924e749b55876c887a6c2d4d150716a01f194/auth/';

fetch(APIEndPoint, {
  cache: 'no-cache',
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JSE API Key'
  },
}).then((response) => {
  return response.json();
}).catch((error) => {
  console.error('Error:', error)
}).then((balance) => {
  console.log('Success:', balance);
});`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/checkpublickey/0463c009ecaba659607fe096d1364add223956e446e6f7ac9d2d5f326b03dac8b3a7dba1c200c3ba1946283869588924e749b55876c887a6c2d4d150716a01f194/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
		};
	},
	methods: {
		changeCode(code, lang) {
			this.codeBase = code;
			this.lang = lang;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
