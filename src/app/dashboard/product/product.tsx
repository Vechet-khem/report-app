import { Button } from "@/components/ui/button"
import Image from "next/image"

export type ProductResponse = {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
}


export default function Product({
    id,
    title,
    price,
    description,
    images,
}: ProductResponse) {
    return (
        <div key={id} className="border rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                    src={images[0] || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h2>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold">${price.toFixed(2)}</span>
                    <Button size="sm">Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}