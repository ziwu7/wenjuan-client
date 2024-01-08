import React from 'react'
import QuestionInput from '../../../components/QuestionComponents/QuestionInput'
import QuestionRadio from '../../../components/QuestionComponents/QuestionRadio'
import styles from '@/app/question.module.scss'  //@根目录src的意思
type PropsType = {id: string}

export default async function question(props: PropsType){

    return (
      <>
      
      <main>
        
        <form>
          <input type="hidden" name="questionId" value={props.id} />
          <div className={styles.componentWrapper}>
            <QuestionInput fe_id='c1' props={{title:'姓名',placeholder :'请输入'}} />
          </div>
          <div className={styles.componentWrapper}>
            <QuestionRadio fe_id='c2' props={{
              title:'性别',
              options:[
                {value:'male',text:'男'},
                {value:'female',text:'女'}
              ],
              value:'male', 
              isVertical:true
              }} />
          </div>
         

          <div className={styles.submitBtnContainer}>
            {/* <input type="submit" value="提交" /> */}
            <button type="submit">提交</button>
          </div>
        </form>
      </main>
      </>
    )
  
}

 