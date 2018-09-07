import {
	FETCH_CONVERTED_CURRECNY,
	FETCH_CURRENCY_LIST,
	SELECT_CURRENCY_FROM,
	SELECT_CURRENCY_TO,
	CHANGE_AMOUNT,
	SELECT_CURRENCY_FROM_DOWNLOAD,
	SELECT_CURRENCY_TO_1_DOWNLOAD,
	SELECT_CURRENCY_TO_2_DOWNLOAD,
	SELECT_CURRENCY_TO_3_DOWNLOAD,
	SELECT_CURRENCY_TO_4_DOWNLOAD,
	SELECT_CURRENCY_TO_5_DOWNLOAD,
	SELECT_CURRENCY_TO_6_DOWNLOAD,
	SET_CSV_DATA,
	FETCHING_CURRENCY_LIST,
	FETCHING_CONVERSION,
	GENERATING_CSV
} from './action';

const initialState = [
	{
		convertedCurrency: "",
		currencyLists: {},
		selectedCurrencyFrom:  '',
		selectedCurrencyTo:  '',
		amount: '',
		selectedCurrencyFromDownload:  '',
		selectedCurrencyTo1Download:  '',
		selectedCurrencyTo2Download:  '',
		selectedCurrencyTo3Download:  '',
		selectedCurrencyTo4Download:  '',
		selectedCurrencyTo5Download:  '',
		selectedCurrencyTo6Download:  '',
		csvData: {},
		isFetchingCurrencyList: false,
		isFetchingConversion: false,
		isGeneratingCsv: false,
	}
]

export default (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CONVERTED_CURRECNY: 
			return {
				...state,
				convertedCurrency: action.payload,
				isFetchingConversion: false
			}
		case FETCH_CURRENCY_LIST: 
			return {
				...state,
				currencyLists: action.payload,
				isFetchingCurrencyList: false
			}
		case SELECT_CURRENCY_FROM: 
			return {
				...state,
				selectedCurrencyFrom: action.payload
			}
		case SELECT_CURRENCY_TO: 
			return {
				...state,
				selectedCurrencyTo: action.payload
			}
		case CHANGE_AMOUNT: 
			return {
				...state,
				amount: action.payload
			}
		case SELECT_CURRENCY_FROM_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyFromDownload: action.payload
			}
		case SELECT_CURRENCY_TO_1_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo1Download: action.payload
			}
		case SELECT_CURRENCY_TO_2_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo2Download: action.payload
			}
		case SELECT_CURRENCY_TO_3_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo3Download: action.payload
			}
		case SELECT_CURRENCY_TO_4_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo4Download: action.payload
			}
		case SELECT_CURRENCY_TO_5_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo5Download: action.payload
			}
		case SELECT_CURRENCY_TO_6_DOWNLOAD: 
			return {
				...state,
				selectedCurrencyTo6Download: action.payload
			}
		case SET_CSV_DATA: 
			return {
				...state,
				csvData: action.payload,
				isGeneratingCsv: false,
			}
		case FETCHING_CURRENCY_LIST: 
			return {
				...state,
				isFetchingCurrencyList: true
			}
		case FETCHING_CONVERSION: 
			return {
				...state,
				isFetchingConversion: true
			}
		case GENERATING_CSV: 
			return {
				...state,
				isGeneratingCsv: true
			}
		default:
			return state;
	}
}