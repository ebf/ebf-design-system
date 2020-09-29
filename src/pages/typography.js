import React from "react"


import LinkedHeading from '../components/LinkedHeading';
import withLayout from "../with-layout"

export default withLayout(function LinksPage() {
  return (
    <>
      <LinkedHeading h="1" id="typography">Typography</LinkedHeading>            
      
      <LinkedHeading h="2" id="heading">Heading</LinkedHeading>      

      
        <h1>EBF Heading 1</h1>
        <h2>EBF Heading 2</h2>
        <h3>EBF Heading 3</h3>
        <h4>EBF Heading 4</h4>
        <h5>EBF Heading 5</h5>
        <h6>EBF Heading 6</h6>

        <LinkedHeading h="2" id="display-heading">Display Heading</LinkedHeading> 

        <h1 className="display-1">Display 1</h1>
        <h1 className="display-2">Display 2</h1>
        <h1 className="display-3">Display 3</h1>
        <h1 className="display-4">Display 4</h1>

        <LinkedHeading h="2" id="lead">Lead</LinkedHeading> 

        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p> 


        <LinkedHeading h="2" id="paragraph">Paragraph</LinkedHeading> 

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> 

        <p className="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> 

        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> 

        <LinkedHeading h="2" id="inline-txt-elements">Inline Text Elements</LinkedHeading>

        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>

      
    </>
  );
});
