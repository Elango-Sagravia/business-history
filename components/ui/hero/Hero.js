"use client";

import { Divide } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SubscriberForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
import { useState } from "react";

export default function Hero() {
  const { email, setEmail, isSubscribed } = useAppContext();
  // const [inputEmail, setInputEmail] = useState("");

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setEmail(inputEmail);
  // }
  console.log(email);
  return (
    <div className="flex px-4 md:px-16 py-32 bg-nl_sec_background">
      <div className="flex-1">
        <h1 className="text-nl_background text-5xl">
          Want to understand geopolitics, macroeconomics, and more? Start here.
        </h1>
        <p className="py-4">
          For everyone curious about global politics, economic trends, and
          macroeconomic policies, Get the 5-minute newsletter
        </p>
        {isSubscribed ? (
          <p className="text-nl_background font-bold mt-10">
            Thank you for joining our newsletter
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
          <SubscriberForm formClasses="mt-4 pb-2 flex w-3/4  flex-col gap-2" />
        )}
      </div>
      <div className="hidden flex-1 lg:block">Image</div>
    </div>
  );
}
