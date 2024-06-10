import Image from "next/image";

// @ts-ignore
export function AlbumMadedTo({imagePath, name, description}) {
    return (
        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
            <Image src={imagePath} className="w-full" width={104} height={104}
                   alt="Capa do álbum"/>
            <strong className="font-semibold">{name}</strong>
            <span
                className="text-sm text-zinc-500">{description}</span>
        </a>
    )
}