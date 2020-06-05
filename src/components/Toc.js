/* eslint-disable no-unused-expressions */
import React from 'react';

export const TocContext = React.createContext();

/* eslint-disable react/no-unused-state */
export class TocProvider extends React.Component {
  constructor(...args) {
    super(...args);

    this.list = new Map();

    this.state = {
      tree: { children: [] },
      registerNode: this.handleRegisterNode,
    };
  }

  handleRegisterNode = (level, title, id) => {
    if (level === 1) return;

    this.list.set(id, { level, title, id });
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {});
  };

  render() {
    return (
      <TocContext.Provider value={this.state}>
        {this.props.children}
      </TocContext.Provider>
    );
  }
}
/* eslint-enable react/no-unused-state */

export default function Toc() {
  return (
    <TocContext.Consumer>{c => {c.tree}}</TocContext.Consumer>
  );
}