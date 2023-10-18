import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return {
    status: 200,
    body: {
      message: "Hello World!",
    },
  };
}
