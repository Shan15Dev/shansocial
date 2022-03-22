// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import path from "path"
import base64ToImage from "base64-to-image"
import { v4 } from "uuid"

const PUBLIC_PATH = path.join(process.cwd(), "public")

const base64ImageToFile = (base64) => {
  const fileName = v4()
  const imageInfo = base64ToImage(base64, PUBLIC_PATH + "/", { fileName })
  return "/" + imageInfo.fileName 
}


export default async function handler(req, res) {
  if(req.method !== "POST") {
    return res.status(400).send({ message: "bad request" })
    
  }

  const { base64Image } = req.body

  if(!base64Image) return res.status(400).send({ message: "bad request" })

  const filePath = base64ImageToFile(base64Image)

  res.status(201).send({ filePath })
}
