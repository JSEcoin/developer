<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Overview" id="Overview"></a>
						<h1>Overview</h1>
						
						<p>
							JSECoin provides a simple REST API that allows you to integrate into your apps.<br />
							As part of this; we have provided example integrations and an overview on the API and it's capabilities.
						</p>
						
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Authentication" id="Authentication"></a>
						<h1>Authentication</h1>
						
						<p>
							This API currently only supports API Key authentication allowing you to access your own account.
						</p>
						<p class="infoMsg">
							<b>oAuth2:</b> We are actively working on oAuth2 support to allow you to easily build applications for JSECoin Users
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						
						<a name="APIKey" id="APIKey"></a>
						<h2>API Key</h2>
						
						<p>
							All endpoint requests require an 'Authorization' header to be sent along with your JSE API Key as part of a request.
						</p>
						<p class="infoMsg">
							<b>Note:</b> You should never request or store an API key from other JSECoin users.
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="APIInteractions" id="APIInteractions"></a>
						<h1>API Interactions</h1>

						<a name="StatusCodes" id="StatusCodes"></a>
						<h2>Status Codes</h2>
						
						<ul>
							<li><b>200</b> OK Successful request</li>
							<li><b>201</b> Created New object saved</li>
							<li><b>204</b> No content Object deleted</li>
							<li><b>400</b> Bad Request Returns JSON with the error message</li>
							<li><b>401</b> Unauthorized Couldn’t authenticate your request</li>
							<li><b>402</b> 2FA Token required Re-try request with user’s 2FA token as CB-2FA-Token header</li>
							<li><b>403</b> Invalid scope User hasn’t authorized necessary scope</li>
							<li><b>404</b> Not Found No such object</li>
							<li><b>429</b> Too Many Requests Your connection is being rate limited</li>
							<li><b>500</b> Internal Server Error Something went wrong</li>
							<li><b>503</b> Service Unavailable Your connection is being throttled or the service is down for maintenance</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Requests" id="Requests"></a>
						<h2>Making requests</h2>
						
						<p>
							JSECoin API implements following HTTP verbs:
						</p>
						<ul>
							<li><b>GET</b> - Read resources</li>
							<li><b>POST</b> - Create new resources</li>
							<li><b>PUT</b> - Modify existing resources</li>
							<li><b>DELETE</b> - Remove resources</li>
						</ul>
						
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="CORS" id="CORS"></a>
						<h2>Cross Origin Resource Sharing (CORS)</h2>
						
						<p>
							JSECoin API supports cross-origin HTTPS requests.<br />
							This means that you can call API resources using Javascript from any browser. 
						</p>
						
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Pagination" id="Pagination"></a>
						<h2>Pagination</h2>
						
						<p>
							Default limit is set to 25.
						</p>
						<p class="infoMsg">
							We are hoping to get this released shortly.
						</p>
						
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Errors" id="Errors"></a>
						<h2>Errors</h2>
						
						<p>
							A <b>400</b> status code error in JSON format is returned when the validation of the resource fails on a request.<br />
							A <b>401</b> status code error in JSON format is returned when the JSE API Key is invalid.
						</p>
					</div>
				</div>
				<div class="apiSample">
					<h4>Example Error Response</h4>
<pre v-highlightjs><code :class="JSON">
{
  "fail": 1, 
  "notification": "Check the API documentation at https://developer.jsecoin.com/ and get your api key from the platform at https://platform.jsecoin.com"
}
</code></pre>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="RateLimiting" id="RateLimiting"></a>
						<h2>Rate limiting</h2>
						
						<p>
							The JSECoin API is rate limited to prevent abuse that would degrade our ability to maintain 
							consistent API performance for all users. By default, each API key or app is rate limited at 
							500 queries per 15 minute period. If your requests are being rate limited, HTTP response 
							code 429 will be returned.
						</p>
						<p class="infoMsg">
							If your application requires higher rate limits, please let us know.
						</p>						
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
			lang: 'JavaScript',
			codeBase: 'CURL',
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
