import { GraphQLClient } from "graphql-request";

export const GRAPHQL_ENDPOINT = "https://harbour-movies.vercel.app/api/graphql";

const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
    headers: {
        "Content-Type": "application/json",
    },
});

export default client;
