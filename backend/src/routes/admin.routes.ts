import express from "express";
import { freezeUser, unfreezeUser } from "../controllers/admin.controller";


const adminRoutes = express.Router();

// Example: middleware to check admin rights could go here
// adminRoutes.use(adminAuthMiddleware);

adminRoutes.patch("/users/:id/freeze", freezeUser);
adminRoutes.patch("/users/:id/unfreeze", unfreezeUser); 
export default adminRoutes;
