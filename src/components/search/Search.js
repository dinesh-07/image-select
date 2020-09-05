import React, { useState } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import { ImageResult } from '../image-results/ImageResult.js';
export const Search = () => {
	const [state, setState] = useState({
		searchText: '',
		amount: 15,
		apiUrl: 'https://pixabay.com/api',
		apiKey: '18160144-1fe63d9488d7d5038862741c3',
		images: [],
	});

	const onTextChange = (e) => {
		const searchText = e.target.value;
		if (searchText === '') {
			setState({
				...state,
				searchText: '',
				images: [],
			});
		} else {
			axios
				.get(
					`${state.apiUrl}/?key=${state.apiKey}&q=${searchText}&image_type=photo&per_page=${state.amount}&safeSearch=true`
				)
				.then((response) => setState({ ...state, searchText, images: response.data.hits }));
		}
	};
	const onAmountChange = (e, index, value) => {
		setState({
			...state,
			amount: value,
		});
	};
	return (
		<div>
			<TextField
				name="searchText"
				value={state.searchText}
				onChange={onTextChange}
				floatingLabelText="Search For Images"
			/>
			<br />
			<SelectField name="amount" floatingLabelText="Frequency" value={state.amount} onChange={onAmountChange}>
				<MenuItem value={5} primaryText="5" />
				<MenuItem value={10} primaryText="10" />
				<MenuItem value={15} primaryText="15" />
				<MenuItem value={30} primaryText="30" />
				<MenuItem value={50} primaryText="50" />
			</SelectField>
			<br />
			{state.images.length > 0 ? <ImageResult images={state.images} /> : null}
		</div>
	);
};
