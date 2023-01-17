import 'dotenv/config';
import app from './app/app';
import APP_ENV from './config/server.config';

app.listen(APP_ENV.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${APP_ENV.PORT}`);
});
