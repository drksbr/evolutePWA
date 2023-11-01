import React from 'react';
import Form from 'react-bootstrap/Form';


const formNormalInputStyle = {
    marginBottom: '10px',
  };

  const formCheckBoxInputStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const formCheckBoxPaddingStyle = {
    marginRight: '10px'
  }


const ExameFisicoForm: React.FC = () => {
    

    return (
        <>
            <Form.Group controlId="formGeneralAppearance" style={formNormalInputStyle}>
                <div style={formCheckBoxInputStyle}>
                    <Form.Control type="text" placeholder="Aparência Geral" style={formCheckBoxPaddingStyle} />
                    <Form.Check type="checkbox" label="Normal" />
                </div>
            </Form.Group>

            <Form.Group controlId="formCardiovascular" style={formNormalInputStyle}>
                <div style={formCheckBoxInputStyle}>
                    <Form.Control type="text" placeholder="Cardiovascular" style={formCheckBoxPaddingStyle} />
                    <Form.Check type="checkbox" label="Normal" />
                </div>
            </Form.Group>

            <Form.Group controlId="formRespiratory" style={formNormalInputStyle}>
                <div style={formCheckBoxInputStyle}>
                    <Form.Control type="text" placeholder="Respiratório" style={formCheckBoxPaddingStyle} />
                    <Form.Check type="checkbox" label="Normal" />
                </div>
            </Form.Group>

            <Form.Group controlId="formAbdomen" style={formNormalInputStyle}>
                <div style={formCheckBoxInputStyle}>
                    <Form.Control type="text" placeholder="Abdômen" style={formCheckBoxPaddingStyle} />
                    <Form.Check type="checkbox" label="Normal" />
                </div>
            </Form.Group>

            <Form.Group controlId="formNeurological" style={formNormalInputStyle}>
                <div style={formCheckBoxInputStyle}>
                    <Form.Control type="text" placeholder="Neurológico" style={formCheckBoxPaddingStyle} />
                    <Form.Check type="checkbox" label="Normal" />
                </div>
            </Form.Group>
        </>
    );
};

export default ExameFisicoForm;
