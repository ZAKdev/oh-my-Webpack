import express from 'express';
import config from '../config/config';

const app = express();

app.listen(config.server, () => {
  console.log(`App is running on port ${config.server}`);
})