import { NavLink } from 'react-router-dom';

import './App.css';
import { ROUTES } from './router';

export function Home() {
  return (
    <div className="Home">
      <NavLink to={ROUTES.PEOPLE}>People</NavLink>
    </div>
  );
}
