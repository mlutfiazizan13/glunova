import svgPaths from "../../imports/svg-9y3ic4hbsj";
export function StarRating() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="relative shrink-0 size-[20px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3dd11600} fill="var(--fill-0, #F7A500)" />
          </svg>
        </div>
      ))}
    </div>
  );
}
