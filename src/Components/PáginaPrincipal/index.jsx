import { Link } from "react-router-dom"

const PaginaPrincipal = () => {
    return(
        <div>
        <div>
            <p className="lg:text-3xl lg:mx-72 lg:my-24 sm:my-16 italic sm:text-center md:mx-16 sm:mx-12 md:text-center sm:text-xl ">Bem-vindo à Clínica de Consultas Ágil, onde oferecemos um atendimento excepcional e o melhor sistema de agendamento. Nossa plataforma inovadora permite que você marque suas consultas de forma rápida e fácil, garantindo flexibilidade e conveniência. </p>
        </div>
        <div className="grid text-center mb-5 sm:justify-center">
            <Link to={'/cadastro'}><button className="mb-5 border mx-96 px-10 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300 rounded-full border-white"><p className="lg:text-xl font-semibold sm:text-base">Cadastrar Paciente</p></button></Link>
            <Link to={'/cadastrosalvos'}><button className="my-5 border mx-96 px-12 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300 rounded-full border-white"><p className="lg:text-xl font-semibold sm:text-base">Marcar Consulta</p></button></Link>
            <Link to={'/listagendamentos'}><button className="my-5 border mx-96 px-14 py-3 border-spacing-2 bg-slate-200 hover:bg-gray-300 rounded-full border-white"><p className="lg:text-xl font-semibold sm:text-base">Agendamentos</p></button></Link>
        </div>
        </div>
    )
}

export default PaginaPrincipal