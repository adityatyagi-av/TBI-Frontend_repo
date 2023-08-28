import Image from "next/image"
import Link from "next/link"
import styles from './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar shadow-xl">
      <div>
        <Link href="/" className="logos">
        <Image 
        className="logo"
        src="/kietlogo.svg"
        width={59}
        height={59}
        alt="kiet logo"/>
        <Image
        className="logo"
        src="/tbilogo.svg"
        width={59}
        height={59}
        alt="tbi logo"/>
        </Link>
        
      </div>

      <div className="link-bar">
        <ul className="flex links">
          <li className="link"><Link href="/about">About</Link></li>

          <li className="click-button"><button>Events</button>
          </li>
          <li className="click-button"><button>Incubation</button>
          </li>
          <li className="link"><Link href="/about">Mentors</Link></li>
          <li className="click-button"><button>Facilities</button>
          
          </li>
          <li className="link"><Link href="/about">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
