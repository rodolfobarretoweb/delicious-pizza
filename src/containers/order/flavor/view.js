import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import { size } from 'lodash';
import {
  ListGroup, Card, CardBody, CardTitle
} from 'reactstrap';
import Item from './item';
import { fetchFlavors, selectFlavor } from '../actions';
import SelectedItems from '../shared/selectedItems';
import '../styles.css';

class View extends Component {
  componentDidMount() {
    if(size(this.props.selectedSize) === 0) {
      this.props.history.push('/');
    }

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
    return (
      <Card>
        <CardBody>
          <SelectedItems />

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
