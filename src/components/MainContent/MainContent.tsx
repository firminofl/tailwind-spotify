import {ChevronLeft, ChevronRight} from "lucide-react";
import {AlbumMix} from "@/components/MainContent/AlbumMix";
import {AlbumMadedTo} from "@/components/MainContent/AlbumMadedTo";

interface IAlbuns {
    imagePath: string;
    name: string;
    description?: string;
}

export function MainContent() {
    const albuns: IAlbuns[] = [
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets'
        },
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets 2'
        },
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets 3'
        },
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets'
        },
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets 2'
        },
        {
            imagePath: '/album.webp',
            name: 'Master of Puppets 3'
        },
    ]

    const albunsMadedTo: IAlbuns[] = [
        {
            imagePath: '/album.webp',
            name: 'Daily Mix 1',
            description: 'Leandro & Leonardo, Tião Carreiro & Pardinho...'
        },
        {
            imagePath: '/album.webp',
            name: 'Daily Mix 2',
            description: 'Leandro & Leonardo, Tião Carreiro & Pardinho...'
        },
        {
            imagePath: '/album.webp',
            name: 'Daily Mix 3',
            description: 'Leandro & Leonardo, Tião Carreiro & Pardinho...'
        },
        {
            imagePath: '/album.webp',
            name: 'Daily Mix 4',
            description: 'Leandro & Leonardo, Tião Carreiro & Pardinho...'
        },
        {
            imagePath: '/album.webp',
            name: 'Daily Mix 5',
            description: 'Leandro & Leonardo, Tião Carreiro & Pardinho...'
        },
    ]

    return (
        <main className="flex-1 p-6">
            <div className="flex items-center gap-3">
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronLeft/>
                </button>
                <button className="rounded-full bg-black/40 p-1">
                    <ChevronRight/>
                </button>
            </div>

            <h1 className="font-semibold text-2xl mt-10">Good Night</h1>

            <div className="grid grid-cols-3 gap-6 mt-4">
                {
                    albuns && albuns.map((item: IAlbuns, index: number) => {
                        return <AlbumMix key={index} imagePath={item.imagePath} name={item.name}/>
                    })
                }
            </div>

            <h1 className="font-semibold text-2xl mt-10">Feito para Filipe Firmino</h1>

            <div className="grid grid-cols-5 gap-4 mt-4">
                {
                    albunsMadedTo.length > 0 ? (albunsMadedTo && albunsMadedTo.map((item: IAlbuns, index: number) => {
                            return <AlbumMadedTo key={index} imagePath={item.imagePath} name={item.name}
                                                 description={item.description}/>
                        }))

                        :
                        <h2>NADA ENCONTRADO!</h2>
                }
            </div>
        </main>
    )
}