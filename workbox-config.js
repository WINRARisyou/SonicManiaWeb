module.exports = {
	maximumFileSizeToCacheInBytes: 5000000000,
	globDirectory: 'SonicManiaWeb/',
	globPatterns: [
		'**/*.{rsdk,png,ico,html,json,js,wasm,css}'
	],
	swDest: 'SonicManiaWeb/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};