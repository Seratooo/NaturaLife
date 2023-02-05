import { FC } from 'react';

import { Layout } from '../components';
import { Box, Input, Typography } from '../elements';

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
        width="20%"
        margin="auto"
        marginTop="5rem"
        padding="0 0 0 30px"
        borderRight="1px solid"
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
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
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
            <Box display="flex" columnGap="10px" paddingLeft={13}>
              <Typography fontSize="1.6rem" fontWeight="300" color="text2">
                Maça
              </Typography>
              <Input type="checkbox" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        width="80%"
        margin="auto"
        marginTop="5rem"
        padding="0px 20px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box display="flex" columnGap={15}>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
          <Box
            backgroundColor="secondary2"
            boxShadow="1px 1px 5px 1px rgba(0,0,0,0.18)"
            width="15rem"
            textAlign="center"
            padding={10}
            borderRadius="6px"
          >
            <Typography fontSize="1.6rem" color="black">
              Paludismo
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Layout>
);

export default Plans;
