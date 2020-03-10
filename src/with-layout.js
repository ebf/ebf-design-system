import React from 'react';

import SEO from "./components/SEO"
import Layout from "./components/Layout"

export default function withLayout(Component, { title = 'EBF Design System' } = {}) {
  return props => (
    <Layout {...props}>
      <SEO title={title} />
      <Component {...props} />
    </Layout>
  );
}