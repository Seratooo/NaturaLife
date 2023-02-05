import { FC } from 'react';

import { Layout2 } from '../components/layout';
import { Box, Button, Input, Typography } from '../elements';

const Register: FC = () => (
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
            />
          </Box>
        </Box>

        <Box display="flex" columnGap="15px" width="100%">
          <Box width="100%" display="flex" columnGap="10px">
            <Input type="checkbox" backgroundColor="txt1" />
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
        >
          Enviar
        </Button>

        <Box display="flex" columnGap="15px" width="100%">
          <Box width="100%" display="flex" columnGap="10px">
            <Box display="flex" columnGap="5px">
              <Typography fontSize="1.6rem" color="text1">
                Já tem uma conta?
              </Typography>
              <Typography fontSize="1.6rem" color="text2">
                Faça login aqui
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout2>
);

export default Register;
