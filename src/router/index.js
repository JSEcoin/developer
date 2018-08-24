import Vue from 'vue';
import Router from 'vue-router';

//API
import introAPI from '@/components/API/intro';
import walletAPI from '@/components/API/wallet';
import blockchainAPI from '@/components/API/blockchain';
import v17API from '@/components/API/v17';

//Samples
import introSamples from '@/components/samples/intro';
import walletSamples from '@/components/samples/wallet';
import blockchainSamples from '@/components/samples/blockchain';
import landerIntroduction from '@/components/landers/introduction';
/*
import nodejs from '@/components/nodejs';
import JQuery from '@/components/JQuery';
import vanillaJS from '@/components/vanillaJS';*/

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/API',
		},
		{
			path: '/API',
			name: 'API Intro',
			component: introAPI,
		},
		{
			path: '/API/wallet',
			name: 'API Wallet',
			component: walletAPI,
		},
		{
			path: '/API/blockchain',
			name: 'API Blockchain',
			component: blockchainAPI,
		},
		{
			path: '/releaseNotes/v17',
			name: 'v1.7',
			component: v17API,
		},
		/*
		{
			path: '/samples',
			name: 'Samples Intro',
			component: introSamples,
		},
		*/
		{
			path: '/samples',
			name: 'Samples',
			component: walletSamples,
		},
		{
			path: '/samples/wallet',
			name: 'Samples Wallet',
			component: walletSamples,
		},
		{
			path: '/samples/blockchain',
			name: 'Samples Blockchain',
			component: blockchainSamples,
		},/*
		{
			path: '/samples/nodejs',
			name: 'nodejs',
			component: nodejs,
		},
		{
			path: '/samples/JQuery',
			name: 'JQuery',
			component: JQuery,
		},
		{
			path: '/samples/vanillaJS',
			name: 'vanillaJS',
			component: vanillaJS,
		},*/
		{
			path: '/introduction',
			name: 'Introduction',
			component: landerIntroduction,
		},
	],
});
