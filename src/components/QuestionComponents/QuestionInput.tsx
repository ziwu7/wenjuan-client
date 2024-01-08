import styles from "./QuestionInput.module.scss";
type PropsType={
    fe_id:string
    props:{
        title:string
        placeholder?:string
    }
}

export default function QuestionInput({fe_id,props}:PropsType) {
    const {title,placeholder} =props
  return (
    <div>
      <p>{title}</p>
      <div className={styles.inputWrapper}>
      <input  name={fe_id} placeholder={placeholder} />
      </div>
      
    </div>
  )
}
