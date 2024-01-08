import { NextRequest,NextResponse  } from "next/server"

type Data ={
    name: string;
}


 
export async function GET(req: NextRequest) {
  console.log(req.method);

  return NextResponse<Data>.json({ name:'122'} );
}