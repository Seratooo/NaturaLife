import { FC } from 'react';

import { Layout } from '../components';
import { Box, Button, Input, Typography } from '../elements';

const AboutUs = () => (
  <Box display="flex" marginTop="3rem" columnGap="15px">
    <Box
      width="60%"
      display="flex"
      flexWrap="wrap"
      rowGap="10px"
      columnGap="10px"
      backgroundColor="secondary2"
      borderRadius="0 200px 0px 0px"
      marginLeft="-20%"
      padding="10px 0 10px 20%"
    >
      <img
        src="/assets/aboutImg2.png"
        alt="aboutImg"
        width="35%"
        style={{ borderRadius: '10px' }}
      />
      <img
        src="/assets/aboutImg3.png"
        alt="aboutImg"
        width="35%"
        style={{ borderRadius: '10px' }}
      />
      <img
        src="/assets/aboutImg1.png"
        alt="aboutImg"
        width="35%"
        style={{ borderRadius: '10px' }}
      />
      <Typography
        fontSize="2.6rem"
        color="white"
        width="35%"
        fontWeight="700"
        textAlign="center"
        display="flex"
        alignItems="center"
        backgroundColor="primary"
        borderRadius="10px"
      >
        + de 20 Planos Prontos
      </Typography>
    </Box>
    <Box width="60%" display="flex" flexDirection="column" rowGap="10px">
      <Typography color="primary" fontSize="2rem" fontWeight="bold">
        Sobre-nós
      </Typography>
      <Typography color="black" fontSize="3.3rem" fontWeight="500">
        Crie um plano de Prevenção agora mesmo
      </Typography>
      <Typography fontSize="1.6rem" color="text2">
        Uma solução online para fornecer informações sobre o tratamento de
        doenças, formas de prevenção, erradicação e/ou minimização de sintomas
        através da medicina natural.
      </Typography>
      <Button variant={'primary'} width="25rem" marginTop="15px">
        Saber mais
      </Button>
    </Box>
  </Box>
);

const WorkFlow = () => (
  <Box
    marginTop="3rem"
    backgroundColor="secondary2"
    margin="0 -20%"
    padding="5% 20% 7%"
  >
    <Box
      display="flex"
      flexDirection="column"
      rowGap="10px"
      alignItems="center"
    >
      <Typography color="primary" fontSize="2rem" fontWeight="bold">
        Proceso de trabalho
      </Typography>
      <Typography color="black" fontSize="3.3rem" fontWeight="500">
        Como funciona ?
      </Typography>
    </Box>
    <Box
      display="flex"
      columnGap="25px"
      marginTop="2rem"
      justifyContent="space-between"
    >
      <Box
        boxShadow="rgba(149, 157, 165, 0.5) 0px 8px 24px"
        padding="20px"
        borderRadius="0 0px 50px 0px"
        width="30%"
      >
        <Typography
          fontSize="12rem"
          fontWeight="700"
          color="text1"
          textAlign="center"
        >
          1
        </Typography>
        <Typography color="primary" fontSize="1.6rem" fontWeight="700">
          Cadastro
        </Typography>
        <Typography
          color="text2"
          fontWeight="300"
          fontSize="1.6rem"
          marginTop="10px"
        >
          O usuário pode fazer o registo com informações básicas
        </Typography>
      </Box>
      <Box
        boxShadow="rgba(149, 157, 165, 0.5) 0px 8px 24px"
        padding="20px"
        borderRadius="0 0px 50px 0px"
        width="30%"
      >
        <Typography
          fontSize="12rem"
          fontWeight="700"
          color="text1"
          textAlign="center"
        >
          2
        </Typography>
        <Typography color="primary" fontSize="1.6rem" fontWeight="700">
          Encontre o seu objectivo
        </Typography>
        <Typography
          color="text2"
          fontWeight="300"
          fontSize="1.6rem"
          marginTop="10px"
        >
          Selecione um plano baseado em seus sintomas, ou encontre um plano de
          prevenção existente.
        </Typography>
      </Box>
      <Box
        boxShadow="rgba(149, 157, 165, 0.5) 0px 8px 24px"
        padding="20px"
        borderRadius="0 0px 50px 0px"
        width="30%"
      >
        <Typography
          fontSize="12rem"
          fontWeight="700"
          color="text1"
          textAlign="center"
        >
          3
        </Typography>
        <Typography color="primary" fontSize="1.6rem" fontWeight="700">
          Realizar tratamento
        </Typography>
        <Typography
          color="text2"
          fontWeight="300"
          fontSize="1.6rem"
          marginTop="10px"
        >
          Os pacientes podem realizar os tratamentos seguindo o plano gerado.
        </Typography>
      </Box>
    </Box>
  </Box>
);

