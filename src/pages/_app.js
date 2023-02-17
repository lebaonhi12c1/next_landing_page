
import '@/styles/globals.scss'
export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return <Component.getLayout><Component {...pageProps} /></Component.getLayout>
  }
  return <Component {...pageProps} />
}
