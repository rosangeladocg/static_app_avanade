import logo from './avanade_logo.png';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'; 

function App() {

  const [brand, setBrand] = useState([]);

  useEffect(() => {
    axios.get('http://finder-api.azurewebsites.net/brands').then(
      res => setBrand(res.data)
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-content">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          <code>Mais um projeto desenvolvido em ReactJS.</code>.
        </p>
        <p>Academia Avanade +50</p>
        <a
          className="App-link"
          href="https://github.com/mrdouglasmorais"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="brands-api">
            { brand.map(
              (item, index) => (
                <div key={ index }>
                  <p>{item.value}</p>
                  <img src={ item.logo } alt={item.value} />
                </div>
              ) 
            ) }
          </div>
          Professor Douglas Morais
        </a>
      </header>
    </div>
  );
}

export default App;
