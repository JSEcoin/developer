<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
					<!--
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent"></div>
						</div>

						<nav id="JSED-sampleOutput">
							<ul>
								<li>CURL</li>
								<li>Node JS</li>
								<li>Vanilla JS</li>
								<li>JQuery</li>
							</ul>
						</nav>
					</div>-->



					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h1>Wallet API</h1>
								
								<p>
									Use the Wallet API to view transaction and platform mining history aswell as send, import or export JSE from an account.
								</p>
							</div>	
						</div>
					</div>

					<!-- BALANCE -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Balance" id="Balance"></a>
								<h2>Balance</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/balance/auth/<wbr>{:site_id or :sub_id}/</span>
								</div>
								
								<p>
									Returns a users balance. 
									Can also be used to look up the current balance for a site id or sub id. 
									This can be used with dynamic insertion of a subid to track earnings on a per visitor basis.
								</p>
							</div>
						</div>
					</div>

					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:site_id</code></b>
										<span class="type">string</span>
										<span class="">optional</span>
									</dt>
									<dd>
										The Site ID breakout of the balance earnt.
									</dd>
									<dt>
										<b><code>:sub_id</code></b>
										<span class="type">string</span>
										<span class="">optional</span>
									</dt>
									<dd>
										The Sub ID breakout of the balance earnt.
									</dd>
								</dl>

								
							</div>
						</div>

						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/balance/auth/0/ \
-H "Content-Type: application/json" \
-H "Authorization: JSE API Key"
</code></pre>
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/balance/auth/example.com/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows details for the balance account.
								</p>
								
							</div>
						</div>

						<div class="apiSample">
							<h4>Sample Response</h4>
<pre v-highlightjs><code class="json">
{
  "success": 1, 
  "notification": "Your balance is 99 JSE",
  "balance": 99
}
</code></pre>

						</div>
					</div>
					<!-- xBALANCE -->






					<!-- TRANSFER -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Transfer" id="Transfer"></a>
								<h2>Transfer</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/transfer/auth/<wbr>{:toEmailOrPublicKey}/<wbr>{:toAmount}/<wbr>{:toReference}/</span>
								</div>
								
								<p>
									Creates a transfer signed internally on the server.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:toEmailOrPublicKey</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										Email Address of Users Public Key to send too.
									</dd>
									<dt>
										<b><code>:toAmount</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										The amount of JSE to send.
									</dd>
									<dt>
										<b><code>:toReference</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										The reference note to attach.
									</dd>
								</dl>
							</div>
						</div>

						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/transfer/auth/charity@jsecoin.com/0.001/TestingTransfer/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows if the transfer successfully sent.
								</p>
							</div>
						</div>

						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1, 
  "notification": "Transfer Has Been Confirmed"
}
</code></pre>

						</div>
					</div>
					<!-- Transfer -->






					<!-- EXPORT -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Export" id="Export"></a>
								<h2>Export</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/export/auth/<wbr>{:exportAmount}/</span>
								</div>
								
								<p>
									Exports coin codes from your account.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:exportAmount</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										The amount to export.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/export/auth/0.001/ \
