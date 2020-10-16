import _ from 'lodash';
import React from 'react';
import { Link, withPrefix } from "gatsby"
import classNames from 'classnames';
import { Button, Nav } from 'react-bootstrap';

const concat = (path, ...args) => _.filter(args, segment => !_.isEmpty(segment))
  .reduce((state, segment) => `${state}/${segment}`, path);

function NavSection({ heading, location: { pathname }, items, path }) {
  let active = pathname.startsWith(withPrefix(path));

  return (
    <>
      <Link
        to={items ? concat(path, _.first(items)) : path}
        className={classNames('nav-link', active && ' active')}
      >
        {heading}
      </Link>

      {items && active && (
        <Nav activeKey={pathname} onSelect={() => {}} className="d-block ml-4 nav-dots vertical-nav">
          {items.map(name => (
            <Nav.Item key={concat(path, name)}>
              <Link className="nav-link" activeClassName='active' to={concat(path, name)}>
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
  'media',
];

const componentItems = [
  'alerts',
  'badges',
  'breadcrumbs',
  'buttons',
  'cards',
  'footer',
  'forms',
  'modals',
  'navbar',
  'navs',
  'progress',
  'spinners',
  'tables',
];

export default class SideNav extends React.Component {
  state = { collapsed: true };

  handleCollapse = () => {
    this.setState(s => ({ collapsed: !s.collapsed }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this)); 
    this.onResize({
      target:window
    })
  }

  onResize(event) {
    const target = event.target;
    if (target.innerWidth > 992) {
      this.setState ({ collapsed:false });
    } else {
      this.setState ({collapsed:true});
    } 
  }
  
  render() {
    const { location, className, ...props } = this.props;

    const { collapsed } = this.state;

    return (
      
      <div className={classNames(className, 'side-nav', collapsed ? 'closed-sidebar' : 'open-sidebar')} {...props}>

        <Button type="primary" size="sm" className="sidebar-toggler" onClick={this.handleCollapse}>
          {collapsed ? <i className="ebf ebf-arr-right"></i> : <i className="ebf ebf-arr-left"></i>}
        </Button>

        <nav className="flex-column nav mt-4 aside" role="complementary">
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
            heading="Typography"
            path="/typography"
            location={location}           
          />

          <NavSection
            heading="Iconset"
            path="/iconset"
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
      </div>
    );

  }
}