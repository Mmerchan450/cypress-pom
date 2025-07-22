import { TodoPage } from '../../support/pages/todopage'  

const todoPage = new TodoPage()  

describe('Pruebas TodoMVC', () => {
  beforeEach(() => {
    todoPage.visitar()
  })
  it('Agregar tarea', () => {
    todoPage.visitar()
    todoPage.agregarTarea('Comprar leche') 
  })

  it('Marcar tarea como completada', () => {
    todoPage.agregarTarea('Comprar leche')
    todoPage.marcarComoCompletada('Comprar leche')
  })

  it('Marcar filtro all', () => {
    todoPage.agregarTarea('Comprar leche')
    todoPage.agregarTarea('ir al gym')
    todoPage.marcarComoCompletada('Comprar leche')
    todoPage.marcarfiltroall()
    
  })

  
})


 
 
