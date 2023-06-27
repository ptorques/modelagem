// ------------------- CLASSE PRODUTOS --------------------

class Produtos {
    id: number;
    nome: string;
    tamanho: number;
    cor: string;
    fornecedor: Fornecedor;
    preco: number;
    custo: number;


    constructor(id: number, nome: string, tamanho: number, cor: string, fornecedor: Fornecedor, preco: number, custo: number) {
        this.id = id;
        this.nome = nome;
        this.tamanho = tamanho;
        this.cor = cor;
        this.preco = preco;
        this.custo = custo;
    }
}

// ------------------- CLASSE ESTOQUE --------------------

class Estoque {
    produto: Produtos;
    quantidade: number;
    quantidade_min: number;
    fornecedor: Fornecedor;

    constructor(produto: Produtos, quantidade: number, quantidade_min: number, fornecedor: Fornecedor) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.quantidade_min = quantidade_min;
        this.fornecedor = fornecedor;
    }

        Venda(): void {
            // Produtos vendidos;
        }

        Ordem_Compra(): void {
            // Ordem de Compra de produtos;
        }

        Rastreamento(): void {
            // Rastreamento de produtos individualmente;
        }
}

// ------------------- CLASSE HISTÓRICO DE VENDA --------------------

class Historico_Venda {
    id: number;
    nome: string;
    data: Date;
    quantidade: number;
    preco: number;
    cliente: string;

    constructor(id: number, nome: string, data: Date, quantidade: number, preco: number, cliente: string) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.quantidade = quantidade;
        this.preco = preco;
        this.cliente = cliente;
    }

        Pesquisa(): void {
            // Pesquisa do histórico de venda dos produtos;
        }
}

// ------------------- CLASSE HISTÓRICO DE ESTOQUE --------------------

class Historico_Estoque {
    id: number;
    nome: string;
    data: Date;
    quantidade: number;
    preco: number;
    fornecedor: Fornecedor;

    constructor(id: number, nome: string, data: Date, quantidade: number, preco: number, fornecedor: Fornecedor) {
        this.id = id;
        this.nome = nome;
        this.data = data;
        this.quantidade = quantidade;
        this.preco = preco;
        this.fornecedor = fornecedor;
    }

        Pesquisa(): void {
            // Pesquisa do histórico de produtos no estoque;
        }
}
// ------------------- CLASSE FORNECEDOR --------------------

class Fornecedor {
    id: number;
    nome: string;
    contato_email: string;
    endereco: string;

    constructor(id: number, nome: string, contato_email: string, endereco: string) {
        this.id = id;
        this.nome = nome;
        this.contato_email = contato_email;
        this.endereco = endereco;
    }
}