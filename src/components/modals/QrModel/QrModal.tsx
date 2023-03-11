import React, { FC, useContext, useRef } from 'react';
import { API_URL } from 'common/constant/api';
import { QRCodeSVG } from 'qrcode.react';
import { Backdrop, Button, Fade, Modal } from '@mui/material';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import useQrModalStyles from './QrModal.style';
import { useReactToPrint } from 'react-to-print';

interface IQrModel {
  id: number;
}

const QrModel: FC<IQrModel> = observer(({ id }) => {
  const { modal } = useContext(Context);
  const { content, qrCode, PrintButton } = useQrModalStyles();
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: 'padding: 15px',
  });

  const handleClose = () => {
    if (modal.isOpen) modal.setIsOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal.isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={modal.isOpen}>
          <div className={content}>
            <div ref={componentRef}>
              <QRCodeSVG className={qrCode} value={`${API_URL}/pdf?id=${id}`} />
            </div>

            <Button className={PrintButton} variant="contained" onClick={handlePrint}>
              распечатать QR-код
            </Button>
            <div></div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default QrModel;
