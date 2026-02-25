// -----------------------------
//     MÓDULO LIVROS
// -----------------------------

function cadastrarLivro(titulo, autor, ano) {
    if (!titulo || !autor || !Number.isInteger(ano) || ano < 0) {
        return { sucesso: false, mensagem: "Dados inválidos" };
    }

    const novoLivro = {
        id: proximoIdLivro++,
        titulo: titulo.trim(),
        autor: autor.trim(),
        ano: ano,
        disponivel: true
    };

    livros.push(novoLivro);
    return { sucesso: true, mensagem: "Livro cadastrado", livro: novoLivro };
}

function listarLivros() {
    return [...livros]; // cópia para não expor o array original
}

function buscarLivroPorId(id) {
    const livro = livros.find(l => l.id === id);
    return livro || null;
}

function atualizarLivro(id, dadosAtualizacao) {
    const livro = buscarLivroPorId(id);
    if (!livro) {
        return { sucesso: false, mensagem: "Livro não encontrado" };
    }

    // Atualiza apenas os campos que foram enviados
    if (dadosAtualizacao.titulo !== undefined) livro.titulo = dadosAtualizacao.titulo.trim();
    if (dadosAtualizacao.autor !== undefined)  livro.autor  = dadosAtualizacao.autor.trim();
    if (dadosAtualizacao.ano !== undefined) {
        if (Number.isInteger(dadosAtualizacao.ano) && dadosAtualizacao.ano >= 0) {
            livro.ano = dadosAtualizacao.ano;
        }
    }

    return { sucesso: true, mensagem: "Livro atualizado", livro };
}

function removerLivro(id) {
    const indice = livros.findIndex(l => l.id === id);
    if (indice === -1) {
        return { sucesso: false, mensagem: "Livro não encontrado" };
    }

    // Verificar se o livro está emprestado
    const estaEmprestado = emprestimos.some(emp => emp.livroId === id && emp.dataDevolucao === null);
    if (estaEmprestado) {
        return { sucesso: false, mensagem: "Não é possível remover: livro está emprestado" };
    }

    livros.splice(indice, 1);
    return { sucesso: true, mensagem: "Livro removido" };
}
