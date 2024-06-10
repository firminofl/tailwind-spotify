import {Footer} from "@/components/Footer";
import {Sidebar} from "@/components/Sidebar";
import {MainContent} from "@/components/MainContent/MainContent";

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1">
                <Sidebar/>

                <MainContent/>
            </div>
            <Footer/>
        </div>
    );
}
