import { useState } from 'react';
import Button from '@/components/common/Button';
import GoogleLoginPopUp from '@/utils/auths/GoogleLoginPopUp';

const Login = () => {
  const [signPopupOpen, setLoginPopupOpen] = useState<boolean>(false);
  return (
    <>
      <GoogleLoginPopUp
        open={signPopupOpen}
        close={() => setLoginPopupOpen(false)}
      />
      <Button onClick={() => setLoginPopupOpen(true)}>로그인하기</Button>
    </>
  );
};

export default Login;
