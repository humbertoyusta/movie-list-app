import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "https://harbour-movies.vercel.app/api/graphql",
    documents: ["src/**/*.graphql"],
    generates: {
        "./src/generated/graphql.ts": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-graphql-request",
            ],
            config: {
                pureMagicComment: true,
                skipTypename: true,
            },
        },
    },
};
export default config;
