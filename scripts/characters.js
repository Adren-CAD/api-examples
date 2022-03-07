const axios = require('axios');

const API_URL = 'http://localhost:3001/v1';

let key = 'Opw/cC0-ywpcJ2gafu.dw_IC7HauYjdurZYe_+faok';

axios.defaults.headers.common['Authorization'] = `Bearer ${key}`;

axios
	.get(API_URL + '/characters/get', {
		params: {
			// userId: '123',
			// departmentId: '123',
			// characterId: '6219c8fd956198d240cfdcfb',
		},
	})
	.then(({ data }) => {
		console.log(data);
	});

// axios
// 	.post(API_URL + '/characters/edit', {
// 		characterId: '6219c8fd956198d240cfdcfb',
// 	})
// 	.then(({ data }) => {
// 		console.log(data);
// 	});
