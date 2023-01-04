/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import ratelimit from 'express-rate-limit';
import errorMiddleware from "./middlewares/error.middleware";
const app: Application = express();
const PORT = 7000;
app.use(morgan("common"))
app.use(helmet())

app.use(express.json())
app.get("/", (req:Request, res:Response)=>{
  throw new Error("Error test")
  
  res.json({message:"Hello osroot 🌍"})
})
app.use(ratelimit({
	windowMs: 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}))

app.post("/", (req:Request, res:Response)=>{
  console.log(req.body)
  res.json({message:"Hello osroot 🌍 from post", data:req.body})
})

app.use((_req:Request , res:Response) => {
  res.status(404).json({
    message: 'You are lost, read the documentation'
  })
})
app.use(errorMiddleware)

app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${PORT}`);
});

export default app;