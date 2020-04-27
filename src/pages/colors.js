import React from "react"
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';


import LinkedHeading from '../components/LinkedHeading';
import withLayout from "../with-layout"

const GRAYS = [
  
  {color: 'gray-100', hex: '#f8f9fb' },
  {color: 'gray-200', hex: '#f2f3f7'},
  {color: 'gray-300', hex: '#e3e6ed'},
  {color: 'gray-400', hex: '#d5d9e2'},
  {color: 'gray-500', hex: '#AEB8C6'},
  {color: 'gray-600', hex: '#c5cbd7'},
  {color: 'gray-700', hex: '#afb8c7'},
  {color: 'gray-800', hex: '#97a2b4'},
  {color: 'gray-900', hex: '#55677b'}, 
  {color: 'black', hex: '#2b3d51' },
];

const BLUES = [
  {color: 'blue-100', hex: '#e5f2f8'},
  {color: 'blue-200', hex: '#cae5f1'},
  {color: 'blue-300', hex: '#abd6e8'},
  {color: 'blue-400', hex: '#87c5df'},
  {color: 'blue-500', hex: '#5cb0d3'},
  {color: 'blue', hex: '#2494c5'},
  {color: 'blue-600', hex: '#187bab'},
  {color: 'blue-700', hex: '#1c759b'},
  {color: 'blue-800', hex: '#176180'},
  {color: 'blue-900', hex: '#10455b'},  
];

const ORANGES = [
  {color: 'orange-100', hex: '#f8ece7'},
  {color: 'orange-200', hex: '#f1d8cd'},
  {color: 'orange-300', hex: '#eac1b0'},
  {color: 'orange-400', hex: '#e1a68e'},
  {color: 'orange-500', hex: '#d58562'},
  {color: 'orange', hex: '#c55424'},
  {color: 'orange-600', hex: '#b14b20'},
  {color: 'orange-700', hex: '#9b421c'},
  {color: 'orange-800', hex: '#7f3617'},
  {color: 'orange-900', hex: '#5a2610'},  
];

const REDS = [
  {color: 'red-100', hex: '#fdecec'},
  {color: 'red-200', hex: '#fad8d8'},
  {color: 'red-300', hex: '#f8c1c1'},
  {color: 'red-400', hex: '#f5a7a7'},
  {color: 'red-500', hex: '#f28585'},
  {color: 'red', hex: '#ed5454'},
  {color: 'red-600', hex: '#d64b4b'},
  {color: 'red-700', hex: '#bb4242'},
  {color: 'red-800', hex: '#9b3636'},
  {color: 'red-900', hex: '#6e2727'},  
];

const GREENS = [
  {color: 'green-100', hex: '#e5f8eb'},
  {color: 'green-200', hex: '#caf0d5'},
  {color: 'green-300', hex: '#aae8bd'},
  {color: 'green-400', hex: '#96de84'},
  {color: 'green-500', hex: '#5bd37f'},
  {color: 'green', hex: '#24c554'},
  {color: 'green-600', hex: '#20b24b'},
  {color: 'green-700', hex: '#1c9c42'},
  {color: 'green-800', hex: '#178137'},
  {color: 'green-900', hex: '#115d27'},  
];

const YELLOWS = [
  {color: 'yellow-100', hex: '#fff6df'},
  {color: 'yellow-200', hex: '#ffedbd'},
  {color: 'yellow-300', hex: '#ffe398'},
  {color: 'yellow-400', hex: '#ffd86e'},
  {color: 'yellow-500', hex: '#ffcb3f'},
  {color: 'yellow', hex: '#ffbd08'},
  {color: 'yellow-600', hex: '#e6ab07'},
  {color: 'yellow-700', hex: '#ca9606'},
  {color: 'yellow-800', hex: '#a87c05'},
  {color: 'yellow-900', hex: '#7a5a03'},  
];

const PURPLES = [
  {color: 'purple-100', hex: '#e9ecf9'},
  {color: 'purple-200', hex: '#d1d8f3'},
  {color: 'purple-300', hex: '#b6c1eb'},
  {color: 'purple-400', hex: '#95a5e3'},
  {color: 'purple-500', hex: '#6b80d7'},
  {color: 'purple', hex: '#2444c5'},
  {color: 'purple-600', hex: '#203db0'},
  {color: 'purple-700', hex: '#1c3599'},
  {color: 'purple-800', hex: '#162b7d'},
  {color: 'purple-900', hex: '#0f1d56'},  
];

const Swatch = ({ color, hex }) => (
  <div className="color-swatch">
    <div className={classNames("color-swatch-header", `bg-${color}`)}>
    </div>
    <div className="color-swatch-body d-flex">
      {/* <div className="prop-item-wrap flex-fill text-right p-2">
        <div className="prop-item">
          <div className="label">Name</div>
          <div className="value">{color}</div>
        </div>
      </div> */}
      <div className="prop-item-wrap flex-fill p-2">
        <div className="prop-item">
          <div className="label">Hex</div>
          <div className="value">{hex}</div>
        </div>
      </div>
    </div>
  </div>
);

export default withLayout(function LinksPage() {
  return (
    <>
      <h1>Colors</h1>
            
      <LinkedHeading h="2" id="primary-colors">Primary colors</LinkedHeading>
      <p className="lead">
        Our primary palette is comprised of neutrals, white, and blue.
        These colors are present across most touch points from marketing to product.
      </p>
      
      <LinkedHeading h="3" id="gray-colors">Grays</LinkedHeading>
      <Row className="swatch-container">
        {GRAYS.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      <LinkedHeading h="3" id="blue-colors">Blues</LinkedHeading>
      <Row className="swatch-container">
        {BLUES.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      <LinkedHeading h="2" id="secondary-colors">Secondary colors</LinkedHeading>
      <p className="lead">
        Our secondary palette is comprised of orange, red, green, blue and yellow.
        These colors are present across most touch points in products.
      </p>


      <LinkedHeading h="3" id="red-colors">Reds</LinkedHeading>
      <Row className="swatch-container">
        {REDS.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      <LinkedHeading h="3" id="orange-colors">Oranges</LinkedHeading>
      <Row className="swatch-container">
        {ORANGES.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>      

      <LinkedHeading h="3" id="yellow-colors">Yellows</LinkedHeading>
      <Row className="swatch-container">
        {YELLOWS.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      <LinkedHeading h="3" id="green-colors">Greens</LinkedHeading>
      <Row className="swatch-container">
        {GREENS.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      <LinkedHeading h="3" id="purple-colors">Purples</LinkedHeading>
      <Row className="swatch-container">
        {PURPLES.map(color => (
          <Col xs={4} md={3} lg={2}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>

      
    </>
  );
});
