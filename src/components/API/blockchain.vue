<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<h1>Blockchain API</h1>
								
								<p>
									Use the Blockchain API to explore and navigate through the JSECoin Blockchain. 
								</p>
							</div>	
						</div>
					</div>

		<!-- CURRENT BLOCK ID -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="CurrentBlockID" id="CurrentBlockID"></a>
								<h2>Current Block ID</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/currentblockid/auth/</span>
								</div>
								
								<p>
									Returns the current block ID.
								</p>
							</div>
						</div>
					</div>
					
					<div class="section">
						<div class="apiOverview"></div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/currentblockid/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body and the current blockID.
								</p>

							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1, 
  "blockID": "72318"
}
</code></pre>

						</div>
					</div>
					<!-- xCURRENT BLOCK ID -->






					<!-- GET BLOCK -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="GetBlock" id="GetBlock"></a>
								<h2>Get Block</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/getblock/<wbr>{:blockNumber}/auth/</span>
								</div>
								
								<p>
									Returns the requested block at a given block number.
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
										<b><code>:blockNumber</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										Block number to lookup on the blockchain.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/getblock/12345/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body and all info from the block.
								</p>
								
								<dl>
									<dt>
										<b><code>block</code></b>
										<span class="type">object</span>
									</dt>
									<dd>
										Contains info on the block including all transactions.
									</dd>
									<dt>
										<b><code>block.input</code></b>
										<span class="type">object list</span>
									</dt>
									<dd>
										Contains a list of transaction associated with the block.
									</dd>
								</dl>

							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1,
  "block": {
    "blockID": 72138,
    "blockReference": 72,
    "difficulty": 5,
    "frequency": 30000,
    "hash": "0000000000241d254ec7c966e6e7d2af3f284b37e4dc0588e2c8a75d09e09305",
    "input": {
      "-Kx8IgbHold–5pFx94S": {
        "command": "mining",
        "user1": 1505,
        "value": 0.005
      },
      "-Kx8IjJs5tRmWE_-9V_E": {
        "command": "transfer",
        "data": "{\"publicKey\":\"05 35dd069b6e876a330b25f1035b332bc6b62d3bebc7ead0a11345d790fc3d3ba48a68f375440b3360eec7176a11b5cc5be0d56c70bc85c3bcc88808943e3fcb0\",\"toPublicKey\":\"0486000a3a4e53d662ae3a52784dd9d8782594da56e115de9906a8f2ad69939ce74a0fce700b228150d97ab2d93ec6e31557a0e5daa962eed0f8e5948468853efe\",\"command\":\"transfer\",\"value\":0.12,\"user1\":0,\"user2\":25012,\"ts\":1508763431737}",
        "hash": "a27e2826db85bf6a3f232thisisnttheactualhash0082642579c75131941ece2",
        "host": "::",
        "publicKey": "04d35dd069b6e876a440b25f1035b331bc6b62d3bebc7ead0a11345d790fc3d3ba48a68f375440b3360eec7176a11b5cc5be0d56c70bc85c3bcc88808943e3fcb0",
        "received": 1508763431744,
        "signature": "305502207c32bb17120f1notarealsignatured0e083103cc61587255f0220514b424baf9002df0bbfaeec2162fd378be297b0609ce831f56110518d34caf3",
        "toPublicKey": "0576000a3a4e53d662ae3a52784dd9d8782594da56e115de9906a8f2ad69939ce74a0fce700b228150d97ab2d93ec6e31557a0e5daa962eed0f8e5948468853efe",
        "ts": 1508763431737,
        "user1": 0,
        "user2": 25046,
        "value": 0.12
      }
    },
    "mainChain": true,
    "nonce": "1196562910",
    "open": false,
    "previousHash": "00000068c3cc6452af485bd573b8f1ce5a5efb2b206f93447668fc13302c2153",
    "server": "jsecoin",
    "startTime": 1508763420006,
    "version": "JSEcoin Controller v1.504"
  }
}
</code></pre>

						</div>
					</div>
					<!-- GET BLOCK -->






					<!-- LEDGER -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="Ledger" id="Ledger"></a>
								<h2>Ledger</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/ledger/auth/{:pageBy}/{:pageNo}/{:sortBy}/</span>
								</div>
								
								<p>
									Returns the public ledger which contains userID’s and their corresponding balances.
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
										<span class="optional">optional - requires :pageNo</span>
									</dt>
									<dd>
										Total results to page by.
										<br>
										Number of results per page.
									</dd>
									<dt>
										<b><code>:pageNo</code></b>
										<span class="type">int</span>
										<span class="optional">optional - requires :pageBy</span>
										<br>
										Page number i.e. pageBy = 50, pageNo = 3 will display results 100-150
									</dt>
									<dt>
										<b><code>sortBy</code></b>
										<span class="type">string</span>
										<span class="optional">optional - requires :pageBy &amp; :pageNo </span>
									</dt>
									<dd>
										If you need to sort the ledger you can use:
										<ul>
											<li><b>uidASC</b> - User ID ascending</li>
											<li><b>uidDESC</b> - User ID descending</li>
											<li><b>balanceASC</b> - Balance ascending</li>
											<li><b>balanceDESC</b> - Balance descending</li>
										</ul>
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/ledger/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body and all info from the block.
								</p>
								
								<dl>
									<dt>
										<b><code>ledger</code></b>
										<span class="type">object list</span>
									</dt>
									<dd>
										Contains a list of userID's keys and balance values. 
									</dd>
								</dl>

							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success":1, 
  "ledger": {
    "0": 969.3357, 
	"1": 105.3318,
	"2": 5.702, 
	"3": 106.29,
	"4": 29.44
	...
  }
}
</code></pre>

						</div>
					</div>
					<!-- xLEDGER -->






					<!-- CHECK USER ID -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="CheckUserID" id="CheckUserID"></a>
								<h2>Check User ID</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/checkuserid/<wbr>{:userid}/auth/</span>
								</div>
								
								<p>
									Returns the public key and balance of an associated user id.
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
										<b><code>:userid</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										Users ID to query against.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/checkuserid/123/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body and the user id, public key and their balance.
								</p>

							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
	"success": 1,
	"uid": 123,
	"publicKey": "0433936a1ce4a7412444aa5e759a65e48855353691dd35bcb2397f9e2644718e640eb1190a7cdbc6d00d66de664c443279cdb2cc53c3c94042cdccc32b804911a2",
	"balance": 33.205
}
</code></pre>

						</div>
					</div>
					<!-- xCHECK USER ID -->






					<!-- CHECK PUBLIC KEY -->
					<div class="section">
						<div class="apiOverview">
							<div class="apiOverviewContent">
								<a name="CheckPublicKey" id="CheckPublicKey"></a>
								<h2>Check Public Key</h2>
								
								<div class="verbpath">
									<span class="verb get">GET</span>
									<span class="path">/v1.7/checkpublickey/<wbr>{:publickey}/auth/</span>
								</div>
								
								<p>
									Returns the public key and balance of an associated user id.
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
										<b><code>:publickey</code></b>
										<span class="type">string</span>
										<span class="required">required</span>
									</dt>
									<dd>
										Users public key to query against.
									</dd>
								</dl>
							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Request</h4>
							
<pre v-highlightjs><code class="bash">
curl -v -X GET https://api.jsecoin.com/v1.7/checkpublickey/0463c009ecaba659607fe096d1364add223956e446e6f7ac9d2d5f326b03dac8b3a7dba1c200c3ba1946283869588924e749b55876c887a6c2d4d150716a01f194/auth/ \
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
									A successful request returns the HTTP 200 OK status code and a JSON response body and the user id, public key and their balance.
								</p>

							</div>
						</div>
						<div class="apiSample">
							<h4>Sample Response</h4>
							
<pre v-highlightjs><code class="json">
{
  "success": 1, 
  "uid": 5, 
  "publicKey": "0433936a1ce4a7412444aa5e759a65e48855353691dd35bcb2397f9e2644718e640eb1190a7cdbc6d00d66de664c443279cdb2cc53c3c94042cdccc32b804911a2", 
  "balance": 33.205
}
</code></pre>

						</div>
					</div>
					<!-- xCHECK PUBLIC KEY -->

		</article>
	</div>
</template>

<script>
export default {
  name: 'blockchainAPI',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
