import React from 'react';
// import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
// import LoadingDots from './LoadingDots';

// const Header = ({ loading }) => (
//   <nav>
//     <IndexLink to="/" activeClassName="active">Home</IndexLink>
//     {" | "}
//     <Link to="/courses" activeClassName="active">Courses</Link>
//     {" | "}
//     <Link to="/about" activeClassName="active">About</Link>
//     {loading && <LoadingDots interval={100} dots={20} />}
//   </nav>
// );

// Header.propTypes = { loading: PropTypes.bool.isRequired };

const Header = () => (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/courses" activeClassName="active">Courses</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
  </nav>
);

export default Header;
