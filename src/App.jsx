import react,{useState} from 'react'
import './App.css'
import Weather from './Weather'
import Display from './Display'

function App() {
    const [data, setData] = useState([]);

  return (
    <div>
      <Weather setData={setData} />
      {data.map((item, index) => (
        <Display key={index} data={item} setData={setData} />
      ))}
    </div>
  ); 
}

export default App
