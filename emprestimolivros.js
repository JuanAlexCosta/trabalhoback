// -----------------------------
//     SISTEMA DE EMPRÉSTIMOS
// -----------------------------

function emprestarLivro(livroId, usuarioId) {
    const livro = buscarLivroPorId(livroId);
    const usuario = buscarUsuarioPorId(usuarioId);

    if (!livro)    return { sucesso: false, mensagem: "Livro não encontrado" };
    if (!usuario)  return { sucesso: false, mensagem: "Usuário não encontrado" };
    if (!livro.disponivel) {
        return { sucesso: false, mensagem: "Livro não está disponível" };
    }

    // Registrar empréstimo
    const emprestimo = {
        id: proximoIdEmprestimo++,
        livroId: livroId,
        usuarioId: usuarioId,
        dataEmprestimo: new Date(),
        dataDevolucao: null
    };

    emprestimos.push(emprestimo);
    livro.disponivel = false;

    return { sucesso: true, mensagem: "Empréstimo realizado", emprestimo };
}

function devolverLivro(livroId) {
    const livro = buscarLivroPorId(livroId);
    if (!livro) {
        return { sucesso: false, mensagem: "Livro não encontrado" };
    }

    const emprestimoAberto = emprestimos.find(
        emp => emp.livroId === livroId && emp.dataDevolucao === null
    );

    if (!emprestimoAberto) {
        return { sucesso: false, mensagem: "Não há empréstimo ativo para este livro" };
    }

    emprestimoAberto.dataDevolucao = new Date();
    livro.disponivel = true;

    return { sucesso: true, mensagem: "Livro devolvido", emprestimo: emprestimoAberto };
}

function listarEmprestimos() {
    return emprestimos.map(emp => {
        const livro = buscarLivroPorId(emp.livroId);
        const usuario = buscarUsuarioPorId(emp.usuarioId);
        return {
            ...emp,
            tituloLivro: livro ? livro.titulo : "Livro removido",
            nomeUsuario: usuario ? usuario.nome : "Usuário removido"
        };
    });
}

function listarLivrosEmprestados() {
    return livros.filter(livro => !livro.disponivel);
}
