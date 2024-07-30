export const productList: Product[] = [
    {id: 1, name: 'Lavadora', price: 10, description: 'Lavadora de 25 lbs'},
    {id: 2, name: 'Escoba', price: 5, description: 'Escoba practica para uso domestico'},
    {id: 3, name: 'Detergente', price: 7, description: 'Detergente quita manchas'},
    {id: 4, name: 'Quita grasa', price: 8, description: 'Quita grasa multiproposito, cocina, baños y hogar'},
    {id: 5, name: 'Aromatel', price: 2},
]


export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}