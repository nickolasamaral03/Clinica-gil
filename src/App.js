import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import PaginaPrincipal from './Components/PáginaPrincipal';
import Cadastro from './Components/Cadastro';
import Agendamento from './Components/Agendamento';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaDeCadastros from './Components/ListaDeCadastros';
import ListaDeAgendamentos from './Components/ListaDeAgendamentos';
import FiltroTelefone from './Components/Filtragens/FiltrandoTelefone';

function App() {

  const [usuarios, setUsuarios] = useState(() => {
    const salvoUsuario = localStorage.getItem('usuarios') //verifica se há algo em usuarios
    return salvoUsuario ? JSON.parse(salvoUsuario) : [] //Se houver dá um json parse e retorna uma lista de objetos JS se não array vazio
  })

  const [agenda, setAgenda] = useState(() => {
    const salvoAgenda = localStorage.getItem('agenda')
    return salvoAgenda ? JSON.parse(salvoAgenda) : []
  })

  const [mensagem, setMensagem] = useState("")

  useEffect(() => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios)) //converte o array em string JSON para ser armazenado no Local Storage
  }, [usuarios]) //Faz o mesmo ciclo sempre que usuarios mudar

  useEffect(() => {
    localStorage.setItem('agenda', JSON.stringify(agenda))
  }, [agenda])


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

      const aoDeletarCadastro = (id) => {
        setUsuarios(usuarios.filter(usuario => usuario.id !== id))
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
        <Route path='/cadastrosalvos' element={<ListaDeCadastros usuarios={usuarios} aoDeletarCadastro={aoDeletarCadastro}/>}/>
        <Route path='/listagendamentos' element={<ListaDeAgendamentos agendas={agenda} aoDeletar={aoDeletar} />}/>
        <Route path='/FiltrandoTelefone' element={< FiltroTelefone agendas={agenda} aoDeletar={aoDeletar}/>}/>
      </Routes>
    </BrowserRouter>

  );
}


export default App;

