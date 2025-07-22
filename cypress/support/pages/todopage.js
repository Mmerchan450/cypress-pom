export class TodoPage {
    visitar() {
      cy.visit('https://todomvc.com/examples/react/dist/')
    }
  
    agregarTarea(tarea) {
        cy.get('input.new-todo').type(`${tarea}{enter}`)
    }
    editarTarea(tareaVieja, tareaNueva) {
        cy.contains('li.todo', tareaVieja)
          .find('label')
          .dblclick()
    
        cy.get('li.todo.editing input.edit')
          .clear()
          .type(`${tareaNueva}{enter}`)
      }
    
      marcarComoCompletada(tarea) {
        cy.contains('li', tarea)         // buscar el texto sin el filtro '.todo'
          .should('exist')               // esperar que exista antes de continuar
          .find('input.toggle')         // luego buscar el checkbox
          .check()
      }
    
      eliminarTarea(tarea) {
        cy.contains('li.todo', tarea)
          .trigger('mouseover')
          .find('button.destroy')
          .click()
      }

      marcarfiltroall() {
        cy.get('.filters a[href="#/"]').click()
      }
    }