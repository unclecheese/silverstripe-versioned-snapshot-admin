import HISTORY_VIEWER from './HistoryViewerActionTypes';
import uuidv1 from 'uuid/v1';

/**
 * Show the provided version in the viewer, i.e. a detail or comparison view
 * Fetching specifically by version is a little more deterministic and performant compared to
 * fetching by date (below)
 *
 * @param {Object} version
 * @returns {Object}
 */
export function showVersion(version) {
  return {
    type: HISTORY_VIEWER.SHOW_VERSION,
    payload: { version },
  };
}

/**
 * Show the provided version in the viewer, i.e. a detail or comparison view
 *
 * @param {Object} version
 * @returns {Object}
 */
export function showDate(version) {
  return {
    type: HISTORY_VIEWER.SHOW_DATE,
    payload: { version },
  };
}

/**
 * Return to list view
 * @returns {Object}
 */
export function showList() {
  return {
    type: HISTORY_VIEWER.SHOW_LIST,
  };
}

/**
 * Set the current pagination page number for the list of history viewer versions
 *
 * @param {int} page
 * @returns {Object}
 */
export function setCurrentPage(page) {
  return {
    type: HISTORY_VIEWER.SET_CURRENT_PAGE,
    payload: { page },
  };
}

/**
 * Add a new status message, for example "Successfully reverted to version 123"
 *
 * @param {string} message
 * @param {string} type
 * @returns {Object}
 */
export function addMessage(message, type = 'success') {
  return {
    type: HISTORY_VIEWER.ADD_MESSAGE,
    payload: { id: uuidv1(), message, type },
  };
}

/**
 * Clear all status messages
 *
 * @returns {Object}
 */
export function clearMessages() {
  return {
    type: HISTORY_VIEWER.CLEAR_MESSAGES,
  };
}

/**
 * Enables or disables the comparison mode
 *
 * @param {boolean} enabled
 * @returns {Object}
 */
export function setCompareMode(enabled) {
  return {
    type: HISTORY_VIEWER.SET_COMPARE_MODE,
    payload: { enabled },
  };
}

/**
 * Sets the comparison mode 'from' a version
 *
 * @param {Object} version
 * @returns {Object}
 */
export function setCompareFrom(version) {
  return {
    type: HISTORY_VIEWER.SET_COMPARE_FROM,
    payload: { version },
  };
}

/**
 * Sets the comparison mode 'to' a version
 *
 * @param {Object} version
 * @returns {Object}
 */
export function setCompareTo(version) {
  return {
    type: HISTORY_VIEWER.SET_COMPARE_TO,
    payload: { version },
  };
}

export function showActivity(version) {
  return {
    type: HISTORY_VIEWER.SHOW_ACTIVITY,
    payload: version,
  };
}

export function hideActivity(version) {
  return {
    type: HISTORY_VIEWER.HIDE_ACTIVITY,
    payload: version,
  };
}

