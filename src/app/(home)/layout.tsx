export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="w-full pt-16">{children}</div>;
}
