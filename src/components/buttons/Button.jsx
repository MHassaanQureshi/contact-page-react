
import styles from "./Button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({text,icon}) => {
  return (
   
   <button
     className={`${styles.primary_btn}` }>
       {icon}
       {text}
      
      </button>
  )
}

export default Button;