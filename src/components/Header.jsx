import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex gap-x-2 justify-between align-middle m-10 items-center">
        <h1><Link to="/">LOGO</Link></h1>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/blogs" >Blog</Link>
        <Link to="/contact" >Contact</Link>
      </div>
    </>
  );
};

export default Header;
