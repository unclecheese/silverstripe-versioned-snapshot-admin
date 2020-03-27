import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from 'components/Loading/Loading';
import { getTimestamp } from '../../helpers/dates';
import useSnapshotContext from './useSnapshotContext';

const QUERY = gql`
query ReadSnapshot($ID: ID!, $OriginHash: String!) {
    readSnapshot(ID: $ID) {
      ID
      ActivityFeed(OriginHash: $OriginHash) {
        Date
        Description
        AuthorName
        Action
      }
      PublishedSummary
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


const ActivityPanel = ({ snapshotID }) => {
    const { originHash } = useSnapshotContext();
    return (
        <div className="history-viewer__activity-panel">
            <Query query={QUERY} variables={{ID: snapshotID, OriginHash: originHash }}>
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
                    const { ActivityFeed, PublishedSummary } = data.readSnapshot;
                    return (
                        <div className="history-viewer__activity-detail">
                            {PublishedSummary && (
                                <ul className="history-viewer__published-summary">
                                    {PublishedSummary.map(p => (
                                        <li key={p}>{getIconForAction('PUBLISHED')} {p}</li>
                                    ))}
                                </ul>
                            )}
                            <hr />
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

export default ActivityPanel;