import { FC } from 'react';

import { Box, Input, Typography } from '../../../elements';

const Footer: FC = () => (
  <Box as="footer">
    <Box
      backgroundColor="primary"
      marginTop="10rem"
      padding="4rem 8rem"
      display="flex"
      justifyContent="space-around"
    >
      <Box>
        <Typography fontSize="3rem" color="black">
          Contacte-nos
        </Typography>
        <Box
          marginTop="10px"
          display="flex"
          columnGap="10px"
          alignItems="center"
        >
          <img
            src="https://img.icons8.com/material-sharp/48/000000/phone-contact.png"
            alt="contactLogo"
          />
          <Typography fontSize="1.6rem" color="black">
            +244 935 352 494 / + 244 913 118 146
          </Typography>
        </Box>
        <Box
          marginTop="10px"
          display="flex"
          columnGap="10px"
          alignItems="center"
        >
          <img
            src="https://img.icons8.com/material-sharp/48/null/mail-contact.png"
            alt="contactLogo"
          />
          <Typography fontSize="1.6rem" color="black">
            abubacar.paulo.correia@gmail.com
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography fontSize="3rem" color="black">
          Links Rápidos
        </Typography>
        <Box
          marginTop="10px"
          display="flex"
          flexDirection="column"
          rowGap="10px"
        >
          <Typography fontSize="1.6rem" color="black">
            Sobre-nós
          </Typography>
          <Typography fontSize="1.6rem" color="black">
            Contacte-nos
          </Typography>
          <Typography fontSize="1.6rem" color="black">
            Termos e Condições
          </Typography>
          <Typography fontSize="1.6rem" color="black">
            Política de privacidade
          </Typography>
        </Box>
      </Box>

      <Box width="25%">
        <Typography fontSize="3rem" color="black">
          Newslatter
        </Typography>
        <Box
          marginTop="10px"
          width="100%"
          display="flex"
          flexDirection="column"
          rowGap="10px"
        >
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
      </Box>
    </Box>
    <Box backgroundColor="primary" padding="2rem  8rem" borderTop="1px solid">
      <Typography textAlign="center" fontSize="1.6rem" color="black">
        Todos os direitos reservados © 2023 Abubacar Correia
      </Typography>
    </Box>
  </Box>
);

export default Footer;
