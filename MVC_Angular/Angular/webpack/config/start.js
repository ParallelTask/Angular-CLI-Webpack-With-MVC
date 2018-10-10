/**
 * Put starter code that can be used during webpkack compilation phase
 * One such example is configure Node's global object to lazy load modules in angular 
 * Lazy loading configuration we used helps in conditional importing via webpack bundling
 * Other such feature is mocking http API
 */

global = {
    mockHttpRequests: true,
	// sets baseHref property for index.html
    baseHref: '/Angular/webpack/dist/',
}

global.lazyLoad = {
    HomeModule: true,
    AboutModule: true
};

module.exports = {};