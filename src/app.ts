import express from "express";
import createHttpError from "http-errors";
import handleGlobalError from "../middlewares/globalErrorFunction";

const app = express();

app.get("/", (req, res, next) => {
const error =createHttpError(400,'something went wrong')
throw error;

  res.json({ message: "hello get request " });
});

//error handle

app.use(
  handleGlobalError

)

export default app;
