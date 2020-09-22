const example1Styled = `<!-- HTML -->
<nav>
   <ul>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
  </ul>
</nav>

<!-- CSS -->
nav {
  height: 60px;
  max-width: 1024px;
}

nav ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

nav ul li {
  display: inline;
}

nav ul li a {
  display: inline-block;
  padding: .5em 1em;
}`;

const example2Styled = `<!-- HTML -->
<nav class="nav">
   <ul>
    <li><a>Home</a></li>
    <li><a>About</a></li>
    <li><a>Blog</a></li>
  </ul>
</nav>

<!-- CSS -->
.nav {
  height: 60px;
  max-width: 1024px;
}

.nav ul {
  margin: 0;
  padding: 0;
  text-align: center;
}

.nav li {
  display: inline;
}

.nav a {
  display: inline-block;
  padding: .5em 1em;
}`;

const bemStyled = `<!-- HTML -->
<nav className="main-nav">
  <ul className="main-nav__list">
    <li className="main-nav__item">
      <a className="main-nav__link">Home</a>
    </li>
    <li className="main-nav__item">
      <a className="main-nav__link">About</a>
    </li>
    <li className="main-nav__item">
      <a className="main-nav__link">Blog</a>
    </li>
  </ul>
</nav>

<!-- CSS -->
.main-nav {
  height: 60px; 
}

.main-nav__list {
  margin: 0;
  padding: 0;
  text-align: center; 
}

.main-nav__item {
  display: inline; 
}

.main-nav__link {
  display: inline-block;
  padding: 0.5em 1em; 
}`;

const ExampleStyled = {
    Example1: example1Styled,
    Example2: example2Styled,
    BEM: bemStyled,
};

export default ExampleStyled;
