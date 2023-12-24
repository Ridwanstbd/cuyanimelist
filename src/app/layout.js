import { Gabarito } from 'next/font/google'
import '@/app/globals.css'
import NavBar from '@/components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime List',
  description: 'Indonesia Anime Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
