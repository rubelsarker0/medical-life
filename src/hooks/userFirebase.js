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
	const [user, setUser] = useState(null);

	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const handleGithubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};

	const handleEmailPasswordRegister = (email, password, name) => {
		return createUserWithEmailAndPassword(auth, email, password, name);
	};

	const handleEmailPasswordSignIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
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
