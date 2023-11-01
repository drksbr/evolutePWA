import React, { useEffect, useState } from 'react';
import { Badge, Button, Form, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import PacientesForm from '../pacientes/pacientesform';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../tools/firebase';
import HospCriaSetor from '../hospitais/formsetor';


const AddAluno: React.FC = () => (
    <div>
        <h2>Conteúdo do Componente C</h2>
        <p>Este é o conteúdo do Componente C.</p>
    </div>
);

const deleteButtonStyle = {
    padding: "5px",
    marginLeft: "5px",
    border: "none", // Remove a borda.
};

const Home = () => {

    const [show, setShow] = useState(false);
    const [activeComponent, setActiveComponent] = useState<number>(0);
    const [selectedHospital, setSelectedHospital] = useState("");
    const [hospSetorList, setHospSetorList] = useState<any[]>([]); // Use o tipo correto para seus itens.

    const handleHospitalChange = (event: { target: { value: any; }; }) => {
        const selectedValue = event.target.value;
        setSelectedHospital(selectedValue);

        const query = ref(db, `hospitais/${selectedValue}/setores`);
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                // Convertemos o objeto em um array de objetos para mapeá-lo no select.
                const setorList = Object.keys(data).map((uuid) => ({
                    value: uuid,
                    text: data[uuid],
                }));
                setHospSetorList(setorList);
            } else {
                setHospSetorList([])
            }
        });
    };

    const [hospList, setHospList] = useState<any[]>([]); // Use o tipo correto para seus itens.
    useEffect(() => {
        const query = ref(db, "hospitais");
        return onValue(query, (snapshot) => {
            const data = snapshot.val();
            if (snapshot.exists()) {
                // Convertemos o objeto em um array de objetos para mapeá-lo no select.
                const hospitaisArray = Object.keys(data).map((uuid) => ({
                    value: uuid,
                    text: data[uuid],
                }));
                setHospList(hospitaisArray);
            }
        });
    }, []);

    const handleDeleteSetor = (setorId: string) => {
        // Referência para o nó "setores" no seu banco de dados, assumindo que ele existe.
        const setoresRef = ref(db, `hospitais/${selectedHospital}/setores/${setorId}`);

        // Use a função remove() para excluir o setor.
        remove(setoresRef);
    };

    const handleShow = (compNumber: number) => {
        setActiveComponent(compNumber);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setActiveComponent(0);
    };


    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >

            <h1>
                EvolutiMed
            </h1>
            <Card style={{ width: '300px', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Selecionar Hospital</Card.Title>
                    <Form.Select onChange={handleHospitalChange} value={selectedHospital}>
                        <option>-------</option>
                        {hospList.map((hospital) => (
                            <option key={hospital.value} value={hospital.value}>
                                {hospital.text.nome}
                            </option>
                        ))}
                    </Form.Select>
                </Card.Body>
            </Card>

            <Card style={{ width: '300px', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Pacientes</Card.Title>
                    <Button onClick={() => handleShow(1)} variant="success" style={{ margin: '5px', width: '100%' }}>+ Paciente</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '300px', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Hospital</Card.Title>
                    <Button onClick={() => handleShow(2)} variant="warning" style={{ margin: '5px', width: '100%' }}>+ Setor</Button>

                    {hospSetorList.map((setor) => (
                        <div key={setor.value} style={{ display: "flex", alignItems: "center" }}>
                            <Button
                                variant=""
                                style={{ padding: "5px" }}
                                onClick={() => handleDeleteSetor(setor.value)}
                            >
                                🗑️
                            </Button>
                            <h5 style={{ margin: '5px', width: '100%' }}>
                                <Badge bg="secondary">{setor.text.nome}</Badge>
                            </h5>
                        </div>
                    ))}

                </Card.Body>
            </Card>

            <Card style={{ width: '300px', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>Alunos</Card.Title>
                    <Button onClick={() => handleShow(3)} variant="danger" style={{ margin: '5px', width: '100%' }}>+ Aluno</Button>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {activeComponent === 1 && 'Adicionar Paciente'}
                        {activeComponent === 2 && 'Adicionar Setor'}
                        {activeComponent === 3 && 'Adicionar Aluno'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {activeComponent === 1 && <PacientesForm />}
                    {activeComponent === 2 && <HospCriaSetor hospitalId={selectedHospital} />}
                    {activeComponent === 3 && <AddAluno />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    );
};

export default Home;
