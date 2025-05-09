import React, { useReducer } from 'react'
import Image from 'next/image';
import styles from './CartList.module.css';
import { removeCartItem } from '@/api';
import { useRouter } from 'next/router';

function CartList({ carts }){ //reduce() : 배열 각각의 총 합을 뽑아주는 메서드
  const router = useRouter();

  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price); //문자열을 숫자로 변경
  }, 0);

  const removeCart = async id => {
    // 1. 삭제 API 호출
    const { data } = await removeCartItem(id);
    alert(`${data.name}삭제가 되었습니다.`);
    // 2. 상품 목록 갱신
    router.replace(router.asPath);
  };

  return (
      <div>
        <div>
            <ul>
                {carts.map(cart => {
                    return(
                      <li key={cart.id} className={styles.item}>
                          <div>
                             <Image src={cart.imageUrl} 
                                    alt={cart.name}
                                    width={50}
                                    height={50} />
                          </div>
                           <div className={styles.description}>
                              <div>{cart.name}</div>
                              <div>{cart.price}</div>
                              <button onClick={()=> removeCart(cart.id)}>삭제하기</button>
                          </div>
                        </li>
                      );
                  })}
              </ul>
          </div>
          <div>
             <p>총 가격 : {totalPrice}</p>   
             <p>총 수량 : {carts.length}</p>       
          </div>
      </div>
  )
}

export default CartList;