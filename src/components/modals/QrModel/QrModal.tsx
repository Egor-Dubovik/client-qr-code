import React, { FC, useContext } from 'react';
import { API_URL } from 'common/constant/api';
import { QRCodeSVG } from 'qrcode.react';
import { Backdrop, Box, Fade, Modal } from '@mui/material';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import useQrModalStyles from './QrModal.style';

interface IQrModel {
  id: number;
}

const QrModel: FC<IQrModel> = observer(({ id }) => {
  const { modal } = useContext(Context);
  const { content, qrCode } = useQrModalStyles();

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
            <QRCodeSVG className={qrCode} value={`${API_URL}/pdf?id=${id}`} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
});

export default QrModel;
