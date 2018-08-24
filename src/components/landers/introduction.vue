<template>
	<div id="JSED-devPortalContent">
		<article id="JSED-landerWrapper">
			<div class="section">
				<div class="landerOverview">
					<div class="landerContent">
						<img src="/static/images/coin_gold.png" class="coinRight" />
						<h2 class="firstH2">
							WHY USE JSECOIN?
							<span>INTRODUCTION</span>
						</h2>
						<p>
							The JSEcoin platform bridges blockchain and web technology allowing developers to monetize their projects in new ways.
						</p>
						<ul>
							<li><b>Browser Mining</b> monetize content without affecting user experience</li> 
							<li><b>Payment Gateway</b> for single payments and subscriptions</li> 
							<li><b>Affiliate Program</b> receive tokens for new user referrals</li> 
						</ul>
						<p>
							To get started with JSEcoin create an account on the platform
						</p>
						<div class="ctaContainer">
							<h3><img src="/static/images/search_logo.png" class="tinyIcon" /> Set up your account</h3>
							<input type="email" value="" name="email" class="landerTextInput" id="JSED-emailInput" placeholder="your@email.com" />
							<a href="javascript:void()" onclick="window.location.href = 'https://platform.jsecoin.com/?register=1&email='+document.getElementById('JSED-emailInput').value" class="button ctaButton">CONTINUE</a>
						</div>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="landerOverview">
					<div class="landerContent">
						<h2>
							BROWSER MINING
							<span>MINING</span>
						</h2>
						<p>
							A simple javascript embeded code snippet is all you need to add to your website to start earning cryptocurrency rewards.
						</p>
						<div class="introCodeSample">
&lt;script type=&quot;text/javascript&quot;&gt;
!function(){var e=document,t=e.createElement(&quot;script&quot;),s=e.getElementsByTagName(&quot;script&quot;)[0];t.type=&quot;text/javascript&quot;,t.async=t.defer=!0,t.src=&quot;https://load.jsecoin.com/load/{userID}/{siteID}/{subID}/0/&quot;,s.parentNode.insertBefore(t,s)}();
&lt;/script&gt;
						</div>
						<p>
							Our mining system is opt-in only which has enabled us to get whitelisted by anti-virus companies that are blocking hidden Monero miners.
							The system features, real-time stats, subID tracking, integrated API. Get your code from the platform at <a href="https://platform.jsecoin.com/" target="_BLANK">https://platform.jsecoin.com</a>
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="landerOverview">
					<div class="landerContent">
						<h2>
							PAYMENT GATEWAY
							<span>MERCHANT TOOLS</span>
						</h2>
						<p>
							The merchant tools provide a simple way for merchants and webmasters to take one time and subscription payments online in cryptocurrency. 
						</p>
							<img src="/static/images/landers/merchantTools.png" class="landerResponsiveImage" />
						<p>
							Online payments can be handled with simple purchase buttons or full shopping cart integrations such as our Woocommmerce payment gateway plugin for Wordpress. QR codes can also be used to request payment from a customer. JSEcoin bridges the gap between ecommerce and cryptocurrency and provides merchants with the tools they need to be a first adopter of crypto paments. 
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="landerOverview">
					<div class="landerContent">
						<div class="iconGlobeContainer">
							<img src="/static/images/landers/iconGlobe.png" class="landerResponsiveImage" />
						</div>
						<h2>
							AFFILIATE PROGRAM
							<span>AFFILIATES</span>
						</h2>
						<p>
							If you have a website where you can place a banner advertisement, a social account where you can spread the word, or an app that engages users, then you can earn JSE tokens by helping us find new users. Each valid referral you make will be credited with a CPA payment when the new users confirms their account by email* <small>Full terms apply, visit <a href="https://platform.jsecoin.com" target="_blank">https://platform.jsecoin.com</a> for more details</small> 
						</p>
					</div>
				</div>
			</div>
			<div class="section">
				<div class="landerOverview">
					<div class="landerContent">
						<h2>
							JOIN THE JSECOIN PROJECT
							<span>START HERE</span>
						</h2>
						<p>
							All of this along with a web based wallet is available via an account on the platform. Get started today and get involved in the world of cryptocurrency.
						</p>
						<div class="ctaContainer">
							<h3><img src="/static/images/search_logo.png" class="tinyIcon" /> Set up your account</h3>
							<input type="email" value="" name="email" class="landerTextInput" id="JSED-emailInput2" placeholder="your@email.com" />
							<a href="javascript:void()" onclick="window.location.href = 'https://platform.jsecoin.com/?register=1&email='+document.getElementById('JSED-emailInput2').value" class="button ctaButton">CONTINUE</a>
						</div>
						<div class="spacerDiv">
						</div>
						<div class="footerLinks">
							<a href="https://jsecoin.com" target="_blank">WEBSITE</a>
							<a href="https://jsecoin.com/whitepaper.pdf" target="_blank">WHITEPAPER</a>
							<a href="https://platform.jsecoin.com" target="_blank">PLATFORM</a>
							<a href="https://platform.jsecoin.com/?register=1" target="_blank">REGISTRATION</a>
							<p>&COPY; JSECOIN LIMITED - COMPANY NO. 10940920 - DUN&AMP;BRADSTREET NO. 100233913837</p>
						</div>
					</div>
				</div>
			</div>
		</article>
	</div>
</template>

<script>
export default {
  name: 'landerIntroduction',
	mounted() {
		const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 300;
		if (screenWidth < 650) {
			document.getElementById('JSED-navPanelContainer').style.display = 'none';
		}
		if (this.$route.query.email) {
			document.getElementById('JSED-emailInput').value = this.$route.query.email;
			document.getElementById('JSED-emailInput2').value = this.$route.query.email;
		}
	},
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coinRight {
	float: right;
	height: 120px;
	width: 120px;
	margin-top: 5px;
}
.landerOverview {
	flex: 0 0 100%;
}
.landerContent {
	padding:0px 40px;
}
.ctaContainer {
	max-width: 320px;
	margin: 0 auto;
	text-align: center;
 	padding: 8px 10px;
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  border-radius: 4px;
}
.tinyIcon {
	height: 24px;
	width: 24px;
	margin-bottom: -6px;
}
.ctaButton {
	text-align: center;
	width: 280px;
	padding: 8px 3px;
}
.landerTextInput {
	margin-bottom: 8px;
	font-size: 14px;
	width: 270px;
	padding: 8px;
	border-radius: 4px;
	border: 1px solid #CCC;
}
.introCodeSample {
	word-wrap: break-word;
	background: #171a21;
	border-radius: 4px;
	padding:25px;
	font-size: 0.8em;
	color: #98c379;
}
.landerResponsiveImage {
	max-width: 100%;
}
.iconGlobeContainer {
	height: 200px;
	width: 200px;
	float: right;
	margin-top: 20px;
	margin-left: 20px;
}
.spacerDiv {
	margin: 50px 0px;
}
.footerLinks {
	width: 100%;
	text-align: center;
}
.footerLinks a {
	color: #2c98fe;
	margin: 30px 20px;
	font-size: 0.8em;
}
.footerLinks P {
	font-size: 0.6em;
}
.firstH2 {
	margin-top: 0px;
}
@media screen and (max-width: 650px) {
	.coinRight {
		height: 60px;
		width: 60px;
	}
	.landerContent {
		padding:0px 5px;
	}
	#JSED-devPortalContent {
		min-width: 320px !important;
	}
	.footerLinks a {
		margin: 10px 5px;
	}
	.iconGlobeContainer {
		height: 100px;
		width: 100px;
	}
}
</style>
