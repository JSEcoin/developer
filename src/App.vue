<template>
	<div id="JSED-devPortal">
		<header class="cf">
			<router-link v-bind:to="`/`" tag="a" id="JSED-logo_developerPlatform">
				JSECoin Developer Portal
			</router-link>
			
			<router-link v-bind:to="`/API`" tag="a" :class="{'active': $route.path.split('/')[1] === 'API'}" class="button2" style="float:left; margin: 30px 0px 0px 20px;">
				API
			</router-link>
			<router-link v-bind:to="`/samples`" tag="a"  :class="{'active': $route.path.split('/')[1] === 'samples'}" class="button2" style="float:left; margin: 30px 0px 0px 20px;">
				Samples
			</router-link>

			<a href="https://platform.jsecoin.com" class="button hideformobile" style="float:right; margin:20px;">Log into Platform</a>
		</header>
		<main id="JSED-mainContent">
			<div>
				<div id="JSED-panelWrapper">
					<div id="JSED-navPanelContainer" v-if="$route.path.split('/')[1] === 'API' || $route.path.split('/')[1] === 'introduction' ">
						<nav id="JSED-navPanel" class="vb" v-bar>
							<div>
								<h2 id="JSE-activeDoc" class="JSE-activeDocAPI">REST APIs</h2>
								<ul>
									<li>
										<h3>INTRODUCTION</h3>
										<ul>
											<li>
												<router-link v-bind:to="`/API/#Overview`" tag="a" v-on:click.native="scrollTo('Overview');">
													Overview
												</router-link>
												<ul>
													<li>
														<router-link v-bind:to="`/API/#GettingStarted`" tag="a" v-on:click.native="scrollTo('GettingStarted');">
															Get Started
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/API/#APIKey`" tag="a" v-on:click.native="scrollTo('APIKey');">
															JSE API Key
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/API/#RateLimiting`" tag="a" v-on:click.native="scrollTo('APIKey');">
															Rate Limiting
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/API/#MinerCode`" tag="a" v-on:click.native="scrollTo('MinerCode');">
															Miner Code
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/API/#Captcha`" tag="a" v-on:click.native="scrollTo('Captcha');">
															Captcha
														</router-link>
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
								<ul>
									<li>
										<h3>REFERENCES</h3>
										<ul>
											<li>API References</li>
											<ul>
												<li>
													<router-link v-bind:to="`/API/wallet`" tag="a">
														Wallet
													</router-link>
													<ul>
														<li>
															<router-link v-bind:to="`/API/wallet#Balance`" tag="a" v-on:click.native="scrollTo('Balance');">
																Balance
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#Transfer`" tag="a" v-on:click.native="scrollTo('Transfer');">
																Transfer
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#Export`" tag="a" v-on:click.native="scrollTo('Export');">
																Export
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#Import`" tag="a" v-on:click.native="scrollTo('Import');">
																Import
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#History`" tag="a" v-on:click.native="scrollTo('History');">
																History
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#Mining`" tag="a" v-on:click.native="scrollTo('Mining');">
																Mining
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/wallet#CheckEmail`" tag="a" v-on:click.native="scrollTo('CheckEmail');">
																Check Email
															</router-link>
														</li>
													</ul>
												</li>
												<li>
													<router-link v-bind:to="`/API/blockchain`" tag="a">
														Blockchain
													</router-link>
													<ul>
														<li>
															<router-link v-bind:to="`/API/blockchain#CurrentBlockID`" tag="a" v-on:click.native="scrollTo('CurrentBlockID');">
																Current Block ID
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/blockchain#GetBlock`" tag="a" v-on:click.native="scrollTo('GetBlock');">
																Get Block
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/blockchain#Ledger`" tag="a" v-on:click.native="scrollTo('Ledger');">
																Ledger
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/blockchain#CheckUserID`" tag="a" v-on:click.native="scrollTo('CheckUserID');">
																Check User ID
															</router-link>
														</li>
														<li>
															<router-link v-bind:to="`/API/blockchain#CheckPublicKey`" tag="a" v-on:click.native="scrollTo('CheckPublicKey');">
																Check Public Key
															</router-link>
														</li>
													</ul>
												</li>
											</ul>
										</ul>
									</li>
								</ul>
								<ul>
									<li>
										<h3>RELEASE NOTES</h3>
										<ul>
											<li>
												<router-link v-bind:to="`/releaseNotes/v17`" tag="a">
													v1.7
												</router-link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</nav>
					</div>


					<div id="JSED-navPanelContainer" v-if="$route.path.split('/')[1] === 'samples'">
						<nav id="JSED-navPanel" class="vb" v-bar>
							<div>
								<h2 id="JSE-activeDoc" class="JSE-activeDocSamples">SAMPLE INTEGRATIONS</h2>
								<ul>
									<li>
										<!--
										<h3>INTRODUCTION</h3>
										<ul>
											<li>
												<router-link v-bind:to="`/samples/#Overview`" tag="a" v-on:click.native="scrollTo('Overview');">
													Overview
												</router-link>
												<ul>
													<li>
														<router-link v-bind:to="`/samples/#Authentication`" tag="a" v-on:click.native="scrollTo('Authentication');">
															Authentication
														</router-link>	
														<ul>
															<li>
																<router-link v-bind:to="`/samples/#APIKey`" tag="a" v-on:click.native="scrollTo('APIKey');">
																	API Key
																</router-link>
															</li>	
														</ul>							
													</li>
													<li>
														<router-link v-bind:to="`/samples/#APIInteractions`" tag="a" v-on:click.native="scrollTo('APIInteractions');">
															API Interactions
														</router-link>
														<ul>
															<li>
																<router-link v-bind:to="`/samples/#StatusCodes`" tag="a" v-on:click.native="scrollTo('StatusCodes');">
																	Status Codes
																</router-link>
															</li>
															<li>
																<router-link v-bind:to="`/samples/#Requests`" tag="a" v-on:click.native="scrollTo('Requests');">
																	Requests
																</router-link>
															</li>
															<li>
																<router-link v-bind:to="`/samples/#CORS`" tag="a" v-on:click.native="scrollTo('CORS');">
																	CORS
																</router-link>
															</li>
														</ul>						
													</li>
													<li>
														<router-link v-bind:to="`/samples/#Pagination`" tag="a" v-on:click.native="scrollTo('Pagination');">
															Pagination
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/samples/#Errors`" tag="a" v-on:click.native="scrollTo('Errors');">
															Errors
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/samples/#RateLimiting`" tag="a" v-on:click.native="scrollTo('RateLimiting');">
															Rate Limiting
														</router-link>								
													</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
								<ul>
									<li>
									-->
										<h3>API Sample Code</h3>
										<ul>
											<li>
												<router-link v-bind:to="`/samples/wallet/`" tag="a" v-on:click.native="scrollTo('GettingStarted');">
													Wallet Endpoints
												</router-link>
												<ul>	
													<li>
														<router-link v-bind:to="`/samples/wallet/#GetBalance`" tag="a" v-on:click.native="scrollTo('GetBalance');">
															Get Balance
														</router-link>							
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#SendJSE`" tag="a" v-on:click.native="scrollTo('SendJSE');">
															Send JSE
														</router-link>						
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#ExportCoinCode`" tag="a" v-on:click.native="scrollTo('ExportCoinCode');">
															Export Coin Code
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#ImportCoinCode`" tag="a" v-on:click.native="scrollTo('ImportCoinCode');">
															Import Coin Code
														</router-link>										
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#HistoryTransactions`" tag="a" v-on:click.native="scrollTo('HistoryTransactions');">
															History Transactions
														</router-link>		
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#MiningTransactions`" tag="a" v-on:click.native="scrollTo('MiningTransactions');">
															Mining Transactions
														</router-link>								
													</li>
													<li>
														<router-link v-bind:to="`/samples/wallet/#CheckEmail`" tag="a" v-on:click.native="scrollTo('CheckEmail');">
															Check Email
														</router-link>								
													</li>						
												</ul>							
											</li>
											<li>
												<router-link v-bind:to="`/samples/blockchain/`" tag="a" v-on:click.native="scrollTo('GettingStarted');">
													Blockchain Endpoints
												</router-link>
												<ul>	
													<li>
														<router-link v-bind:to="`/samples/blockchain/#GetCurrentBlock`" tag="a" v-on:click.native="scrollTo('GetCurrentBlock');">
															Get Current Block
														</router-link>						
													</li>
													<li>
														<router-link v-bind:to="`/samples/blockchain/#GetBlockByID`" tag="a" v-on:click.native="scrollTo('GetBlockByID');">
															Get Block By ID
														</router-link>					
													</li>
													<li>
														<router-link v-bind:to="`/samples/blockchain/#ViewLedger`" tag="a" v-on:click.native="scrollTo('ViewLedger');">
															View Ledger
														</router-link>					
													</li>
													<li>
														<router-link v-bind:to="`/samples/blockchain/#CheckUserBalance`" tag="a" v-on:click.native="scrollTo('CheckUserBalance');">
															Check User Balance
														</router-link>									
													</li>											
												</ul>							
											</li>
											<li>
												<a href="https://jsecoin.com/downloads#scripts" target="_blank">
													PHP Wrapper Class
												</a>
											</li>
										</ul>
									</li>
								</ul>
								<!--
								<ul>
									<li>
										<h3>Demo App</h3>
										<ul>
											<li>
												Examples
												<ul>	
													<li>
														<router-link v-bind:to="`/#GettingStarted`" tag="a" v-on:click.native="scrollTo('GettingStarted');">
															Rich List
														</router-link>							
													</li>											
												</ul>							
											</li>
										</ul>
									</li>
								</ul>
								-->
							</div>
						</nav>
					</div>
						
					<router-view></router-view>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import 'highlight.js/styles/atom-one-dark.css';

