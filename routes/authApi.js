
var express = require('express');
var router = express.Router();


var apiController = require('../controllers/api');
var passportConf = require('../config/passport');



/**
 * API examples routes.
 */
router.get('/', apiController.getApi);
router.get('/lastfm', apiController.getLastfm);
router.get('/nyt', apiController.getNewYorkTimes);
router.get('/aviary', apiController.getAviary);
router.get('/steam', apiController.getSteam);
router.get('/stripe', apiController.getStripe);
router.post('/stripe', apiController.postStripe);
router.get('/scraping', apiController.getScraping);
router.get('/twilio', apiController.getTwilio);
router.post('/twilio', apiController.postTwilio);
router.get('/clockwork', apiController.getClockwork);
router.post('/clockwork', apiController.postClockwork);
router.get('/foursquare', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getFoursquare);
router.get('/tumblr', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getTumblr);
router.get('/facebook', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getFacebook);
router.get('/github', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getGithub);
router.get('/twitter', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getTwitter);
router.post('/twitter', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.postTwitter);
router.get('/venmo', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getVenmo);
router.post('/venmo', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.postVenmo);
router.get('/linkedin', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getLinkedin);
router.get('/instagram', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getInstagram);
router.get('/yahoo', apiController.getYahoo);
router.get('/paypal', apiController.getPayPal);
router.get('/paypal/success', apiController.getPayPalSuccess);
router.get('/paypal/cancel', apiController.getPayPalCancel);
router.get('/lob', apiController.getLob);
router.get('/bitgo', apiController.getBitGo);
router.post('/bitgo', apiController.postBitGo);
router.get('/bitcore', apiController.getBitcore);
router.post('/bitcore', apiController.postBitcore);





module.exports = router;

