import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

const prisma = new PrismaClient()
const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/api/news', async (_req, res) => {
    const news = await prisma.news.findMany()
    res.json(news)
})

app.get('/api/news/:id', async (req, res) => {
    const { id } = req.params
    const news = await prisma.news.findUnique({
        where: { id: parseInt(id) }
    })
    res.json(news)
})

app.post('/api/news', async (req, res) => {
    const { title, content, date, image } = req.body
    const news = await prisma.news.create({
        data: {
            title,
            content,
            date: new Date(date),
            image: image || 'https://ae04.alicdn.com/kf/S2d9713fc6bf24406b8ade29af8fecdfad.jpg_480x480.jpg'
        }
    })
    res.json(news)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})