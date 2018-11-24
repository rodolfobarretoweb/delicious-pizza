import React, { PureComponent } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import i18next from 'i18next';
import 'bootstrap/dist/css/bootstrap.css';

class BaseLayout extends PureComponent {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{i18next.t('shared.applicationName')}</NavbarBrand>
        </Navbar>

        {this.props.children /* eslint-disable-line */}
      </div>
    );
  }
}

export default BaseLayout;
