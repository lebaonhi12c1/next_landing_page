
import '@/styles/globals.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
      }
    )
  }, [])
  
  if(Component.getLayout){
    return <Component.getLayout><Component {...pageProps} /></Component.getLayout>
  }
  return <Component {...pageProps} />
}
