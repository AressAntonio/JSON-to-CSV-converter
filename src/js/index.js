//json de prueba
[
 {
  "id": 1,
  "nombre": "Sera",
  "edad": 30
 },
 {
  "id": 2,
  "nombre": "Toño",
  "edad": 20
 }
]


//variables con propiedades traidas del dom
const jsonform = document.querySelector('#jsonform');
const csv = document.querySelector('#csvform');
const bConvert = document.querySelector('#bConvert');

bConvert.addEventListener('click', e=>{
	convertJSONtoCSV();
});

convertJSONtoCSV=()=>{
	let json;
	let keys = [];
	let values = [];

	try{
		json = JSON.parse(jsonform.value);
	}catch(error){
		console.log('Formato incorrecto', error);
		alert('No se pudo convertir revisa tu formato y vuelve a intentar');
		return;

	};

	if(Array.isArray(json)){
		json.forEach((item) =>{
			const nkeys = Object.keys(item);

			if(keys.length==0){
				keys = [...nkeys];
			}else{
				if(nkeys.length !== keys.length){
					throw new Error('Number of keys are different');
				}else{
					console.log('ok', nkeys);
				};
			};

			const row = keys.map(k =>{
				return item[k];
			});

			values.push([...row]);
		});
		console.log(keys, values);
		values.unshift(keys);

		const text = values.map((v) =>v.join(',')).join('\n');
		csvform.value = text;

	}else{
		alert('No es un arreglo de objetos(JSON)');
	};

}