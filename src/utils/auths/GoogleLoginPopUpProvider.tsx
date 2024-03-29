import { useEffect } from 'react';
import { auth } from '@/utils/firebase/ClientApp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { UserActions } from '@/store/user/Slice';

interface GoogleLoginPopUpProviderProps {
  open: boolean;
  close: () => void;
}

const GoogleLoginPopUpProvider = (props: GoogleLoginPopUpProviderProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!props.open) {
      return;
    }
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        dispatch(UserActions.setUser(user));
        alert(`${user.displayName}님 로그인 축하합니당 (${token})`);
        props.close();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({ errorCode, errorMessage, email, credential });
      })
      .finally(() => {
        props.close();
      });
  }, [props.open]);

  return <></>;
};

export default GoogleLoginPopUpProvider;
