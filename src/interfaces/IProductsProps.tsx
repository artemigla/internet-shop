export interface IProducts {
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string
    },
    images: []
}

export interface IProductsProps {
    products: IProducts[]
}

export interface IBasket {
    title: string
}
