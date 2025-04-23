import { Request, Response } from "express";
const Router = require("express");
const atmRouter = Router();

atmRouter.post('/withdraw', (req: Request, res: Response) => {
  let { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }
  if (amount % 10 !== 0) {
    return res.status(400).json({ error: "Amount must be a multiple of 10" });
    
  }
  if (amount > 10000) {
    return res.status(400).json({ error: "Amount exceeds limit of रु 10,000" });
  }

  const denominations = [1000, 500, 100, 50, 20, 10];
  const result: { [denomination: number]: number } = {};
  let originalAmount = amount;

  for (let note of denominations) {
    const count = Math.floor(amount / note);
    if (count > 0) {
      result[note] = count;
      amount -= count * note;
    }
  }

  if (amount !== 0) {
    return res.status(400).json({
      error: `Cannot dispense exact amount (₹${originalAmount}) with available denominations`,
    });
  }

  return res.json({ notes: result });
});

export default atmRouter;
