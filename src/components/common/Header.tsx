import { Button } from "../ui/button";
import icon from "../../assets/icon.png";
import { Download } from "lucide-react";

export function Header() {
    return (
        <header className="bg-white container mx-auto py-5 px-5 lg:px-0 flex items-center justify-between relative w-full">
            <a href="/">
                <img src={icon} alt="Logo" />
            </a>
            <Button className="bg-[#eb425e] p-6 text-base rounded-full">
                <Download size={40} className="mr-1" />
                Download App</Button>
        </header>
    );
}