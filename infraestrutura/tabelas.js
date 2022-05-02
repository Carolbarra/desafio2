class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
    }
    criarAtendimentos() {
        const sql = 'CREATE TABLE Atendimentos (name varchar (50), CPF varchar (11),BirthDate date, email varchar (30), password varchar (30),Address varchar (100), number varchar (10), complement varchar (30),city varchar (20), state varchar (15), country varchar (30), id INT AUTO_INCREMENT PRIMARY KEY);'
        this.conexao.query(sql, (erro,results) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas()