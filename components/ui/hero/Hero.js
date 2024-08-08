"use client";

import SubscriberForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";

import libre from "@/components/libre-font";
import content from "@/content/content";
import { Divide } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { isSubscribed } = useAppContext();

  return (
    <div className="bg-nl_sec_background">
      <div className="flex px-4 md:px-16 py-32 bg-nl_sec_background max-w-7xl mx-auto">
        <div className="flex-1">
          <h1
            className={`${cn(
              `text-nl_background text-4xl sm:text-5xl ${libre.className} leading-tight sm:leading-tight`
            )}`}
          >
            {content.homePage.hero.title}
          </h1>
          <p className="py-4">
            For everyone curious about global politics, economic trends, and
            macroeconomic policies, Get the 5-minute newsletter
          </p>
          {isSubscribed ? (
            <p className="text-nl_background font-bold mt-10">
              {content.homePage.hero.subTitle}
            </p>
          ) : (
            // <form
            //   className="mt-4 pb-2 flex w-3/4 md:w-2/3 flex-col gap-2"
            //   onSubmit={handleSubmit}
            // >
            //   <div className="flex w-full gap-2">
            //     <Input
            //       className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
            //       type="email"
            //       placeholder="Enter your email"
            //       value={inputEmail}
            //       onChange={(e) => setInputEmail(e.target.value)}
            //     />
            //     <Button className="rounded-none">Join Free</Button>
            //   </div>
            //   <p className="text-[12px]">
            //     100% free. No spam. Unsubscribe anytime.
            //   </p>
            // </form>
            <SubscriberForm formClasses="mt-4 pb-2 flex w-full sm:w-3/4  flex-col gap-2" />
          )}
        </div>
        <div className="hidden flex-1 lg:block relative">
          <Image
            src={"/home-hero.svg"}
            layout="fill"
            objectFit="cover"
            alt="Home screen banner image"
          />
        </div>
      </div>
    </div>
  );
}
