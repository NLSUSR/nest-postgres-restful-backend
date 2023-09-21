import express from "express";
import { userRouter } from "./routes/user-router.js";

const app = express();
const port = 1234;

app.use(express.json());
app.use("/api", userRouter);

app.listen(port, () => {
  console.log("server on http://localhost:" + port);
});
