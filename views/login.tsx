import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

import { db } from '../api/clienteApp';
import { Layout2 } from '../components/layout';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Button, Input, Typography } from '../elements';
interface IFormValues {
  Email: string;
  Password: string;
}
const cookies = new Cookies();
function Login() {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.Email, data.Password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const docRef = doc(db, 'Users', data.Email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const Data = docSnap.data();
          cookies.set('userdata', Data.userdata, { path: '/' });
          cookies.set('user', Data.data, { path: '/' });
          document.getElementById('linkPlans')?.click();
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Layout2 pageTitle="Login">
      <Box
        // width="80%"
        margin="auto"
        marginTop="-3rem"
        display="flex"
        alignItems="center"
        flexDirection="column"
        rowGap="20px"
        backgroundColor="text2"
        height="100vh"
        justifyContent="center"
      >
        <img src="/logoNaturaLife-light.png" alt="LogoNatura" />
        <Box
          display="flex"
          backgroundColor="secondary2"
          flexDirection="column"
          alignItems="center"
          padding={30}
          borderRadius="10px"
          boxShadow="5px 5px 15px 5px rgba(0,0,0,0.10)"
          rowGap="15px"
          width="40%"
        >
          <Box>
            <Typography fontSize="3rem" color="text2">
              Entrar
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
            }}
          >
            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%">
                <Typography fontSize="1.6rem" color="text1">
                  Email *
                </Typography>
                <Input
                  type="email"
                  fontSize="1.6rem"
                  placeholder="Email"
                  backgroundColor="text1"
                  border="1px solid"
                  color="white"
                  padding="12px 10px"
                  borderRadius="7px"
                  width="100%"
                  required
                  marginTop="5px"
                  {...register('Email')}
                />
              </Box>
            </Box>
            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%">
                <Typography fontSize="1.6rem" color="text1">
                  Senha *
                </Typography>
                <Input
                  type="password"
                  fontSize="1.6rem"
                  placeholder="Senha"
                  backgroundColor="text1"
                  border="1px solid"
                  color="white"
                  padding="12px 10px"
                  borderRadius="7px"
                  required
                  width="100%"
                  marginTop="5px"
                  {...register('Password')}
                />
              </Box>
            </Box>

            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%" display="flex" columnGap="10px">
                <Input type="checkbox" backgroundColor="txt1" defaultChecked />
                <Box display="flex" columnGap="5px">
                  <Typography fontSize="1.6rem" color="text1">
                    Lembre de mim
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Button
              variant={'primary'}
              width="46rem"
              borderRadius={7}
              marginTop="15px"
              type="submit"
            >
              Conecte-se
            </Button>
            <a href="/plans" id="linkPlans" style={{ display: 'none' }}>
              ok
            </a>
          </form>

          <Box display="flex" columnGap="15px" width="100%">
            <Box width="100%" display="flex" columnGap="10px">
              <Box display="flex" columnGap="5px">
                <Typography fontSize="1.6rem" color="text1">
                  Novo aqui?
                </Typography>
                <Link href={RoutePaths[RoutesEnum.Register]}>
                  <Typography fontSize="1.6rem" color="text2">
                    Crie a sua conta aqui
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout2>
  );
}

export default Login;
