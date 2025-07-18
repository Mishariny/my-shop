import '../styles/globals.css'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { appWithTranslation } from 'next-i18next'
import { supabase } from '../lib/supabaseClient'

function MyApp({ Component, pageProps }) {
  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default appWithTranslation(MyApp)
