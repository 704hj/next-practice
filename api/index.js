import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
});


/** 
 * @description  상품 목록을 조회하는 API 함수
*/

function fetchProducts() {
    return instance.get('/products');
}

//실습2: 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
    return instance.get(`/products/${id}`);
}

//특정 상품 상세 정보를 조회하는 api 함수
function createCartItem({id, name, imageUrl, price}){
    return instance.post('/carts', {
        id: id,
        name: name,
        imageUrl,//객체 축약 문법
        price,
    });
}

// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
    return instance.get('/carts');

}

//특정 아이디에 해당하는 장바구니 아이템을 삭제하는 API 함수
function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export { fetchProducts, fetchProductById, createCartItem, fetchCarts, removeCartItem,};

// CRUD
// create - 생성
// delete - 삭제
// update - 수정 
// get - 조회 

// instance.get()
// axios.get()
// axios.delete()