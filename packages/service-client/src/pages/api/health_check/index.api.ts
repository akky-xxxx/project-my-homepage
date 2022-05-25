import { NextApiHandler } from "next"

const SuccessStatus = 200

const handler: NextApiHandler = (_, res) => {
  res.status(SuccessStatus).json("")
}

export default handler
