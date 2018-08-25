<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
			<div class="section">
				
				<div class="apiOverview">
					<div class="apiOverviewContent">
					</div>
				</div>

				<div id="JSED-sampleOutputContainer">
					<nav id="JSED-sampleOutput">
						<ul>
							<li :class="{active: codeBase === 'CURL'}">
								<router-link v-bind:to="`/samples/wallet/#CURL`" tag="a" v-on:click.native="changeCode('CURL', 'bash');">
									CURL
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'NodeJS'}">
								<router-link v-bind:to="`/samples/wallet/#NodeJS`" tag="a" v-on:click.native="changeCode('NodeJS', 'javascript');">
									Node JS
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'VanillaJS'}">
								<router-link v-bind:to="`/samples/wallet/#VanillaJS`" tag="a" v-on:click.native="changeCode('VanillaJS', 'javascript');">
									Vanilla JS
								</router-link>							
							</li>
							<li :class="{active: codeBase === 'JQuery'}">
								<router-link v-bind:to="`/samples/wallet/#JQuery`" tag="a" v-on:click.native="changeCode('JQuery', 'javascript');">
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
						<a name="GetBalance" id="GetBalance"></a>
						<h4>Wrappers</h4>
						<p>
							We are putting together some sample wrapper examples:
							<ul>
								<li><a href="/static/wrappers/php/phpwrapper.zip">PHP</a></li>
								<li>More coming soon...</li>
							</ul>
						</p>
					</div>
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="GetBalance" id="GetBalance"></a>
						<h4>Balance</h4>
						<p>
							Retrieve your JSE account balance total or by website earnings.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Get Balance Total</h4>
					<div>
<pre v-highlightjs="getBalanceTotal[codeBase]"><code :class="lang">
</code></pre>
					</div>

					<h4>Get Balance By Site</h4>
					<div>
<pre v-highlightjs="getBalanceBySite[codeBase]"><code :class="lang">
</code></pre>
					</div>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="SendJSE" id="SendJSE"></a>
						<h4>Tranfer</h4>
						<p>
							How to send JSE to other users.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Send JSE</h4>
<pre v-highlightjs="sendJSE[codeBase]"><code :class="lang">
</code></pre>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="ExportCoinCode" id="ExportCoinCode"></a>
						<h4>Export</h4>
						<p>
							This will export JSE from your account and generate a JSE export code.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Export Coin Code</h4>
<pre v-highlightjs="exportCoinCode[codeBase]"><code :class="lang">
</code></pre>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="ImportCoinCode" id="ImportCoinCode"></a>
						<h4>Import</h4>
						<p>
							This will import a JSE export code and add the associated JSE to your account.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Import Coin Code</h4>
<pre v-highlightjs="importCoinCode[codeBase]"><code :class="lang">
</code></pre>
				</div>
			</div>


			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="HistoryTransactions" id="HistoryTransactions"></a>
						<h4>History</h4>
						<p>
							Return your JSE transaction history.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Get Latest List of Transactions</h4>
<pre v-highlightjs="historyTransations[codeBase]"><code :class="lang">
</code></pre>
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="MiningTransactions" id="MiningTransactions"></a>
						<h4>Mining</h4>
						<p>
							Return mining history capped at 30 transactions.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Get Latest List of Mining Transactions</h4>
<pre v-highlightjs="miningTransactions[codeBase]"><code :class="lang">
</code></pre>
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="CheckEmail" id="CheckEmail"></a>
						<h4>Check Email</h4>
						<p>
							Check if an email exists on the platform.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Email look up query</h4>
<pre v-highlightjs="checkEmail[codeBase]"><code :class="lang">
</code></pre>
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
			lang: 'JavaScript',
			codeBase: 'CURL',
			miningTransactions: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/mining/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/mining/auth/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/mining/auth/';

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
  url:'https://api.jsecoin.com/v1.7/mining/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			historyTransations: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/history/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/history/auth/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/history/auth/';

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
});
`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/history/auth/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			importCoinCode: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/import/auth/fab6d9ea9b9896aa6a2833d7dbf5172e49345037b901033785f3cef23b29a47d/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/import/auth/fab6d9ea9b9896aa6a2833d7dbf5172e49345037b901033785f3cef23b29a47d/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/import/auth/fab6d9ea9b9896aa6a2833d7dbf5172e49345037b901033785f3cef23b29a47d/';

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
});
`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/import/auth/fab6d9ea9b9896aa6a2833d7dbf5172e49345037b901033785f3cef23b29a47d/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			exportCoinCode: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/export/auth/0.001/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/export/auth/0.001/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/export/auth/0.001/';

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
});
`,
				JQuery: `
$.ajax({
  url:'https://api.jsecoin.com/v1.7/export/auth/0.001/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			sendJSE: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/transfer/auth/charity@jsecoin.com/0.001/DonatingToCharity/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/transfer/auth/charity@jsecoin.com/0.001/DonatingToCharity/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/transfer/auth/charity@jsecoin.com/0.001/DonatingToCharity/';

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
  url:'https://api.jsecoin.com/v1.7/transfer/auth/charity@jsecoin.com/0.001/DonatingToCharity/', 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(response) {
  console.log(response);
});
`,
			},
			getBalanceTotal: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/balance/auth/0/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint ='https://api.jsecoin.com/v1.7/balance/server/0/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/balance/auth/0/';

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
var APIEndPoint = 'https://api.jsecoin.com/v1.7/balance/auth/0/';

$.ajax({
  url: APIEndPoint, 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(balance) {
  console.log(balance);
});`,
			},
			getBalanceBySite: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/balance/auth/example.com/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/balance/auth/example.com/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/balance/auth/example.com/';

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
var APIEndPoint = 'https://api.jsecoin.com/v1.7/balance/auth/example.com/';

$.ajax({
  url: APIEndPoint, 
  headers: { 
    'Authorization': 'JSE API Key' 
  }, 
  type:'GET'
}).done(function(balance) {
  console.log(balance);
});`,
			},

			checkEmail: {
				CURL: `
curl -v -X GET https://api.jsecoin.com/v1.7/checkemail/test@jsecoin.com/auth/ \\
-H "Content-Type: application/json" \\
-H "Authorization: JSE API Key"
`,
				NodeJS: `
const axios = require('axios');

const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkemail/test@jsecoin.com/auth/';

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
const APIEndPoint = 'https://api.jsecoin.com/v1.7/checkemail/test@jsecoin.com/auth/';

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
  url:'https://api.jsecoin.com/v1.7/checkemail/test@jsecoin.com/auth/', 
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
