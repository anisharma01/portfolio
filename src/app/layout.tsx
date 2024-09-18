import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Anish' Portfolio",
  description: "Anish Sharma's Portfolio",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
