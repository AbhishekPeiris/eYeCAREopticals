const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const User = require("./models/User");
const Sales = require("./models/Sales");
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`);
});

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection successfully');
});


app.get("/sales", async (req, res) => {
    try {
      const sales = await Sales.find();
      res.json(sales);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.get("/users", async (req, res) => {
    try {
      // Fetch all profiles from the database
      const user = await User.find();
      console.log(user);
      res.json(user);
    } catch (error) {
      console.error("Error fetching profiles:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

const userRouter = require('./routes/UserRoute');
app.use('/api/user', userRouter);

const eyeglassRoute = require('./routes/EyeGlassRoute');
app.use('/api/eyeglass',eyeglassRoute);

const DoctorRoute = require('./routes/DoctorRoute');
app.use('/api/doctor',DoctorRoute);

const DeafAidsRoute = require('./routes/DoctorRoute');
app.use('/api/deafaids',DeafAidsRoute);

const DeafAidsAdminRoute = require('./routes/DeafAidsAdminRoute');
app.use('/api/deafaidsadmin',DeafAidsAdminRoute);

const RepairmentRoute = require('./routes/RepairmentRoute');
app.use('/api/repairment',RepairmentRoute);

const ManagerRoute = require('./routes/ManagerRoute');
app.use('/api/manager',ManagerRoute);

const FeedbackRoute = require('./routes/FeedbackRoute');
app.use('/api/feedback',FeedbackRoute);

const DoctorManagementRoute = require('./routes/DoctorManagement');
app.use('/api/doctormanagement',DoctorManagementRoute);

const EyeglassReservationRoute = require('./routes/EyeglassReservationRoute');
app.use('/api/eyeglassreservation',EyeglassReservationRoute);

const DeafaidsReservationRoute = require('./routes/DeafaidsReservationRoute');
app.use('/api/deafaidsreservation',DeafaidsReservationRoute);

const EyeglassAdminRoute = require('./routes/EyeGlassAdminRoute');
app.use('/api/eyeglassadmin',EyeglassAdminRoute);

const CartRoute = require('./routes/CartRoute');
app.use('/api/cart',CartRoute);


