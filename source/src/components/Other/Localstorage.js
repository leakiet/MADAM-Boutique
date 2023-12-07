import React, { useState, useEffect } from 'react';

const LocalStorageViewer = () => {
  const [localStorageData, setLocalStorageData] = useState(null);

  useEffect(() => {
    // Retrieve data from local storage
    const dataFromLocalStorage = localStorage.getItem('users');

    // Update the state with the retrieved data
    setLocalStorageData(dataFromLocalStorage);
  }, []);

  return (
    <div>
      <h2>Local Storage Viewer</h2>
      {localStorageData ? (
        <pre>{JSON.stringify(localStorageData, null, 2)}</pre>
      ) : (
        <p>No data in local storage.</p>
      )}
    </div>
  );
};

export default LocalStorageViewer;