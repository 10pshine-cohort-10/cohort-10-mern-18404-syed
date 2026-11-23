
import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Notes App API is running!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
