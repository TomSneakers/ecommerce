export function Card({onClick, product}){
    return (
        <div className="p-2 bg-white rounded-md">
            <img
                src={product.image}
                alt=""
                className="h-52 w-full object-cover"
            />
            <div className="text-center my-2">
                <strong> {product.model} </strong>
                <p className="">{product.marque}</p>
                <p className="font-bold text-lg italic my-2">{product.prix}€</p>
                <button
                    className="hover:bg-cyan-500 transition-all hover:scale-110 bg-black text-white font-bold text-lg cursor-pointer rounded-md p-2"
                    onClick={()=> onClick(product)}
                >
                    Ajouter au panier
                </button>
            </div>
        </div>
    )
}
