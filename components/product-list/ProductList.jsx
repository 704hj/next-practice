import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './ProductList.module.css';
import Link from "next/link";
import { fetchProducts } from "@/api";

function ProductList() {

  const  [products, setProducts] = useState(); 

  useEffect(()  => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
    
    // 위와 같은 함수
    // axios.get('http://localhost:4000/products').then(response => {
    //   setProducts(response.data);
    // })
  }, []);

  console.log(products);

  return (
    <ul>
        {products && products.map(product => {
        return (
          <li key={product.id} className={styles.item}>
            <Link href={`/products/${product.id}`}>
              <div>
                <Image src={product.imageUrl} width={300} height={300} alt={product.name}></Image>
              </div>
              <div>
                 <div>{product.name}</div>
                 <div>{product.price}</div>
               </div>
            </Link>
        </li>
        );
       })}
    </ul>
  );
}

export default ProductList;