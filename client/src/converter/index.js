import React, {Component} from 'react';
import {CSVLink} from 'react-csv';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
	fetchConvertedCurrency,
	fetchCurrencyLists,
	selectCurrencyFrom,
	selectCurrencyTo,
	changeAmount,
	selectCurrencyFromDownload,
	selectCurrencyTo1Download,
	selectCurrencyTo2Download,
	selectCurrencyTo3Download,
	selectCurrencyTo4Download,
	selectCurrencyTo5Download,
	selectCurrencyTo6Download,
	generateCurrencyConversion,
	fetchingCurrencyList,
	fetchingConversion,
	generatingCsv
} from './action';
import reducer from './reducer'; 
import './converter.css';

const ConverterComponent = ({
		amount,
		onChangeAmount,
		convertedCurrency,
		currencyLists,
		onFetchConvertedCurrency,
		selectedCurrencyFrom,
		onSelectCurrencyFrom,
		selectedCurrencyTo,
		onSelectCurrencyTo,
		isFetchingConversion,
		onFetchingConversion
	}) => (
	<Paper className="paperContainer">
	<div class="conversionContainer">
		<div className="row">
			<FormControl style={{minWidth: 60}}>
			<InputLabel>From</InputLabel>
				<Select 
					required
					disableUnderline={true}
					value={selectedCurrencyFrom}
					onChange={(event) => (
						onSelectCurrencyFrom(event.target.value)
					)}
				>
					{Object.values(currencyLists).map(({id}) => (
						<MenuItem key={id} value={id}>{id}</MenuItem>
					))}

				</Select>
			</FormControl>
			<TextField
				className="conversionTextInput"
				required
				value={amount}
			 	type={'number'}
			 	onChange={(event) => (
					onChangeAmount(event.target.value)
				)}
			/>
		</div>
		<div className="row">
			<FormControl style={{minWidth: 60}}>
			<InputLabel>to</InputLabel>
				<Select 
					required
					disableUnderline={true}
					value={selectedCurrencyTo}
					onChange={(event) => (
						onSelectCurrencyTo(event.target.value)
					)}
				>
					{Object.values(currencyLists).map(({id}) => (
						<MenuItem key={id} value={id}>{id}</MenuItem>
					))}

				</Select>
			</FormControl>
			<TextField
				className="conversionTextInput"
				value={convertedCurrency}
				disabled
			/>
		</div>
		<Button 
			disabled={!selectedCurrencyFrom || !selectedCurrencyTo || !amount || isFetchingConversion}
			variant="contained"
			color="secondary"
			onClick={() => {
				onFetchingConversion()
				onFetchConvertedCurrency({
					selectedCurrencyFrom,
					selectedCurrencyTo,
					amount
				})
			}}
		>
			{isFetchingConversion ?
				<CircularProgress color="secondary" size={14} /> : 
				<div>Convert</div> 
			}
		</Button>
	</div>
	</Paper>
);

