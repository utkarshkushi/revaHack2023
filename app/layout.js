import { Inter } from 'next/font/google'
import "@styles/globals.css";
import Provider from '@components/Provider';




export const metadata = {
  title: 'Lock and Release',
  description: 'A AI integrated custodial wallet to make Gas Efficient Transactions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        <Provider>
          {children}
        </Provider>
      
      </body>
    </html>
  )
}
