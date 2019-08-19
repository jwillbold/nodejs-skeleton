const csp = require('helmet-csp');
const crypto = require('crypto');

csp.SELF = "'self'";
csp.INLINE = "'unsafe-inline'";
csp.NONE = "'none'";
csp.NONCE = (req, res) => `'nonce-${res.locals.nonce}'`;

csp.helpers = {
  init_nonce: (req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString('base64');
    next();
  }
};

module.exports = csp;