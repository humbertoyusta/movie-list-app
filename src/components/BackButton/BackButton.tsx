"use client";

import { useRouter } from "next/navigation";
import IconButton from "@/components/IconButton";

export default function BackButton() {
    const router = useRouter();

    return <IconButton kind={"back"} onClick={() => router.back()} />;
}
