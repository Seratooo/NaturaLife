import { FC } from 'react';

import { Box, Typography } from '../../../elements';
import { LI, UL } from './header-elements';
const Header: FC = () => (
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
      <img src="/logoNaturaLife.png" alt="LogoNatura" />
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
      >
        <Typography fontSize="1.6rem" color="primary">
          Regista-te
        </Typography>
      </Box>
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

export default Header;
