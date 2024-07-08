import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoArrowBackSharp } from "react-icons/io5";

const FiltroTelefone = ({ agendas, aoDeletar }) => {
    const [filtroTelefone, setFiltroTelefone] = useState("");
    const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);

    const handleFiltroChange = (event) => {
        const telefone = event.target.value;
        setFiltroTelefone(telefone);
        if (telefone === "") {
            setUsuarioFiltrado(null);
        }
    };

    const handlePesquisarClick = () => {
        const usuarioEncontrado = agendas.find(
            (agenda) => agenda.telefone === filtroTelefone
        );
        setUsuarioFiltrado(usuarioEncontrado);
    };

    return (
        <div className="border border-white mx-64 sm:mx-10 p-12 rounded-md bg-white">
             <Link to="/listagendamentos">
                    <IoArrowBackSharp size={25} className="mb-10"/>
                </Link>
            <label className="pt-14 font-bold sm:text-xs lg:text-base md:text-base sm:-ml-5 lg:-ml-0">(Telefone)</label>
            <div className="flex sm:-ml-5 lg:-ml-0">
                <input
                    type="text"
                    className="bg-corFundo-100 w-52 rounded-lg h-7 focus:outline-yellow-700 lg:pl-2 sm:pl-2"
                    value={filtroTelefone}
                    onChange={handleFiltroChange}
                />
                <button
                    className="ml-4 border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-1 py-1 -mt-1"
                    onClick={handlePesquisarClick}
                >
                    <p className="sm:text-xs lg:text-base md:text-base">Pesquisar</p>
                </button>
            </div>
            <div>
                {usuarioFiltrado ? (
                    <div className="ml-8 flex mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl relative sm:ml-0 overflow-x-auto">
                    <p className="mr-10 text-sm uppercase">{usuarioFiltrado.nome}</p>
                    <p className="mr-10 font-semibold text-sm">{usuarioFiltrado.horario}</p>
                    <p className="mr-10 font-semibold text-sm whitespace-nowrap">{usuarioFiltrado.dia}</p>
                    <p className="mr-10 uppercase text-sm">{usuarioFiltrado.especialidade}</p>
                    <p className="text-sm">{usuarioFiltrado.telefone}</p>
                    <Link to="/"><MdDelete
                        className="ml-10 cursor-pointer hover:bg-red-500 rounded-full absolute lg:right-2"
                        size={20}
                        onClick={() => aoDeletar(usuarioFiltrado.id)}
                    /></Link>
                </div>
                ) : (
                    <p className="mt-5 text-center text-xl">Não Encontrado!</p>

                )}
            </div>
        </div>
    );
};

export default FiltroTelefone;
