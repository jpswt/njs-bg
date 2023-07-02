import { Inter } from 'next/font/google';
import Posts from './components/Posts';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="mx-auto px-6">
			<p className=" mb-12 mt-12 text-center text-3xl dark:text-white">
				Hello and Welcome 👋 &nbsp;
				<span className=" whitespace-nowrap">
					I&apos;m <span className=" font-bold">Joel</span>
				</span>
			</p>
			<Posts />
		</main>
	);
}
