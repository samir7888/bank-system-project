import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";

import atmRoutes from "./routes/atm.routes";
import authRoutes from "./routes/auth.routes";
import transferRoutes from "./routes/transfer.routes";
import adminRoutes from "./routes/admin.routes";
import fraudRouter from "./routes/fraud.routes";
import EmergencyRouter from "./routes/emergencyCredit.routes";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",           
  "http://localhost:5173/login",  
  "https://bank-system-project.vercel.app",
  "https://hamrobank.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Bank Fullstack API",
  });
  return;
});
app.use("/atm", atmRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/transfer", transferRoutes);
app.use("/fraud", fraudRouter);
app.use("/", fraudRouter);
app.use("/emergency-credit", EmergencyRouter);

app.listen(3000, () => {
  console.log(`🚀 Server running on http://localhost:3000`);
});

export { app };
