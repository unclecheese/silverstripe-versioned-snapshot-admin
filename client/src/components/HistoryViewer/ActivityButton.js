import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inject } from 'lib/Injector';
import { showActivity, hideActivity } from '../../state/historyviewer/HistoryViewerActions';
import i18n from 'i18n';

const ActivityButton = ({show, hide, isActive, FormActionComponent}) => {
    return (
        <FormActionComponent
        onClick={isActive ? hide : show}
        icon={isActive ? 'cancel' : 'pulse'}
        attributes={{
          title: i18n._t('HistoryViewerVersion.SHOW_ACTIVITY', 'Show activity'),
        }}
        title={null}
        buttonStyle="outline-dark"
        extraClass="history-viewer__activity-button"
        />
    );
};

ActivityButton.propTypes = {
    snapshotID: PropTypes.number.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    show(e) {
        e.stopPropagation();
        dispatch(showActivity(ownProps.snapshotID));
    },
    hide(e) {
        e.stopPropagation();
        dispatch(hideActivity(ownProps.snapshotID));
    },
});

const mapStateToProps = (state, ownProps) => ({
    isActive: state.versionedAdmin.historyViewer.showingActivity.includes(ownProps.snapshotID),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    inject(
      ['FormAction'],
      (FormActionComponent) => ({
        FormActionComponent,
      }),
      ({ snapshotID }) => (
        `VersionedAdmin.HistoryViewer.HistoryViewerVersion.ActivityButton.${snapshotID}`
      )
    )
  )(ActivityButton);
  