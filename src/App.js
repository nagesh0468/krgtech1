import {useState } from 'react'
import './App.css';


function App() {
  const [update, setUpdate] = useState(false)
  const [data,setData] = useState({
    name : '',
    age : '',
    dob : '',
  })
  const { name, age, dob} = data;

  const handleOnChange = (e) => {
    setData((prev) =>( {
         ...prev,
         [e.target.id] : e.target.value
    }))
  }
const handleSubmit = (e) => {
      e.preventDefault()
      setData(data)
      setUpdate(true)
      
}


  
  return (
    <div className="App">

      <form  onSubmit={handleSubmit} > 
      <div className='space'>
      Name:
        <input type="text" id='name' value={name} onChange={handleOnChange} />
      </div>
          
      <div className='space'>
      Age:
        <input type="text" id='age' value={age} onChange={handleOnChange} />
      </div>

      <div className='space'>
      Dop:
        <input type="date" id='dob' value={dob} onChange={handleOnChange} />
      </div>
      <button>Submit</button>
      </form>
      <div>
        
        {
          update && (
          <div>
            <h4> name :{name} </h4>
          <h4>age : {age}</h4>
          <h4>Dop :  {dob} </h4>
          </div>
          )
          
        }

      
        
        
      </div>
      
    </div>
  );
}

export default App;