export default {
	name: 'devCore',
	mounted() {
		// Google Optimize
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); //eslint-disable-line
		ga('create', 'UA-48537439-15', 'auto');
		ga('require', 'GTM-K2LG6JN');
		/*
		if (typeof ga === 'function')  {
			ga('require', 'GTM-K2LG6JN');
		} else {
			console.log('Google Analytics Not Available');
		}
		*/
	},
	methods: {
		scrollTo(scrollToID) {
			setTimeout(function() {
				const container = document.getElementById('JSED-mainContent');
				const scrollTo = document.getElementById(scrollToID);
				if (scrollTo !== null) {
					container.scrollTop = scrollTo.offsetTop;
				}
			}, 1);
		},
	},
};
</script>

<style>

body {
	margin:0px;
	padding: 0px;
	background: #fff;
	font-size: 16px;
	font-family: "Nunito", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

}

p {
	font-size: 0.875em;
	line-height: 1.6;
	padding: 0px 20px;
}
article h2 {
	border-top: solid 1px #e4e4e4;
	padding:0px;
	height: 40px;
	margin-top:72px;
	padding-top:40px;
}
.infoMsg {
    padding: 8px 14px;
    margin-bottom: 20px;
    text-shadow: 0 1px 0 hsla(0,0%,100%,.5);
    background-color: #fcf8e3;
    border: 1px solid #fbeed5;
    border-radius: 4px;
    display: inline-block;
}

