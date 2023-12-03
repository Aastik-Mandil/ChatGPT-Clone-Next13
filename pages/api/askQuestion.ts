import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    return res.status(400).json({ answer: "Please provide a prompt" });
  }

  if (!chatId) {
    return res.status(400).json({ answer: "Please provide a valid chat ID" });
  }

  const response = await query(prompt, chatId, model);
  const message: Message = {
    text: response || "ChatGPT was unable to find an answer for that!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar:
        "https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-green-background-png.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  return res.status(400).json({ answer: message.text });
}
