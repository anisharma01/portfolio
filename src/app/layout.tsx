import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from './context/ThemeContext';

export const metadata = {
  title: "Anish' Portfolio",
  description: "Anish Sharma's Portfolio Website",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
