function Funcionario(nome, idade, cargo, salario) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }
}

function Professores(nome, idade) {
    Funcionario.call(this, nome, idade, 'Professor', 5000);

    this.quedaSalario = function() {
        const novoSalario = this.getSalario() * 0.98;
        this.setSalario(novoSalario);
    }
}

function Faxineiro(nome, idade) {
    Funcionario.call(this, nome, idade, 'Professor', 2300);

    this.quedaSalario = function() {
        const novoSalario = this.getSalario() * 0.96;
        this.setSalario(novoSalario);
    }
}

const professor1 = new Professores('Eduardo', 42);
const faxineiro1 = new Faxineiro('Roberto', 35);

console.log(professor1);
professor1.quedaSalario();
console.log(professor1.getSalario());

console.log(faxineiro1);
faxineiro1.quedaSalario();
console.log(faxineiro1.getSalario());