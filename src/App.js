import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/">
					<Home></Home>
				</Route>
				<Route path="/home">
					<Home></Home>
				</Route>
				<Route path="/signin">
					<SignIn></SignIn>
				</Route>
				<Route path="/signup">
					<SignUp></SignUp>
				</Route>
				<Route path="*">
					<NotFound></NotFound>
				</Route>
			</Switch>
			<Footer></Footer>
		</Router>
	);
}

export default App;
