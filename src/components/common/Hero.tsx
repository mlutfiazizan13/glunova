import svgPaths from "../../imports/svg-9y3ic4hbsj";
import imgHero11 from "../../assets/hero-1.png";

import imgImage23 from "../../assets/9937b53a43f54fc9a3bd50dca28368b6a21c5066.png";
import imgImage24 from "../../assets/afcadc3f6d153c7e0bc7f68ac5b96ea6c168ab6e.png";
import imgImage26 from "../../assets/3943c5bb38abddfadfb12597dad516028ec0c561.png";
import imgImage25 from "../../assets/8ff904e244a2c30f9dc7163e55ae2c5d32edca5b.png";

const Hero = () => {
    return (
        <section className="container mx-auto w-full bg-white py-20 flex flex-col items-center min-h-[600px]">
            {/* Badge */}
            <div className="flex gap-2 md:gap-3 items-center justify-center px-3 md:px-4 py-2 md:py-3 relative rounded-[99px]">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 border border-[#edeff2] rounded-[99px] pointer-events-none"
                />
                <div className="relative size-6 md:size-8">
                    <svg className="block size-full" fill="none" viewBox="0 0 32 32">
                        <path d={svgPaths.p1a748980} fill="var(--fill-0, #3B855B)" />
                    </svg>
                </div>
                <p className="font-inter font-normal leading-[1.6] text-[#101829] text-base md:text-[20px] text-center whitespace-nowrap">
                    Efficient and Easy
                </p>
            </div>

            {/* Headline */}
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] md:leading-[1.52] w-full not-italic relative shrink-0 text-[#101829] text-[32px] md:text-[48px] lg:text-[80px] text-center">
                <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[#633bd1]">Simple and friendly</span>
                <span className="font-['Inter:Medium',sans-serif] font-medium"> </span>blood sugar tracking for better health.
            </p>



            {/* Phone Mockup */}

            <div className="relative flex items-center justify-center h-[400px] md:h-[600px] lg:h-[821px] w-[250px] md:w-[300px] lg:w-[398px]">
                <img alt="Glunova app interface" className="inset-0 object-cover pointer-events-none size-full" src={imgHero11} />
            </div>

            {/* 
            <div className="relative md:absolute content-stretch flex gap-[10px] h-[400px] md:h-[600px] lg:h-[821px] items-center justify-center left-1/2 md:left-[calc(33.33%+41px)] top-[300px] md:top-[400px] lg:top-[518px] w-[250px] md:w-[300px] lg:w-[398px] -translate-x-1/2 md:translate-x-0">
                <div className="absolute aspect-[2180/3516] bottom-[-10.82%] left-[calc(50%-0.5px)] top-[-10.82%] translate-x-[-50%]">
                    <img alt="Glunova app interface" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHero11} />
                </div>
            </div> */}


            {/* Decorative floating elements - hidden on mobile, scaled on tablet */}
            <div className="hidden md:block absolute inset-[43.47%_77.27%_53.68%_19.93%]">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(247, 248, 250, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 42">
                        <path d={svgPaths.p3902200} fill="var(--fill-0, #F7F8FA)" />
                    </svg>
                </div>
            </div>
            <div className="hidden md:block absolute inset-[41.08%_80.69%_57.51%_17.92%]">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(247, 248, 250, 1)" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
                        <path d={svgPaths.p312f7200} fill="var(--fill-0, #F7F8FA)" />
                    </svg>
                </div>
            </div>


            {/* Floating images - hidden on mobile */}
            <div className="hidden lg:flex absolute h-[123.273px] items-center justify-center left-[calc(66.67%-17px)] top-[549px] w-[123.19px]" style={{ "--transform-inner-width": "90.09375", "--transform-inner-height": "90.3125" } as React.CSSProperties}>
                <div className="flex-none rotate-[30deg]">
                    <div className="h-[90.324px] relative w-[90.099px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage23} />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex absolute items-center justify-center left-[calc(8.33%+151px)] size-[146.969px] top-[751px]" style={{ "--transform-inner-width": "120", "--transform-inner-height": "120" } as React.CSSProperties}>
                <div className="flex-none rotate-[345deg]">
                    <div className="relative size-[120px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage24} />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex absolute h-[158.842px] items-center justify-center left-[calc(66.67%+20px)] top-[834px] w-[158.613px]" style={{ "--transform-inner-width": "129.4375", "--transform-inner-height": "129.75" } as React.CSSProperties}>
                <div className="flex-none rotate-[345deg]">
                    <div className="h-[129.762px] relative w-[129.439px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage26} />
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex absolute h-[131.208px] items-center justify-center left-[calc(16.67%+98px)] top-[1088px] w-[131.12px]" style={{ "--transform-inner-width": "95.890625", "--transform-inner-height": "96.125" } as React.CSSProperties}>
                <div className="flex-none rotate-[30deg]">
                    <div className="h-[96.139px] relative w-[95.899px]">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage25} />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;