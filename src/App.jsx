
import axios from 'axios'
import './App.css'
import useFetch from './hooks/useFetch';

axios.defaults.baseURL = 'https://dummyjson.com';

function App() {

  const {allProducts, isLoading} = useFetch()

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {isLoading && allProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
