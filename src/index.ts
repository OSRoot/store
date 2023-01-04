/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = 7000;

app.get("/", (req:Request, res:Response)=>{
  res.json({message:"Hello osroot 🌍"})
})


app.listen(PORT, (): void => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${PORT}`);
});
