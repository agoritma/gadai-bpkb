import Button from "./Button"

const NavBar = () => {
    return (
      <nav className="nav-bar">
        <Button btn="cta" text="Logo" url="#" />
        <div className="nav-list">
          <a className="not-underline-link" onClick={() => {document.getElementById("keunggulan").scrollIntoView({block: "center"});}}>Keunggulan</a>
          <a className="not-underline-link" onClick={() => {document.getElementById("layanan").scrollIntoView({block: "center"});}}>Layanan</a>
          <a className="not-underline-link" onClick={() => {document.getElementById("syarat").scrollIntoView({block: "center"});}}>Syarat & Ketentuan</a>
          <a className="not-underline-link" onClick={() => {document.getElementById("kontak").scrollIntoView({block: "start"});}}>Hubungi Kami</a>
        </div>
        <Button btn="cta" text="Ajukan Sekarang!" funcClick={() => {document.getElementById("pinjaman").scrollIntoView({block: "center"});}} />
      </nav>
    )
}

export default NavBar