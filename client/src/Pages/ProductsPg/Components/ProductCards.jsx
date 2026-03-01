export function ProductCard({
    product,
    setSelectedProduct
}){
    return(
        <div
            style={{backgroundImage: `url(/ProductCardImg/${product?.name}.png)`}}
            className="relative h-140 lg:h-160 mb-6 border bg-center bg-no-repeat bg-cover rounded cursor-pointer hover:-translate-y-2 duration-200 shadow-2xs"
            onClick={() => setSelectedProduct(product)}
        >
            <div
                className="absolute bottom-0 bg-black/60 text-white w-full uppercase h-20 flex items-center justify-center text-4xl"
            >
                {product?.name}
            </div>
        </div>
    )
}