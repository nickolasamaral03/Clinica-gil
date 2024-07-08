import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


const ListaDeAgendamentos = ({ agendas, aoDeletar }) => {
    return (
        <>
            <div className="border border-white lg:mx-64 sm:mx-10 p-12 rounded-md bg-white mb-5 overflow-hidden">
                <Link to="/" className="left-4 top-4">
                    <IoArrowBackSharp size={25} />
                </Link>
                <Link to="/FiltrandoTelefone">
                    <button className="border-spacing-2 bg-yellow-200 hover:bg-corFundo-100 rounded-lg border-black lg:px-5 sm:px-2 py-2 mr-8 mt-6">
                        <p className="sm:text-xs lg:text-base">Filtrar por Telefone</p>
                    </button>
                </Link>
                <h2 className="text-center lg:text-3xl sm:text-xl italic mb-10 mt-5">Agendamentos</h2>
                <div>
                    {agendas.length === 0 ? (
                        <p className="text-center text-xl">Nenhum Agendamento Cadastrado!</p> // Se agenda tiver vazia retorna essa mensagem, se não retorna o que tiver em "agenda".
                    ) : (
                        agendas.map((agenda) => (
                            <div
                                className="flex ml-8 sm:ml-0 mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl relative overflow-x-auto"
                                key={agenda.id}
                            >
                                <p className="mr-10 lg:text-sm sm:text-xs uppercase">{agenda.nome}</p>
                                <p className="mr-10 font-semibold sm:font-bold lg:text-sm sm:text-xs">{agenda.horario}</p>
                                <p className="mr-10 font-semibold lg:text-sm sm:font-bold sm:text-xs whitespace-nowrap">{agenda.dia}</p>
                                <p className="mr-10 uppercase lg:text-sm sm:text-xs">{agenda.especialidade}</p>
                                <p className="text-sm">{agenda.telefone}</p>
                                <Link to="/">
                                    <MdDelete
                                        className="ml-10 cursor-pointer hover:bg-red-500 rounded-full absolute lg:right-2"
                                        size={20}
                                        onClick={() => aoDeletar(agenda.id)}
                                    />
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default ListaDeAgendamentos;
