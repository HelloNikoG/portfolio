import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import About from './components/About';
import Main from './components/Main';

function App() {
	return (
		<Container className="App">
			<Main />
		</Container>
	);
}

export default App;
