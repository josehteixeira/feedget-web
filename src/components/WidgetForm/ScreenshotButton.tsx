import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTaken: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTaken }: ScreenshotButtonProps) {
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

    async function handleTakeScreenshot() {
        setIsTakingScreenshot(true);

        const canvas = await html2canvas(document.querySelector('html')!);
        const base64image = canvas.toDataURL('image/png');

        onScreenshotTaken(base64image);

        setIsTakingScreenshot(false);
    }

    if (screenshot) {
        return (
            <button
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
                onClick={() => onScreenshotTaken(null)}
                type="button"
                style={{
                    backgroundImage: `url(${screenshot})`,
                    backgroundPosition: 'right bottom',
                    backgroundSize: 180,
                }}
            >
                <Trash weight="fill" />
            </button>
        )
    } else {
        return (
            <button
                className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
                type="button"
                onClick={handleTakeScreenshot}>

                {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
            </button>
        )
    }
}