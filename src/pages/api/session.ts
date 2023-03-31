import { NextApiHandler } from "next";

const handleApi: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    const sessionToken = req.cookies["session_token"];
    if (!sessionToken) return res.status(401).json({ message: "No session token" });

    return res.status(200).json(sessionToken);
  }

  if (req.method === "POST") {
    const { sessionToken } = req.body as {
      sessionToken: string;
    };
    if (!sessionToken) return res.status(401).json({ message: "No session token" });

    res.setHeader("Set-Cookie", `session_token=${sessionToken}; Max-Age=86400`);
    return res.status(200).json(sessionToken);
  }

  res.status(405).json("unknown");
};

export default handleApi;