article h2 span {
	display: block;
	margin-top:-50px;
	font-family:Arial, Helvetica, sans-serif;
	font-size:0.6em;
	font-weight: normal;
	color:#6c7378;
}

article h4 {
	border-top: solid 1px #e4e4e4;
    padding: 0px;
    /* height: 40px; */
    margin-top: 72px;
    padding-top: 40px;
    margin-bottom: 0px;
    padding-bottom: 0px;
}

article p {
	padding:0px;
}

header {
	height: 90px;
	border-bottom: solid 1px #e4e4e4;
	position: fixed;
	top:0px;
	z-index: 10;
	background:#fff;
	left: 0px;
	right:0px;
}

main {
	position: fixed;
	top:90px;
	width:100%;
	bottom:0px;
	overflow-y: scroll;

	/*
	position: fixed;
	top:90px;
	left: 0px;
	right:0px;
	bottom:0px;
	display: flex;
	align-items: stretch;
	overflow-y: scroll;
	*/
}


.button {
	border:0px;	
	padding:15px;
	border-radius: 8px;
	color:#fff;
	background: #2c98fe;
	margin:0px auto;
	display: block;
	white-space: nowrap;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;
	letter-spacing:0.8px;
}
.button2 {
	font-size:0.8em;
	border:0px;	
	padding:8px 14px;
	border-radius: 24px;
	color:#333;
	background: #fafafa;
	margin:0px auto;
	display: block;
	white-space: nowrap;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: bold;
	letter-spacing:0.8px;
    
}

