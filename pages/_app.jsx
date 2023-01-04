import React from 'react'
import localFont from '@next/font/local'
import '../styles/css/style.css'

const shabnam = localFont({
  src: [
    {
      path: '../public/font/shabnam.woff2',
      weight: 'normal',
    },
    {
      path: '../public/font/shabnam-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../public/font/shabnam-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/font/shabnam-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/font/shabnam-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
  ],
})
// const shabnam = localFont({ src: '../public/font/shabnam.woff2' })
const App = ({ Component, pageProps }) => (
  <main className={shabnam.className}>
    <Component {...pageProps} />
  </main>
)

export default App
