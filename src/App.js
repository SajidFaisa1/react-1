import logo from './logo.svg';
import './App.css';
const newStyle={
  color:'blue',
  backgroundColor:'black',
  padding:'20px',
  borderRadius:'5px'
}

function App() {
  return (
    <div className="App">
       <Myself></Myself>
       <Myself></Myself>
       <Myself></Myself>
    </div>
  );
}

function Myself(){
  return (
  <div className='heading'>
    <h1 >I'm Faisal Tajwar</h1>
    <p>Im Live in Ashulia</p>
  </div>
  )
}

export default App;
