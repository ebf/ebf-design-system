import React from "react"
import classNames from 'classnames';
import { Row, Col } from 'react-bootstrap';

import withLayout from "../with-layout"

const COLORS = [
  {color: 'default', hex: '' },
  {color: 'primary'},
  {color: 'secondary'},
  {color: 'info'},
  {color: 'success'},
  {color: 'danger'},
  {color: 'warning'},
  {color: 'light'},
];

const Swatch = ({ color, hex }) => (
  <div className="color-swatch">
    <div className={classNames("color-swatch-header", `bg-${color}`)}>
    </div>
    <div className="color-swatch-body d-flex">
      <div className="prop-item-wrap flex-fill text-right p-2">
        <div className="prop-item">
          <div className="label">Name</div>
          <div className="value">{color}</div>
        </div>
      </div>
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
      <h1>Primary colors</h1>
      <p className="lead">
        Our primary palette is comprised of neutrals, white, and blue.
        These colors are present across most touch points from marketing to product.
      </p>

      <Row>
        {COLORS.map(color => (
          <Col xs={12} md={6} lg={4}>
            <Swatch {...color} />
          </Col>
        ))}
      </Row>
    </>
  );
});
