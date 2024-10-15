import React, { useState } from 'react';
import './style/sidebar.css';
import './style/header.css'
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlinePlaySquare, AiFillYoutube, AiFillTrophy } from 'react-icons/ai';
import { FaFire, FaMusic, FaFilm, FaGamepad, FaCog,FaHistory,FaClock,FaThumbsUp,FaPlayCircle,FaQuestionCircle,FaCommentDots, FaBars, FaSearch, FaVideo, FaTh, FaBell } from 'react-icons/fa';
import { MdShortText,MdSubscriptions,MdVideoLibrary } from 'react-icons/md';
import { FiUser } from 'react-icons/fi'; // Icône d'utilisateur

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
       <div className="header">
      {/* Icône du menu */}
      <div className="header__left">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaBars /> : <FaBars />}
      </button>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>

      {/* Barre de recherche */}
      <div className="header__center">
        <input
          className="header__input"
          type="text"
          placeholder="Rechercher"
        />
        <FaSearch className="header__inputButton"  />
      </div>

      {/* Icônes à droite */}
      <div className="header__right">
        <FaVideo className="header__icon" />
        <FaTh className="header__icon" />
        <FaBell className="header__icon" />
        <FiUser className="header__avatar" />
      </div>
    </div>
    <div className={`sidebar ${isMenuOpen ? 'hide' : ''}`}>
      <Link to="/" className="sidebar__link" >
        <AiFillHome className="sidebar__icon" />
        <span>Accueil</span>
      </Link>
      <Link to="/shorts" className="sidebar__link">
        <MdShortText className="sidebar__icon" />
        <span>Shorts</span>
      </Link>
      <Link to="/subscriptions" className="sidebar__link">
        <MdSubscriptions className="sidebar__icon" />
        <span>Abonnement</span>
      </Link>
      <Link to="/music" className="sidebar__link" >
        <FaMusic className="sidebar__icon" />
        <span>Musique</span>
      </Link>
      <Link to="/settings" className="sidebar__link">
        <FaCog className="sidebar__icon" />
        <span>Paramètres</span>
      </Link>
    </div>


    <div className={`sidebar1 ${isMenuOpen ? '' : 'hide'}`}>
      <Link to="/" className="sidebar__link">
        <AiFillHome className="sidebar__icon" />
        <span>Accueil</span>
      </Link>
      <Link to="/shorts" className="sidebar__link">
        <MdShortText className="sidebar__icon" />
        <span>Shorts</span>
      </Link>
           <Link to="/abonnements" className="sidebar__link">
         <MdSubscriptions className="sidebar__icon" />
       <span>Abonnements</span>
      </Link>
      <hr />
      <h2> <Link to="/you" className="sidebar__link">Vous {'>'}</Link></h2>
      <Link to="/historique" className="sidebar__link">
        <FaHistory className="sidebar__icon" />
       <span>Historique</span>
       </Link>
       <Link to="/playlist" className="sidebar__link">
         <MdVideoLibrary className="sidebar__icon" />
         <span>Playlists</span>
       </Link>
       <Link to="/a-regarder" className="sidebar__link">
         <FaClock className="sidebar__icon" />
         <span>Regarder plus tard</span>
       </Link>
       <Link to="/love" className="sidebar__link">
        <FaThumbsUp className="sidebar__icon" />
        <span>Vidéos "J'aime"</span>
      </Link>
      <hr />
      <h2> <Link to="/explorer" className="sidebar__link">Explorer</Link></h2>
      <Link to="/trending" className="sidebar__link">
        <FaFire className="sidebar__icon" />
        <span>Tendances</span>
      </Link>
      <Link to="/music" className="sidebar__link">
        <FaMusic className="sidebar__icon" />
        <span>Musique</span>
      </Link>
      <Link to="/films" className="sidebar__link">
        <FaFilm className="sidebar__icon" />
        <span>Films</span>
      </Link>
      <Link to="/gaming" className="sidebar__link">
        <FaGamepad className="sidebar__icon" />
        <span>Jeux vidéo</span>
      </Link>
      <Link to="/sports" className="sidebar__link">
        <AiFillTrophy className="sidebar__icon" />
        <span>Sports</span>
      </Link>
      <hr />

      <h2> <Link to="/autre" className="sidebar__link">Autres contenus <span className='gras'> YouTube</span></Link></h2>
      <Link to="/youtubeContent" className="sidebar__link">
        <AiFillYoutube className="sidebar__icon red-icon" />
        <span>YouTube Premium</span>
      </Link>
      <Link to="/music" className="sidebar__link " title="YouTube Music">
        <AiOutlinePlaySquare className="sidebar__icon red-icon" />
        <span>YouTube Music</span>
      </Link>
      <Link to="/kids" className="sidebar__link " title="YouTube Kids">
        <FaPlayCircle className="sidebar__icon red-icon" />
        <span>YouTube Kids</span>
      </Link>

      <hr />

      <Link to="/settings" className="sidebar__link">
        <FaCog className="sidebar__icon" />
        <span>Paramètres</span>
      </Link>
      <Link to="/report-history" className="sidebar__link" title="Historique des signalements">
        <FaHistory className="sidebar__icon" />
        <span>Historique des sign...</span>
      </Link>
      <Link to="/help" className="sidebar__link" title="Aide">
        <FaQuestionCircle className="sidebar__icon" />
        <span>Aide</span>
      </Link>
      <Link to="/send-feedback" className="sidebar__link" title="Envoyer des commentaires">
        <FaCommentDots className="sidebar__icon" />
        <span>Envoyer des comm...</span>
      </Link>
    </div>
    </div>
  );
}

export default Sidebar;
