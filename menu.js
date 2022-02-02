function MenuLink(props) {
  let classes = "block border border-black rounded px-4 py-2 ";
  if (location.pathname == props.href) {
    classes += "bg-red-600/50 hover:bg-red-600/60";
  } else {
    classes += "bg-black/50 hover:bg-black/60";
  }
  return (
    <li>
      <a className={classes} href={props.href}>
        {props.children}
      </a>
    </li>
  );
}

const Navigation = () => {
  return (
    <nav className="mt-4">
      <ul className="flex flex-row justify-center gap-4">
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/aboutus.html">About Us</MenuLink>
        <MenuLink href="/contact.html">Contact</MenuLink>
      </ul>
    </nav>
  );
};

ReactDOM.render(<Navigation />, document.querySelector("#menu"));
