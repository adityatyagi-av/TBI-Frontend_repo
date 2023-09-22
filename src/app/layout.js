import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TBI-KIET',
  description: 'Top Incubator in India',
}

export default function RootLayout({ children }) {
  return (
    <html className='bg-white font-poppins text-gray-900' lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
