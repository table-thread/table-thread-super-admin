import axios from 'axios';
import { getToken } from '@/utils/helper';

const TAG = 'NetworkOps: ';
const API_TIMEOUT = 100000;

axios.interceptors.request.use(async (config) => {

	let newConfig = {
		...config,
		timeout: API_TIMEOUT,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json, Text/plain, */*',
		}
	};

	try {

		const { isTokenRequired = false } = config || {};
		// console.log(TAG, 'isTokenRequired', isTokenRequired);

		if (isTokenRequired) {
			const { token } = getToken();
			console.log("token: ",token);
			newConfig = {
				...newConfig,
				headers: {
					Authorization: `Bearer ${token}`,
					// Authorization: String(token),
					...newConfig.headers,
				},
			};

			// console.log(`${TAG + config.method.toUpperCase} request sent to ${config.url} with header ${config.headers}`)
		}

	} catch (error) {
		console.log(TAG, 'Error in interceptor request', error);
	}

	return newConfig;
}, (error) => {
	console.log(TAG, 'Error in interceptor request', error);
	return Promise.reject(error);
});

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			// Sentry.captureException(`Error ${error}, ${error.response.data.error}, ${error.response.data.path}`);
			// console.log(TAG, "data", error.response.data);
			// console.log(TAG, "status", error.response.status);
			// console.log(TAG, "header", error.response.headers);
			return Promise.reject(error.response);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			// console.log(TAG, "request", error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			// console.log(TAG, 'Error', error.message);
		}
		// console.log(TAG, "config", error.config);
		return Promise.reject(error);
	},
);

const makeGetRequest = (URL, isTokenRequired = true) => axios.get(URL, { isTokenRequired });
const makePostRequest = (URL, data = {}, isTokenRequired = true) => axios.post(URL, { ...data }, { isTokenRequired });
const makePutRequest = (URL, data = {}, isTokenRequired = true) => axios.put(URL, { ...data }, { isTokenRequired });
const makePatchRequest = (URL, data = {}, isTokenRequired = true) => axios.patch(URL, { ...data }, { isTokenRequired });
const makeDeleteRequest = (URL, isTokenRequired = true) => axios.delete(URL, { isTokenRequired });

export default {
	makeGetRequest,
	makePostRequest,
	makePutRequest,
	makePatchRequest,
	makeDeleteRequest,
};
