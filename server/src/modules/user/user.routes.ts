import express from "express";
import { registerUser, getUser, getUsers, loginUser } from "./user.controller";

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/user", getUser);
router.get("/users", getUsers);

export default router


