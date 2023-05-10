import Button from '@/components/common/Button';
import { auth } from '@/utils/firebase/ClientApp';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useEffect, useState } from 'react';

const Login = () => {
  const [signPopupOpen, setLoginPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!signPopupOpen) {
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
        alert(`${user.displayName}님 로그인 축하합니당 (${token})`);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log({ errorCode, errorMessage, email, credential });
      });
  }, [signPopupOpen]);

  return (
    <>
      <Button onClick={() => setLoginPopupOpen(true)}>로그인하기</Button>
    </>
  );
};

export default Login;
