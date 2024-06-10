import Button from "./Button"

const NavBar = () => {
    return (
      <nav className="nav-bar">
        <Button btn="cta" text="Logo" url="#" />
        <div className="nav-list">
          <a className="not-underline-link" href="#keunggulan">Keunggulan</a>
          <a className="not-underline-link" href="#layanan">Layanan</a>
          <a className="not-underline-link" href="#syarat">Syarat & Ketentuan</a>
          <a className="not-underline-link" href="#kontak">Hubungi Kami</a>
        </div>
        <Button btn="cta" text="Ajukan Sekarang!" url="#" />
      </nav>
    )
}

export default NavBar