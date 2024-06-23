import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { IoArrowBackSharp } from "react-icons/io5";

const Cadastro = (props) => {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [mensagem, setMensagem] = useState("")
    const navigate = useNavigate(); 

    const aoNome = (evento) => {
        setNome(evento.target.value)
    }

    const aoTelefone = (evento) => {
        setTelefone(evento.target.value)
    }

    const PegandoValores = (evento) => {
        evento.preventDefault()

        const usuarioExistente = props.usuarios.find((user) => user.telefone === telefone);
        if (usuarioExistente) {
            setMensagem("Paciente já cadastrado com este telefone!");
            setTimeout(() => {
                setMensagem("");
            }, 3000);
            return; 
        }

        props.aoUsuarioCadastrado({
            nome,
            telefone
       });
       
       setNome("")
       setTelefone("")
       navigate("/")
       
    }

    return(
    <form onSubmit={PegandoValores} className="border border-white mx-96 p-12 rounded-md bg-white">
        <Link to="/"><IoArrowBackSharp size={25}/></Link>
        <h2 className="text-center text-3xl italic">Cadastro</h2>
        {mensagem && (
                <div className="bg-red-500 text-white text-center py-2 my-2 rounded-md">
                    <p>{mensagem}</p>
                </div>
            )}
        <div className="grid m-10">
            <label>Nome</label>
            <input type="text" required onChange={aoNome} value={nome} className="bg-corFundo-100 w-80 rounded-lg mt-1 h-8 focus:outline-none pl-2"/>
        </div>
        <div className="grid m-10">
            <label>Telefone</label>
            <input type="text" required onChange={aoTelefone} value={telefone} className="bg-corFundo-100 w-80 rounded-lg mt-1 h-8 focus:outline-none pl-2"/>
        </div>
        <div className="flex justify-center"><button className="border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-5 py-1">Cadastrar</button></div>
    </form>
    )
}

export default Cadastro