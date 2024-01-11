import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

import './filters.css';

function Filters() {
  const [selectedColors, setSelectedColors] = useState([]);
  const [activeAccordion, setActiveAccordion] = useState(['0', '1', '2', '3', '5']); // Todos los elementos abiertos por defecto

  const handleCheckboxChange = (color) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((selectedColor) => selectedColor !== color)
      : [...selectedColors, color];

    setSelectedColors(updatedColors);
  };

  const sexOptions = ['Masculino', 'Femenino', 'Unisex'];
  const categoryOptions = ['Superior', 'Inferior', 'Accesorio'];
  const typeProductOptions = ['Lana fina', 'Lana gruesa', 'Lana Intermedia'];
  const edadOptions = ['Bebes', 'Niños/as', 'Adultos'];
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
        <Accordion activeKey={activeAccordion} onSelect={(e) => setActiveAccordion(e)}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sexo</Accordion.Header>
            <Accordion.Body>
              <Form>
                {sexOptions.map((sex) => (
                  <Form.Check
                    key={sex}
                    type="checkbox"
                    id={sex}
                    label={sex}
                    className="d-flex justify-content-start"
                  />
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Categorias</Accordion.Header>
            <Accordion.Body>
              <Form>
                {categoryOptions.map((category) => (
                  <Form.Check
                    key={category}
                    type="checkbox"
                    id={category}
                    label={category}
                    className="d-flex justify-content-start"
                  />
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tipo De Producto</Accordion.Header>
            <Accordion.Body>
              <Form>
                {typeProductOptions.map((type) => (
                  <Form.Check
                    key={type}
                    type="checkbox"
                    id={type}
                    label={type}
                    className="d-flex justify-content-start"
                  />
                ))}
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Edad</Accordion.Header>
            <Accordion.Body>
              <Form>
                {edadOptions.map((edad) => (
                  <Form.Check
                    key={edad}
                    type="checkbox"
                    id={edad}
                    label={edad}
                    className="d-flex justify-content-start"
                  />
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
                    className="d-flex justify-content-start"
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
