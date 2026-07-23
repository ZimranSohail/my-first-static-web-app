import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch('/api/message');
        const result = await response.json();
        setData(result.text);
      } catch (error) {
        console.error('Failed to fetch API:', error);
      }
    })();
  }, []); // <--- Added dependency array to run only once

  return <div>{data}</div>;
}

export default App;