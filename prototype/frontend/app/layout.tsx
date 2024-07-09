import { Bricolage_Grotesque } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight:'400'
});

export default function Layout({ children }:{children:any}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Magical Arena</title>
      </head>
      <body
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
