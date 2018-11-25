import React, { Component } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import {
  ListGroup, ListGroupItem, Card, CardBody, CardTitle, Alert
} from 'reactstrap';
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
