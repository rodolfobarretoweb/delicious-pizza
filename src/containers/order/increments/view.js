import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { withRouter } from 'react-router-dom';
import { Formik, FieldArray } from 'formik';
import {
  Card, CardBody, CardTitle, Form, Button
} from 'reactstrap';
import { fetchIncrements, selectIncrements } from '../actions';
import Item from './item';

class View extends PureComponent {
  componentDidMount() {
    this.props.fetchIncrements();
  }

  onSubmit = values => {
    const { history } = this.props;

    if(values.length) {
      this.props.selectIncrements(values);
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
  increments: state.order.increments
});

export default withRouter(
  connect(mapStateToProps, { fetchIncrements, selectIncrements })(View)
);
