// -----------------------------
//     MÓDULO USUÁRIOS
// -----------------------------

function criarUsuario(nome, email) {
    if (!nome || !email || !email.includes("@")) {
        return { sucesso: false, mensagem: "Nome e email válidos são obrigatórios" };
    }

    const novoUsuario = {
        id: proximoIdUsuario++,
        nome: nome.trim(),
        email: email.trim().toLowerCase()
    };

    usuarios.push(novoUsuario);
    return { sucesso: true, mensagem: "Usuário criado", usuario: novoUsuario };
}

function listarUsuarios() {
    return [...usuarios];
}

function buscarUsuarioPorId(id) {
    const usuario = usuarios.find(u => u.id === id);
    return usuario || null;
}
