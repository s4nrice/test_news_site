import NewsItem from './NewsItem'
import type {News} from '../types'

interface NewsListProps {
    news: News[]
}

const NewsList = ({ news }: NewsListProps) => {
    return (
        <div>
            {news.map((item) => (
                <NewsItem key={item.id} news={item} />
            ))}
        </div>
    )
}

export default NewsList