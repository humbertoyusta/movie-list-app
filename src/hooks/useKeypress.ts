import { useEffect } from "react";

function useKeypress(key: string, callback: () => void) {
    useEffect(() => {
        const handleKeypress = (event: KeyboardEvent) => {
            if (event.key === key) {
                callback();
                document.removeEventListener("keydown", handleKeypress);
            }
        };
        document.addEventListener("keydown", handleKeypress);
        return () => {
            document.removeEventListener("keydown", handleKeypress);
        };
    });
}

export default useKeypress;
