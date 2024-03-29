## NodeJS Skeleton Project

This is my basic project for all NodeJS apps. It provides an overall file
structure to build on and includes libraries, miscellaneous files and a self
signed certificate for the localhost. Which allows for development using HTTPS
which prevents problems that occur when developing and testing with HTTP and
then hosting it on HTTPS.
Further, it focuses on building secure web apps by integrating security features
like CSP from the very beginning of development.

### Usage

Start with:
``npm install && npm start``

Then got to your browser and open: ``https://localhost:3001/``  
You will have to add the certificate to the browser exceptions since it is self signed.

### Create your own key and certificate

You may want to crate your own key and self-signed certificate. You can do this with this command:
``openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out private/certs/localhost.crt -keyout private/keys/localhost.key``


### Included Libs
  - Bootstrap 4.3.1
  - JQuery 3.3.1

### Predefined NodeJS packages
  - express
  - mocha
  - chai
  - jquery
  - pug
  - sequelize
  - sqlite3
