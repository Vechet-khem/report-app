import { Button } from "@/components/ui/button";
import Product, { ProductResponse } from "./product";

async function getProducts(): Promise<ProductResponse[]> {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    return json.products;
}

export default async function ProductList() {
    const products = await getProducts();
    return (
        <div className="container mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-2">Our Products</h1>
            <p className="text-muted-foreground mb-8">Discover our collection of high-quality products</p>

            {products.length === 0 ? (
                <div className="text-center py-12">
                    <p className="text-lg text-muted-foreground">No products found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={product.images[0] || "/placeholder.svg"}
                                    alt={product.title}
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h2>
                                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold">${product.price.toFixed(2)}</span>
                                    <Button size="sm">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}