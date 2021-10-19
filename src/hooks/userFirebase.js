import {
	getAuth,
	signOut,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const loginUser = result.user;
				console.log(loginUser);
				console.log(user);
			})
			.catch((error) => console.log(error.message));
	};

	const handleGithubSignIn = () => {
		signInWithPopup(auth, githubProvider).then((result) => {
			const signUser = result.user;
			setUser(signUser);
		});
	};

	const handleEmailPasswordRegister = (email, password, name) => {
		createUserWithEmailAndPassword(auth, email, password, name).then(
			(result) => {
				const RegisterUser = result.user;
				console.log(RegisterUser);
			}
		);
	};

	const handleEmailPasswordSignIn = (email, password) => {
		signInWithEmailAndPassword(auth, email, password).then((result) => {
			const signUser = result.user;
			setUser(signUser);
			console.log(signUser);
		});
	};

	const setUserName = (name) => {
		updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
	};

	const logOut = () => {
		signOut(auth).then(() => {
			setUser(null);
		});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
				console.log(user);
			}
		});
	}, []);

	return {
		user,
		setUserName,
		handleGoogleSignIn,
		handleGithubSignIn,
		handleEmailPasswordRegister,
		handleEmailPasswordSignIn,
		logOut,
	};
};

export default useFirebase;
