import React from "react";
function Sidebar({ list, changeCountry, selected }) {
  return (
    <section className="sidenav">
      {list.map(x => (
        <a
          href="/#"
          key={x}
          onClick={changeCountry(x)}
          className={x === selected ? "active" : ""}
        >
          {x}
        </a>
      ))}
    </section>
  );
}

export default Sidebar;
