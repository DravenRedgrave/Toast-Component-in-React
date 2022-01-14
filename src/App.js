import React,{useState} from 'react';
import './App.css';
import styles from './App.module.css'
import Button from './components/button/Button';
import Toast from './components/toast/Toast';

function App() {
  const [list,setList] = useState([]);
  let toastProperties = null
  const showToast = type => {
    switch(type){
      case 'success':
          toastProperties ={
          id:1,
          title:'Succes',
          description: 'This is a success toast component',
          backgroundColor:'#5cb85c'
    }
    break;
    case 'danger':
      toastProperties ={
      id:2,
      title:'Danger',
      description: 'This is a danger toast component',
      backgroundColor:'#d9534f'
}
break;
case 'info':
  toastProperties ={
  id:3,
  title:'Info',
  description: 'This is a danger toast component',
  backgroundColor:'#5bc0de'
}
break;
case 'waring':
  toastProperties ={
  id:4,
  title:'Warning',
  description: 'This is a warning toast component',
  backgroundColor:'#f0ad4e'
  }
  break;
  default:
    toastProperties = [];
}
setList([...list,toastProperties]);
  };
  return (
    <div className="App">
      <h1>React Toast Components</h1>
      <div className={styles.buttons}>
        <Button handleClick={()=> showToast('success')}>Success</Button>
        <Button handleClick={()=> showToast('danger')}>Danger</Button>
        <Button handleClick={()=> showToast('info')}>Info</Button>
        <Button handleClick={()=> showToast('waring')}>Warning</Button>
      </div>
      <Toast toastList={list} position="buttom-right"/>
    </div>
  );
}

export default App;
