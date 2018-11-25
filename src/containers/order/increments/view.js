import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { size } from 'lodash';
import { withRouter } from 'react-router-dom';
import { Formik, FieldArray } from 'formik';
import {
  Card, CardBody, CardTitle, Form, Button
} from 'reactstrap';
import { fetchIncrements, selectIncrements } from '../actions';
import SelectedItems from '../shared/selectedItems';
import Item from './item';

class View extends PureComponent {
  componentDidMount() {
    const { selectedSize, selectedFlavor } = this.props;

    if(size(selectedSize) === 0 || size(selectedFlavor) === 0) {
      this.props.history.push('/');
    }

    this.props.fetchIncrements();
  }

  onSubmit = values => {
    const { history } = this.props;

    if(values.choices && values.choices.length) {
      this.props.selectIncrements(values.choices);
      history.push('/order/resume');
    } else {
      history.push('/order/resume');
    }
  }

  renderItems = arrayHelpers => (
    this.props.increments.map(increment => (
      <Item
        data={increment}
        fieldName="choices"
        key={increment.id}
        arrayHelpers={arrayHelpers}
      />
    ))
  );

  renderForm = ({ handleSubmit, isSubmitting }) => (
    <Form onSubmit={handleSubmit}>
      <FieldArray name="choices" render={this.renderItems} />

      <br />

      <Button block disabled={isSubmitting} type="submit" color="primary">
        {i18next.t('order.increment.continue')}
      </Button>
    </Form>
  );

  render() {
    return (
      <Card>
        <CardBody>
          <SelectedItems />

          <CardTitle>{i18next.t('order.increment.title')}</CardTitle>
          <Formik
            initialValues={{ choices: [] }}
            onSubmit={this.onSubmit}
            render={this.renderForm}
          />
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  increments: state.order.increments,
  selectedSize: state.order.selectedSize,
  selectedFlavor: state.order.selectedFlavor
});

export default withRouter(
  connect(mapStateToProps, { fetchIncrements, selectIncrements })(View)
);
