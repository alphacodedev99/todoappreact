import axios from "axios";

class ProductsService {
    static getAllProductService = () => axios.get('/products')
}

export default ProductsService;
