class ElementList {
  constructor(alias, type, value) {
    this.alias = alias
    this.type = type
    this.value = value
  }

  static getElements() {
    return {
      btnEnviar: new ElementList('btnEnviar', 'tag', 'button:contains("Enviar")'),
      campoNome: new ElementList('campoNome', 'id', 'firstName'),
      campoSobrenome: new ElementList('campoSobrenome', 'id', 'lastName'),
      campoEmail: new ElementList('campoEmail', 'id', 'email'),
      campoEmailInvalido: new ElementList('campoEmailInvalido', 'id', 'invalidEmail'),
      campoTexto: new ElementList('campoTexto', 'name', 'open-text-area'),
      campoTelefone: new ElementList('campoTelefone', 'id', 'phone'),
      mensagemErro: new ElementList('mensagemErro', 'class', 'error'),
      mensagemSucesso: new ElementList('mensagemSucesso', 'class', 'success'),
      selectItemProduct: new ElementList('selectItemProduct', 'id', 'product'),
      radioBtnAjuda: new ElementList('radioBtnAjuda', 'xpath', '//input[@name="atendimento-tat" and @value="ajuda"]'),
      radioBtnElogio: new ElementList('radioBtnElogio', 'xpath', '//input[@name="atendimento-tat" and @value="elogio"]'),
      radioBtnFeedback: new ElementList('radioBtnFeedback', 'xpath', '//input[@name="atendimento-tat" and @value="feedback"]'),
      checkboxEmail: new ElementList('checkboxEmail', 'id', 'email-checkbox'),
      checkboxTelefone: new ElementList('checkboxTelefone', 'id', 'phone-checkbox'),
      allCheckbox: new ElementList('allCheckbox', 'xpath', '//input[@type="checkbox"]'),
      btnEscolherArquivo: new ElementList('btnEscolherArquivo', 'tag', 'input[type="file"]')
    }
  }
}

export default ElementList
