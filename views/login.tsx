import { FC } from 'react';

import { Layout2 } from '../components/layout';
import { Box, Button, Input, Typography } from '../elements';

const Login: FC = () => (
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
            />
          </Box>
        </Box>

        <Box display="flex" columnGap="15px" width="100%">
          <Box width="100%" display="flex" columnGap="10px">
            <Input type="checkbox" backgroundColor="txt1" />
            <Box display="flex" columnGap="5px">
              <Typography fontSize="1.6rem" color="text1">
                Lembre de mim
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          variant={'primary'}
          width="100%"
          borderRadius={7}
          marginTop="15px"
        >
          Conecte-se
        </Button>

        <Box display="flex" columnGap="15px" width="100%">
          <Box width="100%" display="flex" columnGap="10px">
            <Box display="flex" columnGap="5px">
              <Typography fontSize="1.6rem" color="text1">
                Novo aqui?
              </Typography>
              <Typography fontSize="1.6rem" color="text2">
                Crie a sua conta aqui
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout2>
);

export default Login;
