import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type {News} from '../types'
import { getNewsById } from '../lib/newsService'

const NewsDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState<News | null>(null)

    useEffect(() => {
        const fetchNews = async () => {
            if (id) {
                const newsData = await getNewsById(parseInt(id))
                setNews(newsData)
            }
        }
        fetchNews()
    }, [id])

    if (!news) return <div>Loading...</div>

    return (
        <div className="news-detail">
            <button onClick={() => navigate('/')}>Back</button>
            <h1>{news.title}</h1>
            <p>{new Date(news.date).toLocaleDateString()}</p>
            <img src={news.image} alt={news.title} />
            <p>{news.content}</p>
        </div>
    )
}

export default NewsDetailPage