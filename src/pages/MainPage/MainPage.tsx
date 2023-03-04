import React, { FC } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import SectionTitle from 'components/UI/SectionTitle';
import useMainPageStyles from './MainPage.style';
import FlipIcon from '@mui/icons-material/Flip';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'common/constant/navigaton';

const MainPage: FC = () => {
  const classes = useMainPageStyles();

  return (
    <>
      <section className={classes.firstSection}>
        <Container maxWidth="xl">
          <SectionTitle content={`Привет, впервые на платформе?`} />
          <Box className={classes.BoxContent}>
            <Box className={classes.imageBox}>
              <img
                className={classes.image}
                src={process.env.PUBLIC_URL + './images/mainPage/hand-qrcodes.png'}
                alt={'hand-qrcodes'}
              />
            </Box>
            <Box className={classes.typographyBox}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Что нужно знать?
              </Typography>
              <Typography
                sx={{
                  mb: 3,
                  fontSize: { xs: 16, sm: 18 },
                  letterSpacing: { xs: 0, sm: 0.8 },
                  textAlign: 'justify',
                }}
              >
                QR-код — это двумерная версия штрих-кода, обычно состоящая из черных и белых
                пиксельных шаблонов. Denso Wave, японская дочерняя компания Denso, поставщика
                Toyota, разработала их для маркировки компонентов с целью ускорения логистических
                процессов при производстве автомобилей. Теперь он нашел свое применение в интернет
                маркетинге с широким распространением смартфонов. «QR» означает «Быстрый ответ», что
                означает мгновенный доступ к информации, скрытой в коде.
              </Typography>
              <NavLink to={ROUTES.SCANNER} style={{ textDecoration: 'none' }}>
                <Button variant="contained" endIcon={<FlipIcon />}>
                  сканер
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Container>
      </section>
      <section className={`${classes.section} ${classes.createAcount}`}>
        <Box className={classes.registrationContainer}>
          <Box className={classes.registrationBox}>
            <Box>
              <SectionTitle content={`Приложение упростит вам жизнь`} />
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 500,
                  letterSpacing: '0.08rem',
                  textAlign: 'center',
                }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque temporibus id
                nesciunt at, totam cupiditate inventore eius quisquam nisi dolor mollitia libero
                sunt illum nemo. Quibusdam ex ipsum iure obcaecati?
              </Typography>
            </Box>
            <Button variant="outlined">
              <NavLink className={classes.registrationLink} to={ROUTES.REGISTRATION}>
                Создайте аккаунт
              </NavLink>
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default MainPage;
