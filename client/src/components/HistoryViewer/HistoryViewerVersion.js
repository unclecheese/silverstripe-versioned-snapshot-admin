import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { inject } from 'lib/Injector';
import { versionType, defaultVersion } from 'types/versionType';
import { compareType } from 'types/compareType';
import i18n from 'i18n';
import classNames from 'classnames';
import {
  showVersion,
  clearMessages,
  setCompareMode,
  setCompareFrom,
  setCompareTo,
} from 'state/historyviewer/HistoryViewerActions';
import { getDate, getTime } from '../../helpers/dates';

class HistoryViewerVersion extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  /**
   * Returns the name of the Member who either published the object or last edited it, depending
   * on whether the object is published or not
   *
   * @returns {string}
   */
  getAuthor() {
    const { version } = this.props;
    let member = {};

    if (version.Published && version.Publisher) {
      member = version.Publisher;
    } else if (version.Author) {
      member = version.Author;
    }

    return `${member.FirstName || ''} ${member.Surname || ''}`;
  }

  /**
   * Return a string of HTML class names for the row (list item) element
   *
   * @returns {string}
   */
  getClassNames() {
    const { extraClass, isActive, compare, compare: { compareFrom, compareTo } } = this.props;
    const defaultClasses = {
      'history-viewer__row': true,
      'history-viewer__row--current': isActive,
      'history-viewer__row--comparison-selected': compare && !(compareFrom && compareTo),
    };
    return classNames(defaultClasses, extraClass);
  }

  /**
   * If pressing enter key, trigger click event to load detail view
   *
   * @param {Object} event
   */
  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleClick();
    }
  }

  /**
   * When clicking on a version, render the detail view for it via a Redux action dispatch
   * passed through via a closure prop (onSelect)
   */
  handleClick() {
    const { onSelect, version, isActive, compare } = this.props;

    // If the clear button is shown, don't do anything when clicking on the row
    if (isActive) {
      return false;
    }
    onSelect(version, compare);
    return false;
  }

  handleCompare() {
    const { onCompareMode, version } = this.props;
    onCompareMode(version);
  }

  /**
   * When closing the version, return back to the list view via Redux action dispatch
   */
  handleClose() {
    const { onSelect, version, compare, compare: { versionFrom } } = this.props;
    if (versionFrom && versionFrom.Version === version.Version) {
      // Ensures we set the correct thing. C.f. logic in mapDispatchToProps -> onSelect
      delete compare.versionFrom;
    }
    onSelect(0, compare);
  }

  /**
   * Renders a "compare mode" button which will allow the user to start selecting versions to
   * compare differences between. This is usually rendered in the "more actions" menu.
   *
   * @returns {FormAction|null}
   */
  renderCompareButton() {
    const { compareModeAvailable, compare, FormActionComponent } = this.props;
    const translatedText = i18n._t('HistoryViewerVersion.COMPARE', 'Compare');

    if (!compareModeAvailable || compare) {
      return null;
    }

    return (
      <FormActionComponent
        onClick={this.handleCompare}
        title={translatedText}
        buttonStyle="outline-light"
        extraClass="history-viewer__compare-button"
      >
        {translatedText}
      </FormActionComponent>
    );
  }

  /**
   * Renders an "Already selected" span to close the selected version when compare mode is enabled.
   * Hidden in all other cases in favour of the "clear button". When the rendered version is
   * hovered or focused, it gets hidden and the clear button is rendered instead.
   *
   * @returns {DOMElement|null}
   */
  renderSelectedMessage() {
    const { isActive } = this.props;

    if (!isActive) {
      return null;
    }

    return (
      <span className="history-viewer__selected-message">
        {i18n._t('HistoryViewerVersion.SELECTED', 'Already selected')}
      </span>
    );
  }

  /**
   * Renders the "actions" menu for the detail view. This menu may contain a compare mode toggle
   * and/or a "clear" button to clear the current selected version
   *
   * @returns {DOMElement}
   */
  renderActions() {
    const { isActive, compare, ActivityButtonComponent, CloseButtonComponent, version } = this.props;

    if (!isActive && !compare) {
      return (
        <span className="history-viewer__actions" role="cell">
          <ActivityButtonComponent snapshotID={version.ID} />
        </span>
      );
    }

    return (
      <span className="history-viewer__actions" role="cell">
        <ActivityButtonComponent snapshotID={version.ID} />
        {this.renderCompareButton()}
        {this.renderSelectedMessage()}
        {isActive && (
          <CloseButtonComponent onClose={this.handleClose} />
        )}
      </span>
    );
  }
  render() {
    const { version, isShowingActivity, ActivityPanelComponent } = this.props;
    const rowTitle = i18n._t('HistoryViewerVersion.GO_TO_VERSION', 'Go to version {version}');

    return (
      <li className={this.getClassNames()} role="row">
        <span
          className="history-viewer__version-link"
          role="button"
          title={i18n.inject(rowTitle, { version: version.Version })}
          onClick={this.handleClick}
          onKeyUp={this.handleKeyUp}
          tabIndex={0}
        >
          <span className="history-viewer__message" role="cell">
            <span className="history-viewer__date">
              {getDate(version.LastEdited)}
              {' '}
              <small>{getTime(version.LastEdited)}</small>
            </span>
            {version.ActivityType === 'PUBLISHED' && (
              <span className="history-viewer__publish-badge history-viewer__state--published">
                <span className="icon font-icon-rocket" /> Published
              </span>
            )}
          </span>

          <span className="history-viewer__author" role="cell">
            {this.getAuthor()}
          </span>
          {this.renderActions()}
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

HistoryViewerVersion.propTypes = {
  extraClass: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  version: versionType,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
  onCompareMode: PropTypes.func,
  compare: compareType,
  compareModeAvailable: PropTypes.bool,
  isShowingActivity: PropTypes.bool,
  StateComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  FormActionComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  ActivityButtonComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  CloseButtonComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

HistoryViewerVersion.defaultProps = {
  isActive: false,
  version: defaultVersion,
  compare: false,
  compareModeAvailable: true,
  isShowingActivity: false,
};

export { HistoryViewerVersion as Component };

function mapStateToProps (state, ownProps) {
  return {
    isShowingActivity: state.versionedAdmin.historyViewer.showingActivity.includes(ownProps.version.ID),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onSelect(selectedVersion, compare) {
      const { versionFrom } = compare;
      if (compare) {
        if (!versionFrom) {
          dispatch(setCompareFrom(selectedVersion));
        } else {
          dispatch(setCompareTo(selectedVersion));
        }
      } else {
        dispatch(showVersion(selectedVersion));
        dispatch(clearMessages());
      }
    },
    onCompareMode(version) {
      dispatch(setCompareFrom(version));
      dispatch(setCompareMode(true));
    }
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  inject(
    [
      'SnapshotHistoryViewerVersionState',
      'FormAction',
      'SnapshotHistoryActivityButton',
      'SnapshotHistoryCloseButton',
      'SnapshotActivityPanel',
    ],
    (
      StateComponent,
      FormActionComponent,
      ActivityButtonComponent,
      CloseButtonComponent,
      ActivityPanelComponent
    ) => ({
      StateComponent,
      FormActionComponent,
      ActivityButtonComponent,
      CloseButtonComponent,
      ActivityPanelComponent,
    }),
    ({ version }) => {
      let context = 'VersionedAdmin.HistoryViewer.HistoryViewerVersion';
      if (version) {
        context += `.${version.Version}`;
      }
      return context;
    }
  )
)(HistoryViewerVersion);
