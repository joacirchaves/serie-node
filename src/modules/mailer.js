const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass},
  });

  transport.use('compile', hbs({
    viewEngine: {
        extName: '.html',
        partialsDir: path.resolve('./src/resourses/mail/'),
        layoutsDir: path.resolve('./src/resourses/mail/'),
        defaultLayout: '',
    },
      viewPath: path.resolve('./src/resourses/mail/'),
      extName: '.html',
  }));
  
  module.exports = transport;