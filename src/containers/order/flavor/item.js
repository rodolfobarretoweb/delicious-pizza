import React, { PureComponent } from 'react';
import Proptypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

class Item extends PureComponent {
  render() {
    const { flavor, onSelect } = this.props;

    return(
      <ListGroupItem onClick={onSelect} className="listItem">
        {flavor.name}
      </ListGroupItem>
    );
  }
}

Item.propTypes = {
  flavor: Proptypes.shape({
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired
  }),

  onSelect: Proptypes.func.isRequired
};

export default Item;
