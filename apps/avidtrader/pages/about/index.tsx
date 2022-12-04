import React from 'react';
import type { NextPageWithLayout } from '../_app'
import './index.module.css';
import Layout from '../../../../libs/shared-components/src/lib/layout/layout';
import Sidebar from '../../../../libs/shared-components/src/lib/sidebar/sidebar';

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>
        About Page
      </h2>
    </section>
  )
}

export default About

About.getLayout = function getLayout(page: React.ReactElement) {

  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )

}