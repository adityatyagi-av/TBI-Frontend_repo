import Image from "next/image"
import Link from "next/link"
import styles from './navbar.css'

const Navbar = () => {
  return (
    <header className="navbar shadow-xl">
      <div>
        <Link href="/" className="logos">
        <Image 
        className="logo"
        src="/kietlogo.svg"
        width={70}
        height={70}
        alt="kiet logo"/>
        <Image
        className="logo"
        src="/tbilogo.svg"
        width={70}
        height={70}
        alt="tbi logo"/>
        </Link>
        
      </div>

      <nav className="link-bar">
        <ul className="flex links">
          <li className="link"><Link href="/about">About</Link></li>

          
          <div class="paste-button">
          <button class="button">Events&nbsp;▼</button>
           <li className="dropdown-content">
          <Link id="top" href="#">Keep source formatting</Link>
          <Link id="middle" href="#">Merge formatting</Link>
          <Link id="bottom" href="#">Keep text only</Link>
          </li>
          </div>
          <div class="paste-button">
          <button class="button">Incubation&nbsp;▼</button>
           <li className="dropdown-content">
          <Link id="top" href="#">Keep source formatting</Link>
          <Link id="middle" href="#">Merge formatting</Link>
          <Link id="bottom" href="#">Keep text only</Link>
          </li>
          </div>
          <li className="click-button"><button>Incubation</button>
          </li>
          <li className="link"><Link href="/about">Mentors</Link></li>
          
          <div class="paste-button">
          <button class="button">Facilities&nbsp;▼</button>
           <li className="dropdown-content">
          <Link id="top" href="#">Keep source formatting</Link>
          <Link id="middle" href="#">Merge formatting</Link>
          <Link id="bottom" href="#">Keep text only</Link>
          </li>
          </div>
          <li className="link"><Link href="/about">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
