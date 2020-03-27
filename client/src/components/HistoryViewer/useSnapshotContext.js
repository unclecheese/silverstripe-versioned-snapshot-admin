import React, { useContext } from 'react';
import SnapshotContext from './SnapshotContext';

const useSnapshotContext = () => useContext(SnapshotContext);

export default useSnapshotContext;