import '.././globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@/components/analytics';
import { Header } from '@/components/moonwith/header';
import { Motto } from '@/components/moonwith/motto';
import { Moon } from '@/components/moonwith/moon';
import { LoadingScreen } from '@/components/moonwith/loadingScreen';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Moonwith',
  description: "Malik's Digital Home",
  creator: 'Malik Piara',
  keywords: [
    'personal blog',
    'daily blog',
    'product management',
    'product enablement',
  ],
  publisher: 'Malik Piara',
  openGraph: {
    images: '/malik_mini.jpeg',
    authors: ['Malik'],
  },
  icons: {
    icon: '/next.svg',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-secondary dark:bg-primary text-primary dark:text-gray ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <LoadingScreen />
          <div className='max-w-2xl mx-auto py-10 px-4'>
            <Header />
            <main className='sm:mt-10'>{children}</main>
          </div>
          <Motto />
          <Moon />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
