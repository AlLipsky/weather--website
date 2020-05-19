const https = require('https')



const url = 'https://api.darksky.net/forecast/655cc71a0cfcfe124afcadbb694d24d7/40,70?lang=ru';

const request = https.request(url, (response) =>{

    let data = ''

    response.on('data',(chunk) =>{

        data = data + chunk.toString()
        
        

    })
    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body);
        
    })
})
request.on('error', (error) => {
    console.log(error);
    

}
)
request.end()