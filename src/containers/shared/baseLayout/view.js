import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import i18next from 'i18next';
import Routes from '../../../configs/routes';
import 'bootstrap/dist/css/bootstrap.css';

const BaseLayout = () => (
  <div>
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{i18next.t('shared.applicationName')}</NavbarBrand>
    </Navbar>

    <Routes />
  </div>
);

export default BaseLayout;
