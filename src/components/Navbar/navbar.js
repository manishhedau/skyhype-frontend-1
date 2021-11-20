import './navbar.css';
import Tooltip from '@material-ui/core/Tooltip';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return (

        <div className="navbar">

            <Tooltip title={<h6 className="nav-tooltip">Dashboard</h6>} placement="left-start">

                <NavLink to="/dashboard/user/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-desktop"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip" >Add Social Media Links</h6>} placement="left-start">

                <NavLink to="/dashboard/user/update-social-links/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-link"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip" >Add Activity Links</h6>} placement="left-start">

                <NavLink to="/dashboard/user/update-activity-links/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-photo-video"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip" >Analytics</h6>} placement="left-start">

                <NavLink to="/dashboard/user/analytics/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-chart-pie"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip" >Appearance</h6>} placement="left-start">

                <NavLink to="/dashboard/user/styles/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-sliders-h"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip" >Settings</h6>} placement="left-start">

                <NavLink to="/dashboard/user/settings/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-cog"></i>
                </NavLink>

            </Tooltip>

            <Tooltip title={<h6 className="nav-tooltip">Support</h6>} placement="left-start">

                <NavLink to="/dashboard/user/support/:userId" activeClassName="active-nav-link">
                    <i className="nav-link fas fa-question"></i>
                </NavLink>

            </Tooltip>
        </div>
    );
}

export default Navbar;