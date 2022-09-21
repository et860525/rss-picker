import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'
import Parser from 'rss-parser'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)
  const parser = new Parser()
  const { feed } = req.query

  let data
  try {
    if (typeof feed === 'string') {
      data = await parser.parseURL(feed)
    }
  } catch (err) {
    res.status(500).json({ data: err })
  }

  res.status(200).send(data)
}
