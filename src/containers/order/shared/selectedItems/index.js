import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import i18next from 'i18next';
import { Alert } from 'reactstrap';

class SelectedItems extends PureComponent {
  onChange = () => {
    const { data, arrayHelpers } = this.props;
    arrayHelpers.insert(data.id, data);
  }

  render() {
    const { selectedSize, selectedFlavor } = this.props;

    return(
      <Fragment>
        {
          Object.values(selectedSize).length > 0 && (
            <Alert color="dark">
              {i18next.t('order.shared.selectedItems.selectedSize', { value: selectedSize.name })}
            </Alert>
          )
        }

        {
          Object.values(selectedFlavor).length > 0 && (
            <Alert color="dark">
              {i18next.t('order.shared.selectedItems.selectedFlavor', { value: selectedFlavor.name })}
            </Alert>
          )
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  selectedSize: state.order.selectedSize,
  selectedFlavor: state.order.selectedFlavor
});

export default connect(mapStateToProps)(SelectedItems);
