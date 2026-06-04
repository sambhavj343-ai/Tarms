function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>

      <div className="menu">☰</div>
    </nav>
  );
}

export default Navbar;