import React, { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Context } from 'index';
import InputFile from 'components/InputFile';
import { observer } from 'mobx-react-lite';

interface IReturnsForm {
  isSubmit: boolean;
}

const ReturnsForm: FC<IReturnsForm> = observer(({ isSubmit }) => {
  const [fullName, setFullName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [agreement, setAgreement] = useState<boolean>(true);
  const [city, setCity] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [imagePath, setImagePath] = useState<string>('');
  const [reasonReturn, setReasonReturn] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string[] | []>([]);

  const { userReturn } = useContext(Context);

  const checkFullName = (event: ChangeEvent<HTMLInputElement>): void => {
    const stringName = event.target.value;
    if (stringName.split(' ').length >= 3) {
      setFullName(event.target.value);
    } else {
      setErrorMessage([...errorMessage, 'Некорректно введено ФИО']);
    }
  };

  const checkCountry = () => {
    if (country === '') setErrorMessage([...errorMessage, 'Не указана страна']);
  };

  const checkAgreement = () => {
    if (!agreement) setErrorMessage([...errorMessage, 'Вам нужно принять соглащщение']);
  };

  const handleAgreement = (event: ChangeEvent<HTMLInputElement>): void => {
    setAgreement(event.target.checked);
  };

  const handleChangeCountry = (event: SelectChangeEvent): void => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    if (isSubmit) {
      userReturn.setReturn({
        user_name: fullName,
        country,
        address: `${city}, ${adress}`,
        reason: reasonReturn,
        postal_code: zip,
        image: imagePath,
      });
    }
  }, [isSubmit]);

  return (
    <>
      <div id="a"></div>
      <Typography variant="h6" gutterBottom>
        Введите данные
      </Typography>
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
          <InputFile filePath={imagePath} setFile={setImagePath} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" onChange={handleAgreement} checked={agreement} />}
            label="Соглашаюсь с обработкой данных"
          />
        </Grid>
      </Grid>
    </>
  );
});

export default ReturnsForm;
