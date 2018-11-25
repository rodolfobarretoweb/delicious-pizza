import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import i18next from 'i18next';
import { formatCurrency } from '../../../utils/currency';
import './styles.css';

class Item extends PureComponent {
  renderIncrements() {
    return this.props.increments.map(increment => (
      <ListGroupItemText key={increment.id}>
        {i18next.t('order.resume.incrementItem', {
          name: increment.name, price: formatCurrency({ value: increment.additionalPrice })
        })}
      </ListGroupItemText>
    ));
  }

  render() {
    const { flavor, size, increments } = this.props;

    return(
      <ListGroupItem>
        <ListGroupItemHeading>{flavor.name}</ListGroupItemHeading>
        <ListGroupItemText>
          {i18next.t('order.resume.size', {
            name: size.name, price: formatCurrency({ value: size.price })
          })}
        </ListGroupItemText>

        {
          increments.length > 0 && (
            <Fragment>
              <b>{i18next.t('order.resume.incrementsTitle')}</b>
              <div className="incrementsContainer">{this.renderIncrements()}</div>
            </Fragment>
          )
        }
      </ListGroupItem>
    );
  }
}

Item.propTypes = {
  flavor: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  size: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }),
  increments: PropTypes.instanceOf(Array)
};

Item.defaultProps = {
  increments: []
};

export default Item;
