import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Card,
  CardBody,
  CardTitle,
  Alert
} from 'reactstrap';
import { fetchSizes, selectSize, saveOrder } from '../actions';
import { formatCurrency } from '../../../utils/currency';
import '../styles.css';

class View extends PureComponent {
  componentDidMount() {
    if(Object.values(this.props.selectedFlavor).length === 0) {
      this.props.history.push('/');
    }

    this.props.fetchSizes();
  }

  onSelect = size => () => {
    this.props.selectSize(size);
    this.props.saveOrder();
  }

  renderItems() {
    return this.props.sizes.map(size => (
      <ListGroupItem
        key={size.id}
        onClick={this.onSelect(size)}
        className="listItem"
      >
        <ListGroupItemHeading>{size.name}</ListGroupItemHeading>
        <ListGroupItemText>{i18next.t('order.size.cookTime', { value: size.cookTime })}</ListGroupItemText>

        <ListGroupItemText className="listItemPrice">
          {i18next.t('order.size.price', { value: formatCurrency({ value: size.price }) })}
        </ListGroupItemText>
      </ListGroupItem>
    ));
  }

  render() {
    const { selectedFlavor } = this.props;

    return (
      <Card>
        <CardBody>
          <Alert color="dark">
            {i18next.t('order.size.selectedFlavor', { value: selectedFlavor.name })}
          </Alert>

          <CardTitle>{i18next.t('order.size.title')}</CardTitle>
          <ListGroup>{this.renderItems()}</ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.order.sizes,
  selectedFlavor: state.order.selectedFlavor
});

export default withRouter(
  connect(mapStateToProps, { fetchSizes, selectSize, saveOrder })(View)
);
