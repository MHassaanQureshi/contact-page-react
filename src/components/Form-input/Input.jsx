import styles from "./Form.module.css"
const Input = ({text}) => {
  return (
    <form >
      <div className={`${styles.form_container}`}>
        <label htmlFor="name">{text}</label>
        <input type="text" name="name"/>
      </div>
    </form>
  )
}

export default Input;