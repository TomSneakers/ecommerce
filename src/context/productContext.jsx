import {createContext, useContext} from "react";

const ProductContext = createContext({});

export function useProductContext() {
    return useContext(ProductContext);
}

export function ProductProvider({children}) {
    const products = [
        {
            marque: "jordan",
            model: "JD3 Cement",
            prix: 180,
            image: "/image/cement.webp",
        },
        {
            marque: "nike",
            model: "dunk low panda",
            prix: 180,
            image: "/image/nike.jpg",
        },
        {
            marque: "adidas",
            model: "FORUM",
            prix: 180,
            image: "/image/adidas.webp",
        },
        {
            marque: "jordan",
            model: "Jd1 hight UNC",
            prix: 180,
            image: "/image/jordan-UNC.jpeg",
        },
    ];

    return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}