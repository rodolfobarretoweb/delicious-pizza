import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { FormGroup, Label, Input } from 'reactstrap';

class Item extends PureComponent {
  onChange = () => {
    const { data, arrayHelpers } = this.props;
    arrayHelpers.insert(data.id, data);
  }

  render() {
    const { data, fieldName } = this.props;

    return(
      <FormGroup check key={data.id}>
        <Label check>
          <Field component={Input} name={`${fieldName}.${data.id}`} onChange={this.onChange} type="checkbox" />
          {data.name}
        </Label>
      </FormGroup>
    );
  }
}

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  arrayHelpers: PropTypes.instanceOf(Object).isRequired,
  fieldName: PropTypes.string.isRequired
};

export default Item;
