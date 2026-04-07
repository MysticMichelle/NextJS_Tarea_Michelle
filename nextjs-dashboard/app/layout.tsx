import { montserrat } from './ui/fonts';
import { lusitana } from './ui/fonts';
import './ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <h1>Este titulo</h1>
        <div style={{ border: '1px solid #000' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
