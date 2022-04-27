import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {
  const [meaning, setMeaning] = useState([]);

  const dict = async () => {
    try {
      const data = await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/plane');
      // const data = await response.json();
      // console.log(data);
      setMeaning(data.data)
      
    } catch (error) {
      console.log(error);
    }
  }
  console.log(meaning)
  useEffect (() => {
    dict();
  }, []);

  return (
    <div>App</div>
  )
}

export default App