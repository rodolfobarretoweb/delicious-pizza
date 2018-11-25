import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import {
  ListGroup, Card, CardBody, CardTitle, Alert
} from 'reactstrap';
import Item from './item';
import { fetchFlavors, selectFlavor } from '../actions';
import '../styles.css';

class View extends Component {
  componentDidMount() {
    this.props.fetchFlavors();
  }

  onSelect = flavor => () => {
    this.props.selectFlavor(flavor);
    this.props.history.push('/order/increment');
  }

  renderItems() {
    return this.props.flavors.map(flavor => (
      <Item
        key={flavor.id}
        flavor={flavor}
        onSelect={this.onSelect(flavor)}
      />
    ));
  }

  render() {
    const { selectedSize } = this.props;

    return (
      <Card>
        <CardBody>
          <Alert color="dark">
            {i18next.t('order.flavor.selectedSize', { value: selectedSize.name })}
          </Alert>

          <CardTitle>{i18next.t('order.flavor.title')}</CardTitle>
          <ListGroup>{this.renderItems()}</ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  flavors: state.order.flavors,
  selectedSize: state.order.selectedSize
});

export default withRouter(
  connect(mapStateToProps, { fetchFlavors, selectFlavor })(View)
);
