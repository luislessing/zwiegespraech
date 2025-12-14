import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zwiegespräch Theater',
  description: 'Alles Weitere wird Kunst',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}