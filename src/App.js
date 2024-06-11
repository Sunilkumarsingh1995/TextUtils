import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  
 const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode';
    //title chamkane k liye----->
    // setInterval(() => {
    //   document.title = 'TextUtiles is Amazing Mode'
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install TextUtiles Now'
    // }, 1500);

  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode'
  }
 }
  return (
    <>
    {/* <Router> */}

    {/* /users --> Component 1
    /users/Home --> Component 2 */}

<Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>
<div className="container my-3">  
{/* <Routes> */}
          {/* <Route exact path="/about" element= {<About/>}> */}
          {/* </Route> */}
          {/* <Route exact path="/" element =  */}
          {<TextForm showAlert = {showAlert} heading = "Enter the text to analyze below" mode={mode}/>}
          {/* > */}
            
          {/* </Route> */}
{/* </Routes> */}
     </div>
    {/* </Router> */}
    </>
  );
}

export default App;
