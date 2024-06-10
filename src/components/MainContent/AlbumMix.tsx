import Image from "next/image";
import {Play} from "lucide-react";

// @ts-ignore
export function AlbumMix({imagePath, name}) {
    return (
        <a className="bg-white/10 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/20 transition-colors">
            <Image src={imagePath} alt="Capa do álbum" width={104} height={104}/>
            <strong className="text-2xl">{name}</strong>
            <button
                className="w-12 h-10 flex items-center justify-center rounded-full bg-green-400 text-black mr-8 invisible group-hover:visible">
                <Play/>
            </button>
        </a>
    )
}