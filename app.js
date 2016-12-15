const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const logger = log4js.getLogger('app');
const config = require('./config')

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/status', require('./routes/index'));

app.listen(config.port, () => {
    logger.info(`Init configuration: ${JSON.stringify(config)}`);
});
