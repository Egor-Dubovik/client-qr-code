import React, { FC, FormEvent } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IInputFile {
  file: File | null;
  inputName: string;
  setFile: (event: FormEvent) => void;
}

const InputFile: FC<IInputFile> = ({ file, inputName, setFile }) => {
  console.log(file);
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Button variant="contained" startIcon={<AddIcon />} color={'secondary'}>
        {inputName}
        <input hidden type={'file'} onChange={(event) => setFile(event)} />
      </Button>
      <Box>{file?.name}</Box>
    </Box>
  );
};

export default InputFile;
