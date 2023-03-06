import React, { ChangeEvent, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

const ReturnsForm = () => {
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(true);
  const [city, setCity] = React.useState<string>('');
  const [zip, setZip] = React.useState<string>('');
  const [adress, setAdress] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string[] | []>([]);

  const checkFullName = (event: ChangeEvent<HTMLInputElement>): void => {
    const stringName = event.target.value;
    if (stringName.split(' ').length >= 3) {
      setCountry(event.target.value);
    } else {
      setErrorMessage([...errorMessage, 'Некорректно введено ФИО']);
    }
  };

  const handleAgreement = (event: ChangeEvent<HTMLInputElement>): void => {
    setAgreement(event.target.checked);
  };

  const handleChangeCountry = (event: SelectChangeEvent): void => {
    setCountry(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Введите данные
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            value={fullName}
            onChange={checkFullName}
            required
            label="ФИО"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl required variant="standard" fullWidth sx={{ minWidth: 120 }}>
            <InputLabel>Страна</InputLabel>
            <Select value={country} onChange={handleChangeCountry} label="Страна">
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
          <FormControlLabel
            control={<Checkbox color="secondary" onChange={handleAgreement} checked={agreement} />}
            label="Соглашаюсь с обработкой данных"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ReturnsForm;
