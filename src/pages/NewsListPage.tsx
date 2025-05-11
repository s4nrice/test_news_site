import { useEffect, useState } from 'react'
import NewsForm from '../components/NewsForm'
import NewsList from '../components/NewsList'
import type {News} from '../types'
import { getNews } from '../services/newsService'

const NewsListPage = () => {
    const [news, setNews] = useState<News[]>([])

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await getNews()
            console.log('Fetched news:', newsData)
            setNews(newsData)
        }
        fetchNews()
    }, [])

    const handleNewsAdded = (newNews: News) => {
        setNews([...news, newNews])
    }

    return (
        <div className="container">
            <div className="form-section">
                <NewsForm onNewsAdded={handleNewsAdded} />
            </div>
            <div className="news-list">
                <NewsList news={news} />
            </div>
        </div>
    )
}

export default NewsListPage