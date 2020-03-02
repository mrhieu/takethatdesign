import React from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <h1>Ouch...</h1>
    <p>404 Not Found. Familiar?</p>
    <Link className="btn btn-dark btn-small" to="/">
      <Icon className="icon-sm text-white" path={mdiChevronLeft} color="white" /> Back to the catalogue
    </Link>
  </Layout>
)
