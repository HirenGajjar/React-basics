import styles from '../App.module.css';
const ButtonCont = ({buttons})=>{
    return (<>
    
    <div className={styles.btnContainer} id='btn-container'>
        {
            buttons.map(buttons=>
            <button key={buttons} className={styles.btn}>{buttons}</button>
        )

        }
        </div>
    </>)
}
export default ButtonCont