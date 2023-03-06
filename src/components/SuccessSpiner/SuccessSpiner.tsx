import React, { FC } from 'react';
import { IDisplay } from 'common/interfaces/css.interface';
import useSuccessSpinerStyles from './SuccessSpiner.style';

interface ISuccessSpiner {
  display: IDisplay;
}

const SuccessSpiner: FC<ISuccessSpiner> = ({ display }) => {
  const classes = useSuccessSpinerStyles();

  return (
    <div className={classes.successCheckmark} style={{ display: display }}>
      <div className={classes.checkIcon}>
        <span className={`${classes.iconLine} ${classes.lineTip}`}></span>
        <span className={`${classes.iconLine} ${classes.lineLong}`}></span>
        <div className={classes.iconCircle}></div>
      </div>
    </div>
  );
};

export default SuccessSpiner;
