import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#F4442E"
              barColor="#51E5FF"
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