.button2.active,
.button2:hover {
	background:#e6e6e6;
	color:#000;
}

.cf:before,
.cf:after {
    content: " "; /* 1 */
    display: table; /* 2 */
}

.cf:after {
    clear: both;
}
#JSED-navPanelContainer {
	position: relative;
	min-width:260px;
}
#JSED-logo_developerPlatform {
	display: block;
	background-image: url("assets/images/logo.jsecoin.developer.platform.png");
	background-size: contain;
	background-repeat: no-repeat;
	width: 176px;
	height: 65px;
	margin: 12px;
	overflow: hidden;
	text-indent: -99999999px;
	float:left;
}

#JSED-panelWrapper {
	display: flex;
	min-height: 100%;
}

#JSED-navPanel {
	background:#f5f7fa;
	color:#282c37;
	min-width:260px;
	border-right:solid 1px #e4e4e4;
	position: fixed !important;
    top: 90px;
    bottom: 0;
    left: 0;
    /*right: 0;*/
	overflow: hidden;
}

/* ScrollBar */

.vb > .vb-dragger {
    z-index: 100000;
    width: 12px;
    right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform: rotate3d(0,0,0,0);
    transform: rotate3d(0,0,0,0);
    -webkit-transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    transition:
        background-color 100ms ease-out,
        margin 100ms ease-out,
        height 100ms ease-out;
    background-color: rgba(27,179,148,.5);
    height: calc(100% - 10px);
    display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: rgba(27,179,148,.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
    background-color: rgba(27,179,148,.8);
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
    background-color: #1BB394;
    margin: 0px;
    height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
    background-color: #1BB394;
}


#JSED-navPanel .vb-content > ul {
	border-top:solid 1px #e4e4e4;
}

#JSED-navPanel ul ul {
	padding:0px;
}


#JSED-navPanel ul ul ul {
	padding-left:20px;
	border-left: solid 4px #e4e4e4;
}

#JSED-navPanel li {
	list-style: none;
	padding:4px 0px;
}

#JSE-activeDoc {
	padding-left:40px;
}
.JSE-activeDocSamples {
	padding-top: 15px;
	padding-bottom:8px;
}
.JSE-activeDocAPI {
	padding-top: 13px;
	padding-bottom:6px;
}
#JSED-apiOverviewWrapper {
	background: linear-gradient(to right,#fff 55%,#282c37 45%);
	width:100%;
	height:100%;
}
.apiOverview {
	flex: 0 0 55%;
}
.apiOverviewContent {
	padding:0px 40px;
}

.apiSample {
	padding:0px 40px;
	color:#fff;
	overflow: hidden;
	width:100%;
}

.apiSample h4 {
	border-top: 1px solid #2f3234;
    font-size: 1rem;
    margin-top: 0;
    padding-top: 48px;
	margin-top:72px;
}

