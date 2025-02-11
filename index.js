import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import dataRouter from "./api/routes/data.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";

const app = express();
app.use(express.json());
app.use(cookieParser());

const expressServer = http.createServer(app);
// app.use(cors()); // You may also specify options depending on your requirements
//Handling CORS origin
if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: [
        "http://localhost:3000",
        "http://localhost:3001",
        "http://localhost:8081",
        "http://172.20.60.63:8081",
        "http://172.20.60.63:8082",
        "http://192.168.189.1:8081",
        "http://localhost:5173",
        "http://24.199.120.137:3000",
      ],
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
  );
}

const PORT = process.env.PORT || 3000;

// Connect to the database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO, { dbName: "kolscan" });
  console.log("Database connected");
}

// Routes
app.use("/api/data", dataRouter);

// Starting the server
expressServer.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});


