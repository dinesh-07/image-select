import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Navbar } from './components/navbar/Navbar.js';
import { Search } from './components/search/Search.js';

function App() {
	return (
		<MuiThemeProvider>
			<div>
				<Navbar />
				<Search />
			</div>
		</MuiThemeProvider>
	);
}

export default App;
