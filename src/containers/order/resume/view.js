import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import {
  ListGroup, Card, CardBody, CardTitle, Alert
} from 'reactstrap';
import { getTotalTime, getTotalPrice } from '../actions';
import { formatCurrency } from '../../../utils/currency';
import Item from './item';

class View extends PureComponent {
  render() {
    const { selectedFlavor, selectedSize, selectedIncrements } = this.props;

    return(
      <Card>
        <CardBody>
          <CardTitle>{i18next.t('order.resume.title')}</CardTitle>
          <ListGroup>
            <Item flavor={selectedFlavor} size={selectedSize} increments={selectedIncrements} />
          </ListGroup>

          <br />

          <Alert color="warning">
            {i18next.t('order.resume.totalTime', { value: getTotalTime(selectedSize, selectedFlavor, selectedIncrements) })}
          </Alert>

          <Alert color="danger">
            {i18next.t('order.resume.totalPrice', { value: formatCurrency({ value: getTotalPrice(selectedSize, selectedIncrements) }) })}
          </Alert>
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  selectedFlavor: state.order.selectedFlavor,
  selectedSize: state.order.selectedSize,
  selectedIncrements: state.order.selectedIncrements
});

export default connect(mapStateToProps)(View);
