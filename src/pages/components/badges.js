import React from 'react';
import { Badge, Button } from 'react-bootstrap';

import LinkedHeading from '../../components/LinkedHeading';
import { CopyBlock, github } from 'react-code-blocks';
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

const PROGRESS = [
  'uninformed',
  'queued',
  'pending',
  'failed',
  'interrupted',
  'success',
];

export default withLayout(function Badges() {
  return (
    <>
      
      <LinkedHeading h="1" id="badges">Badges</LinkedHeading>   
      <p className="lead">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>

      <div className="mt-4">
        <h1>
          Example heading <Badge variant="primary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge variant="primary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge variant="primary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge variant="primary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge variant="primary">New</Badge>
        </h5>
        <h6>
          Example heading <Badge variant="primary">New</Badge>
        </h6>
      </div>

      

      <div className="mb-5 copyblock-container">
        <div className="shadow-none mt-4">
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<h1>
  Example Heading <span class="badge badge-primary">New</span>
</h1>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
      </div>

      
            

      <LinkedHeading h="2" id="badges-as-counters">Badges as counters</LinkedHeading>
      <p className="lead">Badges can be used as part of links or buttons to provide a counter.</p>

      <Button variant="primary" className="mb-4">
        Profile <Badge className="badge-round-element"  variant="white">99+</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
      
      

      <div className="mb-5 copyblock-container">
        <div className="shadow-none mt-4">
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<button type="button" class="btn btn-primary">
  Profile
  <span class="badge-round-element badge badge-white">99+</span>
  <span class="sr-only">unread messages</span>
</button>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
      </div>

      

      <p>
        Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies.
        While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge.
        Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.
        Unless the context is clear, consider including additional context with a visually hidden piece of additional text.  
      </p>

      

      <LinkedHeading h="2" id="contextual-variations">Contextual variations</LinkedHeading>
      <p>Add any of the below mentioned modifier classes to change the appearance of a badge.</p>

      {TYPES.map((variant) => (
        <Badge key={variant} variant={variant}>{variant}</Badge>
      ))}
      
      
      
      <div className="mb-5 copyblock-container">
        <div className="shadow-none mt-4">
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<span class="badge badge-primary">primary</span>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
      </div>

          

      <LinkedHeading h="2" id="pill">Pill</LinkedHeading>
      <p>Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger border-radius and additional horizontal padding).</p>

      {TYPES.map((variant) => (
        <Badge key={variant} pill variant={variant}>{variant}</Badge>
      ))}

      

      <div className="mb-5 copyblock-container">
        <div className="shadow-none mt-4">
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<span class="badge badge-pill badge-primary">primary</span>`}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />  
      </div>

          

      <LinkedHeading h="2" id="progress-pill">Progress Badge</LinkedHeading>
      <p>Use the <code>.badge-circle</code> modifier class to make badges rounded. These are specifically used for tracking process statuses.</p>
      <div className="badge-progress-holder">
        {PROGRESS.map((variant) => (
          <div key={variant}>
            <Badge variant={variant} className="badge-circle">{variant}</Badge>
            <span className="progress-badge-title">{variant}</span>
          </div>
        ))}
      </div>

      <div className="mb-5 copyblock-container">
        <div className="shadow-none mt-4">
          <h3>Code example</h3>
        </div>
       
        <CopyBlock
          theme={github}
          text={`<div>
  <span class="badge-circle badge badge-uninformed">uninformed</span>
  <span class="progress-badge-title">uninformed</span>
</div>
<div>
  <span class="badge-circle badge badge-queued">queued</span>
  <span class="progress-badge-title">queued</span>
</div>
<div>
  <span class="badge-circle badge badge-pending">pending</span>
  <span class="progress-badge-title">pending</span>
</div>
<div>
  <span class="badge-circle badge badge-failed">failed</span>
  <span class="progress-badge-title">failed</span>
</div>
<div>
  <span class="badge-circle badge badge-interrupted">interrupted</span>
  <span class="progress-badge-title">interrupted</span>
</div>
<div>
  <span class="badge-circle badge badge-success">success</span>
  <span class="progress-badge-title">success</span>
</div>
       `}
          language="jsx"
          showLineNumbers
          wrapLines
          codeBlock
        />
      </div>

      
      
    </>
  )
});