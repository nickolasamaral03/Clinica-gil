import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const ListaDeCadastros = ({ usuarios }) => {
    const [filtroTelefone, setFiltroTelefone] = useState("");
    const [usuarioFiltrado, setUsuarioFiltrado] = useState(null);

    const handleFiltroChange = (event) => {
        setFiltroTelefone(event.target.value);
        if (event.target.value === "") {
            setUsuarioFiltrado(null);
        }
    };

    const handlePesquisarClick = () => {
        const usuarioEncontrado = usuarios.find(usuario =>
            usuario.telefone === filtroTelefone
        ); 
        setUsuarioFiltrado(usuarioEncontrado);
    };

    return (
        <div className="border border-white mx-96 p-12 rounded-md bg-white">
            <Link to="/"><IoArrowBackSharp size={25}/></Link>
            <div className="grid mt-3 mb-5">
                <label>(Telefone)</label>
                <div className="flex">
                    <input
                        type="text"
                        className="bg-corFundo-100 w-52 rounded-lg h-7 focus:outline-none pl-2"
                        value={filtroTelefone}
                        onChange={handleFiltroChange}
                    />
                    <button className="ml-4 border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-1 py-1 -mt-1" onClick={handlePesquisarClick}>Pesquisar</button>
                </div>
            </div>

            <h2 className="text-center text-3xl italic mt-10">Cadastros</h2>
            <div>
                {filtroTelefone === "" && (
                    usuarios.map((usuario) => (
                        <Link to={`/agendar/${usuario.id}`} key={usuario.id}>
                            <div className="ml-8 flex mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl">
                                <p className="mr-12 text-xl">{usuario.nome}</p>
                                <p className="text-xl">{usuario.telefone}</p>
                            </div>
                        </Link>
                    ))
                )}
                {filtroTelefone !== "" && usuarioFiltrado && (
                    <Link to={`/agendar/${usuarioFiltrado.id}`}>
                        <div className="ml-8 flex mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl">
                            <p className="mr-12 text-xl">{usuarioFiltrado.nome}</p>
                            <p className="text-xl">{usuarioFiltrado.telefone}</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ListaDeCadastros;
