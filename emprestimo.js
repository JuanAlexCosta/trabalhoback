// -----------------------------
//     ESTRUTURA DE DADOS
// -----------------------------

let proximoIdLivro = 1;
let proximoIdUsuario = 1;
let proximoIdEmprestimo = 1;

const livros = [];          // Array de livros
const usuarios = [];        // Array de usuários
const emprestimos = [];     // Array de registros de empréstimos

// Tipo Livro:
// { id: number, titulo: string, autor: string, ano: number, disponivel: boolean }

// Tipo Usuário (simples):
// { id: number, nome: string, email: string }

// Tipo Empréstimo:
// { id: number, livroId: number, usuarioId: number, dataEmprestimo: Date, dataDevolucao: Date|null }