-H "Content-Type: application/json" \
-H "Authorization: JSE API Key"
</code></pre>
						</div>
					</div>

					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Response"></a>
								<h4>Response</h4>
								
								<p>
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows if the transfer successfully sent and a coin code to import the exported JSE.
								</p>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1,
  "coinCode": "43iDFSdXsdf8fsSDEFC9jf93qfjAf",
  "notification": "Export Successful"
}
</code></pre>

						</div>
					</div>
					<!-- xEXPORT -->





					<!-- IMPORT -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Import" id="Import"></a>
								<h2>Import</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/import/auth/<wbr>{:coinCode}/</span>
								</div>
								
								<p>
									Imports coin codes to your account.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:coinCode</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										The exported coin code used to import coins with.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/import/auth/fab6d9ea9b9896aa6a2833d7dbf5172e49345037b901033785f3cef23b29a47d/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows if the transfer successfully and total ammount of JSE Imported.
								</p>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1,
  "value": "0.003"
}
</code></pre>

						</div>
					</div>
					<!-- xIMPORT -->






					<!-- HISTORY -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="History" id="History"></a>
								<h2>History</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/history/auth/{:pageBy}/{:pageNo}/</span>
								</div>
								
								<p>
									Download account history including transfers, exports etc.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:pageBy</code></b>
										<span class="type">int</span>
										<span class="required">optional - requires :pageNo</span>
									</dt>
									<dd>
										Total results to page by.
									</dd>
									<dt>
										<b><code>:pageNo</code></b>
										<span class="type">int</span>
										<span class="required">optional - requires :pageBy</span>
									</dt>
									<dd>
										Page of results to display.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/history/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows if the transfer successfully and a list of transactions.
								</p>
								
								<dl>
									<dt>
										<b><code>history</code></b>
										<span class="type">object list</span>
									</dt>
									<dd>
										Contains a list of keys that contain a history of transactions against the account.
									</dd>
								</dl>


							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1,
  "history": {
    "-KwAMFQ7wY1H5rep7O99": {
      "coinCode": "9cdf7e9ca01924331c6a097eeab71903731dbasdf8ede1af308fe79f3c84941",
      "command": "import",
      "publicKey": "04f9126417e71a78e1863236416e41a416d823d36aa23140aaf74c07c8b172e79b639e5f2164a368a8698c5c5768af0967c987306c7e49415d66e0c05ef0d8eaf9",
      "ts": 1507724166853,
      "user1": 123,
      "value": 0.5
    },
    "-KwAMN2B6yvjA6-k0fYO": {
      "command": "transfer",
      "data": "{\"publicKey\":\"04f9126417e71a78e1863236416e41a416d823d36aa23140aaf74c07c8b172e79b639e5f2164a368a8698c5c5768af0967c987306c7e49415d66e0c05ef0d8eaf9\",\"toPublicKey\":\"045a0688dcaf1ca952b26895f3b885b398dd7318f71f306e4d519901c4c34f12486e46345b87f00de1e381729ecddc0ef9d05c0fd5d0a9d3d1b7b3ecb92df774be\",\"user1\":123,\"user2\":2895,\"command\":\"transfer\",\"value\":0.001,\"tid\":\"-KwAMMuKdv_67kklqYxj\",\"ts\":1507724197530}",
      "host": "::",
      "publicKey": "04f9126417e71a78e1863236416e41a416d823d36aa23140aaf74c07c8b172e79b639e5f2164a368a8698c5c5768af0967c987306c7e49415d66e0c05ef0d8eaf9",
      "received": 1507724198073,
      "reference": "testing",
      "signature": "3045022100d423c269b7b22eebf94447a69c92adf6f2a2ec30ccb3e89f689be4e885d5a5db02200aef856f47aa9b625d55ad496838c7afed27b5c79f74a2241305ada7e4506513",
      "tid": "-KwAMMuKdv_67kklqYxj",
      "toPublicKey": "045a0688dcaf1ca952b26895f3b885b398dd7318f71f306e4d519901c4c34f12486e46345b87f00de1e381729ecddc0ef9d05c0fd5d0a9d3d1b7b3ecb92df774be",
      "ts": 1507724197530,
      "user1": 123,
      "user1email": "user@myemail.com",
      "user2": 2895,
      "user2email": "charity@jsecoin.com",
      "value": -0.001
    }
  }
}
</code></pre>

						</div>
					</div>
					<!-- xHISTORY -->





					<!-- MINING -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Mining" id="Mining"></a>
								<h2>Mining</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/mining/auth/{:pageBy}/{:pageNo}/</span>
								</div>
								
								<p>
									Contains a list of up to 30 mining transactions.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h4>Path Params</h4>
								
								<dl>
									<dt>
										<b><code>:pageBy</code></b>
										<span class="type">int</span>
										<span class="required">optional - requires :pageNo</span>
									</dt>
									<dd>
										Total results to page by.
									</dd>
									<dt>
										<b><code>:pageNo</code></b>
										<span class="type">int</span>
										<span class="required">optional - requires :pageBy</span>
									</dt>
									<dd>
										Page of results to display.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/mining/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body that shows last 25 transactions for both self and publisher mining.
								</p>
								
								<dl>
									<dt>
										<b><code>mining</code></b>
										<span class="type">object list</span>
									</dt>
									<dd>
										Contains a list of upto 25 keys that contain a history of JSE mined on the account.
									</dd>
								</dl>


							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1,
  "mining": {
    "-L1-JPvTF11_ni2n5qvK": {
      "command": "mining",
      "siteid": "Platform Mining",
      "ts": 1513981324982,
      "user1": 185,
      "value": 0.005
    },
    "-L1-Kmpc-nXOK0v4JsTL": {
      "command": "mining",
      "siteid": "Platform Mining",
      "ts": 1513981685050,
      "user1": 185,
      "value": 0.005
    },
    "-L12PD73i7mplQV3BK90": {
      "command": "mining",
      "siteid": "Platform Mining",
      "ts": 1514033177058,
      "user1": 185,
      "value": 0.005
    }
  }
}
</code></pre>

						</div>
					</div>
					<!-- xMINING -->
		</article>
	</div>
</template>

<script>
export default {
  name: 'walletAPI',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
