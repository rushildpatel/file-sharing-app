import express from "express";
import { getSignedUrl } from "../constrollers/image-controller.js";
const routes = express.Router();

routes.get("/image-url", getSignedUrl);
