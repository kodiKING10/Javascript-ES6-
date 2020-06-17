class Matematica {
    static soma(a,b){
        return a + b;
    }
}

//console.log(Matematica.soma(12,24));

class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
   constructor(){

       super(); //Chamando o constructor da classe pai

       this.usuario = 'Diego';
   }

   mostraUsuario() {
        console.log(this.usuario); 
   }
}

const minhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function () {
    minhaLista.add('novo todo');
    minhaLista.mostraUsuario();
}

/*#######################################################################*/

function teste(x){
    let y = 2;

    if(x > 5){

        let y = 5;
        //console.log(x,y)
    }
}

//console.log(teste(10));

/*#######################################################################*/

const arr = [1,3,4,5,8,9];

const newArr = arr.map((item, index) => {
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

//console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

//console.log(filter);

const find = arr.find(function(item){
    return item ===4;
});

//console.log(find);

const usuario = {
    nome: 'Henrique',
    idade: 23,
    endereco: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
}

const { nome, ...resto} = usuario;

console.log(`Meu nome é ${nome}`);

const usuarioAtualizado = { ...usuario, nome: 'Henrique Atualizado' };

console.log(usuario2);