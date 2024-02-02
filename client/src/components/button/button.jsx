import style from './button.module.css'

const Boton = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className={style.customButton}>
            {label}
        </button>
    )
}

export default Boton
