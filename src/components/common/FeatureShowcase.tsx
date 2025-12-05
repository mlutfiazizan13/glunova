import svgPaths from "../../imports/svg-9y3ic4hbsj";
import imgForLanding11 from "../../assets/fc69d39a865ece095476d5aca1407bb63755742f.png";
import imgGenerateImage from "../../assets/image-removebg-preview.png";
import imgImage23 from "../../assets/9937b53a43f54fc9a3bd50dca28368b6a21c5066.png";
import imgImage24 from "../../assets/afcadc3f6d153c7e0bc7f68ac5b96ea6c168ab6e.png";
import imgImage26 from "../../assets/3943c5bb38abddfadfb12597dad516028ec0c561.png";
import imgImage25 from "../../assets/8ff904e244a2c30f9dc7163e55ae2c5d32edca5b.png";

interface FeatureShowcaseProps {
    title: string;
    titleHighlight: string;
    description: string;
    imageType: "progress" | "sync";
    layout: "left" | "right";
}

const FeatureShowcase = ({
    title,
    titleHighlight,
    description,
    imageType,
    layout
}: FeatureShowcaseProps) => {
    const isLeftLayout = layout === "left";

    return (
        <section className="bg-white py-12 md:py-20 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isLeftLayout ? "lg:grid-flow-col-dense" : ""}`}>

                    {/* Text Content */}
                    <div className={`space-y-4 md:space-y-6 ${isLeftLayout ? "lg:order-1" : "lg:order-2"}`}>
                        <h2 className="font-semibold text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                            <span className="font-normal">{title} </span>
                            {titleHighlight}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Image Container */}
                    <div className={`relative w-full max-w-md lg:max-w-lg mx-auto aspect-square ${isLeftLayout ? "lg:order-2" : "lg:order-1"}`}>
                        {imageType === 'progress' && (
                            <>
                                {/* Main phone mockup */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                    <img
                                        alt="Track your progress mockup"
                                        className="w-full h-auto"
                                        src={imgForLanding11}
                                    />
                                </div>

                                {/* Floating card icons */}
                                <div className="absolute top-[15%] right-[20%] w-[15%] animate-float">
                                    <div className="rotate-[345deg]">
                                        <img alt="" className="w-full" src={imgImage24} />
                                    </div>
                                </div>

                                <div className="absolute bottom-[15%] left-[5%] w-[20%] animate-float-delayed">
                                    <div className="rotate-[330deg]">
                                        <img alt="" className="w-full" src={imgImage26} />
                                    </div>
                                </div>

                                <div className="absolute bottom-[35%] right-0 w-[13%] animate-float">
                                    <div className="rotate-[330deg]">
                                        <img alt="" className="w-full" src={imgImage25} />
                                    </div>
                                </div>

                                <div className="absolute top-[25%] left-0 w-[12%] animate-float-delayed">
                                    <div className="rotate-[30deg]">
                                        <img alt="" className="w-full" src={imgImage23} />
                                    </div>
                                </div>
                            </>
                        )}

                        {imageType === 'sync' && (
                            <>
                                {/* Concentric circles */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg className="w-[48%] h-auto" viewBox="0 0 291 291">
                                        <circle cx="145.5" cy="145.5" r="144.5" stroke="#CFD2D6" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>

                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg className="w-[71%] h-auto" viewBox="0 0 433 433">
                                        <circle cx="216.5" cy="216.5" r="215.5" stroke="#EDEFF2" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>

                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <svg className="w-full h-auto" viewBox="0 0 607 607">
                                        <circle cx="303.5" cy="303.5" r="302.5" stroke="#F7F8FA" strokeWidth="2" fill="none" />
                                    </svg>
                                </div>

                                {/* Center device image */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%]">
                                    <img alt="Glucose meter" className="w-full h-auto" src={imgGenerateImage} />
                                </div>

                                {/* Decorative colored dots */}
                                <div className="absolute top-[29%] left-[77%] w-[5.5%]">
                                    <svg className="w-full h-auto" viewBox="0 0 34 34">
                                        <path d={svgPaths.p25c45d80} fill="#633BD1" />
                                    </svg>
                                </div>

                                <div className="absolute bottom-[14%] right-[6%] w-[11.5%]">
                                    <svg className="w-full h-auto" viewBox="0 0 69 69">
                                        <path d={svgPaths.p2fcbaf00} fill="#EB425E" />
                                    </svg>
                                </div>

                                <div className="absolute bottom-[8%] left-[16%] w-[7%]">
                                    <svg className="w-full h-auto" viewBox="0 0 41 41">
                                        <path d={svgPaths.pf8f3e80} fill="#F7A500" />
                                    </svg>
                                </div>

                                <div className="absolute top-[63%] left-[16%] w-[2.5%]">
                                    <svg className="w-full h-auto" viewBox="0 0 15 15">
                                        <path d={svgPaths.p36fcf00} fill="#633BD1" />
                                    </svg>
                                </div>

                                <div className="absolute top-[13%] right-[8%] w-[9%]">
                                    <svg className="w-full h-auto" viewBox="0 0 53 53">
                                        <path d={svgPaths.p1608d40} fill="#EB425E" />
                                    </svg>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--rotation)); }
          50% { transform: translateY(-10px) rotate(var(--rotation)); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
        </section>
    );
};

export default FeatureShowcase;