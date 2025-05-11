import type {News} from '../types'

const API_URL = 'http://localhost:3001/api/news'

export const getNews = async (): Promise<News[]> => {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Failed to fetch news')
    return response.json()
}

export const getNewsById = async (id: number): Promise<News | null> => {
    const response = await fetch(`${API_URL}/${id}`)
    return response.ok ? response.json() : null
}

export const createNews = async (news: Omit<News, 'id'>): Promise<News> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(news)
    })
    if (!response.ok) throw new Error('Failed to create news')
    return response.json()
}