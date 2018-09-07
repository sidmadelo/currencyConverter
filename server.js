const Express = require('express');
const axios = require('axios');

const app = Express();
app.use(Express.json());

app.post('/api/convertCurrency', (req, res) => {
	const {selectedCurrencyFrom, selectedCurrencyTo, amount} = req.body

	fromCurrency = encodeURIComponent(selectedCurrencyFrom);
	toCurrency = encodeURIComponent(selectedCurrencyTo);
	var query = fromCurrency + '_' + toCurrency;

	var url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
            + query + '&compact=y';

    axios(url)
    .then((response) => {
    	const conversion = Object.values(response.data[query])[0];
    	const value = (conversion * amount).toString();
		res.send(value);
	})
	.catch((error) => {
	   res.send(error);;
	});

})

app.post('/api/generateCurrencyConversion', (req, res) => {

	const { selectedCurrencyFromDownload, selectedCurrencyToDownload } = req.body

	var csvRate = []

	const fields = [
		{label: selectedCurrencyFromDownload, key: selectedCurrencyFromDownload},
		{label: 'currency', key:'id'},
		{label:'rate', key: 'rate'}
	];
	
	selectedCurrencyToDownload.map(id => {
		fromCurrency = encodeURIComponent(selectedCurrencyFromDownload);
		toCurrency = encodeURIComponent(id);
		var query = fromCurrency + '_' + toCurrency;

		var url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
	            + query + '&compact=y';

		const getRate = axios(url)
		.then((response) => {
			var rates = {};
			rates.id = id;
			rates.rate = Object.values(response.data[query])[0];

	    	return rates
		})
		.catch((error) => {
		   res.send(error);;
		});

		csvRate.push(getRate); 
	})

	Promise.all(csvRate).then((value) =>{
		res.send({fields,value})
	})

})

app.get('/api/currencyLists', (req, res) => {
	axios('https://free.currencyconverterapi.com/api/v6/currencies')
    .then((response) => {
    	res.send(response.data.results)
	})
	.catch((error) => {
	   res.send(error);;
	});
	
})

const port = 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));

