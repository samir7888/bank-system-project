import express from "express";
import { createUser, deleteUser, freezeUser, getAllUsers, unfreezeUser } from "../controllers/admin.controller";


const adminRoutes = express.Router();

// Example: middleware to check admin rights could go here
// adminRoutes.use(adminAuthMiddleware);

adminRoutes.get("/users/",getAllUsers);
adminRoutes.post("/users/:id/freeze", freezeUser);
adminRoutes.post("/users/:id/unfreeze", unfreezeUser); 
adminRoutes.post("/user/create", createUser);
adminRoutes.post("/user/delete/:id", deleteUser);
export default adminRoutes;
