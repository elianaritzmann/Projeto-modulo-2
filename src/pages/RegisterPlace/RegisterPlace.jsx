import './RegisterPlace.css'

function RegisterPlace() {
  return(
    <div className='coleta'>
      <h2>Cadastro de Pontos de Coleta</h2>
     
      <form action="" className='formColeta'>

        <div className='nomeDescricao'>
           <label htmlFor="nomeDoPonto">Nome do ponto: </label>
           <input type="text" name="nomeDoPonto" id="nomeDoPonto"/>

           <label htmlFor="descricao">Descrição: </label>
           <textarea type="text" name="descricao" id="descricao"/>
        </div>
           <span>Selecione o tipo de material: </span>
          <div className='checkboxform'>
             
  
               <input type="checkbox" name="vidro" id="vidro"/>
                <label htmlFor="vidro">Vidro</label>

               
               <input type="checkbox" name="papel" id="papel"/>
               <label htmlFor="papel">Papel</label>

              
               <input type="checkbox" name="plastico" id="plastico"/>
                <label htmlFor="plastico">Plástico</label>

               
               <input type="checkbox" name="metal" id="metal"/>
               <label htmlFor="metal">Metal</label>

              
               <input type="checkbox" name="organico" id="organico"/>
                <label htmlFor="organicp">Orgânico</label>
          </div>
       
          <div className='endereco'>

            <div className='cep'>
                <label htmlFor="cep">Cep</label>
                <input type="text" name="cep" id="cep"/>
            </div>
            
            <div className='logradouro'>
                 <label htmlFor="logradouro">Logradouro</label>
                 <input type="text" name="logradouro" id='logradouro'/>
            </div>

            <div className='estado'>
                  <label htmlFor="estado">Estado</label>
                  <input type="text" name="estado" id='estado'/>
            </div>

            <div className='cidade'>
                  <label htmlFor="cidade">Cidade</label>
                  <input type="text" name="cidade" id='cidade'/>
            </div>

            <div className='numero'>
                  <label htmlFor="numero">Numero</label>
                  <input type="text" name="numero" id='numero'/>
            </div>
        
          </div>
       
        <button type="Submit">Adicionar</button>
      </form>
    </div>
  )
}

export default RegisterPlace;
