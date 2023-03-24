export const metadata = {
    title: "Movie List",
    description: "Movie List",
};

export default function ListsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
