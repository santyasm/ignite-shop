// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stripe } from "@/lib/stripe";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceId } = req.body;

  if (req.method !== "POST") {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  if (!priceId) {
    return res.status(400).json({ error: "Price ID is required" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/success`,
    cancel_url: `${process.env.NEXT_URL}/`,

    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  res.status(201).json({ checkoutUrl: checkoutSession.url || "" });
}
