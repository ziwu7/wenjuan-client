import React from 'react'
import styles from './QuestionRadio.module.scss'

type PropsType ={
    fe_id:string;
    props:{
        title:string;
        options:Array<{
            value:string;
            text:string;
        }>
        value:string;
        isVertical:boolean;
    }
}

export default function QuestionRadio({fe_id,props}:PropsType) {
    const {title,options=[],value,isVertical}=props
    let lsclassName = isVertical ? styles.vertical : styles.horizontal
  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
      {options.map(opt=>{
        const {value:val,text} =opt
        return <li key={val} className={lsclassName}>
            <label>
           <input type="Radio" name ={fe_id} defaultValue={val} defaultChecked={val===value} />
           {text}
            </label>
            </li>
      })}
      </ul>
    </>
  )
}
