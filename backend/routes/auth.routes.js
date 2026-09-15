import express from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controllers.js";

const authRouter = express.Router();

// ------------------------------ SIGN UP ROUTE -----------------------------
authRouter.post("/signup", signUp);

// ------------------------------ SIGN IN ROUTE -----------------------------
authRouter.post("/signin", signIn);

// ------------------------------ SIGN UP ROUTE -----------------------------
authRouter.get("/signout", signOut);

export default authRouter;
