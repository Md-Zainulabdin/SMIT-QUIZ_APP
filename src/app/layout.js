import AuthProvider from './components/AuthProvider/page';
import { ContextProvider } from '../QuizContext/page'
import './globals.css'

export const metadata = {
  title: 'SMIT - Quiz Application',
  description: 'Created by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children, session }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </head>
        <ContextProvider>
          <body>
            {children}
          </body>
        </ContextProvider>
      </html>
    </AuthProvider>
  )
}

