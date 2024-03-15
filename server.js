const express = require('express');
const cors = require('cors');
const { server } = require('./config');
const apiRouter = require('./src/routes');
const pageNotFoundMiddleware = require('./src/middleware/page-not-found-middleware');
const errorHandlerMiddleware = require('./src/middleware/error-handler-middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);

app.use(pageNotFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(server.port, () =>
  console.log(
    `Server is running on port ${server.port} in ${server.environment} mode.`
  )
);
