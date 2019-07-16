<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<h1>Enterprise API</h1>
						<p>
							Enterprise API's are premium services offered to all users. There is a cost associated with each request and billing is taken from the account from which the API key is derived.
						</p>
						<h3>IP Check</h3>
						<p>
							An API built for media buyers and merchants to provide IP based intelligence data.
						</p>
						<h3>Side-Chains</h3>
						<p>
							API built for SHA256 hash submission and verification in the JSE public blockchain. The tools provided enable private side-chains to be run in-house or by clients with data timestamped and verified in the public domain. This provides immutable data verification functionality for organisations wishing to leverage blockchain technology.
						</p>
					</div>	
				</div>
			</div>

		<!-- IPCheck -->
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="IPCheck" id="IPCheck"></a>
						<h2>IP Check</h2>
						<p>
							The IP Check API provides intelligence data on from the JSE network on an IP address. This is split into two forms a ipCheck which fails for VPN/Tor/Proxy IP addresses and a humanCheck which includes data from the JSE captcha solution.
						</p>
						<br>
						<div class="verbpath">
							<span class="verb get">GET</span>
							<span class="path">/enterprise/ipcheck/auth/:ipAddress/</span>
						</div>
						<p class="infoMsg">						
							<b>Current Pricing:</b> 1 JSE / Per Request<br>
							<i>*Enterprise API pricing may change without notification, please check regularly</i>
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Sample Request</h4>
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/enterprise/ipcheck/auth/34.5.1.44/ \
-H "Content-Type: application/json" \
-H "Authorization: JSE API Key"
</code></pre>
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<h4>Response</h4>
						<p>
							A successful request returns the HTTP 200 OK status code and a JSON response body including ipCheck (boolean) and humanCheck (int 0-99) fields.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Human Response</h4>
<pre v-highlightjs><code class="json">
{
"success": 1, 
"ipCheck": true,
"humanCheck": 99
}
</code></pre>
					<h4>Bot Response</h4>
<pre v-highlightjs><code class="json">
{
"success": 1, 
"ipCheck": false,
"humanCheck": 10
}
</code></pre>
				</div>
			</div>
			<!-- EO IPCheck -->


      
			<!-- SideChain -->
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="SideChain" id="SideChain"></a>
						<h2>Side-Chain Solutions</h2>
						<p>
							The SideChain API provides SHA256 hash submission and verification.
						</p>
						<br>
						<div class="verbpath enterprise-container">
							<span class="verb get">GET</span>
							<span class="path">/enterprise/sethash/auth/:hash/</span>
						</div>
						<p class="infoMsg">
							<b>Current Pricing:</b> 1 JSE / Per Request<br>
							<i>*Enterprise API pricing may change without notification, please check regularly</i>
						</p>
						<br><br><br><br>
						<div class="verbpath enterprise-container">
							<span class="verb get">GET</span>
							<span class="path">/enterprise/gethash/:hash/</span>
						</div>
						<p class="infoMsg">
							<b>Current Pricing:</b> Free, No API Key Required<br>
							<i>*Enterprise API pricing may change without notification, please check regularly</i>
						</p>
						<h3>Basic Example Generating SHA256 Hash</h3>
<pre v-highlightjs><code class="javascript enterprise-container">
const testData = 'hello world';
const buf = await crypto.subtle.digest("SHA-256", new TextEncoder("utf-8").encode(testData));
const hexHash = Array.prototype.map.call(new Uint8Array(buf), x=>(('00'+x.toString(16)).slice(-2))).join('');
const setHashURL = `https://api.jsecoin.com/enterprise/sethash/auth/${hexHash}/`;
</code></pre>
					</div>
				</div>

				<div class="apiSample">
					<h4>Sample sethash request</h4>
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/enterprise/sethash/auth/7FD4AD9D5E4E9823E67E105F645CEE4A40C4948CB1BA41B7DA2C2D1204B385A0/ \
-H "Content-Type: application/json" \
-H "Authorization: JSE API Key"
</code></pre>

					<h4>Sample gethash request</h4>
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/enterprise/gethash/7FD4AD9D5E4E9823E67E105F645CEE4A40C4948CB1BA41B7DA2C2D1204B385A0/ \
-H "Content-Type: application/json"
</code></pre>
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<h4>Response</h4>
						<p>
							A successful request returns the HTTP 200 OK status code and a JSON response body including ipCheck (boolean) and humanCheck (int 0-99) fields.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>SetHash Response</h4>
<pre v-highlightjs><code class="json">
{
"success": 1, 
"tx": "156323464962248028",
"hash": "7FD4AD9D5E4E9823E67E105F645CEE4A40C4948CB1BA41B7DA2C2D1204B385A0",
"ts": "1563234640341",
"blockID": 1057186
}
</code></pre>
					<h4>GetHash Response</h4>
<pre v-highlightjs><code class="json">
{
"success": 1, 
"data": [
	{ 
	"tx": "156323464962248028",
	"user1": 34636,
	"hash": "7FD4AD9D5E4E9823E67E105F645CEE4A40C4948CB1BA41B7DA2C2D1204B385A0",
	"ts": "1563234640341",
	"blockID": 1057186
	},
	{ 
	"tx": "1563234708912365267",
	"user1": 34636,
	"hash": "7FD4AD9D5E4E9823E67E105F645CEE4A40C4948CB1BA41B7DA2C2D1204B385A0",
	"ts": "1563234699886",
	"blockID": 1057188
	},
],
"hashes": 2,
"firstSeen": "1563234640341",
"lastSeen": "1563234699886"
}
</code></pre>
				</div>
			</div>
			<!-- EO SideChain -->




		</article>
	</div>
</template>

<script>
export default {
  name: 'enterpriseAPI',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.enterprise-container {
	max-width: 500px;
	overflow: auto;
}
</style>
