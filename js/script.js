const privateKey = '90d1bb3bf2602eb4dc2376a9f6526d5112d68f6f',
 puplicKey = '8215cef19ca696c42fcbb3572bc4e305',
 content = document.getElementById('content')


 const getConnection = () => {
    const ts = Date.now(),
    hash = md5(ts + privateKey + puplicKey), //Por natureza o javascript não tem nenhuma função ou obejto que gere um MD5, e a api precisa que esses dados sejam enviados em MD5

    /**Pois é, você precisa enviar a DATA (ts), CHAVE PUBLICA (publicKey) e o HASH (que é as duas informações anteriores mais a chave privada.) */
    URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${puplicKey}&hash=${hash}`

}
