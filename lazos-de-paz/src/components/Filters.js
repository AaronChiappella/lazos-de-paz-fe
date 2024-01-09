import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
 import { useState } from 'react';

import './filters.css';


function Filters() {

  const [selectedColors, setSelectedColors] = useState([]);
  const handleCheckboxChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((selectedColor) => selectedColor !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
  };

  const colorOptions = [
    'Negro',
    'Amarillo',
    'Azul',
    'Rojo',
    'Blanco',
    'Rosa',
    'Gris',
    'Marrón',
    'Naranja',
    'Morado',
    'Multi-Color',
    'Verde',
  ];

  return (
    <div className='filter-container' sticky="left">
      <div className='scroll-container'>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Genero</Accordion.Header>
            <Accordion.Body>
              <Form >
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />


                  </div>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Categorias</Accordion.Header>
            <Accordion.Body>
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />


                  </div>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tipo De Producto</Accordion.Header>
            <Accordion.Body>
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />


                  </div>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Edad</Accordion.Header>
            <Accordion.Body>
              <Form>
                {['checkbox'].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`default ${type}`}
                    />


                  </div>
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Colores</Accordion.Header>
            <Accordion.Body>
            <Form>
      {colorOptions.map((color) => (
        <Form.Check
          key={color}
          type="checkbox"
          id={color}
          label={color}
          checked={selectedColors.includes(color)}
          onChange={() => handleCheckboxChange(color)}
        />
      ))}
    </Form>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
}

export default Filters;
