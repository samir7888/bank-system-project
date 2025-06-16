import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import atmRoutes from "./routes/atm.routes";
import authRoutes from "./routes/auth.routes";
import transferRoutes from "./routes/transfer.routes";
import adminRoutes from "./routes/admin.routes";
import fraudRouter from "./routes/fraud.routes";
import EmergencyRouter from "./routes/emergenecyCredit.routes";

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-domain.vercel.app'] // Replace with your actual frontend domain
    : ["http://localhost:5173"],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Bank Fullstack API",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use("/api/atm", atmRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/transfer", transferRoutes);
app.use("/api/fraud", fraudRouter);
app.use("/api/emergency-credit", EmergencyRouter);

// Catch-all handler for undefined routes
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
    path: req.originalUrl
  });
});

export { app };