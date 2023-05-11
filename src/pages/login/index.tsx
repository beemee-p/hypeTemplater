import { useState } from 'react';
import Button from '@/components/common/Button';
import GoogleLoginPopUpProvider from '@/utils/auths/GoogleLoginPopUpProvider';

const Login = () => {
  const [signPopupOpen, setLoginPopupOpen] = useState<boolean>(false);
  return (
    <>
      <GoogleLoginPopUpProvider
        open={signPopupOpen}
        close={() => setLoginPopupOpen(false)}
      />
      <Button onClick={() => setLoginPopupOpen(true)}>로그인하기</Button>
    </>
  );
};

export default Login;
