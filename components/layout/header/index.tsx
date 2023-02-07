import { getAuth, signOut } from 'firebase/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import { RoutePaths, RoutesEnum } from '../../../constants/routes';
import { Box, Typography } from '../../../elements';
import { LI, UL } from './header-elements';

const cookies = new Cookies();
interface IFormUser {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
function Header() {
  const [loginStatus, setLoginStatus] = useState('Entar');
  useEffect(() => {
    const user: IFormUser = cookies.get('user');
    if (user) {
      setLoginStatus(user.Name + ' | Sair');
    }
  }, []);

  function handleLogin() {
    const user: IFormUser = cookies.get('user');
    if (user) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          cookies.remove('user');
          setLoginStatus('Entrar');
        })
        .catch(() => {
          // An error happened.
        });
    } else {
      document.getElementById('linkLogin')?.click();
    }
  }
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      width="100%"
      padding="0 10%"
      margin="auto"
      alignItems="center"
      position="fixed"
      zIndex={100}
      background="white"
      borderBottom="1px solid #F3F5F8"
    >
      <Typography as="h1" m="L">
        <Link href={RoutePaths[RoutesEnum.Home]}>
          <img src="/logoNaturaLife.png" alt="LogoNatura" />
        </Link>
      </Typography>
      <Box>
        <UL display="flex" columnGap="15px">
          <LI>
            <Typography fontSize="1.6rem" color="primary">
              Home
            </Typography>
          </LI>
          <LI>
            <Typography fontSize="1.6rem">Sobre-nos</Typography>
          </LI>
          <LI>
            <Typography fontSize="1.6rem">Serviços</Typography>
          </LI>
          <LI>
            <Typography fontSize="1.6rem">Doenças</Typography>
          </LI>
          <LI>
            <Typography fontSize="1.6rem">Contacte-nos</Typography>
          </LI>
        </UL>
      </Box>
      <Box display="flex" columnGap="15px">
        <Box
          border="1px solid"
          borderColor="primary"
          padding="1rem 1.9rem"
          borderRadius="20px"
          cursor="pointer"
          onClick={handleLogin}
        >
          <Typography fontSize="1.6rem" color="primary">
            {loginStatus}
          </Typography>
        </Box>
        <a href="/login" id="linkLogin" style={{ display: 'none' }}>
          ok
        </a>
        <Box
          backgroundColor="primary"
          padding="1rem 1.9rem"
          borderRadius="20px"
          cursor="pointer"
        >
          <Typography fontSize="1.6rem" color="white">
            Marca uma consulta
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
