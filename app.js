// Import express module
const express = require('express');

// Import path module
const path = require('path');

// Initialize express app
const app = express();

// Define port
const port = 3000;

// Import userRoute
const userRoute = require('./routes/userRoute');
const locationRoute = require('./routes/locationRoute');

// Define static folder
// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'views', 'Page')));
app.use(express.static(path.join(__dirname, 'views', 'Page', 'asset')));

app.use(express.static(path.join(__dirname, 'views', 'Page', 'SignIn')));
app.use(express.static(path.join(__dirname, 'views', 'Page', 'SignUp')));
app.use(express.static(path.join(__dirname, 'views', 'Page', 'Onboarding1')));
app.use(express.static(path.join(__dirname, 'views', 'Page', 'Onboarding2')));
app.use(express.static(path.join(__dirname, 'views', 'Page', 'Homepage')));
// app.use(express.static(path.join(__dirname, 'views', 'Page', 'PlanDetails')));
// app.use(express.static(path.join(__dirname, 'views', 'Page', 'Planning')));

app.use('/', userRoute);
app.use('/api', locationRoute);

// start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});