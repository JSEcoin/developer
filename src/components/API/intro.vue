<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-apiOverviewWrapper">
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Overview" id="Overview"></a>
						<h2>
							API Introduction
							<span>REST APIs</span>
						</h2>
						<p>
							The JSE Developer APIs are HTTP-based RESTful APIs. API request and response bodies are formatted in JSON.
						</p>
						<p>
							The API allows users to programmatically connect with the JSE Developer Platfom using their API key as a credential. 
						</p>
						<p class="infoMsg">
							<b>API Endpoint:</b> <a href="https://api.jsecoin.com" target="_BLANK">https://api.jsecoin.com</a><br> 
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="GettingStarted" id="GettingStarted"></a>
						<h2>
							Getting Started
						</h2>
						<p>
							<ol>
								<li>Log in to the platform <a href="https://platform.jsecoin.com/" class="infoMsg">https://platform.jsecoin.com/</a></li>
								<li>Select the <b class="infoMsg">Settings</b> page.</li>
								<li>Click the button saying <b class="infoMsg">Show API Key</b>.</li>
								<li>This will provide you with your API key - <b>keep this safe!</b></li>
							</ol>
						</p>
						<br />
						<p class="infoMsg">						
							<b>Important:</b> <i>Anyone who gets hold of your key will be able to access your account!</i>
						</p>
						<h3>Once you have your API key you need to set the API Access Level. </h3>
						<ol start="0">
							<li>Set as standard and is turned off, i.e. the API key wont work.</li>
							<li>Read access will enable you to get balances and access other private information such as Site ID's.</li>
							<li>
								Write access provides full control to export and transfer funds.<br />
								<b>Use with caution!</b>
							</li>
						</ol>
						<p class="infoMsg">
							<b>Note:</b> Rate limiting is set to 500 queries per 15 minute period.<br />
							If you start hitting limits and require more just let us know.
						</p>
						
						<p class="infoMsg">	
							<b>DO NOT</b> upload your software to GitHub or public repositories containing your API key.<br />
							You can set an environmental variable and access it from the server keeping the code clean.
						</p>
					</div>
				</div>
			</div>
			
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="APIKey" id="APIKey"></a>				
						<h2>
							Locating Your JSE API Key
						</h2>
						<p>
							Here is a quick guide; showing you where to get your JSE API Authorisation Key from and an example of using it to query the API to return some results:
						</p>
						<div style="text-align:center;">
							<iframe width="80%" style="min-height:300px;" src="https://www.youtube.com/embed/hyuONrMjygw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
						</div>
					</div>
				
				</div>
			</div>

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="RateLimiting" id="RateLimiting"></a>				
						<h2>
							Rate limiting
						</h2>
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

			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="MinerCode" id="MinerCode"></a>	
						<h2>
							Miner Code overview
						</h2>

						<p>
							Once you have registered your user on the JSE Platform - you can add your website(s) from the Publisher page and generate javascript code that can be used to monetise your site through mining the JSE Blockchain.
						</p>
						
						<p class="infoMsg">
							<b>Important:</b> Please do not add the code to an iframe as we have prohibited the use of iframes.
						</p>

						<br /><br />

						<div class="verbpath">
							<span class="verb get">SRC</span>
							<span class="path">https://load.jsecoin.com/load/<wbr>{:AccountNo}/<wbr>{:PublisherSite}/<wbr>{:optionalSubID}/0/</span>
						</div>

						<h3>Path Params</h3>
						
						<dl>
							<dt>
								<b><code>:AccountNo</code></b>
								<span class="type">string</span>
								<span class="required">required</span>
							</dt>
							<dd>
								Publishers Account Number.
							</dd>
							<dt>
								<b><code>:PublisherSite</code></b>
								<span class="type">int</span>
								<span class="required">required</span>
							</dt>
							<dd>
								Domain where script is located.
							</dd>
							<dt>
								<b><code>:optionalSubID</code></b>
								<span class="type">string</span>
								<span class="required">required</span>
							</dt>
							<dd>
								Used as a reference - defaults to 'optionalSubID'.
							</dd>
						</dl>
						<br /><br /><br /><br /><br />
					</div>
				</div>

				<div class="apiSample">
					<h4>Sample Generated Webmaster Code</h4>


<pre v-highlightjs><code class="html">
&lt;script&gt;
  !function(){
    var e=document,
	  t=e.createElement("script"),
	  s=e.getElementsByTagName("script")[0];

	t.type="text/javascript",
	t.async=t.defer=!0,
	t.src="https://load.jsecoin.com/load/2895/jsecoin.com/optionalSubID/0/",
	s.parentNode.insertBefore(t,s)
  }();
