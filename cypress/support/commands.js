import BaseActions from './baseActions'
import 'cypress-xpath'

// Comando para clicar em um elemento
Cypress.Commands.add('clickElement', (element) => {
  BaseActions.clickElement(element)
})

// Comando para selecionar um radio button
Cypress.Commands.add('selectRadioButton', (element) => {
  BaseActions.selectRadioButton(element)
})

// Comando para selecionar ou desselecionar um checkbox
Cypress.Commands.add('selectCheckbox', (element, shouldBeChecked = true) => {
  BaseActions.selectCheckbox(element, shouldBeChecked)
})

// Comando para preencher campos obrigatórios
Cypress.Commands.add('fillMandatoryFields', (firstName, lastName, email, textArea = '') => {
  const firstNameValue = Cypress.env(firstName)
  const lastNameValue = Cypress.env(lastName)
  const emailValue = Cypress.env(email)
  const textAreaValue = textArea ? Cypress.env(textArea) : ''
  BaseActions.fillMandatoryFields(firstNameValue, lastNameValue, emailValue, textAreaValue)
})

// Comando para limpar campos
Cypress.Commands.add('clearField', (...elements) => {
  BaseActions.clearField(...elements)
})

// Comando para inserir texto em um campo
Cypress.Commands.add('insertText', (element, texto) => {
  BaseActions.insertText(element, texto)
})

// Comando para comparar o valor de um campo
Cypress.Commands.add('compareValue', (element, valorEsperado) => {
  BaseActions.compareValue(element, valorEsperado)
})

// Comando para esperar que um elemento esteja visível
Cypress.Commands.add('waitForElementVisible', (element) => {
  BaseActions.waitForElementVisible(element)
})

// Comando para esperar que um elemento não esteja visível
Cypress.Commands.add('waitForElementNotVisible', (element) => {
  BaseActions.waitForElementNotVisible(element)
})

// Comando para selecionar um item em um select por texto
Cypress.Commands.add('selectItemForText', (element, text) => {
  BaseActions.selectItemForText(element, text)
})

// Comando para selecionar um item em um select por valor
Cypress.Commands.add('selectItemForValue', (element, value) => {
  BaseActions.selectItemForValue(element, value)
})

// Comando para selecionar um item em um select por index
Cypress.Commands.add('selectItemForIndex', (element, index) => {
  BaseActions.selectItemForIndex(element, index)
})

// Comando para validar se um radio button está marcado ou não
Cypress.Commands.add('validateRadioButton', (element, checked) => {
  BaseActions.validateRadioButton(element, checked)
})

// Comando para validar se um checkbox está marcado ou não
Cypress.Commands.add('validateCheckbox', (element, checked) => {
  BaseActions.validateCheckbox(element, checked)
})

// Comando para selecionar um arquivo
Cypress.Commands.add('chooseFile', (fileName) => {
  BaseActions.chooseFile(fileName)
})