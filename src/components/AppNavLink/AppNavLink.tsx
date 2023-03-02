import { IPage } from 'common/models/App';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import useLinkStyles from './AppNavLink.style';

interface IAppNavLink {
  place: 'BurgerLink' | 'NavLink';
  page: IPage;
}

const AppNavLink: FC<IAppNavLink> = ({ place, page }) => {
  const classes = useLinkStyles();

  const getClasses = () => {
    return place === 'BurgerLink'
      ? `${classes.Link} ${classes.BurgerLink}`
      : `${classes.Link} ${classes.NavLink}`;
  };

  return (
    <NavLink className={getClasses()} to={page.route}>
      {page.name}
    </NavLink>
  );
};

export default AppNavLink;
