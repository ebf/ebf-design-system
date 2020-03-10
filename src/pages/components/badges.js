import React from 'react';
import { Badge, Button } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

const TYPES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

export default withLayout(function Alerts() {
  return (
    <>
      <h1>Badges</h1>
      <p class="lead">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>

      <div>
        <h1>
          Example heading <Badge variant="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge variant="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge variant="secondary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge variant="secondary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge variant="secondary">New</Badge>
        </h5>
        <h6>
          Example heading <Badge variant="secondary">New</Badge>
        </h6>
      </div>;

      <p>Badges can be used as part of links or buttons to provide a counter.</p>

      <Button variant="primary">
        Profile <Badge variant="light">9</Badge>
        <span className="sr-only">unread messages</span>
      </Button>

      <p>
        Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.
        While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge.
        Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.
        Unless the context is clear, consider including additional context with a visually hidden piece of additional text.  
      </p>

      <LinkedHeading h="2" id="contextual-variations">Contextual variations</LinkedHeading>
      <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

      {TYPES.map((variant, idx) => (
        <Badge variant={variant}>{variant}</Badge>
      ))}

      <LinkedHeading h="2" id="pill">Pill</LinkedHeading>
      <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding).</p>

      {TYPES.map((variant, idx) => (
        <Badge pill variant={variant}>{variant}</Badge>
      ))}
    </>
  )
});