const BookNow = () => (
  <Box marginTop="7rem">
    <Box backgroundColor="primary" borderRadius="0 0 50px 0" display="flex">
      <Box width="40%">
        <img src="/assets/appointment.png" alt="Book" width="100%" />
      </Box>
      <Box
        width="60%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="40px"
        rowGap="15px"
      >
        <Typography fontSize="3.3rem" color="white">
          Marcar uma consulta
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
          }}
        >
          <Box display="flex" columnGap="10px">
            <Input
              type="text"
              fontSize="1.6rem"
              placeholder="Primeiro nome"
              backgroundColor="primary"
              border="1px solid"
              color="white"
              padding="12px 10px"
              borderRadius="10px"
              width="50%"
            />
            <Input
              type="text"
              fontSize="1.6rem"
              placeholder="Sobrenome"
              backgroundColor="primary"
              border="1px solid"
              color="white"
              padding="12px 10px"
              borderRadius="10px"
              width="50%"
            />
          </Box>
          <Box>
            <Input
              type="email"
              fontSize="1.6rem"
              placeholder="Email"
              backgroundColor="primary"
              border="1px solid"
              color="white"
              padding="12px 10px"
              borderRadius="10px"
              width="100%"
            />
          </Box>
          <Box display="flex" columnGap="10px">
            <Input
              type="number"
              fontSize="1.6rem"
              placeholder="Telf.: +244 935352494"
              backgroundColor="primary"
              border="1px solid"
              color="white"
              padding="12px 10px"
              borderRadius="10px"
              width="50%"
            />
            <Input
              type="date"
              fontSize="1.6rem"
              placeholder="Selecionar Data"
              backgroundColor="primary"
              border="1px solid"
              color="white"
              padding="12px 10px"
              borderRadius="10px"
              width="50%"
            />
          </Box>
          <Button
            variant={'primary'}
            backgroundColor="white"
            width="25rem"
            marginTop="15px"
            color="primary"
            alignSelf="center"
          >
            Agendar Compromisso
          </Button>
        </form>
      </Box>
    </Box>
  </Box>
);

const Disease = () => (
  <Box marginTop="5rem" display="flex">
    <Box
      width="60%"
      display="flex"
      flexWrap="wrap"
      rowGap="20px"
      columnGap="5rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/ios/50/null/herbal-medicine.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Medicina Interna
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/ios/50/null/natural-food.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Doenças Neurológicas
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/windows/50/null/alternative-herbal-medicine.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Dermatologia
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/ios/50/null/organic-food.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Distúrbios do Sistema Endócrino
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/ios/50/null/elbow-pain.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Dor Musucular
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="14rem"
      >
        <Box
          padding="15px"
          border="1px dashed #747B81"
          rowGap="5px"
          borderRadius="100px"
        >
          <img
            src="https://img.icons8.com/pastel-glyph/50/null/herbal-medicine.png"
            alt="medicine img"
          />
        </Box>
        <Typography
          fontSize="1.6rem"
          color="text2"
          textAlign="center"
          marginTop="7px"
        >
          Condições Ginecológicas
        </Typography>
      </Box>
    </Box>
    <Box width="40%" display="flex" flexDirection="column" rowGap="10px">
      <Typography color="primary" fontSize="2rem" fontWeight="bold">
        Doenças
      </Typography>
      <Typography color="black" fontSize="3.3rem" fontWeight="500">
        Doenças que podem ser tratadas
      </Typography>
      <Typography
        color="text2"
        fontWeight="300"
        fontSize="1.6rem"
        marginTop="10px"
      >
        As doenças que podem ser tratadas com a medicina natural pertencem a
        praticamente todos os aspectos da medicina, incluindo cardiologia,
        cirurgia, otorrinoloringologia, genicologia, pneumologia e etc.
      </Typography>
      <Button variant={'primary'} width="25rem" marginTop="15px">
        Mais soluções
      </Button>
    </Box>
  </Box>
);

