import Image from "next/image";
import {Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-800 border-t border-zinc-700 p-2 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/album.webp" className="w-full" width={24} height={24}
                       alt="Capa do álbum Master of Puppets"/>
                <div className="flex flex-col gap-1">
                    <strong className="font-normal">Master of Puppets</strong>
                    <span className="text-xs text-zinc-400">Metallica</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-4">
                    <Shuffle size={20} className="text-zinc-200"/>
                    <SkipBack size={20} className="text-zinc-200"/>
                    <button
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black">
                        <Play/>
                    </button>
                    <SkipForward size={20} className="text-zinc-200"/>
                    <Repeat size={20} className="text-zinc-200"/>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-400">0:35</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
                    </div>
                    <span className="text-xs text-zinc-400">2:12</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <Mic2 size={20}/>
                <LayoutList size={20}/>
                <Laptop2 size={20}/>
                <div className="flex items-center gap-2">
                    <Volume size={20}/>
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
                    </div>
                </div>
                <Maximize2 size={20}/>
            </div>
        </footer>
    )
}