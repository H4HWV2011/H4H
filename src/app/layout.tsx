import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Harmony for Hope, Inc. - Preserving Appalachian Heritage',
  description: 'Where Appalachia\'s past and future meet—uncompromised and unowned. Uniting West Virginia with music, art, and Appalachian heritage through technology.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/h4h/Untitled (Logo).png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/h4h/Untitled (Logo).png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#CFB53B" />
      </head>
      <body>{children}</body>
    </html>
  )
}
