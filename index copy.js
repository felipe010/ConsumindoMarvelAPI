let botaoApi = document.querySelector("button")
console.log(botaoApi);


botaoApi.addEventListener("click", function () {
    var marvelAPI = 'https://gateway.marvel.com/v1/public/comics'
    fetch()
          .then(res => res.json());

});


const baseUrl = 'http://gateway.marvel.com/v1/public/characters';
const query = `? limit = $ {req.query.limit} & nameStartsWith = $ {req.query.name}`;
const timestamp = new Date (). getTime ();
const hash = crypto.createHash ('md5'). update (timestamp + config.privateKey + config.publicKey) .digest ('hex');
const auth = `& ts = $ {timestamp} & apikey = $ {apiPublicKey} & hash = $ {hash}`; const url = `$ {baseUrl} $ {query} $ {auth}`;
const url = `$ {baseUrl} $ {query} $ {auth}`;