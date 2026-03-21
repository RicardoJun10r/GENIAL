import { Outlet } from 'react-router';
import { NavBar } from './Navbar/navbar';

export default function Layout() {
  return (
    <div className="app-layout">
      <NavBar />
      <section className="app-page-content">
        <Outlet />
      </section>
    </div>
  );
}
