import { Inter } from 'next/font/google'
import '@/app/globals.css'
import NavBar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime List',
  description: 'Indonesia Anime Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
      {children}
      </body>
    </html>
  )
}
