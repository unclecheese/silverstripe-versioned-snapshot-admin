import React from 'react';
import SnapshotContext from './SnapshotContext';

const SnapshotContextProvider = ({ originHash, children }) => (
    <SnapshotContext.Provider value={{ originHash }}>{children}</SnapshotContext.Provider>
);

export default SnapshotContextProvider;