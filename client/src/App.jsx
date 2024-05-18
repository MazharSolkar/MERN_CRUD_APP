import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Headers } from './components';

function App() {
	return (
		<div>
			<Headers />
			<h1>Hello</h1>
		</div>
	);
}

export default App;
