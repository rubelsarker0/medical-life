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
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute, {
	AuthPrivateRoute,
} from './components/PrivateRoute/PrivateRoute';

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
					<AuthPrivateRoute path="/signin">
						<SignIn></SignIn>
					</AuthPrivateRoute>
					<AuthPrivateRoute path="/signup">
						<SignUp></SignUp>
					</AuthPrivateRoute>
					<PrivateRoute path="/services">
						<Services></Services>
					</PrivateRoute>
					<PrivateRoute path="/service/:id">
						<ServiceDetails></ServiceDetails>
					</PrivateRoute>
					<Route path="/about">
						<AboutUs></AboutUs>
					</Route>
					<PrivateRoute path="/contact">
						<Contact></Contact>
					</PrivateRoute>
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
