import Image from 'next/image';

export default function ProfilePic() {
	return (
		<section className="mx-auto w-full">
			<Image
				className="mx-auto mt-10 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
				src="/images/profile.jpg"
				width={200}
				height={200}
				alt="JP"
				priority={true}
				style={{ objectFit: 'cover' }}
			/>
		</section>
	);
}
