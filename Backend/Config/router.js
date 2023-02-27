import express, { Router } from "express";

const router = express.Router();

Router.get("/ProjectNew",(req,res)=>{
    res.status(200).json("Hello World");
})