var cookieParser = require('cookie-parser')
const jwksClient = require('jwks-rsa');
var jwt = require('jsonwebtoken');

const express = require("express");
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
app.use(express.static("build"))

app.use(cookieParser());

const KID = "47a9bf0e4fed1f56576469c25bd6e6ef60bbe1cada585c6ef30cb7a0295859e1";
const CERTS_URL = "https://cf.domlaw.me/cdn-cgi/access/certs";
const AUDIENCE_TAG = "6435d934684ffbe5586f1cb5926d9c30";
const COOKIE_NAME = "cf_domlaw";

const client = jwksClient({
    jwksUri: CERTS_URL,
});

function jwt_validation_middleware(req, res, next) {
    const token = req.cookies[COOKIE_NAME];
    if (!token) {
        // no token - 403
    } else {
        client.getSigningKey(KID, (err, key) => {
        if (err) {
            // error while fetching key
        } else {
            const signingKey = key.getPublicKey();

            try {
            jwt.verify(token, signingKey, {
                audience: AUDIENCE_TAG,
            });
            } catch (e) {
            // malformed token - 403
            }

            // allow user - 200
            next();
        }
        });
    }
}

app.use(jwt_validation_middleware);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})