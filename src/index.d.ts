interface IProduct {
    name: string
    price: number
    category: string
    id: string
    img: string
}

interface ICategory {
    category: string
    description: string
    title: string
}

type CategoryId = string | undefined