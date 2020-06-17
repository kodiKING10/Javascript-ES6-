//Requisição AJAX, é requisitar uma informação do servidor sem precisar recarregar a pagina
alert("oi");

var minhaPromise = function(){
    return new Promise( function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/kodiKING10');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status ===200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

minhaPromise().then(function(response){
    console.log(response);
}).catch(function(error){
    console.warn(error);
});

//As promises nos permitem trabalhar de forma assincrona com o javascript, O Axios é baseado em promises.

