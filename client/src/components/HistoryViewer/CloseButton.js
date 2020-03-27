import React from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n';
import { inject } from 'lib/Injector';

const CloseButton = ({onClose, FormActionComponent}) => {
    return (
        <FormActionComponent
        onClick={onClose}
        icon="cancel"
        // Provide the title as an attribute to prevent it from rendering as text on the button
        attributes={{
          title: i18n._t('HistoryViewerVersion.CLOSE', 'Close'),
        }}
        title={null}
        buttonStyle="outline-light"
        extraClass="history-viewer__close-button"
      />
    );
};

CloseButton.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default inject(
    ['FormAction'],
    (FormActionComponent) => ({ FormActionComponent })
)(CloseButton);