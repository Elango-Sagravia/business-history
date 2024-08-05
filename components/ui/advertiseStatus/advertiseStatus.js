import { Separator } from "@radix-ui/react-separator";

export default function AdvertiseStatus() {
  return (
    <section className="px-4 md:px-16 py-28 bg-black text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="text-2xl w-full text-center md:text-left md:w-4/5 lg:w-2/3 mb-10 md:mb-0 font-bold">
            Top companies are advertising in the Presidential Summary. Why?
          </h2>
        </div>
        <div className="flex-1">
          <ul>
            <li>
              <div className="flex items-end">
                <p className="text-5xl md:text-6xl text-nl_background min-w-[120px]">
                  54%
                </p>
                <p className="pl-8">
                  of subscribers open our newsletters daily
                </p>
              </div>
              <Separator className="bg-nl_separator_border h-[1px] mt-10" />
            </li>
            <li className="mt-10">
              <div className="flex items-end">
                <p className="text-5xl md:text-6xl text-nl_background min-w-[120px]">
                  10k
                </p>
                <p className="pl-8">
                  new subscribers join Preseidential Summary every month
                </p>
              </div>
              <Separator className="bg-nl_separator_border h-[1px] mt-10" />
            </li>
            <li className="mt-10">
              <div className="flex items-end">
                <p className="text-5xl md:text-6xl text-nl_background min-w-[120px]">
                  2%
                </p>
                <p className="pl-8">
                  of active subscribers engage with our sponsored content
                  everyday
                </p>
              </div>
              <Separator className="bg-nl_separator_border h-[1px] mt-10" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
