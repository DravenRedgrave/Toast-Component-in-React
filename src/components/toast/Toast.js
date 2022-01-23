import React,{useCallback} from 'react'
import styles from './Toast.module.css'

const Toast = ({toastList,position,setList}) => {
    const deleteToast = useCallback(id=>{
        const toastListItem = toastList.filter(e => e.id !==id);
        setList(toastListItem);
    },[toastList,setList]);
    return (
        <div className={`${styles.container} ${styles[position]}`}>
            {
                toastList.map((toast,i) => (
                    <div key={i} className={`${styles.notification} ${styles.toast} ${styles[position]} `}  style={{backgroundColor: toast.backgroundColor}} >
                        <button onClick={()=> deleteToast(toast.id)}>X</button>
                        <div>
                            <p className={styles.title}>{toast.title}</p>
                            <p className={styles.description}>{toast.description}</p>
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}

export default Toast
