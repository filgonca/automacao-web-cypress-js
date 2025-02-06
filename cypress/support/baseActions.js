import ElementList from './elementList'
import 'cypress-xpath'

const elements = ElementList.getElements()

class BaseActions {

  // Método para obter o seletor de um elemento
  static getSelector(type, value) {
    switch (type) {
      case 'id':
        return `#${value}`
      case 'name':
        return `[name="${value}"]`
      case 'class':
        return `.${value}`
      case 'tag':
        return `${value}`
      case 'xpath':
        return value
      default:
        return value
    }
  }

  // Método para clicar em um elemento
  static clickElement(element) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).should('be.visible').click()
    } else {
      cy.get(selector).should('be.visible').click()
    }
  }

  // Método para selecionar radiobuttons
  static selectRadioButton(element) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).should('be.visible').check()
    } else {
      cy.get(selector).should('be.visible').check()
    }
  }

  // Método para selecionar ou desselecionar checkboxes
  static selectCheckbox(element, shouldBeChecked = true) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      if (shouldBeChecked) {
        cy.xpath(selector).should('be.visible').check()
      } else {
        cy.xpath(selector).should('be.visible').uncheck()
      }
    } else {
      if (shouldBeChecked) {
        cy.get(selector).should('be.visible').check()
      } else {
        cy.get(selector).should('be.visible').uncheck()
      }
    }
  }

  // Método para inserir texto em um campo
  static insertText(element, texto) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).should('be.visible').type(texto, { delay: 0 })
    } else {
      cy.get(selector).should('be.visible').type(texto, { delay: 0 })
    }
  }

  // Método para esperar que um elemento esteja visível
  static waitForElementVisible(element) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).should('be.visible')
    } else {
      cy.get(selector).should('be.visible')
    }
  }

  // Método para esperar que um elemento não esteja visível
  static waitForElementNotVisible(element) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).should('not.be.visible')
    } else {
      cy.get(selector).should('not.be.visible')
    }
  }

  // Método para limpar campos
  static clearField(...elementsToClear) {
    elementsToClear.forEach(element => {
      const { type, value } = elements[element]
      const selector = this.getSelector(type, value)
      if (type === 'xpath') {
        cy.xpath(selector).clear().should('have.value', '')
      } else {
        cy.get(selector).clear().should('have.value', '')
      }
    })
  }

  // Método para comparar o valor de um campo por valor
  static compareValue(element, valorEsperado) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      return cy.xpath(selector).should('have.value', valorEsperado)
    } else {
      return cy.get(selector).should('have.value', valorEsperado)
    }
  }

  // Método para preencher campos obrigatórios
  static fillMandatoryFields(firstName, lastName, email, textArea = '') {
    this.insertText('campoNome', firstName)
    this.insertText('campoSobrenome', lastName)
    this.insertText('campoEmail', email)

    if (textArea) {
      this.insertText('campoTexto', textArea)
    }
  }

  // Método para selecionar um item de um dropdown por texto
  static selectItemForText(element, itemText) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).select(itemText)
    } else {
      cy.get(selector).select(itemText)
    }
  }

  // Método para selecionar um item de um dropdown por valor
  static selectItemForValue(element, itemValue) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).select(itemValue)
    } else {
      cy.get(selector).select(itemValue)
    }
  }

  // Método para selecionar um item de um dropdown por índice
  static selectItemForIndex(element, itemIndex) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      cy.xpath(selector).select(itemIndex)
    } else {
      cy.get(selector).select(itemIndex)
    }
  }

  // Método para validar se um radiobutton está marcado ou desmarcado
  static validateRadioButton(element, shouldBeChecked) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      if (shouldBeChecked) {
        cy.xpath(selector).should('be.checked')
      } else {
        cy.xpath(selector).should('not.be.checked')
      }
    } else {
      if (shouldBeChecked) {
        cy.get(selector).should('be.checked')
      } else {
        cy.get(selector).should('not.be.checked')
      }
    }
  }

  // Método para validar se um checkbox está marcado ou desmarcado
  static validateCheckbox(element, shouldBeChecked) {
    const { type, value } = elements[element]
    const selector = this.getSelector(type, value)
    if (type === 'xpath') {
      if (shouldBeChecked) {
        cy.xpath(selector).should('be.checked')
      } else {
        cy.xpath(selector).should('not.be.checked')
      }
    } else {
      if (shouldBeChecked) {
        cy.get(selector).should('be.checked')
      } else {
        cy.get(selector).should('not.be.checked')
      }
    }
  }

  // Método para selecionar um arquivo
  static chooseFile(fileName) {
    cy.get('input[type="file"]').selectFile(fileName)
  }
}

export default BaseActions