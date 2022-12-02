const data = {
     'grant_type': 'client_credentials',
     'client_id': 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI',
     'client_secret': 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'
}

async function getAPIAnswerFromCdek(){
     try {
          let response = await fetch('https://api.edu.cdek.ru/v2/oauth/token?parameters', {
               method:'POST',
               headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
               },
               body: JSON.stringify(data),
               mode:'cors',
               cache: 'default',
          })
          console.log(await response.json());
          
          
     }    catch(err) {
          return err;
     }

}

async function main() {
     console.log("hhh")
     let result = await getAPIAnswerFromCdek();
     console.log(result);
}

main()
