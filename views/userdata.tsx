import { FC } from 'react';

import { Layout2 } from '../components/layout';
import { Box, Button, Input, Typography } from '../elements';

const Date = () => (
  <>
    <Box>
      <Typography fontSize="3rem" color="text2">
        Data de nascimento
      </Typography>
    </Box>
    <Box display="flex" columnGap="15px" width="100%">
      <Box width="100%">
        <Typography fontSize="1.6rem" color="text1">
          Data de nascimento *
        </Typography>
        <Input
          type="date"
          fontSize="1.6rem"
          placeholder="Data"
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

    <Button variant={'primary'} width="100%" borderRadius={7} marginTop="15px">
      Próximo passo
    </Button>
  </>
);

const Height = () => (
  <>
    <Box>
      <Typography fontSize="3rem" color="text2">
        Altura em cm
      </Typography>
    </Box>
    <Box display="flex" columnGap="15px" width="100%">
      <Box width="100%">
        <Typography fontSize="1.6rem" color="text1">
          Altura
        </Typography>
        <Input
          type="number"
          fontSize="1.6rem"
          placeholder="Ex.: 173"
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

    <Button variant={'primary'} width="100%" borderRadius={7} marginTop="15px">
      Próximo passo
    </Button>
  </>
);

const Weight = () => (
  <>
    <Box>
      <Typography fontSize="3rem" color="text2">
        Peso em kg
      </Typography>
    </Box>
    <Box display="flex" columnGap="15px" width="100%">
      <Box width="100%">
        <Typography fontSize="1.6rem" color="text1">
          Peso
        </Typography>
        <Input
          type="number"
          fontSize="1.6rem"
          placeholder="Ex.: 65.4"
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

    <Button variant={'primary'} width="100%" borderRadius={7} marginTop="15px">
      Concluir
    </Button>
  </>
);

const Userdata: FC = () => (
  <Layout2 pageTitle="User">
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
        width="60%"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          position="relative"
        >
          <Box
            backgroundColor="primary"
            padding="30px 40px"
            borderRadius="50px"
          >
            <Typography fontSize="3.3rem" color="white" fontWeight={700}>
              1
            </Typography>
          </Box>
          <Box
            border="1px solid"
            width="207px"
            position="absolute"
            top="50%"
            left="13.4%"
          ></Box>
          <Box backgroundColor="text1" padding="30px 40px" borderRadius="50px">
            <Typography fontSize="3.3rem" color="secondary2" fontWeight={700}>
              2
            </Typography>
          </Box>
          <Box
            border="1px solid"
            width="207px"
            position="absolute"
            top="50%"
            left="56.7%"
          ></Box>
          <Box backgroundColor="text1" padding="30px 40px" borderRadius="50px">
            <Typography fontSize="3.3rem" color="secondary2" fontWeight={700}>
              3
            </Typography>
          </Box>
        </Box>
        {/* <Date /> */}
        {/* <Height /> */}
        <Weight />
        <Box display="flex" columnGap="15px" width="100%">
          <Box width="100%" display="flex" columnGap="10px">
            <Box display="flex" columnGap="5px">
              <Typography fontSize="1.6rem" color="text1">
                Na natureza nada se cria, tudo se transforma.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout2>
);

export default Userdata;
