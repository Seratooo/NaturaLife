import { FC } from 'react';

import { Layout } from '../components';
import { Box, Button, Input, Typography } from '../elements';

const CardPlan = () => (
  <Box
    backgroundImage={"url('/assets/alternative_medicine.png')"}
    width="25rem"
    height="30rem"
    backgroundRepeat="no-repeat"
    backgroundSize="cover"
    position="relative"
    borderRadius={7}
  >
    <Box
      backgroundColor="#000000a1"
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      position="relative"
      opacity={0}
      hover={{ opacity: '1' }}
      borderRadius={7}
    >
      <Typography
        fontSize="1.6rem"
        color="white"
        width="100%"
        backgroundColor="primary"
        textAlign="center"
        padding={10}
        position="absolute"
        marginTop="45%"
      >
        descrição aasiojsiodfjhsaduifh sdciosdisdci jsdcjksdcijoscijo sdsdioj
        sdjksd dsoksdfsdm
      </Typography>
    </Box>
    <Typography
      fontSize="1.2rem"
      color="white"
      textAlign="left"
      position="absolute"
      top="79%"
      backgroundColor="#000000a1"
      width="100%"
      padding={6}
    >
      Nome do plano
    </Typography>
    <Button
      variant={'primary'}
      backgroundColor="white"
      color="text2"
      fontSize="1.6rem"
      borderRadius="0px 0px 7px 7px"
      padding="10px"
      width="100%"
      position="absolute"
      top="87.5%"
    >
      Adiconar ao plano
    </Button>
  </Box>
);

const CardDiesise = () => (
  <Box
    backgroundColor="secondary2"
    boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
    width="14.8rem"
    textAlign="center"
    padding={10}
    borderRadius="6px"
  >
    <Typography fontSize="1.6rem" color="text2">
      Paludismo
    </Typography>
  </Box>
);

const Plans: FC = () => (
  <Layout pageTitle="Home">
    <Box display="flex">
      <Box
        width="100%"
        display="flex"
        backgroundImage={"url('/assets/plansBanner.png')"}
        flexDirection="column"
        rowGap="10px"
        backgroundRepeat="no-repeat"
        height="70vh"
        backgroundSize="cover"
        position="relative"
        backgroundPosition="0px -10px"
      >
        <Typography
          color="white"
          fontSize="3.3rem"
          position="absolute"
          top="50%"
          textAlign="center"
          fontWeight="700"
          width="100%"
        >
          Planos de saúde de Medicina Natural
        </Typography>
      </Box>
    </Box>

    <Box display="flex">
      <Box
        width="17%"
        margin="auto"
        marginTop="5rem"
        padding="0 0 0 30px"
        display="flex"
        flexDirection="column"
        rowGap={10}
      >
        <Box marginLeft="-20px">
          <Typography fontSize="2.5rem" fontWeight="bold" color="black">
            Filtros
          </Typography>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Sintomas
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox" />
              <label htmlFor="InputBox">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox1" />
              <label htmlFor="InputBox1">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox2" />
              <label htmlFor="InputBox2">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Frutas
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox3" />
              <label htmlFor="InputBox3">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox4" />
              <label htmlFor="InputBox4">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox5" />
              <label htmlFor="InputBox5">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Hortaliças
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox6" />
              <label htmlFor="InputBox6">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox6a" />
              <label htmlFor="InputBox6a">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox7" />
              <label htmlFor="InputBox7">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Plantas
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox8" />
              <label htmlFor="InputBox8">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox9" />
              <label htmlFor="InputBox9">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox10" />
              <label htmlFor="InputBox10">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Dietas
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox11" />
              <label htmlFor="InputBox11">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox12" />
              <label htmlFor="InputBox12">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox13" />
              <label htmlFor="InputBox13">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography
            fontSize="1.6rem"
            fontWeight="bold"
            color="text2"
            marginBottom="5px"
          >
            Doenças
          </Typography>
          <Box display="flex" flexDirection="column" rowGap="5px">
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox14" />
              <label htmlFor="InputBox14">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox15" />
              <label htmlFor="InputBox15">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Input type="checkbox" id="InputBox16" />
              <label htmlFor="InputBox16">
                <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                  Maça
                </Typography>
              </label>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        width="66%"
        margin="left"
        marginTop="5rem"
        padding="0px 20px"
        display="flex"
        flexDirection="column"
        borderRight="1px solid #BABDC0"
        borderLeft="1px solid #BABDC0"
      >
        <Box display="flex" columnGap={15}>
          <CardDiesise />
          <CardDiesise />
          <CardDiesise />
          <CardDiesise />
          <CardDiesise />
        </Box>
        <Box
          display="flex"
          padding="0rem 0px 10px"
          marginTop="3rem"
          width="100%"
          flexWrap="wrap"
          alignItems="end"
          rowGap={25}
          columnGap={25}
          overflow="auto"
          height="65rem"
        >
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
          <CardPlan />
        </Box>
      </Box>
      <Box width="17%" paddingLeft={10}>
        <Box marginTop="5rem">
          <Typography
            fontSize="2.5rem"
            fontWeight="bold"
            textAlign="left"
            color="black"
          >
            Meus Planos
          </Typography>
        </Box>
        <Box padding="0 0px 0 25px" marginTop="10px">
          <ul>
            <li style={{ fontSize: '14px', margin: '5px 0' }}>
              Plano isso ou aquilo
            </li>
            <li style={{ fontSize: '14px', margin: '5px 0' }}>
              Plano isso ou aquilo
            </li>
            <li style={{ fontSize: '14px', margin: '5px 0' }}>
              Plano isso ou aquilo
            </li>
            <li style={{ fontSize: '14px', margin: '5px 0' }}>
              Plano isso ou aquilo
            </li>
            <li style={{ fontSize: '14px', margin: '5px 0' }}>
              Plano isso ou aquilo
            </li>
          </ul>
        </Box>
        <Button
          variant={'primary'}
          color="text2"
          fontSize="1.4rem"
          borderRadius="7px"
          padding="10px"
          width="80%"
          marginTop="1rem"
        >
          Gerar Plano
        </Button>
      </Box>
    </Box>
  </Layout>
);

export default Plans;
