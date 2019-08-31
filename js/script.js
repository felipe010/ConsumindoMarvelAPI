const privateKey = '90d1bb3bf2602eb4dc2376a9f6526d5112d68f6f',
 puplicKey = '8215cef19ca696c42fcbb3572bc4e305',
 content = document.getElementById('content')


 const getConnection = () => {
    const ts = Date.now(),
    hash = md5(ts + privateKey + puplicKey), //Por natureza o javascript não tem nenhuma função ou obejto que gere um MD5, e a api precisa que esses dados sejam enviados em MD5

    /**Pois é, você precisa enviar a DATA (ts), CHAVE PUBLICA (publicKey) e o HASH (que é as duas informações anteriores mais a chave privada.) */
    URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${puplicKey}&hash=${hash}`
    
    /*Usando o FETCH, apenas enviamos uma requisição para o recurso "characters" para ver se o servidor responde algo. */
    fetch(URL)
        .then(response => response.json()) //Aqui informo que quero o resultado em JSON
        .then(response => {
            console.log(response); /* Aqui já consigo ver o resultado em JSON, e ver o response em JSON no qual tem um atributo  'data' que contem um 'results' e nele contem um array com o resultado que queremos. */
            response.data.results.array.forEach(element => {
                drawHero(element);
            });
        });
}

const drawHero = element => {
    const image = `${element.thumbnail.path}/portrait_uncanny.${element.thumbnail.extension}` //Entenda que thumbnail' é um objeto  que contem a propriedade 'path' e 'extension' e claro o thumbnail faz parte do cada item do meu array resultado. 
    const hero = `
        <div>
            <h3>${element.name}</h3>
            <img src"${image}">
            <p>${element.description}</p>
        </div>
    `;
}

getConnection();