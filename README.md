## NodeJS Skeleton Project

This is my basic project for all NodeJS apps. It provides an overall file
structure to build on and includes libraries, miscellaneous files and a self
signed certificate for the localhost. Which allows for development using HTTPS
which prevents problems that occur when developing and testing with HTTP and
then hosting it on HTTPS.

### Usage

Start with:
``npm install && npm start``

Then got to your browser and open: ``https://localhost:3001/``  
You will have to add the certificate to the browser exceptions since it is self signed.

### Included Libs
  - Bootstrap 4.3.1
  - JQuery 3.3.1

### Predefined NodeJS packages
  - mocha
  - chai
  - jquery
  - pug
