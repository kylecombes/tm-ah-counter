import { NavLink } from 'react-router-dom';
import './App.css';

export function Home() {
  return (
    <div className="Home">
      <NavLink to="/people">People</NavLink>
    </div>
  );
}