const OurProduts = () => (
  <Box
    marginTop="7rem"
    width="100%"
    position="relative"
    height="50vh"
    backgroundImage={`url('/assets/OurProduts.jpg')`}
    backgroundSize="cover"
    backgroundRepeat="no-repeat"
    borderRadius="50px 0px 0 0px"
  >
    <Box position="absolute" top="20%" right="5%">
      <Typography color="primary" fontSize="2rem" fontWeight="bold">
        Veja os Nossos Produtos Saudáveis
      </Typography>
      <Typography color="black" fontSize="3.3rem" fontWeight="500">
        Amigável e Saudável
      </Typography>
      <Button variant={'primary'} width="25rem" marginTop="15px">
        Comprar Agora
      </Button>
    </Box>
  </Box>
);
const Testimonials = () => (
  <Box marginTop="7rem">
    <Box
      display="flex"
      flexDirection="column"
      rowGap="10px"
      alignItems="center"
    >
      <Typography color="primary" fontSize="2rem" fontWeight="bold">
        Depoimentos
      </Typography>
      <Typography color="black" fontSize="3.3rem" fontWeight="500">
        Veja o que os usuários estão falando sobre-nós!
      </Typography>
    </Box>
    <Box
      display="flex"
      columnGap="25px"
      marginTop="2rem"
      justifyContent="space-between"
    >
      <Box
        boxShadow="rgba(149, 157, 165, 0.5) 0px 8px 24px"
        padding="20px"
        borderRadius="15px"
        minHeight="25vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          color="text2"
          fontWeight="300"
          fontSize="1.6rem"
          padding="0 40px"
          textAlign="center"
        >
          O usuário pode fazer o registo com informações básicas O usuário pode
          fazer o registo com informações básicas O usuário pode fazer o registo
          com informações básicas O usuário pode fazer o registo com informações
          básicas O usuário pode fazer o registo com informações básicas O
          usuário pode fazer o registo com informações básicas
        </Typography>
        <Typography
          color="text2"
          fontSize="1.6rem"
          fontWeight="700"
          padding="0 40px"
          alignSelf="end"
          marginTop="15px"
        >
          Abubacar Correia
        </Typography>
      </Box>
    </Box>
  </Box>
);

const Home: FC = () => (
  <Layout pageTitle="Home">
    <Box width="80%" margin="auto" marginTop="5rem">
      <Box display="flex">
        <Box width="60%" display="flex" flexDirection="column" rowGap="10px">
          <Typography color="primary" fontSize="2.2rem">
            Plataforma Híbrida para controlo e gestão de planos de saúde de
            Medicina Natural
          </Typography>
          <Typography fontSize="4.8rem" color="black" fontWeight="700">
            Combinação das maiores conquistas técnincas tradicionas para
            prevenção e erradição de doenças
          </Typography>
          <Button variant={'primary'} width="25rem" marginTop="15px">
            Criar Plano de Prevenção
          </Button>
        </Box>
        <Box width="40%">
          <img src="/assets/HomeImg.png" alt="Img Home" width="100%" />
        </Box>
      </Box>
      <AboutUs />
      <WorkFlow />
      <BookNow />
      <Disease />
      <OurProduts />
      <Testimonials />
    </Box>
  </Layout>
);

export default Home;
