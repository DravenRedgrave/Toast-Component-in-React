import React from 'react'
import styles from './Toast.module.css'

const Toast = ({toastList,position}) => {
    return (
        <div className={`${styles.container} ${styles[position]}`}>
            {
                toastList.map((toast,i) => (
                    <div key={i} style={{backgroundColor: toast.backgroundColor}}>
                        <button>X</button>
                        <div>
                            <p>{toast.title}</p>
                            <p>{toast.description}</p>
                        </div>
                    </div> 
                ))
            }
        </div>
    )
}

export default Toast
