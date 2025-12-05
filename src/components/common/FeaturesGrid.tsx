import pick1 from '../../assets/Left Pick.png';
import pick2 from '../../assets/Left Pick (1).png';
import pick3 from '../../assets/Left Pick (2).png';

const FeaturesGrid = () => {
    return (
        <section className="bg-white relative shrink-0 w-full py-20  container mx-auto">
            {/* Section Header */}
            <div className="flex flex-col gap-4 items-center justify-center not-italic relative text-center w-full  mx-auto mb-20">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.3] md:leading-[1.52] relative shrink-0 text-[#101829] text-[32px] md:text-[42px] lg:text-[52px] w-full">
                    <span className="font-['Inter:Regular',sans-serif] font-normal not-italic">{`Why Choose `}</span>
                    Glunova?
                </p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#686e7a] text-base md:text-lg lg:text-[25px] w-full max-w-[1030px]">
                    We combine simplicity, clarity, and motivation in one app to help you stay on track with your wellness journey.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3">

                <div className="bg-[#FDECEF] flex flex-col p-12 m-4 rounded-lg">
                    <img className='w-[60px] h-[60px] mb-6' src={pick1} alt="" />
                    <h3 className="text-[#EB425E] text-2xl font-semibold mb-2">Complete Tracking</h3>
                    <p className="">Log your Glucose, Carbs, Meds, and Activity in one place — quick, simple, and organized.</p>
                </div>


                <div className="bg-[#EFEBFA] flex flex-col p-12 m-4 rounded-lg">
                    <img className='w-[60px] h-[60px] mb-6' src={pick2} alt="" />

                    <h3 className="text-[#633BD1] text-2xl font-semibold mb-2">Smart Reminders</h3>
                    <p className="">Log your Glucose, Carbs, Meds, and Activity in one place — quick, simple, and organized.</p>
                </div>

                <div className="bg-[#FEF6E6] flex flex-col p-12 m-4 rounded-lg">
                    <img className='w-[60px] h-[60px] mb-6' src={pick3} alt="" />

                    <h3 className="text-[#F7A500] text-2xl font-semibold mb-2">Clear Insights</h3>
                    <p className="">Understand your health better with easy-to-read charts that show trends and progress over time.</p>
                </div>

            </div>
        </section>
    );
}

export default FeaturesGrid;