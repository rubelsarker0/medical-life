import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import AuthProvider from './components/AuthProvider/AuthProvider';

function App() {
	return (
		<AuthProvider>
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
					<Route path="/services">
						<Services></Services>
					</Route>
					<Route path="/about">
						<AboutUs></AboutUs>
					</Route>
					<Route path="/contact">
						<Contact></Contact>
					</Route>
					<Route path="*">
						<NotFound></NotFound>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</AuthProvider>
	);
}

export default App;
