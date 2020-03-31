import gql from 'graphql-tag';

const createSnapshotsQuery = (typeName, isPreviewable) => {
    return gql`
    query ReadSnapshots${typeName} ($page_id: ID!, $limit: Int!, $offset: Int!) {
      readOne${typeName}(
        Versioning: {
          Mode: LATEST
        },
        ID: $page_id
      ) {
        ID
        SnapshotHash
        Versions (limit: $limit, offset: $offset, sortBy: [{
          field: Version,
          direction: DESC
        }]) {
          pageInfo {
            totalCount
          }
          edges {
            node {
              Version
              ${isPreviewable ? 'AbsoluteLink' : ''}
              Author {
                FirstName
                Surname
              }
              Publisher {
                FirstName
                Surname
              }
              Published
              LiveVersion
              LatestDraftVersion
              LastEdited
            }
          }
        }
      }
    }

    `;
};

export default createSnapshotsQuery;
