import { useState } from 'react'
import type {News} from '../types'
import { createNews } from '../services/newsService'

interface NewsFormProps {
    onNewsAdded: (news: News) => void
}

const NewsForm = ({ onNewsAdded }: NewsFormProps) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const newNews = {
            title,
            content,
            date: new Date(),
            image: image || 'https://via.placeholder.com/150'
        }
        const createdNews = await createNews(newNews)
        onNewsAdded(createdNews)
        setTitle('')
        setContent('')
        setImage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Заголовок"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Содержание"
                required
            />
            <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Ссылка на изображение (необязательно)"
            />
            <button type="submit">Добавить новость</button>
        </form>
    )
}

export default NewsForm