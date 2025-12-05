import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { TestimonialCard } from "./TestimonialCard";
import imgEllipse34 from "../../assets/1399a9b91e3222d34fd0a1698446421eff9a3d5d.png";
import imgEllipse35 from "../../assets/586d85a4a34613d09d70de05f5847a0c0d151e89.png";


const Testimonials = () => {
    const [api, setApi] = useState(null);

    // Custom autoplay with useEffect
    useEffect(() => {
        if (!api) return;

        const intervalId = setInterval(() => {
            api.scrollNext();
        }, 2000);

        return () => clearInterval(intervalId);
    }, [api]);

    const testimonials = [
        {
            name: "Aditya R.",
            avatar: imgEllipse34,
            text: "Glunova makes it so easy to log my glucose and meals. I love how clean and modern the app feels—it actually keeps me motivated."
        },
        {
            name: "Siti N.",
            avatar: imgEllipse35,
            text: "The reminders really help me remember my medicine. The big fonts and simple design make it comfortable for me to use every day."
        },
        {
            name: "Michael T.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
            text: "The progress charts help me understand my glucose trends so much better. It feels like I finally have control over my routine."
        },
        {
            name: "Priya K.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
            text: "I love how quick it is to record my meals. The app feels friendly and not overwhelming, which makes it easy to stay consistent."
        },
        {
            name: "Daniel W.",
            avatar: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=200&h=200&fit=crop&crop=faces",
            text: "Being able to track everything in one place is a game changer. The interface is simple but powerful—exactly what I needed."
        }
    ];

    const scrollPrev = () => {
        if (api) api.scrollPrev();
    };

    const scrollNext = () => {
        if (api) api.scrollNext();
    };

    return (
        <section className="bg-[#f7f8fa] py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text and Navigation */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#101829]">
                                <span className="font-semibold">Loved </span>
                                by our users
                            </h2>
                            <p className="text-lg md:text-xl text-[#686e7a] leading-relaxed">
                                Glunova has helped people of all ages make health tracking feel simpler and more encouraging. Here's what they say.
                            </p>
                        </div>

                        {/* Custom Navigation Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={scrollPrev}
                                className="bg-white hover:bg-gray-50 transition-colors flex items-center justify-center rounded-full w-12 h-12 md:w-14 md:h-14 shadow-sm"
                                aria-label="Previous testimonial"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={scrollNext}
                                className="bg-white hover:bg-gray-50 transition-colors flex items-center justify-center rounded-full w-12 h-12 md:w-14 md:h-14 shadow-sm"
                                aria-label="Next testimonial"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Carousel */}
                    <div>
                        <Carousel setApi={setApi} opts={{
                            loop: true,
                        }} className="w-full">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                                        <TestimonialCard
                                            name={testimonial.name}
                                            avatar={testimonial.avatar}
                                            text={testimonial.text}
                                        />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;