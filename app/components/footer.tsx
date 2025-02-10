export default function Footer() {
    return (
      <div>
  <footer className="grid grid-auto-columns: 1fr auto;  *:footer p-2 bg-base-200 text-base-content glass" style={{bottom: "0", borderTopRightRadius: "25px", borderTopLeftRadius: "25px"}}>
      <nav className="">
        <a className="link link-hover" style={{fontWeight: "600"}}>Contactinformatie:</a>
      </nav>
      <nav>
      <a className="link link-hover" style={{fontWeight: "600"}}>Email:</a> 
      <a className="link link-hover" style={{fontWeight: "900"}}>tylervandijk@gmail.com</a>
      </nav>
      <nav>
      <a className="link link-hover" style={{fontWeight: "900"}}>Telefoonnummer</a>
      <p>Test</p>
      </nav>
    </footer>
      </div>
    )
  }
  