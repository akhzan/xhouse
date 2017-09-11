import React, { Component } from 'react';
import { MdSearch } from 'react-icons/lib/md';
import Showcase from '../../components/showcase/Showcase';
import App from '../app/App'

class Popular extends Component {
  render() {
    return (
        <App>
            <Showcase></Showcase>
        </App>
    );
  }
}

export default Popular;