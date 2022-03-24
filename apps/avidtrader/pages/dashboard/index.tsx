import './index.module.scss';
import { Navbar } from '@avidtrader/shared-components';
/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <div>
      <Navbar />
      <h1>
        Dashboard
      </h1>
    </div>
  );
}

export default Dashboard;
