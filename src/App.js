import { useState } from 'react';
import './App.css';
import { tabs } from './Data/data';

function App() {

  let [activetab,setactiveTab] = useState(0)
  let [activeContent,setactiveContent] = useState(tabs[0])
  let changeData = (index)=>{
    setactiveTab  (index)
    setactiveContent(tabs[index])
}
  return (
    <div className="App">
      <div className= 'outerDiv'>
        <h1>Hope Collection</h1>
        <ul>
         
            {tabs.map((value,index)=>{
            
              return(
              <li>
              <button onClick={()=>changeData(index)} className={activetab===index ? 'activeButton' : ''}>{value.Tittle}</button>
            </li>
            
              )
            })}
         </ul>
         {activeContent !== undefined ? 
         <p>{activeContent.discription}</p>
         :
         ''
        }
         
      </div> 
    </div>

  );
}

export default App;
