/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://links.sailsjs.org/docs/config/routes
 */

module.exports.routes = {

  'get /': 'PageController.index',
  'get /about': 'PageController.aboutUs',
  'get /careers': 'PageController.careers',
  'get /contact': 'PageController.contact',
  'get /faq': 'PageController.faq',
  'get /features': 'PageController.features',
  'get /pricing': 'PageController.pricing',
  'get /privacy': 'PageController.privacy',
  'get /support': 'PageController.support',
  'get /termsofservice': 'PageController.termsOfService',
  'get /termsofuse': 'PageController.termsOfUse'

};
