var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/lata', function(req, res) {
	res.send('Path: /lata');
};

router.get('/peace', function(req, res) {
	res.send('Path: /peace');
};

module.exports = router;
