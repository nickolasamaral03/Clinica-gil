import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const Agendamento = (props) => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [dia, setDia] = useState("");
    const [horario, setHorario] = useState("");
    const [especialidade, setEspecialidade] = useState("");
    const [mensagem, setMensagem] = useState("");

    const getDataAtual = () => {
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        let mes = dataAtual.getMonth() + 1;
        let dia = dataAtual.getDate();

        mes = mes < 10 ? `0${mes}` : mes;
        dia = dia < 10 ? `0${dia}` : dia;

        return `${ano}-${mes}-${dia}`;
    };

    const PegandoAgenda = (evento) => {
        evento.preventDefault();

        const agendamentoExistente = props.agendas.find((agenda) => agenda.dia === dia && agenda.horario === horario);
        if (agendamentoExistente) {
            setMensagem("Já existe um agendamento para este dia e horário!");
            setTimeout(() => {
                setMensagem("");
            }, 3000);
            return; 
        }

        props.aoAgendarCadastrado({
            dia,
            horario,
            especialidade,
            userId
        });

    
        setDia("");
        setHorario("");
        setEspecialidade("");

        navigate("/");
    };

    return (
        <form onSubmit={PegandoAgenda} className="border border-white lg:mx-96 p-10 rounded-md bg-white sm:mx-10 relative">
            <Link to="/" className="absolute left-10 top-6 sm:left-4 lg:ml-0"><IoArrowBackSharp size={25}/></Link>
            <h2 className="text-center lg:text-3xl md:text-3xl sm:text-xl italic animate-pulse underline">Agendamento</h2>
            {mensagem && (
                <div className="bg-red-500 text-white text-center py-2 my-2 rounded-md">
                    <p>{mensagem}</p>
                </div>
            )}
            <div className="grid m-10">
                <label>Dia</label>
                <input type="date" min={getDataAtual()} required onChange={(e) => setDia(e.target.value)} value={dia} className="bg-corFundo-100 sm:w-46 md:w-80 lg:w-80 rounded-lg mt-1 h-8 focus:outline-yellow-700 pl-2" />
            </div>
            <div className="grid m-10">
                <label>Horário</label>
                <input type="time" required onChange={(e) => setHorario(e.target.value)} value={horario} className="bg-corFundo-100 sm:w-46 md:w-80 lg:w-80 rounded-lg mt-1 h-8 focus:outline-yellow-700 pl-2" />
            </div>
            <div className="grid m-10">
                <label>Especialidade</label>
                <input type="text" required onChange={(e) => setEspecialidade(e.target.value)} value={especialidade} className="bg-corFundo-100 sm:w-46 md:w-80 lg:w-80 rounded-lg mt-1 h-8 focus:outline-yellow-700 pl-2" />
            </div>
            <div className="flex justify-center">
                <button className="border-spacing-2 bg-yellow-300 hover:bg-yellow-200 rounded-lg border-white px-5 py-1">Agendar</button>
            </div>
        </form>
    );
};

export default Agendamento;
