import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { ref, push, getDatabase, set } from 'firebase/database';

const formNormalInputStyle = {
    marginBottom: '10px',
};

function HospCriaSetor({ hospitalId }: {hospitalId: string}) {
    const [nomeSetor, setNomeSetor] = useState('');

    const handleCreateSetor = () => {
        // Verifique se o nome do setor não está vazio.
        if (nomeSetor.trim() === '') {
            alert('Por favor, insira um nome válido para o setor.');
            return;
        }

        // Referência para o nó "setores" no seu banco de dados, assumindo que ele existe.
        const db = getDatabase();
        const setoresRef = ref(db, `hospitais/${hospitalId}/setores`);

        // Use a função push() para criar um novo nó com um ID exclusivo.
        const novoSetorRef = push(setoresRef);

        // Defina os dados do novo setor.
        set(novoSetorRef, {
            nome: nomeSetor
            // Outros campos do setor, se houverem.
        });

        // Limpe o campo após a criação.
        setNomeSetor('');
    };

    return (
        <>
            <Form.Group controlId="formRespiratoryRate" style={formNormalInputStyle}>
                <Form.Label>Nome do setor</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ex.: 👶🏻🔥 Pediátrica/Queimados"
                    value={nomeSetor}
                    onChange={(e) => setNomeSetor(e.target.value)}
                />
            </Form.Group>
            <Button style={{ width: "100%" }} onClick={handleCreateSetor}>
                Criar Setor
            </Button>
        </>
    );
}

export default HospCriaSetor;
