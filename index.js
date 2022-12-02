async function getAPIAnswer(){
     try {
          let response = await fetch('URL', {
               method:'POST',
               headers: {
                    'Authorisation': 'Basic ' +btoa('EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI:PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG'),
                    'Content-Type': 'application/x-www-form-urlencoded'
               },
               body: JSON.stringify(data),
               mode:'cors',
               cache: 'default',
          })
          let data = await response.json();
          return data;
          
     }    catch(err) {
          return err;
     }

}

async function main() {
     let result = await getAPIAnswer();
}

main()