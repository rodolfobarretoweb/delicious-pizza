import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import {
  ListGroup, Card, CardBody, CardTitle
} from 'reactstrap';
import Item from './item';
import { fetchSizes, selectSize } from '../actions';
import '../styles.css';

class View extends PureComponent {
  componentDidMount() {
    this.props.fetchSizes();
  }

  onSelect = size => () => {
    this.props.selectSize(size);
    this.props.history.push('/order/flavor');
  }

  renderItems() {
    return this.props.sizes.map(size => (
      <Item
        key={size.id}
        onSelect={this.onSelect(size)}
        size={size}
      />
    ));
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{i18next.t('order.size.title')}</CardTitle>
          <ListGroup>{this.renderItems()}</ListGroup>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  sizes: state.order.sizes
});

export default withRouter(
  connect(mapStateToProps, { fetchSizes, selectSize })(View)
);
