// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const navBgClassName = isDarkTheme ? 'navbar-bg-dark' : 'navbar-bg-light'

      const navWebsiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navThemeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemClassName = isDarkTheme ? 'nav-item-dark' : 'nav-item-light'

      return (
        <div className={`navbar-container ${navBgClassName}`}>
          <div className="navbar-content">
            <img
              className="website-logo"
              src={navWebsiteLogo}
              alt="website logo"
            />
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link to="/" className={`nav-link ${navItemClassName}`}>
                  Home
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/about" className={`nav-link ${navItemClassName}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              data-testid="theme"
              className="theme-button"
              type="button"
              onClick={onClickToggleTheme}
            >
              <img className="theme-image" src={navThemeImage} alt="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
