import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const ListaDeAgendamentos = ({ agendas, aoDeletar }) => {
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
        const usuarioEncontrado = agendas.find((agenda) =>
            agenda.telefone === filtroTelefone
        );
        setUsuarioFiltrado(usuarioEncontrado);
    };

    return (
        <>
            
            <div className="border border-white mx-64 p-12 rounded-md bg-white">
                <Link to="/" className=" left-4 top-4"><IoArrowBackSharp size={25} /></Link>
                <div className="grid mt-3 mb-5">
                <label>(Telefone)</label>
                <div className="flex">
                    <input
                        type="text"
                        className="bg-corFundo-100 w-52 rounded-lg h-7 focus:outline-none pl-2"
                        value={filtroTelefone}
                        onChange={handleFiltroChange}
                    />
                    <button
                        className="ml-4 border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-1 py-1 -mt-1"
                        onClick={handlePesquisarClick}
                    >
                        Pesquisar
                    </button>
                </div>
            </div>
                <h2 className="text-center text-3xl italic mb-10">Agendamentos</h2>
                <div>
                    {filtroTelefone === "" ? (
                        agendas.map((agenda) => (
                            <div
                                className="flex ml-8 mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl relative"
                                key={agenda.id}
                            >
                                <p className="mr-10 text-sm uppercase">{agenda.nome}</p>
                                <p className="mr-10 font-semibold text-sm">{agenda.horario}</p>
                                <p className="mr-10 font-semibold text-sm">{agenda.dia}</p>
                                <p className="mr-10 uppercase text-sm">{agenda.especialidade}</p>
                                <p className="text-sm">{agenda.telefone}</p>
                                <Link to="/"><MdDelete
                                    className="ml-10 cursor-pointer hover:bg-red-300 rounded-full absolute right-2"
                                    size={20}
                                    onClick={() => aoDeletar(agenda.id)}
                                /></Link>
                            </div>
                        ))
                    ) : (
                        usuarioFiltrado && (
                            <div className="ml-8 flex mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl relative">
                                <p className="mr-10 text-sm uppercase">{usuarioFiltrado.nome}</p>
                                <p className="mr-10 font-semibold text-sm">{usuarioFiltrado.horario}</p>
                                <p className="mr-10 font-semibold text-sm">{usuarioFiltrado.dia}</p>
                                <p className="mr-10 uppercase text-sm">{usuarioFiltrado.especialidade}</p>
                                <p className="text-sm">{usuarioFiltrado.telefone}</p>
                                <Link to="/"><MdDelete
                                    className="ml-10 cursor-pointer hover:bg-red-300 rounded-full absolute right-2"
                                    size={20}
                                    onClick={() => aoDeletar(usuarioFiltrado.id)}
                                /></Link>
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default ListaDeAgendamentos;


