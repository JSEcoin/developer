<template>
	<div id="JSED-devPortalContent">
		<article>
			<div class="section">
				<div>
					<div class="apiOverviewContent">
						<a name="Overview" id="Overview"></a>
						<h1>
							Release Notes v1.7
						</h1>
						<ul>
							<li>
								Cleaned up API structure.
							</li>
							<li>
								Removed Firebase integration for custom store
							</li>
							<li>
								New authentication model
							</li>
							<li>
								Opt-in only system for publishers
							</li>
							<li>
								VPN/Tor/Proxy detection on 	referrals and mining
							</li>
							<li>
								Email confirmation requirement for 	mining
							</li>
							<li>	
								Move from Firebase to custom Node 	datastore
							</li>
							<li>	
								P2P networking system for public 	blockchain data
							</li>
							<li>	
								Improved registration fraud 	detection
							</li>
							<li>	
								API/Platform/Blockchain 	distributions included in node via express
							</li>
							<li>	
								Improved fallback Sha256 function 	where crypto API not available
							</li>
							<li>	
								API/Admin header authorization 	implementation
							</li>
							<li>	
								Platform colour scheme and logo 	update
							</li>
							<li>	
								Blockchain migration to work as 	real-time websocket node
							</li>
							<li>	
								Double spend double check on block 	data
							</li>
							<li>	
								80+ Mocha unit/api/datastore/route 	tests
							</li>
							<li>	
								Eslint forcing ES6 AirBnB 	standards on server-side code
							</li>
							<li>	
								Full chain / Litechain options
							</li>
							<li>	
								Server console and admin controls
							</li>
							<li>	
								Multi-server backup facility
							</li>
						</ul>

						<h2>Reporting Bugs</h2>

						<p>
							As with all updates, there may be significant bugs that users run into with this release of the JSEcoin system. If you come across anything please report it to our team at:
							<a href="https://jsecoin.com/en/support/contact/">https://jsecoin.com/en/support/contact/</a>
						</p>
					</div>
				</div>
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
