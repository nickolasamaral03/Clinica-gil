import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import PaginaPrincipal from './Components/PáginaPrincipal';
import Cadastro from './Components/Cadastro';
import Agendamento from './Components/Agendamento';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaDeCadastros from './Components/ListaDeCadastros';
import ListaDeAgendamentos from './Components/ListaDeAgendamentos';

function App() {

  const [usuarios, setUsuarios] = useState([])
  const [agenda, setAgenda] = useState([])
  const [mensagem, setMensagem] = useState("")


  const novoUsuarioCadastrado = (usuario) => {
      setUsuarios([...usuarios, {...usuario, id: uuidv4()}])
      setMensagem("Paciente Cadastrado com Sucesso!")
      
      setTimeout(() => {
        setMensagem("");
      }, 1000)
      
    }

    const novoAgendamentoCadastrado = (agendamento) => {
      const usuario = usuarios.find((user) => user.id === agendamento.userId)
      if(usuario){
        setAgenda([...agenda, {...agendamento, nome: usuario.nome , telefone: usuario.telefone , id: agendamento.userId}])
        setMensagem("Agendamento Cadastrado")
       
        setTimeout(() => {
          setMensagem("")
        }, 1000)

      } else{
        setMensagem("Usuário não encontrado!")
        setTimeout(() => {
          setMensagem("")
        }, 3000)
      }
    }

      const aoDeletar = (id) => {
        setAgenda(agenda.filter(agenda => agenda.id !== id))
      }
    
  return ( 
    <BrowserRouter>
      <Header />
      {mensagem && (
        <div className="bg-green-500 text-white text-center py-4">
          <p>{mensagem}</p>
        </div>
      )}
      <Routes>
        <Route path='/' element={<PaginaPrincipal/>}/>
        <Route path='/cadastro' element={<Cadastro aoUsuarioCadastrado={novoUsuarioCadastrado} usuarios={usuarios}/>}/>
        <Route path='/agendar/:userId' element={<Agendamento aoAgendarCadastrado={novoAgendamentoCadastrado} agendas={agenda}/>}/>
        <Route path='/cadastrosalvos' element={<ListaDeCadastros usuarios={usuarios}/>}/>
        <Route path='/listagendamentos' element={<ListaDeAgendamentos agendas={agenda} aoDeletar={aoDeletar} />}/>
      </Routes>
    </BrowserRouter>

  );
}


export default App;

