import { useNavigate } from 'react-router-dom'
import type {News} from '../types'

interface NewsItemProps {
    news: News
}

const NewsItem = ({ news }: NewsItemProps) => {
    const navigate = useNavigate()

    return (
        <div className="news-item" onClick={() => navigate(`/news/${news.id}`)}>
            <h3>{news.title}</h3>
            <p>{new Date(news.date).toLocaleDateString()}</p>
            <img src={news.image} alt={news.title} />
        </div>
    )
}

export default NewsItem