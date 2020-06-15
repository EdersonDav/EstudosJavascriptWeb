const apresentacao = {
  frase: (palavra1, palavra2) => {
    return palavra1 + ", " + palavra2
  },
  nomeCompleto: (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
}

module.exports = apresentacao;
