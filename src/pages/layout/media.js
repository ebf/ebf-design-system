import React from 'react';
import {Media} from 'react-bootstrap';
import LinkedHeading from '../../components/LinkedHeading';
import withLayout from "../../with-layout"

export default withLayout(function GridSection({ data }) {
  return (
    <>
      <LinkedHeading h="1" id="media-object">Media Object</LinkedHeading>

      <Media>
        <img
            width={64}
            height={64}
            className="mr-3"
            src="http://upload.wikimedia.org/wikipedia/sr/0/0c/Firefox-logo.png"
            data-src="holder.js/64x64"
            alt="Placeholder"
        />
          <Media.Body>
              <h5>Media Heading</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
              ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
              tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
              Donec lacinia congue felis in faucibus.
              </p>
          </Media.Body>
        </Media>

        <br/>

        <LinkedHeading h="2" id="alignment">Alignment</LinkedHeading>

        <Media>
        <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="Placeholder"
        />
          <Media.Body>
              <h5>Top Aligned Media</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
              </p>
              <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
          </Media.Body>
        </Media>

        <br/>
        <br/>

        <Media>
        <img
            width={64}
            height={64}
            className="align-self-center mr-3"
            src="holder.js/64x64"
            alt="Placeholder"
        />
          <Media.Body>
              <h5>Center-aligned Media</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
              </p>
              <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
          </Media.Body>
        </Media>

        <br/>
        <br/>

        <Media>
        <img
            width={64}
            height={64}
            className="align-self-end mr-3"
            src="holder.js/64x64"
            alt="Placeholder"
        />
          <Media.Body>
              <h5>Bottom-aligned Media</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
              </p>
              <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
          </Media.Body>
        </Media>


        <LinkedHeading h="2" id="order">Order</LinkedHeading>

        <Media>
       
          <Media.Body>
              <h5>Media Object</h5>
              <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. 
              </p>
              <p>
              Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>
          </Media.Body>

          <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="Placeholder"
          />
        </Media>

        <br/>

        <LinkedHeading h="2" id="media-list">Media List</LinkedHeading>

        <ul className="list-unstyled">
          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>

          <Media as="li">
            <img
              width={64}
              height={64}
              className="mr-3"
              src="holder.js/64x64"
              alt="Placeholder"
            />
            <Media.Body>
              <h5>List-based media object</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </ul>

        <br/>
       

    </>
  );
});
