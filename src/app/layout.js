import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Brett scher',
  description: 'Brett scher',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
