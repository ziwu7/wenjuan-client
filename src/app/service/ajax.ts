

const HOST='https://mock.apifox.com/m1/3240899-0-default'
export async function get(url:string) {
    const res=await fetch(`${HOST}${url}`);
    console.log('dizhi',`${HOST}${url}`);
    const data = res.json()
    return data
}
export async function post(url:string,body:any) {
    const res=await fetch(`${HOST}${url}`,{
        method:'POST',
        body:JSON.stringify(body)
    });
    console.log('dizhi',`${HOST}${url}`);
    
    const data = res.json()
    return data
}