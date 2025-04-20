import NavBar from '@/components/NavBar'
import "../globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
        <body suppressHydrationWarning>
          <NavBar/>
          {children}
          <Contact/>
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  );
}
