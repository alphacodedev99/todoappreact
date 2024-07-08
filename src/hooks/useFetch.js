import { useEffect, useState } from "react";
import ProductsService from '../services/ProductsService';

const useFetch = (fetchSingle) => {

    const [allProducts, setAllProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(fetchSingle === 'singleProduct'){
            // jedan prozivod
        }else{
            ProductsService.getAllProductService()
            .then((res) => {
                // console.log(res.data.products)
                setAllProducts(res.data.products)
                setIsLoading(true)
            })
            .catch((err) => console.log(err))
        }
    },[])

    return {allProducts, isLoading}


}

export default useFetch;