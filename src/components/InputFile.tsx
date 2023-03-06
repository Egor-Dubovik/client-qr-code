import React, { Dispatch, FC } from 'react';
import { Box, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface IInputFile {
  filePath: string;
  fileName: string;
  setFile: Dispatch<React.SetStateAction<string>>;
}

const InputFile: FC<IInputFile> = ({ filePath, fileName, setFile }) => {
  const getFileName = () => filePath.split('\\').pop();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <label htmlFor="upload-photo">
        <input
          id="upload-photo"
          style={{ display: 'none' }}
          onChange={(event) => setFile(event.target.value)}
          value={filePath}
          type="file"
        />
        <Fab color="secondary" size="medium" component="span" variant="extended">
          <AddIcon /> {fileName}
        </Fab>
      </label>
      <Box>{getFileName()}</Box>
    </Box>
  );
};

export default InputFile;
