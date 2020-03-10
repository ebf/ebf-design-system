import _ from 'lodash';
import React from 'react';
import { Link } from "gatsby"
import classNames from 'classnames';
import { Nav, Collapse } from 'react-bootstrap';

function NavSection({ heading, location: { pathname }, items, path }) {
  let active = pathname.startsWith(path);
  return (
    <>
      <Link
        to={items ? `${path}/${items[0]}/` : `${path}/`}
        className={classNames('nav-link', active && ' active')}
      >
        {heading}
      </Link>

      {items && active && (
        <Nav activeKey={pathname} onSelect={() => {}} className="d-block ml-4">
          {items.map(name => (
            <Nav.Item key={`${path}/${name}/`}>
              <Link className="nav-link" activeClassName='active' to={`${path}/${name}/`}>
                {_.startCase(name.toLowerCase())}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      )}
    </>
  );
}

const layoutItems = [
  'grid',
];

const componentItems = [
  'alerts',
  'badges',
  'buttons',
  'forms',
  'modals',
];

export default class SideNav extends React.Component {
  state = { collapsed: true };

  handleCollapse = () => {
    this.setState(s => ({ collapsed: !s.collapsed }));
  };

  render() {
    const { location, className, ...props } = this.props;

    return (
      <div className={classNames(className, 'side-nav')} {...props}>
        <nav className="flex-column nav mt-4" role="complementary">
          <NavSection
            heading="Getting started"
            path="/"
            location={location}
          />
          <NavSection
            heading="Colors"
            path="/colors"
            location={location}
          />
          <NavSection
            heading="Layout"
            path="/layout"
            location={location}
            items={layoutItems}
          />
          <NavSection
            heading="Components"
            path="/components"
            location={location}
            items={componentItems}
          />
        </nav>

        <footer>
          <p>© {new Date().getFullYear()}, Built with {` `} <a href="https://www.gatsbyjs.org">Gatsby</a></p>
        </footer>
      </div>
    );

  }
}