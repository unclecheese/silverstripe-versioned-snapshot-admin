import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'lib/Injector';
import i18n from 'i18n';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  showVersion,
  showDate,
  clearMessages
} from 'state/historyviewer/HistoryViewerActions';
import classNames from 'classnames';
import { versionType } from 'types/versionType';
import { getDate, getTime } from '../../helpers/dates';

class HistoryViewerSnapshot extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  getClassNames() {
    const { extraClass, initial, isComparing, isActive } = this.props;
    const defaultClasses = {
      'history-viewer__row': true,
      'history-viewer__snapshot': true,
      'history-viewer__row--current': isActive,
      'history-viewer__snapshot--initial': initial,
      'history-viewer__snapshot--muted': isComparing,
    };
    return classNames(defaultClasses, extraClass);
  }

  handleClick() {
    const { onSelect, version, isActive } = this.props;

    // If the clear button is shown, don't do anything when clicking on the row
    if (isActive) {
      return false;
    }
    onSelect(version);
    return false;
  }

  handleClose(e) {
    e.stopPropagation();
    this.props.onSelect(false);
    return false;
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleClick();
    }
  }

  render() {
    const {
      version,
      ActivityButtonComponent,
      CloseButtonComponent,
      isComparing,
      isActive,
      isShowingActivity,
      ActivityPanelComponent,
    } = this.props;
    const { Author: { FirstName, Surname } } = version;
    const author = `${FirstName || ''} ${Surname || ''}`;
    const rowTitle = i18n._t('HistoryViewerSnapshot.GO_TO_SNAPSHOT', 'Go to snapshot at {date}');

    return (
      <li className={this.getClassNames()} role="row">
        <span
          className="history-viewer__version-link"
          role="button"
          title={i18n.inject(rowTitle, { date: version.LastEdited })}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          tabIndex={isComparing ? -1 : 0}
        >
          <span className="history-viewer__message" role="cell">
            <span className="history-viewer__date">
              {getDate(version.LastEdited)}
              {' '}
              <small>{getTime(version.LastEdited)}</small>
            </span>
          </span>

          <span className="history-viewer__author" role="cell">
            {author}
          </span>
          <span className="history-viewer__actions" role="cell">
            <ActivityButtonComponent snapshotID={version.ID} />
            {isActive && (       
              <CloseButtonComponent onClose={this.handleClose} />
            )}
          </span>
        </span>
        {isShowingActivity && (
          <React.Fragment>
            <div style={{flexBasis: '100%', height: 0}} />
            <ActivityPanelComponent snapshotID={version.ID} />
          </React.Fragment>
        )}
      </li>
    );
  }
}

HistoryViewerSnapshot.propTypes = {
  isActive: PropTypes.bool,
  version: versionType,
  initial: PropTypes.bool,
  isComparing: PropTypes.bool,
  isShowingActivity: PropTypes.bool,
  FormActionComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  ActivityButtonComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  CloseButtonComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  ActivityPanelComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

HistoryViewerSnapshot.defaultProps = {
  isShowingActivity: false,
};

function mapStateToProps (state, ownProps) {
  return {
    isShowingActivity: state.versionedAdmin.historyViewer.showingActivity.includes(ownProps.version.ID),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onSelect(selectedVersion) {
      const func = selectedVersion.IsFullVersion ? showVersion : showDate;
      dispatch(func(selectedVersion));
      dispatch(clearMessages());
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  inject(
    ['FormAction', 'SnapshotHistoryActivityButton', 'SnapshotHistoryCloseButton', 'SnapshotActivityPanel'],
    (FormAction, ActivityButtonComponent, CloseButtonComponent, ActivityPanelComponent) => ({
        FormActionComponent: FormAction,
        ActivityButtonComponent,
        CloseButtonComponent,
        ActivityPanelComponent,
      })
  )
)(HistoryViewerSnapshot);
