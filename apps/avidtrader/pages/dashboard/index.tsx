// import Sidebar from 'apps/avidtrader/components/Sidebar';
import './index.module.scss';
import type { NextPageWithLayout } from '../_app'
import { Layout } from '@avidtrader/shared-components'
import Sidebar from '../../../../libs/shared-components/src/lib/sidebar/sidebar';
import React from 'react';
/* eslint-disable-next-line */
export interface DashboardProps { }

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className='flex flex-row'>
      <div className='flex-auto w-14'>
        {/* <Sidebar /> */}
      </div>
      <div className='flex-auto w-72'>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
