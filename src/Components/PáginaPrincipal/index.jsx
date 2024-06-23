import { Link } from "react-router-dom"

const PaginaPrincipal = () => {
    return(
        <>
        <div>
            <p className="lg:text-3xl mx-72 my-24 font-normal italic">Bem-vindo à Clínica de Consultas Ágil, onde oferecemos um atendimento excepcional e o melhor sistema de agendamento. Nossa plataforma inovadora permite que você marque suas consultas de forma rápida e fácil, garantindo flexibilidade e conveniência. </p>
        </div>
        <div className="grid text-center">
            <Link to={'/cadastro'}><button className="mb-5 border mx-96 px-10 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300 rounded-full border-white"><p className="text-xl font-semibold">Cadastrar Paciente</p></button></Link>
            <Link to={'/cadastrosalvos'}><button className="my-5 border mx-96 px-12 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300 rounded-full border-white"><p className="text-xl font-semibold">Marcar Consulta</p></button></Link>
            <Link to={'/listagendamentos'}><button className="my-5 border mx-96 px-14 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300  rounded-full border-white"><p className="text-xl font-semibold">Agendamentos</p></button></Link>
        </div>
        </>
    )
}

export default PaginaPrincipal