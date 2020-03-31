import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading/Loading';
import { getTimestamp } from '../../helpers/dates';
import useSnapshotContext from './useSnapshotContext';

const QUERY = gql`
query ReadActivity(
    $OriginHash: String!,
    $FromVersion: Int!,
    $ToVersion: Int,
    $ThisVersion: Int!,
    $ShowPublished: Boolean!
) {
    readActivity(origin: $OriginHash, fromVersion: $FromVersion, toVersion: $ToVersion) {
        Date
        Description
        AuthorName
        Action
    }
    readLatestSnapshotFromVersion(origin: $OriginHash, version: $ThisVersion) @include (if: $ShowPublished) {
      PublishedSummary
      ID
    }
  }
`;

const getIconForAction = (action) => {
    switch (action) {
        case 'ADDED':
        case 'CREATED':
            return <span className="icon font-icon-plus-1 history-viewer__state--modified" />;
        case 'MODIFIED':
            return <span className="icon history-viewer__state--modified">~</span>;
        case 'DELETED':
        case 'REMOVED':
        case 'UNPUBLISHED':
            return <span className="icon font-icon-minus history-viewer__state--archived" />;
        case 'PUBLISHED':
            return <span className="icon font-icon-right-thin history-viewer__state--published" />;
    }
};


const ActivityPanel = ({ fromVersion, toVersion, showPublished = true }) => {
    const { originHash } = useSnapshotContext();    
    return (
        <div className="history-viewer__activity-panel">
            <Query query={QUERY} variables={{
                OriginHash: originHash,
                FromVersion: fromVersion,
                ToVersion: toVersion,
                ShowPublished: showPublished,
                ThisVersion: showPublished ? toVersion : fromVersion,
            }}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <Loading />;
                    }
                    if (error) {
                        return (
                            <div className="history-viewer__activity-error">
                                <ul>
                                {error.graphQLErrors.map(e => {
                                    return <li key={e.message}>{e.message}</li>
                                })}
                                </ul>
                            </div>
                        );
                    }
                    const ActivityFeed = data.readActivity;
                    if (!ActivityFeed || !ActivityFeed.length) {
                        return null;
                    }
                    let published = null;
                    if (data.readLatestSnapshotFromVersion) {
                        published = data.readLatestSnapshotFromVersion.PublishedSummary;
                    }
                    return (
                        <div className="history-viewer__activity-detail">
                            {published && (
                                <React.Fragment>
                                    <ul className="history-viewer__published-summary">
                                        {published.map(p => (
                                            <li key={p}>{getIconForAction('PUBLISHED')} {p}</li>
                                        ))}
                                    </ul>
                                    <hr />          
                                </React.Fragment>                      
                            )}
                            <h3>Activity of linked items</h3>
                            <ul>
                                {ActivityFeed.map(activity => {
                                    return (
                                        <li key={activity.Date}>
                                            <span className="history-viewer__message">
                                                {getIconForAction(activity.Action)}
                                                {' '}
                                                {activity.Action}                                                    
                                                {' '}
                                                {activity.Description}
                                                {' '}
                                                <small>{getTimestamp(activity.Date)}</small>
                                            </span>
                                            <span className="history-viewer__author">
                                                {activity.AuthorName}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>  
                        </div>
                    )                    
                }}
            </Query>
        </div>
    );
};

ActivityPanel.propTypes = {
    fromVersion: PropTypes.number,
    toVersion: PropTypes.number,
    showPublished: PropTypes.boolean,
};

ActivityPanel.defaultProps = {
    showPublished: true,
};

export default ActivityPanel;