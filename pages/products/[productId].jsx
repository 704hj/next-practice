import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';
import axios from 'axios';
import React from 'react'

export default function ProductDetailPage({message, productDetail}) {
  const headerTitle = "상품 상세 정보 페이지";

  return (
    <div>
      {/* ProductHeader 컴포넌트 등록 후 title 프롭스에 "상품 상세 정보 페이지" 라고 데이터를 전달해보자 */}
      <ProductHeader title = {headerTitle}></ProductHeader>
      <ProductInfo productDetail={productDetail}></ProductInfo>
      <div>ProductDetailPage : {message} </div>
      <div>productDetail : {JSON.stringify(productDetail)}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  //동적 라우팅
    console.log('## produdctId : ', context.params.productId);
    
    const id = context.params.productId;
    
    // 실습2 : 아래 api 호출 코드를 api 함수로 분리해보기
    // const response = await axios.get(`http://localhost:4000/products/${id}`);
    // response.data;
       const {data} = await fetchProductById(id);

    

    return {  //리엑트 컴포넌트의 props
      props: { 
        message: '서버에서 보내준 메시지',
        productDetail: data,
      },
    }
}
