export const FETCH_CONVERTED_CURRECNY = 'FETCH_CONVERTED_CURRECNY';
export const FETCH_CURRENCY_LIST = 'FETCH_CURRENCY_LIST';
export const SELECT_CURRENCY_FROM = 'SELECT_CURRENCY_FROM';
export const SELECT_CURRENCY_TO = 'SELECT_CURRENCY_TO';
export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';
export const SELECT_CURRENCY_FROM_DOWNLOAD = 'SELECT_CURRENCY_FROM_DOWNLOAD';
export const SELECT_CURRENCY_TO_1_DOWNLOAD = 'SELECT_CURRENCY_TO_1_DOWNLOAD';
export const SELECT_CURRENCY_TO_2_DOWNLOAD = 'SELECT_CURRENCY_TO_2_DOWNLOAD';
export const SELECT_CURRENCY_TO_3_DOWNLOAD = 'SELECT_CURRENCY_TO_3_DOWNLOAD';
export const SELECT_CURRENCY_TO_4_DOWNLOAD = 'SELECT_CURRENCY_TO_4_DOWNLOAD';
export const SELECT_CURRENCY_TO_5_DOWNLOAD = 'SELECT_CURRENCY_TO_5_DOWNLOAD';
export const SELECT_CURRENCY_TO_6_DOWNLOAD = 'SELECT_CURRENCY_TO_6_DOWNLOAD';
export const SET_CSV_DATA = 'SET_CSV_DATA';
export const FETCHING_CURRENCY_LIST = 'FETCHING_CURRENCY_LIST';
export const FETCHING_CONVERSION = 'FETCHING_CONVERSION';
export const GENERATING_CSV = 'GENERATING_CSV';

export const fetchingCurrencyList = () => ({
	type: FETCHING_CURRENCY_LIST
})

export const fetchingConversion = () => ({
	type: FETCHING_CONVERSION
})

export const generatingCsv = () => ({
	type: GENERATING_CSV
})

export const selectCurrencyFromDownload = (payload) => ({
	type: SELECT_CURRENCY_FROM_DOWNLOAD, payload
})

export const selectCurrencyTo1Download = (payload) => ({
	type: SELECT_CURRENCY_TO_1_DOWNLOAD, payload
})

export const selectCurrencyTo2Download = (payload) => ({
	type: SELECT_CURRENCY_TO_2_DOWNLOAD, payload
})

export const selectCurrencyTo3Download = (payload) => ({
	type: SELECT_CURRENCY_TO_3_DOWNLOAD, payload
})

export const selectCurrencyTo4Download = (payload) => ({
	type: SELECT_CURRENCY_TO_4_DOWNLOAD, payload
})

export const selectCurrencyTo5Download = (payload) => ({
	type: SELECT_CURRENCY_TO_5_DOWNLOAD, payload
})

export const selectCurrencyTo6Download = (payload) => ({
	type: SELECT_CURRENCY_TO_6_DOWNLOAD, payload
})

export const changeAmount = (payload) => ({
	type: CHANGE_AMOUNT, payload
})

export const selectCurrencyFrom = (payload) => ({
	type: SELECT_CURRENCY_FROM, payload
})

export const selectCurrencyTo = (payload) => ({
	type: SELECT_CURRENCY_TO, payload
})

export const generateCurrencyConversion = ({selectedCurrencyFromDownload , ...payload}) => 
	(dispatch) => {
		const newPayload = {
			selectedCurrencyFromDownload,
			selectedCurrencyToDownload: Object.values(payload).filter(value => value !== '')
		}
		console.log(newPayload)
        fetch('/api/generateCurrencyConversion', {
        	method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPayload)
        })
        .then(res => res.json())
        .then(data => dispatch({
        	type: SET_CSV_DATA,
            payload: data
        }))
    }

export const fetchConvertedCurrency = (payload) => 
	(dispatch) => {
        fetch('/api/convertCurrency', {
        	method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_CONVERTED_CURRECNY,
            payload: data
        }))
    }

export const fetchCurrencyLists = () => 
	(dispatch) => {
        fetch('/api/currencyLists')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_CURRENCY_LIST,
            payload: data
        }))
    }