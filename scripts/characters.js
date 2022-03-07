const axios = require('axios');

const API_URL = 'https://api.adrencad.com/v1';

let key = 'API Key';

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

axios
	.post(API_URL + '/characters/create', {
		// userId: '62101264e8bc434210fefd70',
		// departmentId: '62101280e8bc434210fefd7a',
		characterData: {
			firstName: 'Bill',
			middleInitial: 'L',
			lastName: 'Booscavski',
			alias: 'gansta',
			residence: '109 gangster way',
			DOB: '10-02-1995',
			heightFeet: '6',
			heightInches: '4',
			weight: '180',
			sex: 'Male',
		},
	})
	.then(({ data }) => {
		console.log(data);
	});

axios
	.post(API_URL + '/characters/delete', {
		characterId: '622550dc9c81332b08f90aab',
	})
	.then(({ data }) => {
		console.log(data);
	});

axios
	.post(API_URL + '/characters/edit', {
		characterId: '622551cb7a33c94bc01fc95a',
		updatedCharacter: {
			firstName: 'asdasd',
			middleInitial: 'L',
			lastName: 'Booscavski',
			alias: 'gansta',
			residence: '109 gangster way',
			DOB: '10-02-1995',
			heightFeet: '6',
			heightInches: '4',
			weight: '180',
			sex: 'Male',
		},
	})
	.then(({ data }) => {
		console.log(data);
	});
