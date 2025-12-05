import svgPaths from "../../imports/svg-9y3ic4hbsj";
import icon from "../../assets/icon.png";

const Footer = () => {
    return (
        <footer className="bg-white w-full">
            <div className="px-4 sm:px-8 md:px-16 lg:px-25 py-6 md:py-8 lg:py-10">
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-8 w-full">
                    {/* Main Footer Content */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-6 md:items-center w-full">
                        <a href="/">
                            <img src={icon} alt="Logo" />
                        </a>

                        {/* Navigation Links */}
                        <nav className="hidden md:flex flex-wrap gap-4 lg:gap-11 flex-1 justify-center items-center font-medium text-sm lg:text-lg text-gray-900">
                            <a href="#home" className="hover:text-red-500 transition-colors">Home</a>
                            <a href="#features" className="hover:text-red-500 transition-colors">Features</a>
                            <a href="#how-it-works" className="hover:text-red-500 transition-colors">How Its Works</a>
                            <a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a>
                            <a href="#download" className="hover:text-red-500 transition-colors">Download Apps</a>
                        </nav>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 items-center">
                            <button
                                className="bg-red-500 hover:bg-red-600 flex items-center justify-center rounded-full w-10 h-10 transition-colors"
                                aria-label="Facebook"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                    <path d={svgPaths.p2bad0800} fill="white" />
                                </svg>
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 flex items-center justify-center rounded-full w-10 h-10 transition-colors"
                                aria-label="Twitter"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                                    <path d={svgPaths.p4c38f00} fill="white" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-4 md:pt-4 border-t border-gray-200">
                        <p className="text-sm md:text-base text-gray-900">
                            @2025 All Right Rewards
                        </p>
                        <a href="#terms" className="text-sm md:text-base text-gray-900 hover:text-red-500 transition-colors">
                            Terms and Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;