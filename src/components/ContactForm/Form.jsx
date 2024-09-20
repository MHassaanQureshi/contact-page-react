import Button from "c:/Users/PMLS/Desktop/react/second-app/contact-page/src/components/buttons/button"
import styles from "./ContactForm.module.css";
import { IoIosCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import Input from  "../Form-input/Input.jsx";
import Image from '../formimage/image.jsx';

const Form = () => {
  return (
    <div className={` contact-container `}>
      <div className={`${styles.form}`}>
        <div className={styles.buttons}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
        <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />}/>
        
        </div>
        <div className={styles.email}><Button text="VIA EMAIL FORM" icon={<MdMessage fontSize="24px" />}/></div>
        <div className={styles.input}>
          <Input text="Name"/>
          <Input text="E-Mail"/>
          <div className={styles.third_inp}>
            <Input text="TEXT"/>
          </div>
          </div>
          <Image />
      </div>
        
    </div>
    
  )
}

export default Form;