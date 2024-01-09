import { NextRequest,NextResponse  } from "next/server"
import { postAnswer } from "@/app/service/answer"
import { redirect } from "next/navigation"
import { log } from "console"

function genAnswerInfo(formData:any){
  
    let answerList:any[]=[]
    let questionId:any
    for(var i of formData){
         if(i[0]==='questionId'){ questionId= i[1]} 
         else{answerList.push({componentId:i[0],value:i[1]})}
    }
    return {
        questionId:questionId,
        answerList
    }
}

export async function POST(req: NextRequest) {
  console.log(req.method);
  const formData =await req.formData()
  //数据提交到服务器
  const answerInfo =genAnswerInfo(formData)
  console.log(answerInfo);
  
  try{
    const res = await postAnswer(answerInfo)
    console.log('postAnswer的res',res.errno);
    if(res.errno===0){
      console.log('成功');
      
      return NextResponse.redirect(new URL('/success', req.url))
    }else{
      return NextResponse.redirect(new URL('/fail', req.url))
    }
    // return NextResponse.json({ errno:0},{status:200} );
  }catch(err){
    console.log('catch的',err);
    return NextResponse.redirect(new URL('/fail', req.url))
    // return NextResponse.json({errno:-1, msg:'网络错误'},{status:500} );
    // return new Response('Error', { status: 500 });
  }
 
}