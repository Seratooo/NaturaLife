import { doc, setDoc } from 'firebase/firestore';
import { FC } from 'react';
import {
  Control,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';
import Cookies from 'universal-cookie';

import { db } from '../api/clienteApp';
import { Layout2 } from '../components/layout';
import { Box, Button, Input, Typography } from '../elements';
interface IFormValues {
  DateBirth: string;
  Weight: string;
  Height: string;
  NumberForm: number;
}
interface IFormUser {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
interface IFormValuesControl {
  control: Control<IFormValues>;
  register: UseFormRegister<IFormValues>;
  onSubmit1: any;
  setValue: UseFormSetValue<IFormValues>;
  handleSubmit: UseFormHandleSubmit<IFormValues>;
}
const cookies = new Cookies();
function HandleHeightForm({
  control,
  register,
  setValue,
  onSubmit1,
  handleSubmit,
}: IFormValuesControl) {
  const Nform = useWatch({
    control,
    name: 'NumberForm',
    defaultValue: 1,
  });

  function validerDate() {
    const date = (document.getElementById('inputDate') as HTMLInputElement)
      .value;
    if (date == '') {
      (document.getElementById('txtDate') as HTMLInputElement).style.color =
        'red';
      return false;
    }
    setValue('NumberForm', 2);
    return true;
  }

  function validerHeight() {
    const date = (document.getElementById('inputHeight') as HTMLInputElement)
      .value;
    if (date == '') {
      (document.getElementById('txtHeight') as HTMLInputElement).style.color =
        'red';
      return false;
    }
    setValue('NumberForm', 3);
    return true;
  }

  if (Nform) {
    return (
      <>
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
            border={Nform >= 2 ? '1px solid #84BE37' : '1px solid black'}
            width="207px"
            position="absolute"
            top="50%"
            left="13.4%"
          ></Box>
          <Box
            backgroundColor={Nform >= 2 ? '#84BE37' : '#747B81'}
            padding="30px 40px"
            borderRadius="50px"
          >
            <Typography fontSize="3.3rem" color="secondary2" fontWeight={700}>
              2
            </Typography>
          </Box>
          <Box
            border={Nform >= 3 ? '1px solid #84BE37' : '1px solid black'}
            width="207px"
            position="absolute"
            top="50%"
            left="56.7%"
          ></Box>
          <Box
            backgroundColor={Nform >= 3 ? '#84BE37' : '#747B81'}
            padding="30px 40px"
            borderRadius="50px"
          >
            <Typography fontSize="3.3rem" color="secondary2" fontWeight={700}>
              3
            </Typography>
          </Box>
        </Box>
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit1)}>
          <Box display={Nform == 1 ? 'block' : 'none'}>
            <Box>
              <Typography fontSize="3rem" color="text2" textAlign="center">
                Data de nascimento
              </Typography>
            </Box>
            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%">
                <Typography fontSize="1.6rem" color="text1" id="txtDate">
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
                  max="2005-12-31"
                  id="inputDate"
                  {...register('DateBirth')}
                />
              </Box>
            </Box>

            <Box
              backgroundColor={'primary'}
              width="100%"
              borderRadius={7}
              marginTop="15px"
              onClick={validerDate}
              color="white"
              border="none"
              padding="13px"
              fontSize="1.6rem"
              boxShadow="5px 5px 15px 5px rgba(0,0,0,0.10)"
              cursor="pointer"
              transition="all .5s"
              textAlign="center"
              hover={{
                color: 'primary',
                backgroundColor: 'black',
              }}
            >
              Próximo passo
            </Box>
          </Box>

          <Box display={Nform == 2 ? 'block' : 'none'}>
            <Box>
              <Typography fontSize="3rem" color="text2" textAlign="center">
                Altura em cm
              </Typography>
            </Box>
            <Box display="flex" columnGap="15px" width="100%">
              <Box width="100%">
                <Typography fontSize="1.6rem" color="text1" id="txtHeight">
                  Altura *
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
                  id="inputHeight"
                  {...register('Height')}
                />
              </Box>
            </Box>

            <Box
              backgroundColor={'primary'}
              width="100%"
              borderRadius={7}
              marginTop="15px"
              onClick={validerHeight}
              color="white"
              border="none"
              padding="13px"
              fontSize="1.6rem"
              boxShadow="5px 5px 15px 5px rgba(0,0,0,0.10)"
              cursor="pointer"
              transition="all .5s"
              textAlign="center"
              hover={{
                color: 'primary',
                backgroundColor: 'black',
              }}
            >
              Próximo passo
            </Box>
          </Box>

          <Box display={Nform == 3 ? 'block' : 'none'}>
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
                  {...register('Weight')}
                />
              </Box>
            </Box>
            <Button
              variant={'primary'}
              type="submit"
              width="100%"
              borderRadius={7}
              marginTop="15px"
            >
              Concluir
            </Button>
            <a href="/plans" id="linkPlans" style={{ display: 'none' }}>
              ok
            </a>
          </Box>
        </form>
      </>
    );
  } else {
    return <></>;
  }
}

function Date() {
  const { register, handleSubmit, setValue, control } = useForm<IFormValues>();
  const user: IFormUser = cookies.get('user');

  async function handleSetUserdata(user: IFormUser, data: IFormValues) {
    await setDoc(doc(db, 'Users', user.Email), {
      data: user,
      userdata: data,
    });
    document.getElementById('linkPlans')?.click();
  }

  function onSubmit(data: IFormValues) {
    handleSetUserdata(user, data);
    cookies.set('userdata', data, { path: '/' });
  }
  return (
    <>
      <HandleHeightForm
        control={control}
        register={register}
        onSubmit1={onSubmit}
        setValue={setValue}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

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
        <Date />
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
