import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import {
  ListGroup, ListGroupItem, Card, CardBody, CardTitle
} from 'reactstrap';
import { getPizzaFlavors, selectPizzaFlavor } from '../actions';
import BaseLayout from '../../shared/baseLayout/view';
import './styles.css';

class Order extends PureComponent {
  componentDidMount() {
    this.props.getPizzaFlavors(); // eslint-disable-line
  }

  onSelect = flavor => () => {
    this.props.selectPizzaFlavor(flavor); // eslint-disable-line
  }

  renderItems() {
    // eslint-disable-next-line
    return this.props.pizzaFlavors.map(flavor => (
      <ListGroupItem
        key={flavor.id}
        onClick={this.onSelect(flavor)}
        className="listItem"
      >
        {flavor.name}
      </ListGroupItem>
    ));
  }

  render() {
    return (
      <BaseLayout>
        <Card>
          <CardBody>
            <CardTitle>{i18next.t('order.flavor.title')}</CardTitle>
            <ListGroup>{this.renderItems()}</ListGroup>
          </CardBody>
        </Card>
      </BaseLayout>
    );
  }
}

const mapStateToProps = state => ({
  pizzaFlavors: state.order.pizzaFlavors
});

export default connect(mapStateToProps, { getPizzaFlavors, selectPizzaFlavor })(Order);
