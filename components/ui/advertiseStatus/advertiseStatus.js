import { Separator } from "@radix-ui/react-separator";
import libre from "@/components/libre-font";
import content from "@/content/content";

export default function AdvertiseStatus() {
  return (
    <section className="px-4 md:px-16 py-28 bg-black text-white">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <h2 className="text-2xl w-full text-center md:text-left md:w-4/5 lg:w-2/3 mb-10 md:mb-0 font-bold">
            {content.advertise.statusSection.heading}
          </h2>
        </div>
        <div className="flex-1">
          <ul>
            {content.advertise.statusSection.list.map((el, index) => (
              <li key={el.title} className={`${index > 0 && "mt-10"}`}>
                <div className="flex items-end">
                  <p
                    className={`text-5xl md:text-6xl text-nl_background min-w-[120px] ${libre.className}`}
                  >
                    {el.title}
                  </p>
                  <p className="pl-8">{el.description} </p>
                </div>
                <Separator className="bg-nl_separator_border h-[1px] mt-10" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
