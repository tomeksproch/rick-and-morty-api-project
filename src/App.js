import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Filter from './components/Filter/FIlter';

function App() {
  const api = `https://rickandmortyapi.com/api/character/?page=1`;
  const [fetchedData, updateFetchedData] = useState([]);
  const { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1>Characters</h1>
      <div>
        <div className="row">
          <Filter />
          <div>
            <Card results={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
