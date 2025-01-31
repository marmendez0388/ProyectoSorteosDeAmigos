// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


//FUNCION PARA AGREGAR AMIGOS
function agregarAmigo()
{
    const amigoInput = document.getElementById('amigo');
    const name = amigoInput.value.trim();

    if (name && !amigos.includes(name))
    {
        amigos.push(name);
        amigoInput.value ='';
        updateListaAmigos();
    }
    else
    {
        alert('POR FAVOR INGRESE UN NOMBRE VALIDO O SIN REPLICAS.');
    }
}

//ACTUALIZA LA LISTA DE PARTICIPANTES MOSTRADA
function updateListaAmigos()
{
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(name => {
        const li = document.createElement('li');
         li.textContent = name;
        listaAmigos.appendChild(li);
    });


//HABILITA EL BOTON AÑADIR
document.getElementsByClassName('button-add').disabled = amigos.length
< 2;
}

//FUNCION DE REALIZAR EL SORTEO DE AMIGOS SECRETOS
function sortearAmigo() 
{
    let barajar = [...amigos];
    barajar = barajar.sort(() => Math.random() - 0.5);

    //BARAJA LOS NOMBRES
    let resultadoHTML = '<h3>RESULTADOS DEL SORTEO:</h3><ul>';
    for (let i = 0; i < amigos.length; i++)
    {
        resultadoHTML += `<li>${amigos[i]} -> ${barajar[i]}</li>`;
    }
    resultadoHTML += '</ul>';
    document.getElementById('resultado').innerHTML = resultadoHTML;

}


