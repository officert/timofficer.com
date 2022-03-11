import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix'
import type { MetaFunction } from 'remix'
import { createGlobalStyle } from 'styled-components'

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' }
}

const GlobalStyle = createGlobalStyle`
  :root {
    /* Grays + Blacks */
    --gray-lightest: #fafbfc;
    --gray-light: #e2e6ed;
    --gray: #787c84;
    --white: #ffffff;
    --black: #181818;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
  }
`

export default function App() {
  return (
    <html lang="en">
      <GlobalStyle></GlobalStyle>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
