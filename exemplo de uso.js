// -----------------------------
//     EXEMPLOS DE USO
// -----------------------------

console.log(cadastrarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954));
console.log(cadastrarLivro("1984", "George Orwell", 1949));
console.log(cadastrarLivro("Dom Casmurro", "Machado de Assis", 1899));

console.log(criarUsuario("Ana Silva", "ana@email.com"));
console.log(criarUsuario("João Santos", "joao@email.com"));

console.log(emprestarLivro(1, 1));   // Senhor dos Anéis → Ana
console.log(emprestarLivro(2, 2));   // 1984 → João

console.log(listarLivrosEmprestados());

console.log(devolverLivro(1));

console.log(listarEmprestimos());
