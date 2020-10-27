export const getdocs = (snapshot : any)=>{
    const documentos:any[] = [];
    if(snapshot.id)
    {
        let data = snapshot.data();
        data.Id = snapshot.id;
        documentos.push(data)
    }
    else{
        snapshot.forEach((snaphijo:any) => {
            if(snaphijo.data)
            {
                let data = snaphijo.data();
                data.Id = snaphijo.id;
                documentos.push(data)
            }
        })
    }
    return documentos;
}