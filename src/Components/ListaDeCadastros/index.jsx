import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


const ListaDeCadastros = ({ usuarios, aoDeletarCadastro }) => {
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
        <div className="border border-white lg:mx-96 md:mx-10 p-12 rounded-md bg-white mb-4 sm:mx-10 overflow-hidden">
            <Link to="/"><IoArrowBackSharp size={25} className="sm:-ml-5"/></Link>
            <div className="grid mt-3 mb-5">
                <label className="font-bold sm:text-xs lg:text-base md:text-base">(Telefone)</label>
                <div className="flex">
                    <input
                        type="text"
                        className="bg-corFundo-100 lg:w-52 md:w-60 sm:w-44 rounded-lg h-7 focus:outline-yellow-700 lg:pl-2 sm:pl-2"
                        value={filtroTelefone}
                        onChange={handleFiltroChange}
                    />
                    <button className="lg:ml-4 sm:ml-2 border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-1 lg:py-1 -mt-1" onClick={handlePesquisarClick}><p className="sm:text-xs lg:text-base md:text-base">Pesquisar</p></button>
                </div>
            </div>

            <h2 className="text-center lg:text-3xl sm:text-2xl italic mt-10">Cadastros</h2>
            <div>
                {filtroTelefone === "" && usuarios.length === 0 && (
                    <p className="text-center text-xl mt-12">Nenhum Cadastro!</p>
                )}
                
                {filtroTelefone === "" && usuarios.length > 0 && (
                    usuarios.map((usuario) => (
                        <div className="relative">
                        <Link to={`/agendar/${usuario.id}`} key={usuario.id}>
                            <div className="lg:ml-8 md:ml-8 flex mb-4 border border-white bg-corFundo-100 px-6 my-6 py-2 rounded-xl">
                                <p className="mr-12 lg:text-xl md:text-xl">{usuario.nome}</p>
                                <p className="lg:text-xl md:text-xl">{usuario.telefone}</p>
                            </div>
                            </Link>
                            <Link to="/">
                                    <MdDelete
                                        className="ml-10 cursor-pointer hover:bg-red-500 rounded-full absolute lg:right-8 lg:top-3 md:right-8 md:top-3 sm:ml-64 sm:bottom-2"
                                        size={20}
                                        onClick={() => aoDeletarCadastro(usuario.id)}
                                    />
                                </Link>
                        
                        </div>
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
