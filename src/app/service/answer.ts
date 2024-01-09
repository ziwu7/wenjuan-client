import { post } from "./ajax"

export function postAnswer(answerInfo:any){
    console.log('postAnswer');
    
const url='/api/answer'
const data = post(url,answerInfo)
return data
}