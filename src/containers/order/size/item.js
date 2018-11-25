import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import i18next from 'i18next';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { formatCurrency } from '../../../utils/currency';

class Item extends PureComponent {
  render() {
    const { size, onSelect } = this.props;

    return(
      <ListGroupItem onClick={onSelect} className="listItem">
        <ListGroupItemHeading>{size.name}</ListGroupItemHeading>
        <ListGroupItemText>{i18next.t('order.size.cookTime', { value: size.cookTime })}</ListGroupItemText>

        <ListGroupItemText className="listItemPrice">
          {i18next.t('order.size.price', { value: formatCurrency({ value: size.price }) })}
        </ListGroupItemText>
      </ListGroupItem>
    );
  }
}

Item.propTypes = {
  size: Proptypes.shape({
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    cookTime: Proptypes.number.isRequired,
    price: Proptypes.number.isRequired
  }),

  onSelect: Proptypes.func.isRequired
};

export default Item;
