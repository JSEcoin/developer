import 'es6-promise/auto';

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuebar from 'vuebar';
import VueMultianalytics from 'vue-multianalytics';
import Meta from 'vue-meta';
import VueHighlightJS from 'vue-highlightjs';

import App from './App';
import router from './router';
//import store from './store';

//config type
//Vue.config.productionTip = false;
Vue.config.productionTip = process.env.NODE_ENV === 'production';

//use highlight.js
Vue.use(VueHighlightJS, ['javascript', 'bash', 'json']);

//setup meta info on index.html
Vue.use(Meta);

//virtual scrollbar
Vue.use(Vuebar);

//analytics tracker
/*Vue.use(VueAnalytics, {
	id: 'UA-48537439-15',
	router,
});*/
Vue.use(VueMultianalytics, {
	modules: {
		ga: {
			appName: 'JSE-devPortal_V1', // Mandatory
			appVersion: '1.0.4', // Mandatory
			trackingId: 'UA-48537439-15', // Mandatory
			//debug: true, // Whether or not display console logs debugs (optional)
		},
		//facebook: {
		//	token: '500910373434901',
			//debug: true, // Whether or not display console logs debugs (optional)
		//},
	},
	routing: {
		vueRouter: router, //  Pass the router instance to automatically sync with router (optional)
		//preferredProperty: 'name', // By default 'path' and related with vueRouter (optional)
		//ignoredViews: ['homepage'], // Views that will not be tracked
		//ignoredModules: ['ga'], // Modules that will not send route change events. The event sent will be this.$ma.trackView({viewName: 'homepage'}, ['ga'])
	},
});
/* eslint-disable no-new */
const app = new Vue({
	el: '#JSED-devPortal',
	router,
	//store,
	template: '<App/>',
	components: {
		App,
	},
	data: {
		version: '1.0.4',
	},
});
