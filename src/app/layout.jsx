import './globals.css';
import { Inter } from 'next/font/google';
import Favicon from '/public/favicon.svg';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Google Clone',
	description: 'Google clone created with nextjs13`',
	icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}

				{/* Footer */}
				<Footer />
			</body>
		</html>
	);
}
