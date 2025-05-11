import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
    const fakeNews = [
        {
            title: 'Breaking News: New Discovery',
            content: 'Scientists have discovered a new species in the Pacific Ocean...',
            date: new Date(),
            image: 'https://via.placeholder.com/150'
        },
        {
            title: 'Tech Giant Releases New Product',
            content: 'A major tech company unveiled their latest smartphone...',
            date: new Date(),
            image: 'https://via.placeholder.com/150'
        },
        {
            title: 'Local Event Attracts Thousands',
            content: 'The annual city festival drew record crowds this year...',
            date: new Date(),
            image: 'https://via.placeholder.com/150'
        }
    ]

    for (const news of fakeNews) {
        await prisma.news.create({
            data: news
        })
    }

    console.log('Database seeded successfully')
}

async function main() {
    try {
        await seed()
    } catch (e) {
        console.error('Error seeding database:', e)
    } finally {
        await prisma.$disconnect()
    }
}

main()