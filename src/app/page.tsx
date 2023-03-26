import Header from "@/components/Header";
import List from "@/components/List";

export default async function Home() {
    return (
        <>
            <Header title={"MovieDetails List App"} />
            <List />
        </>
    );
}
