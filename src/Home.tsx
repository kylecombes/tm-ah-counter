import { NavLink } from 'react-router-dom';

import './App.css';
import { ROUTES } from './router';

export function Home() {
  return (
    <div className="Home">
      <ul>
        <li>
          <NavLink to={ROUTES.PEOPLE}>People</NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.WORDS}>Filler Words</NavLink>
        </li>
      </ul>
    </div>
  );
}
