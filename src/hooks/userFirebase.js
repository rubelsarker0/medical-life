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
	sendEmailVerification,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

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

	const emailVerification = () => {
		sendEmailVerification(auth.currentUser).then(() => {});
	};

	const logOut = () => {
		setLoading(false);
		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});
	}, [auth]);

	return {
		user,
		setUserName,
		handleGoogleSignIn,
		handleGithubSignIn,
		handleEmailPasswordRegister,
		handleEmailPasswordSignIn,
		emailVerification,
		loading,
		setLoading,
		logOut,
	};
};

export default useFirebase;
