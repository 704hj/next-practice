import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
    return instance.get('/products');
}

//아래 실습2에 해당하는 api함수를 합친 것
// function fetchProducts(productId) {
//     return instance.get('/products', {
//         params: {
//             id: productId,
//         },
//     });
// }

//실습2: 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
    return instance.get(`/products/${id}`);
}

export { fetchProducts, fetchProductById };

// CRUD
// create - 생성
// delete - 삭제
// update - 수정 
// get - 조회 

// instance.get()
// axios.get()
// axios.delete()