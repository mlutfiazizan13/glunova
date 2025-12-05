// import { AppStoreButtons } from "./AppStoreButtons";
import imgPhoneHandTransparant1 from "../../assets/c3dd20cf952d87b82658ef9a52913a3a672903b0.png";
import AppStoreButtons from "./AppStoreButtons";

export function CTASection() {
  return (
    <section className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-[100px] py-12 md:py-16 lg:py-[80px] relative w-full">
          <div className="w-full bg-[#f7f8fa] relative rounded-[24px] md:rounded-[40px] shrink-0">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="box-border content-stretch flex flex-col gap-12 md:gap-16 lg:gap-[80px] items-start p-6 md:p-12 lg:p-[60px] relative w-full">
                {/* CTA Content */}
                <div className="content-stretch flex flex-col gap-6 md:gap-8 lg:gap-[40px] items-start not-italic relative shrink-0 max-w-full lg:max-w-[548px]">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] md:leading-[1.52] relative shrink-0 text-[#101829] text-[28px] md:text-[42px] lg:text-[52px] w-full">
                    <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold not-italic">Track smarter,</span>{' '}
                    <span className="font-['Inter:Regular',sans-serif] font-normal not-italic">live healthier.</span>
                  </p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#686e7a] text-lg md:text-xl lg:text-[24px] w-full">
                    Download Glunova today and start making your health journey easier.
                  </p>
                </div>

                {/* App Store Buttons */}
                <AppStoreButtons />
                

                {/* Phone Hand Image - hidden on mobile */}
                <div className="hidden lg:block absolute h-[591px] right-[-67px] top-0 w-[648px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="Hand holding phone with Glunova app" className="absolute h-[130.31%] left-[-20.6%] max-w-none top-[-15.16%] w-[120.6%]" src={imgPhoneHandTransparant1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}