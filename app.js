const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//const logger = require('./utils/logger');
const { sequelize } = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const projectRoutes = require("./routes/projectRoutes");
// const taskRoutes = require("./routes/taskRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(logger);

// // Route Middleware
app.use("/api/auth", authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);

// Database Connection
sequelize
  .sync()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("Database connection error", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

