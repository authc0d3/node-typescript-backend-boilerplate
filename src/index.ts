import dotenv from "dotenv-safe";
import express from "express";
import morgan from "morgan";
import cors from "cors";

// Common configs
dotenv.config();
const port = process.env.PORT || 8000;

// Server configs
const app = express();
app.use(morgan(process.env.MORGAN_MODE || "common"));
app.use(cors());

// Routes
app.get("/", (_, res) => res.json({ message: "⚡ Express + TypeScript Server!" }));

// Run server
app.listen(port, () => {
  console.log(`⚡ Server is running on port ${port}`);
});

export default app;
