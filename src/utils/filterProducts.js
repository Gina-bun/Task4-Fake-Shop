export function filterProducts(products, searchQuery){
    return products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
}