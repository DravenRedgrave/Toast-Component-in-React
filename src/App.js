import React,{useState} from 'react';
import './App.css';
import styles from './App.module.css'
import Button from './components/button/Button';
import Toast from './components/toast/Toast';

function App() {
  const [list,setList] = useState([]);
  let toastProperties = null
  const showToast = () => {
    toastProperties ={
      id:1,
      title:'Succes',
      description: 'This is a success toast component',
      backgroundColor:'#5cb85c'
    }
    setList([toastProperties]);
  };

  return (
    <div className="App">
      <h1>React Toast Components</h1>
      <div className={styles.buttons}>
        <Button handleClick={()=> showToast()}>Success</Button>
        <Button>Danger</Button>
        <Button>Info</Button>
        <Button>Warning</Button>
      </div>
      <Toast toastList={list} position="buttom-right"/>
    </div>
  );
}

export default App;
