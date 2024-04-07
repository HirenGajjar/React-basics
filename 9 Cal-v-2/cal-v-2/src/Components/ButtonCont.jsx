import styles from '../App.module.css';
const ButtonCont = ({buttons,onBtnClicked})=>{
    return (<>
    <div className={styles.btnContainer} id='btn-container'>
        {
            buttons.map(buttons=>
            <button key={buttons} className={styles.btn}
            onClick={()=>onBtnClicked(buttons)}
                        
            >{buttons}</button>
        )
        }
        </div>
    </>)
}
export default ButtonCont