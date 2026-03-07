function buscarFilme()
{
    console.log("funcção foi chamada")

    let nomeFilme = document.getElementById("pesquisa").value;
    let resultado = document.getElementById("resultado");

    fetch(`https://screenscore-api-yrw8.onrender.com/filmes/externos?title=${nomeFilme}`)
    .then(resposta => { 

        if(!resposta.ok)
        {
            throw new Error("Erro ao Buscar Filmes");
        }
        return resposta.json()
    })
    .then(dados => 
    {
        resultado.innerHTML = "";

        if(dados.movies && dados.movies.length > 0)
        {
            for(let i = 0; i < dados.movies.length; i++)
            {
                resultado.innerHTML += 
                "<h3>" + dados.movies[i].title + "</h3>" +
                "<p>Língua Original: " + dados.movies[i].originalLanguage + "</p>" + 
                "<p>Título Original: " + dados.movies[i].originalTitle + "</p>" +
                "<p> Adulto: " + dados.movies[i].adult + "</p>" +
                "<p>Data de Lançamento: " + dados.movies[i].releaseDate + "</p>" +
                "<img src='https://image.tmdb.org/t/p/w500" + dados.movies[i].posterImage + "' width='150'><hr>" + 
                "<p>Descrição: " + dados.movies[i].overview + "</p>" +
                "<p>Generos: " + dados.movies[i].genres + "</p>";
            }
        }
        else
        {
            resultado.innerHTML = "Filme não encontrado.";
        }
    }
    );
}