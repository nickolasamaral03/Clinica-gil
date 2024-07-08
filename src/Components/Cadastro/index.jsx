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
    <form onSubmit={PegandoValores} className="border border-white lg:mx-96 lg:p-12 rounded-md bg-white sm:py-6">
        <Link to="/"><IoArrowBackSharp size={25} className="sm:ml-4 lg:ml-0"/></Link>
        <h2 className="text-center lg:text-3xl md:text-3xl sm:text-2xl italic animate-pulse underline">Cadastro</h2>
        {mensagem && (
                <div className="bg-red-500 text-white text-center py-2 my-2 rounded-md">
                    <p>{mensagem}</p>
                </div>
            )}
        <div className="lg:grid lg:justify-start md:grid sm:flex m-10 sm:justify-center">
            <label className="sm:text-left sm:mr-3 sm:mt-2">Nome</label>
            <input type="text" required onChange={aoNome} value={nome} className="bg-corFundo-100 lg:w-80 md:w-80 sm:w-64 rounded-lg mt-1 h-8 focus:outline-yellow-700 pl-2"/>
        </div>
        <div className="lg:grid lg:justify-start md:grid sm:flex m-10 sm:justify-center">
            <label className="sm:text-left sm:mr-2 sm:mt-2">Telefone</label>
            <input type="text" required onChange={aoTelefone} value={telefone} className="bg-corFundo-100 lg:w-80 md:w-80 sm:w-64 rounded-lg mt-1 h-8 focus:outline-yellow-700 pl-2 sm:mr-3"/>
        </div>
        <div className="flex justify-center"><button className="border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-5 py-1">Cadastrar</button></div>
    </form>
    )
}

export default Cadastro

