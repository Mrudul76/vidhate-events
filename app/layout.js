import './globals.css'
import { Toaster } from 'sonner'

export const metadata = {
  title: 'Vidhate Events',
  description: 'Vidhate Events crafts unforgettable celebrations — Weddings, Naming Ceremonies, Baby Showers, Birthdays, Retirement Parties, Car Decoration & Cold Pyro effects. Elegant event planning tailored for you.',
  keywords: 'Vidhate Events, event planner, wedding decoration, car decoration, cold pyro, baby shower, naming ceremony, birthday decoration, retirement party',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
        <Toaster position="top-center" theme="dark" richColors />
      </body>
    </html>
  )
}
