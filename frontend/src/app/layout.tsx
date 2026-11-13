import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Source_Sans_3 } from "next/font/google"

// Myriad Pro is a licensed Adobe font, so it is listed first in --font-sans and used
// wherever it is installed. Source Sans 3 (Adobe's open-source humanist sans, very
// close to Myriad) is self-hosted as the fallback so every visitor gets the same look.
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
})

export const metadata = {
  title: "Dagu",
  description: "Dagu SMS Gateway: send OTPs, notifications, and bulk SMS to your customers instantly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sourceSans.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
