import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Accordion } from 'react-bootstrap';
import ExameFisicoForm from './examefisico_form';

const formNormalInputStyle = {
  marginBottom: '10px',
};

const formBodyPaddingStyle = {
  padding: "10px"
}

const PacientesForm = () => {



  return (
    <Container>
      <Form>
        <Accordion defaultActiveKey="0">
          {/* IDENTIFICACAO */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Identificação</Accordion.Header>
            <Accordion.Body style={formBodyPaddingStyle}>

              <Form.Group controlId="formNome" style={formNormalInputStyle}>
                <Form.Control type="text" placeholder="Nome do Paciente" />
              </Form.Group>

              <Form.Group controlId="formIdade" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Idade" />
              </Form.Group>

              <Form.Group controlId="formLeito" style={formNormalInputStyle}>
                <Form.Control type="text" placeholder="Leito" />
              </Form.Group>

              <Form.Group controlId="formSetor" style={formNormalInputStyle}>
                <Form.Control type="text" placeholder="Setor" />
              </Form.Group>

            </Accordion.Body>

          </Accordion.Item>

          {/* COMORBIDADES E MUC */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Comorbidades e MUC</Accordion.Header>
            <Accordion.Body style={formBodyPaddingStyle}>
              <Form.Group controlId="formComorbidades" style={formNormalInputStyle}>
                <Form.Control as="textarea" rows={3} placeholder="Descrição das Comorbidades (Uma por linha)" />
              </Form.Group>

              <Form.Group controlId="formMUC" style={formNormalInputStyle}>
                <Form.Control as="textarea" rows={3} placeholder="Observações sobre MUC (Um por linha com dose e número de tomadas por dia)" />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* SINAIS VITAIS */}
          <Accordion.Item eventKey="2">
            <Accordion.Header>Sinais Vitais</Accordion.Header>
            <Accordion.Body style={formBodyPaddingStyle}>
              <Form.Group controlId="formFrequency" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Batimentos por minuto" />
              </Form.Group>

              <Form.Group controlId="formBloodPressure" style={formNormalInputStyle}>
                <Form.Control type="text" placeholder="Ex: 120/80 mmHg" />
              </Form.Group>

              <Form.Group controlId="formRespiratoryRate" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Respirações por minuto" />
              </Form.Group>

              <Form.Group controlId="formBodyTemperature" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Ex: 36.5°C" />
              </Form.Group>

              <Form.Group controlId="formOxygenSaturation" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Saturação de Oxigênio" />
              </Form.Group>

              <Form.Group controlId="formPain" style={formNormalInputStyle}>
                <Form.Control type="number" placeholder="Estala de dor de 0 <-> 10 Ex: 5" />
              </Form.Group>
            </Accordion.Body>
          </Accordion.Item>

          {/* EXAME FISICO */}
          <Accordion.Item eventKey="3">
            <Accordion.Header>Exame Físico</Accordion.Header>
            <Accordion.Body style={formBodyPaddingStyle}>

              <ExameFisicoForm />

            </Accordion.Body>
          </Accordion.Item>


          {/* EVOLUCAO DO DIA */}
          <Accordion.Item eventKey="4">
            <Accordion.Header>Evolução do dia</Accordion.Header>
            <Accordion.Body style={formBodyPaddingStyle}>

              <Form.Group controlId="formEvolucaoDoDia" style={formNormalInputStyle}>
                <Form.Control as="textarea" rows={3} placeholder="Descrição da evolução do dia do paciente." />
              </Form.Group>

            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
      </Form>
    </Container>
  );
};

export default PacientesForm;
