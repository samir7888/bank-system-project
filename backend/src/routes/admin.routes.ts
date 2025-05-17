import express from "express";
import { freezeUser, getAllUsers, unfreezeUser } from "../controllers/admin.controller";


const adminRoutes = express.Router();

// Example: middleware to check admin rights could go here
// adminRoutes.use(adminAuthMiddleware);

adminRoutes.get("/users/",getAllUsers);
adminRoutes.post("/users/:id/freeze", freezeUser);
adminRoutes.post("/users/:id/unfreeze", unfreezeUser); 
export default adminRoutes;