pre {
	/*display: block;
    word-break: break-all;
    word-wrap: break-word;*/
}
pre code {
    border: 0;
    border-radius: 0;
    /*white-space: pre-wrap;*/
}

.section {
	display: flex;

}
article .hljs {
	background:transparent;
	padding:0px 0px 20px 0px;
	overflow-x: scroll;
}

.verbpath {
	border: 1px solid #e4e4e4;
    border-radius: 4px;
    display: flex;
    margin-bottom: 40px;
    position: relative;
	margin-top: -20px;
}
.verbpath .verb.get {
    background: #009cde;
}

.verbpath .verb {
	border-radius:4px 0px 0px 4px;
    color: #fff;
    flex: 0 0 4rem;
    font-weight: 500;
    line-height: 1.7;
    margin: -1px;
    padding: 8px 16px;
    text-align: center;
}

.verbpath .path {
    color: #555;
    font-family: bt_mono,'Courier New',monospace;
    font-weight: 700;
    padding: 8px 16px;
	line-height: 1.7;
}

dl {
    border: 1px solid #e4e4e4;
    border-radius: 4px;
	margin-bottom:20px;
}

dl dt,
dl dd {
	margin:0px;
	padding:10px 20px;
}


dl dt {
	border-top: 1px solid #e4e4e4;
}
dl dt:first-child {
	border-top: 0px;
}

h2, h3 {
	font-size:1em;
}

a {	
	font-family: "Nunito", sans-serif;
	text-decoration: none;
	color:#000;
}
#JSED-sampleOutputContainer {
	width: 100%;
}

#JSED-sampleOutput {
	background:#171a21;
	width:100%;
	border-bottom:solid 13px #06080c; 
	position: fixed;
}
#JSED-sampleOutput ul {
	margin:0px;
	padding:0px;
	display: flex;
}


#JSED-sampleOutput li {
	list-style: none;
	margin:10px;
}
#JSED-sampleOutput li a {
	display: block;
	color:#eee;
	padding:10px;
	background:#000;
	border-radius: 10px;
}

#JSED-sampleOutput li:hover a,
#JSED-sampleOutput li.active a {
	background:#eee;
	color:#000;
}

#JSED-devPortalContent {
	width:100%;
	overflow:hidden;
}
.apiSample pre {
	background: #171a21;
    border-radius: 4px;
    padding: 10px;
	font-size:0.8em;
}
.apiSample code::-webkit-scrollbar-track {
}
.apiSample code::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #000;
}
.apiSample code::-webkit-scrollbar {
    width: 12px;
    padding: 10px;
}
#JSED-devPortalContent {
	min-width: 650px !important;
	overflow-x: scroll !important;
}
/* Invisible Iframe For Tracking Pixels */
#JSEW-pixels {
	position: absolute;
	width:1px;
	height: 1px;
	bottom:-1px;
	left:-1px;
	visibility: hidden;
	border: none;
}
@media screen and (max-width: 650px) {
	.hideformobile { display: none; }
	#JSED-navPanel,	#JSED-navPanelContainer {
		z-index: 999;
		width: 130px !important;
		min-width: 130px !important;
	}
	#JSED-navPanel ul ul ul {
		padding-left:5px;
		font-size: 10px;
	}
	#JSED-navPanel li {
		font-size: 10px;
	}
	#JSE-activeDoc {
		padding-left: 5px;
		font-size: 10px;
	}
	h3 { font-size: 10px; }
	.vb-content ul {
		padding-left: 5px;
	}
	#JSED-sampleOutput li {
		margin: 5px 3px;
		font-size: 13px;
	}
	.JSE-activeDocAPI {
		font-size: 16px !important;
	}
	.apiOverviewContent {
    padding: 0px 5px;
    max-width: 320px;
  }
}
@media screen and (max-width: 380px) {
	.button2 { display: none; }
}
</style>
