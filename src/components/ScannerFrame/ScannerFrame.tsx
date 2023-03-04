import React from 'react';
import useScannerFrameStyle from './ScannerFrame.style';

const ScannerFrame = () => {
  const { ScanerSvgBox, ScanerSvg, ScanerPlate } = useScannerFrameStyle();

  return (
    <div className={ScanerSvgBox}>
      <svg className={ScanerSvg} viewBox="0 0 238 238" preserveAspectRatio="none">
        <path d="M31 2H10a8 8 0 0 0-8 8v21M207 2h21a8 8 0 0 1 8 8v21m0 176v21a8 8 0 0 1-8 8h-21m-176 0H10a8 8 0 0 1-8-8v-21"></path>
      </svg>
      <div className={ScanerPlate}></div>
    </div>
  );
};

export default ScannerFrame;
