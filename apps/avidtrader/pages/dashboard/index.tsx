import './index.module.scss';
import { Navbar } from '@avidtrader/shared-components';
/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div>
      <Navbar />
      <div className='container p-8'>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