&lt;/script&gt;
</code></pre>
					<h4>Alternatively</h4>

<pre v-highlightjs><code class="html">
&lt;script src="https://load.jsecoin.com/load/2895/jsecoin.com/optionalSubID/0/" async defer&gt;&lt;/script&gt;
</code></pre>
				</div>
			</div>

			<!-- Captcha Code -->
			<div class="section">
				<div class="apiOverview">
					<div class="apiOverviewContent">
						<a name="Captcha" id="Captcha"></a>				
						<h2>
							Captcha
						</h2>
						<p>
							The JSE Captcha is a free to use bot prevention tool. It can be used to protect content and endpoints from automated requests.
						</p>
						<p>
							Setting up the captcha requires two parts, a code snippet on the web page and then a server-side verification check. A simple div element is placed in the HTML code for the web page. Standard CSS can be used to position as required. Then a external javascript call loads the code and renders the captcha inside the div.
						</p>
						<h5>Basic Client-Side Example (With Auto Center CSS)</h5>
						<p>
							The following example uses a inline css style tag to set center the captcha inside it's container. The style tag is not required but can be used to customise the captcha's placement as required.
						</p>
						<br>
						<div class="verbpath">
							<span class="verb get">SRC</span>
							<span class="path">
								&#x3C;div id=&#x22;JSE-captcha&#x22; style=&#x22;margin: 0px auto;&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;https://api.jsecoin.com/captcha/load/captcha.js&#x22;&#x3E;&#x3C;/script&#x3E;
							</span>
						</div>

						<h5>Server-side Verification</h5>
						<p>
							It is essential to check the captcha has been completed using server-side code to protect your endpoints. We do this using the clients IP address (IPV4) and the following URL:
						</p>
						<br>
						<div class="verbpath">
							<span class="verb get">SRC</span>
							<span class="path">
								https://api.jsecoin.com/captcha/check/:ipAddress/
							</span>
						</div>
						<p>
							Example JSON responses:
							<hr style="color: #EEE;">
							<div style="color: #C00;">
								{"success":1,"rating":0,"pass":false,"knownIP":false, "ip":"148.252.129.187"}
							</div>
							<hr style="color: #EEE;">
							<div style="color: #080;">
								{"success":1,"rating":87,"pass":true,"knownIP":true, "ip":"148.252.129.187"}
							</div>
							<hr style="color: #EEE;">
						</p>
						<h5>Optional Javascript Check</h5>
						<p>
							It is also possible to run a javascript check to see if the captcha has been completed. This can be useful from a UX perspective before submitting a form for example but should not be used for security purposes.
						</p>
						<p>
							The example below calls the JSECaptchaComplete function which is available globally and then fires the function name that is passed to it. In this example customFunction(); is called on the button click if the captcha has been completed. If not the captcha will simply flicker red a few times to prompt the user.
						</p>
						<br>
						<div class="verbpath">
							<span class="verb get">SRC</span>
							<span class="path">
								&#x3C;button onclick=&#x22;JSECaptchaComplete(&#x27;customFunction&#x27;);&#x22;&#x3E;Login&#x3C;/button&#x3E;
							</span>
						</div>
					</div>

				</div>
						
				<div class="apiSample">
					<h4>Website Code</h4>
					<pre v-highlightjs><code class="html">
&#x3C;div id=&#x22;JSE-captcha&#x22; style=&#x22;margin: 0px auto;&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;script type=&#x22;text/javascript&#x22; src=&#x22;https://api.jsecoin.com/captcha/load/captcha.js&#x22;&#x3E;&#x3C;/script&#x3E;
					</code></pre>

					<h4>Example NodeJS Server-Side Check</h4>
					<pre v-highlightjs><code class="nodejs">
const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
const verificationUrl = `https://api.jsecoin.com/captcha/check/${ipAddress}/`;
request(verificationUrl,function(errorRecaptcha,responseRecaptcha,bodyCaptchaRaw) {
	const bodyCaptcha = JSON.parse(bodyCaptchaRaw);
	if (bodyCaptcha.pass && bodyCaptcha.pass === true) {
		doSomething();
	}
});
					</code></pre>

				</div>


				<!-- END OF CAPTCHA -->




			</div>
			
		</article>
	</div>
</template>

<script>
export default {
  name: 'introAPI',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
