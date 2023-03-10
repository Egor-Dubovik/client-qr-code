import React, { FC, FormEvent, useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Context } from 'index';
import InputFile from 'components/InputFile';
import { observer } from 'mobx-react-lite';
import { checkReturnForm } from 'helpers/ReturnsFormCheckers';
import useCreateReturn from 'hooks/returns/useCreateReturn';

const ReturnsForm: FC = observer(() => {
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(true);
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [reasonReturn, setReasonReturn] = useState<string>('');

  const { userReturn } = useContext(Context);
  const { createReturn } = useCreateReturn();

  const selectImage = (event: FormEvent): void => {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      const chosenFile = files[0];
      setImage(chosenFile);
    }
  };

  useEffect(() => {
    if (userReturn.isFormSubmit) {
      const formErrors = checkReturnForm({
        name: fullName,
        country,
        agreement,
        city,
        zip,
        adress,
        image,
        reasonReturn,
      });

      if (formErrors.length !== 0) {
        userReturn.setFormErrors(formErrors);
        userReturn.setFormValidate(false);
        userReturn.setFormSubmit(false);
        return;
      }

      const formData = new FormData();
      formData.append('userName', fullName);
      formData.append('country', country);
      formData.append('address', `${city}, ${adress}`);
      formData.append('reason', reasonReturn);
      formData.append('postalCode', zip);
      formData.append('image', image as unknown as string);
      createReturn(formData);
      userReturn.setFormValidate(true);
    }
  }, [userReturn.isFormSubmit]);

  return (
    <>
      <>
        <Typography variant="h6" gutterBottom>
          Введите данные
        </Typography>
        <Box>
          {userReturn.formErrors &&
            userReturn.formErrors.map((err, index) => (
              <p key={index} style={{ color: 'red' }}>
                {err}
              </p>
            ))}
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={(event) => setFullName(event.target.value)}
              value={fullName}
              required
              label="ФИО"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl required variant="standard" fullWidth sx={{ minWidth: 120 }}>
              <InputLabel>Страна</InputLabel>
              <Select
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                label="Страна"
              >
                <MenuItem value="">
                  <em>Сброс</em>
                </MenuItem>
                <MenuItem value={'bun'}>Беларусь</MenuItem>
                <MenuItem value={'ru'}>Россия</MenuItem>
                <MenuItem value={'ykr'}>Украина</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(event) => setCity(event.target.value)}
              value={city}
              required
              label="Город"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={(event) => setZip(event.target.value)}
              value={zip}
              required
              label="Zip / почтовый код"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(event) => setAdress(event.target.value)}
              value={adress}
              required
              label="Адрес"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(event) => setReasonReturn(event.target.value)}
              value={reasonReturn}
              required
              label="Причина возврата"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <InputFile file={image} setFile={selectImage} inputName={'фото'} />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  onChange={(event) => setAgreement(event.target.checked)}
                  checked={agreement}
                />
              }
              label="Соглашаюсь с обработкой данных"
            />
          </Grid>
        </Grid>
      </>
    </>
  );
});

export default ReturnsForm;
