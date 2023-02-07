import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import Cookies from 'universal-cookie';

import { db } from '../api/clienteApp';
import { Layout2 } from '../components/layout';
import { RoutePaths, RoutesEnum } from '../constants/routes';
import { Box, Button, Input, Typography } from '../elements';
interface IFormValues {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
const cookies = new Cookies();
function Register() {
  async function handleSetUser(data: IFormValues) {
    await setDoc(doc(db, 'Users', data.Email), {
      data,
    });
    cookies.set('user', data, { path: '/' });
    document.getElementById('linkUserdata')?.click();
  }

  function handleRegister(data: IFormValues) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.Email, data.Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        handleSetUser(data);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }
  const { register, handleSubmit } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    handleRegister(data);
  };
  function verifyPassWord() {
    const senha = (document.getElementById('password') as HTMLInputElement)
      .value;
    const senha2 = (
      document.getElementById('confirm_password') as HTMLInputElement
    ).value;

    if (senha != null && senha != null) {
      if (senha != senha2) {
        (
          document.getElementById('confirm_password') as HTMLInputElement
        ).setCustomValidity('Senhas diferentes!');
        return false;
      }
    }
    return true;
  }
  return (
    <Layout2 pageTitle="Register">
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
          width="49%"
        >
          <Box>
            <Typography fontSize="3rem" color="text2">
              Registar Usuário
            </Typography>
          </Box>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '15px',
              width: '100%',
            }}
          >
            <Box display="flex" columnGap="15px" width="100%">
              <Box width="50%">
                <Typography fontSize="1.6rem" color="text1">
                  Primeiro nome *
                </Typography>
                <Input
                  type="text"
                  fontSize="1.6rem"
                  placeholder="Primeiro nome"
                  backgroundColor="text1"
                  border="1px solid"
                  color="white"
                  padding="12px 10px"
                  borderRadius="7px"
                  required
                  width="100%"
                  marginTop="5px"
                  //pattern="/^([a-zA-Zà-úÀ-Ú]|\s+)+$/"
                  pattern="([a-zA-Zà-úÀ-Ú]|\s+)+$"
                  {...register('Name')}
                />
              </Box>
              <Box width="50%">
                <Typography fontSize="1.6rem" color="text1">
                  Sobrenome *
                </Typography>
                <Input
                  type="text"
                  fontSize="1.6rem"
                  placeholder="Sobrenome"
                  backgroundColor="text1"
                  border="1px solid"
                  color="white"
                  padding="12px 10px"
                  borderRadius="7px"
                  width="100%"
                  required
                  marginTop="5px"
                  pattern="([a-zA-Zà-úÀ-Ú]|\s+)+$"
                  {...register('LastName')}
                />
              </Box>
            </Box>
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
              <Box width="50%">
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
                  minLength={6}
                  id="password"
                  {...register('Password')}
                />
              </Box>
              <Box width="50%">
                <Typography fontSize="1.6rem" color="text1">
                  Confirmar Senha *
                </Typography>
                <Input
                  type="password"
                  fontSize="1.6rem"
                  placeholder="Confirmar Senha"
                  backgroundColor="text1"
                  border="1px solid"
                  color="white"
                  padding="12px 10px"
                  borderRadius="7px"
                  width="100%"
                  required
                  marginTop="5px"
                  minLength={6}
                  id="confirm_password"
                  {...register('ConfirmPassword')}
                />
              </Box>
            </Box>

            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%" display="flex" columnGap="10px">
                <Input type="checkbox" defaultChecked />
                <Box display="flex" columnGap="5px">
                  <Typography fontSize="1.6rem" color="text1">
                    Eu concordo com os
                  </Typography>
                  <Typography fontSize="1.6rem" color="primary">
                    Termos e Condições
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Button
              variant={'primary'}
              width="100%"
              borderRadius={7}
              marginTop="15px"
              onClick={verifyPassWord}
            >
              Enviar
            </Button>
            <a href="/userdata" id="linkUserdata" style={{ display: 'none' }}>
              ok
            </a>
          </form>
          <Box display="flex" columnGap="15px" width="100%">
            <Box width="100%" display="flex" columnGap="10px">
              <Box display="flex" columnGap="5px">
                <Typography fontSize="1.6rem" color="text1">
                  Já tem uma conta?
                </Typography>
                <Link href={RoutePaths[RoutesEnum.Login]}>
                  <Typography fontSize="1.6rem" color="text2">
                    Faça login aqui
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

export default Register;
