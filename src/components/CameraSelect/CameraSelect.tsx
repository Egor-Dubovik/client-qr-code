import React, { FC } from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Camera } from 'common/interfaces/scaner.interface';
import { CAMERA } from 'common/constant/scan';

const CameraSelect: FC = () => {
  const [camera, setCamera] = React.useState<Camera>(CAMERA.back);

  const handleChange = (event: SelectChangeEvent): void => {
    setCamera(event.target.value as Camera);
  };

  return (
    <div>
      <FormControl sx={{ mb: 4, minWidth: 130 }}>
        <InputLabel>camera</InputLabel>
        <Select value={camera} label="camera" onChange={handleChange}>
          <MenuItem value={CAMERA.back}>Задняя камера</MenuItem>
          <MenuItem value={CAMERA.front}>Передняя камера</MenuItem>
        </Select>
        <FormHelperText>Выберите вид камеру</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CameraSelect;
