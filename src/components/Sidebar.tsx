import {Home as HomeIcon, Library, Search} from "lucide-react";

export function Sidebar() {
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <nav className="space-y-5">
                <a href=""
                   className="flex flex-row items-center text-sm font-semibold text-zinc-200 gap-4 hover:text-zinc-100"><HomeIcon/>Home</a>
                <a href=""
                   className="flex flex-row items-center text-sm font-semibold text-zinc-200 gap-4 hover:text-zinc-100"><Search/>Search</a>
                <a href=""
                   className="flex flex-row items-center text-sm font-semibold text-zinc-200 gap-4 hover:text-zinc-100"><Library/>Your
                    Library</a>
            </nav>

            <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">Liked Songs</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">MPB Mix</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">Esquenta Sertanejo</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">Deep House - dance music</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">To The Moon & Back</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">Daily Mix 3</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-200">90s Mix</a>
            </nav>
        </aside>
    )
}