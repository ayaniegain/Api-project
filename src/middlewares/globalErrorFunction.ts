import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from "../config/config";
const app = express();

export default function handleGlobalError(err: HttpError, req: Request, res: Response, next: NextFunction) {
    
        const statusCode = err.statusCode || 500;
        
        return res.status(statusCode).json({
            message: err.message,
            errorStack: config.env == "DEV" ? err.stack : "",
        });
}