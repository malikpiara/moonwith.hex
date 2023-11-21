import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { ModeToggle } from '@/components/mode-toggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moonwith Hex',
  description: "Malik's Digital Home",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-secondary dark:bg-primary text-primary dark:text-secondary ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <header>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <nav className='ml-auto font-medium space-x-2'>
                  <Link
                    className='opacity-70 p-2 transition-all duration-300 rounded-md hover:opacity-100 hover:bg-eggshell'
                    href='/'
                  >
                    Home
                  </Link>
                  <Link
                    className='opacity-70 p-2 transition-all duration-300 rounded-md hover:opacity-100 hover:bg-eggshell'
                    href='/about'
                  >
                    About
                  </Link>
                </nav>
              </div>
            </header>
            <main className='sm:mt-10'>{children}</main>
          </div>
          <p className='uppercase text-xs [writing-mode:vertical-lr] rotate-180 fixed bottom-20 tracking-wider mx-3 hover:text-tertiary max-sm:hidden transition-all duration-300 cursor-default'>
            Only you know who you can be
          </p>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
