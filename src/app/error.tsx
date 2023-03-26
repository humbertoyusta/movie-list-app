"use client";

import ErrorAnimation from "@/components/Animations/ErrorAnimation";

export default function Error({ error }: { error: Error }) {
    console.error(error);
    return <ErrorAnimation />;
}
