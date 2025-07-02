import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-dark opacity-75" fixed="top">
      <Navbar.Brand href="#" className="text-white p-2">
        CalleLHambre
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className=""></Navbar.Collapse>
      <Navbar.Text className="text-white">
        <a href="#home" className="text-decoration-none text-white">
          PROMOS
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="#link" className="text-decoration-none text-white">
          ENTRADAS
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          SMASH BURGER
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          HAMBURGUESAS
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          PERROS CALIENTES
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          PEPITOS
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          PATACONES
        </a>
      </Navbar.Text>
      <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          CACHAPAS
        </a>
      </Navbar.Text>
            <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          PERUANAZOO
        </a>
      </Navbar.Text>
            <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          DOMINGOS (DESDE EL 06/07)
        </a>
      </Navbar.Text>
            <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          BEBIDAS
        </a>
      </Navbar.Text>
            <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          LHAMBREBOX - PASAPALOS
        </a>
      </Navbar.Text>
            <Navbar.Text className="ms-3 text-white">
        <a href="" className="text-decoration-none text-white">
          LHAMBRE - CONGELADOS
        </a>
      </Navbar.Text>
    </Navbar>
  );
}

export default NavBar;
