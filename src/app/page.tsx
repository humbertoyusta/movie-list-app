import Header from "@/components/Header";
import List from "@/components/List";
import { sdk } from "@/graphql/client";
import { MY_EMAIL_KEY } from "@/constants";

export default async function Home() {
    const { getMovieLists: movieLists } = await sdk.getMovieLists({
        email: MY_EMAIL_KEY,
    });

    return (
        <>
            <Header title={"Movie List App"} />
            <List initialMovieLists={movieLists} />
        </>
    );
}
