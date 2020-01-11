import * as dotenv from 'dotenv';
import * as express from 'express';

// Connect environment variables
dotenv.config();

// Configure database connection
import { configureDB } from './lib/db';

// Configure API endpoints
import { configureRoutes } from './routes';

// Configure database
configureDB();

// Instantiate Express framework
const app = express();
configureRoutes(app);

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started listening to port ${port}`);
});
