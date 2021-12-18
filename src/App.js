import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Container fluid>
				<Navigation />
				<Main />
			</Container>
		</Router>
	);
}

export default App;
