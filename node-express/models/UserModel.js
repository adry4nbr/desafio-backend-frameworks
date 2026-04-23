class UserModel {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  static getAll() {
    return [
      { id: 1, nome: "Adryan", email: "adryan@email.com" },
      { id: 2, nome: "Marcelo", email: "marcelo@email.com" },
    ];
  }
}

module.exports = UserModel;
