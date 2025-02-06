import '../support/commands'

describe('Testes na aplicação Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('/src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('verifica se os campos obrigatórios são preenchidos', () => {
    cy.fillMandatoryFields('firstName', 'lastName', 'email')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.clock()
    cy.fillMandatoryFields('firstName', 'lastName', 'invalidEmail', 'textArea')
    cy.clickElement('btnEnviar')
    cy.waitForElementVisible('mensagemErro')
    cy.tick(3000)
    cy.waitForElementNotVisible('mensagemErro')
  })

  it('verifica que o campo de telefone permanece vazio quando preenchido com valor não-numérico', () => {
    cy.insertText('campoTelefone', 'abcdef')
    cy.compareValue('campoTelefone', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()
    cy.fillMandatoryFields('firstName', 'lastName', 'email')
    cy.selectCheckbox('checkboxTelefone')
    cy.clickElement('btnEnviar')
    cy.waitForElementVisible('mensagemErro')
    cy.tick(3000)
    cy.waitForElementNotVisible('mensagemErro')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.fillMandatoryFields('firstName', 'lastName', 'email')
    cy.insertText('campoTelefone', '123456789')
    cy.clearField('campoNome', 'campoSobrenome', 'campoEmail', 'campoTelefone')
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.clock()
    cy.clickElement('btnEnviar')
    cy.waitForElementVisible('mensagemErro')
    cy.tick(3000)
    cy.waitForElementNotVisible('mensagemErro')
  })

  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.clock()
    cy.fillMandatoryFields('firstName', 'lastName', 'email', 'textArea')
    cy.clickElement('btnEnviar')
    cy.waitForElementVisible('mensagemSucesso')
    cy.tick(3000)
    cy.waitForElementNotVisible('mensagemSucesso')
  })

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.selectItemForText('selectItemProduct', 'YouTube')
    cy.compareValue('selectItemProduct', 'youtube')
  })

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.selectItemForValue('selectItemProduct', 'mentoria')
    cy.compareValue('selectItemProduct', 'mentoria')
  })

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.selectItemForIndex('selectItemProduct', 1)
    cy.compareValue('selectItemProduct', 'blog')
  })

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.clickElement('radioBtnFeedback')
    cy.validateRadioButton('radioBtnFeedback', true)
  })

  it('marca cada tipo de atendimento', () => {
    cy.selectRadioButton('radioBtnAjuda')
    cy.validateRadioButton('radioBtnAjuda', true)
    cy.selectRadioButton('radioBtnElogio')
    cy.validateRadioButton('radioBtnElogio', true)
    cy.selectRadioButton('radioBtnFeedback')
    cy.validateRadioButton('radioBtnFeedback', true)
  })

  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.selectCheckbox('allCheckbox', true)
    cy.selectCheckbox('checkboxTelefone', false)
    cy.validateRadioButton('checkboxEmail', true)
    cy.validateRadioButton('checkboxTelefone', false)
  })

  it('seleciona um arquivo da pasta fixtures', () => {
    cy.clickElement('btnEscolherArquivo')
    cy.chooseFile('cypress/fixtures/example.json')
    cy.get('input[type="file"]').then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.clickElement('btnEscolherArquivo')
    cy.chooseFile('cypress/fixtures/example.json', { action: 'drag-n-drop' })
    cy.get('input[type="file"]').then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.clickElement('btnEscolherArquivo')
    cy.chooseFile('@sampleFile', { action: 'drag-n-drop' })
    cy.get('input[type="file"]').then(input => {
      expect(input[0].files[0].name).to.equal('example.json')
    })
  })

  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()
    cy.contains('h1', 'Política de Privacidade').should('be.visible')
  })

  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche o campo da área de texto usando o comando invoke', () => {
    cy.get('#open-text-area')
      .invoke('val', 'um texto qualquer')
      .should('have.value', 'um texto qualquer')
  })

  it('faz uma requisição HTTP', () => {
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq('OK')
        expect(response.body).to.include('CAC TAT')
      })
  })

  it('encontra o gato escondido', () => {
    cy.get('#cat')
      .invoke('show')
      .should('be.visible')
    cy.get('#title')
      .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
      .invoke('text', 'Eu 💙 gatos!')
  })
})