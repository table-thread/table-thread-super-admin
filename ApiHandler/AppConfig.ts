/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApiHost, localHost } from '@/utils/constants';

const BASE_URL: string = ApiHost;

const endPoints: any = {

	// auth
	login: `${BASE_URL}/auth/admin-login`,

	// product
	addProduct: `${BASE_URL}/admin/add-product`,


	//product Category
	addCategory: `${BASE_URL}/admin/add-category`,
	getCategorys: `${BASE_URL}/admin/get-categories`,
	updateCategory: `${BASE_URL}/admin/update-category`,
	// deleteCategory: `${BASE_URL}/admin/delete-category/${_id}`,


	// Restaurants
	getRestaurants: `${BASE_URL}/admin/get-restaurants`,

}

export default endPoints;