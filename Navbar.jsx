import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon

import { auth } from './firebase';
import { signOut } from 'firebase/auth';


<button onClick={() => signOut(auth)} className="logout-btn">
  Logout
</button>

function Navbar(props) {
    const users = Object.keys(projectRoutes);
    const [search, setSearch] = useState("");
    const [Arr, setArr] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (search === "") {
            setArr([]);
        } else {
            setArr(users.filter((ele) => ele.toLowerCase().includes(search.toLowerCase())));
        }
    }, [search]);

    const handleProjectClick = (project) => {
        setSearch("");
        setArr([]);
        const route = projectRoutes[project];
        if (route) {
            navigate(route);
        }
        props.onProjectSelect && props.onProjectSelect(project);
    };

    return (
        <div className="navbar">
            <h1 className="logo">{props.name}</h1>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
                <button className="logout-btn" onClick={() => signOut(auth)}>
    Logout
  </button>

            </div>
            


<div className='search-container'>
  <div className='search-box-wrapper'>
    <FaSearch className='search-icon' />
    <input
      type='text'
      className='search-box'
      placeholder='Search Projects'
      onChange={(event) => setSearch(event.target.value)}
      value={search}
    />
  </div>
  {Arr.length > 0 && (
    <ul className='dropdown'>
      {Arr.map((element, index) => (
        <li key={index} className="dropdown-item" onClick={() => handleProjectClick(element)}>
          {element}
        </li>
      ))}
    </ul>
  )}
</div>

        </div>
    );
}

const projectRoutes = {
    "Bank Management System": "/project/bank-management-system",
    "To-Do-List": "/project/todo-list",
    "Puzzle Game": "/project/puzzle-game",
    "Spotify Website": "/project/spotify",
    "Video Player": "/project/video-player",
    "Weather Website": "/project/weather",
    "Amazon Clone": "/project/amazon-clone",
    "Recipe basic Website": "/project/recipe",
    "SpeedOType": "/project/speedotype",
    "SignUp form": "/project/signup-form",
    "Doubt Submission form": "/project/doubt",
    "Piano using Python": "/project/piano"
};

export default Navbar;
