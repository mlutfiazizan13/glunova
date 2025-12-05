import { StarRating } from "./StarRating";


interface TestimonialCardProps {
  name: string;
  avatar: string;
  text: string;
}

export function TestimonialCard({ name, avatar, text }: TestimonialCardProps) {
  return (
    <div className="bg-white flex flex-col items-start p-6 md:p-8 relative rounded-[24px] shrink-0">
      {/* Header with avatar and name */}
      <div className="flex gap-4 items-center relative shrink-0 w-full">
        <div className="relative shrink-0 size-12 md:size-[60px]">
          <img alt={name} className="block max-w-none size-full rounded-full" height="60" src={avatar} width="60" />
        </div>
        <div className="basis-0 flex flex-col gap-1 grow items-start min-h-px min-w-px relative shrink-0">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.6] min-w-full not-italic relative shrink-0 text-[#101829] text-lg md:text-[20px]">
            {name}
          </p>
          <StarRating />
        </div>
      </div>

      {/* Testimonial text */}
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#101829] text-sm md:text-[16px] w-full">
        {text}
      </p>
    </div>
  );
}