const DownloadCurrency = ({
	currencyLists,
	selectedCurrencyFromDownload,
	selectedCurrencyTo1Download,
	selectedCurrencyTo2Download,
	selectedCurrencyTo3Download,
	selectedCurrencyTo4Download,
	selectedCurrencyTo5Download,
	selectedCurrencyTo6Download,
	onSelectCurrencyFromDownload,
	onSelectCurrencyTo1Download,
	onSelectCurrencyTo2Download,
	onSelectCurrencyTo3Download,
	onSelectCurrencyTo4Download,
	onSelectCurrencyTo5Download,
	onSelectCurrencyTo6Download,
	onGenerateCurrencyConversion,
	onGeneratingCsv,
	isGeneratingCsv,
	"csvData": {
		fields,
		value
	}
}) => (
	<Paper className="paperContainer">
		<div className="conversionContainer">
			<FormControl style={{minWidth: 130}}>
				<InputLabel>Select Currency</InputLabel>
				<Select 
					required
					value={selectedCurrencyFromDownload}
					disableUnderline={true}
					onChange={(event) => {
						onSelectCurrencyFromDownload(event.target.value)
					}}
				>
					{Object.values(currencyLists).map(({id}) => (
						<MenuItem key={id} value={id}>{id}</MenuItem>
					))}

				</Select>
			</FormControl>
			<div className="currenciesContainer">
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 1</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo1Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo1Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 2</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo2Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo2Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 3</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo3Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo3Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 4</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo4Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo4Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 5</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo5Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo5Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
				<FormControl style={{minWidth: 130}}>
					<InputLabel>Currency 6</InputLabel>
					<Select 
						required
						value={selectedCurrencyTo6Download}
						disableUnderline={true}
						onChange={(event) => {
							onSelectCurrencyTo6Download(event.target.value)
						}}
					>
						{Object.values(currencyLists).map(({id}) => (
							<MenuItem key={id} value={id}>{id}</MenuItem>
						))}

					</Select>
				</FormControl>
			</div>
			<Button 
				style={{marginBottom: '5%'}}
				variant="contained"
				color="primary"
				disabled={
					!selectedCurrencyFromDownload ||
					!selectedCurrencyTo1Download &
					!selectedCurrencyTo2Download &
					!selectedCurrencyTo3Download &
					!selectedCurrencyTo4Download &
					!selectedCurrencyTo5Download &
					!selectedCurrencyTo6Download ||
					isGeneratingCsv
				}
				onClick={()=> {
					onGeneratingCsv()
					onGenerateCurrencyConversion({
						selectedCurrencyFromDownload,
						selectedCurrencyTo1Download,
						selectedCurrencyTo2Download,
						selectedCurrencyTo3Download,
						selectedCurrencyTo4Download,
						selectedCurrencyTo5Download,
						selectedCurrencyTo6Download,
					})
				}}
			>
		        {isGeneratingCsv ?
					<CircularProgress color="primary" size={14} /> : 
					<div>Generate</div> 
				}
		    </Button>
		    { value ? 
			    <CSVLink 
			    	disabled data={value || []}
			    	headers={fields || []}
			    	filename={"rates.csv"}
			    >
				    Download
				</CSVLink> : null
		    }
	    </div>
    </Paper>
)

class Converter extends Component {
	componentWillMount() {
		this.props.onFetchingCurrencyList()
		this.props.onFetchCurrencyLists()
	}

	render() {

		return (
			<div className="container">
				{this.props.isFetchingCurrencyList ? <CircularProgress /> :
					<div>
						<ConverterComponent {...this.props}/>
				    	<DownloadCurrency {...this.props}/>
			    	</div>
				}
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	convertedCurrency: state.convertedCurrency || '',
	currencyLists: state.currencyLists || {},
	selectedCurrencyFrom: state.selectedCurrencyFrom || '',
	selectedCurrencyTo: state.selectedCurrencyTo || '',
	amount: state.amount || '',
	selectedCurrencyFromDownload:  state.selectedCurrencyFromDownload || '',
	selectedCurrencyTo1Download:  state.selectedCurrencyTo1Download || '',
	selectedCurrencyTo2Download:  state.selectedCurrencyTo2Download || '',
	selectedCurrencyTo3Download:  state.selectedCurrencyTo3Download || '',
	selectedCurrencyTo4Download:  state.selectedCurrencyTo4Download || '',
	selectedCurrencyTo5Download:  state.selectedCurrencyTo5Download || '',
	selectedCurrencyTo6Download:  state.selectedCurrencyTo6Download || '',
	csvData: state.csvData || {},
	isFetchingCurrencyList: state.isFetchingCurrencyList || false,
	isFetchingConversion: state.isFetchingConversion || false,
	isGeneratingCsv: state.isGeneratingCsv || false,
})

export {reducer};
export default connect(
	(mapStateToProps),
	{
		onSelectCurrencyFrom: selectCurrencyFrom,
		onSelectCurrencyTo: selectCurrencyTo,
		onFetchConvertedCurrency: fetchConvertedCurrency,
		onFetchCurrencyLists: fetchCurrencyLists,
		onChangeAmount: changeAmount,
		onSelectCurrencyFromDownload: selectCurrencyFromDownload,
		onSelectCurrencyTo1Download: selectCurrencyTo1Download,
		onSelectCurrencyTo2Download: selectCurrencyTo2Download,
		onSelectCurrencyTo3Download: selectCurrencyTo3Download,
		onSelectCurrencyTo4Download: selectCurrencyTo4Download,
		onSelectCurrencyTo5Download: selectCurrencyTo5Download,
		onSelectCurrencyTo6Download: selectCurrencyTo6Download,
		onGenerateCurrencyConversion: generateCurrencyConversion,
		onFetchingCurrencyList: fetchingCurrencyList,
		onFetchingConversion: fetchingConversion,
		onGeneratingCsv: generatingCsv
	}
)(Converter)
