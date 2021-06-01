import {  useState } from 'react';
import { Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Tab = (props) => {
  const [currTab, setCurrTab] = useState(0);

  const [Tabs, setTabs] = useState([
    {label: "Tab 1", content: "Content of Tab 1",
     Callback(){
      console.log(this.label , "Clicked")
    }},
   
    {label: "Tab 2", content: "Content of Tab 2",
    Callback(){
      console.log(this.label , "Clicked")
    }
  
  },
    {label: "Tab 3", content: "Content of Tab 3",
    Callback(){
      console.log(this.label , "Clicked")
    }
  
  },
  ]);


  const handleClick = (e) =>{
      e.preventDefault();
       
      setCurrTab(e.target.name);
      Tabs[currTab].Callback();
  
  }




  return(
    <div>
        {Tabs.map((tab, idx) => {
          const style = {
            marginTop: "20px",
            width: "200px",
            border: '2px solid grey',
            backgroundColor: "white",
            color: "black"

          };
       
         
            return(
                <Button  style = {style} key={idx} onClick={ handleClick } name={idx}>{tab.label}</Button>
                
            )  
        })}    
        <div>
            {Tabs[currTab].content}
        </div>
    </div>
)
}

export default Tab;