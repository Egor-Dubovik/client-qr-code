import React, { FC, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReturnsForm from 'components/ReturnsForm/ReturnsForm';
import ReturnsReview from 'components/ReturnsReview/ReturnsReview';
import { Display } from 'common/constant/css';
import { IDisplay } from 'common/interfaces/css.interface';
import { steps } from 'common/constant/returns';

const getStepContent = (step: number, spinerDisplay: IDisplay, isSubmit: boolean) => {
  switch (step) {
    case 0:
      return <ReturnsForm isSubmit={isSubmit} />;
    case 1:
      return <ReturnsReview spinerDisplay={spinerDisplay} />;
    default:
      throw new Error('Unknown step');
  }
};

const ReturnsCheckout: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [lastStepDisplay, setLastStepDisplay] = useState<IDisplay>(Display.none);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const handleNext = (): void => {
    setIsSubmit(true);
    setTimeout(() => {
      setActiveStep(activeStep + 1);
    }, 5000);
  };

  const handleBack = (): void => {
    setActiveStep(activeStep - 1);
    setIsSubmit(false);
  };

  // const checkFormFields = (): void => {

  // };

  useEffect(() => {
    if (activeStep === steps.length - 1) {
      setLastStepDisplay(Display.block);
    } else {
      setLastStepDisplay(Display.none);
    }
  }, [activeStep]);

  return (
    <>
      <Container component="section" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Возврат товара
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {getStepContent(activeStep, lastStepDisplay, isSubmit)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  назад
                </Button>
              )}
              <Button
                variant="contained"
                disabled={activeStep === steps.length - 1}
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                следующий
              </Button>
            </Box>
          </>
        </Paper>
      </Container>
    </>
  );
};

export default ReturnsCheckout;