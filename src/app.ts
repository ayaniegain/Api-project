import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.json({ message: "hello get request " });
});

export default app;
