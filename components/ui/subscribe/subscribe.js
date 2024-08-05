"use client";

import SubscribeForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
export default function Subscribe() {
  const { isSubscribed } = useAppContext();
  return (
    <div
      className={`bg-nl_sec_background px-4 md:px-16 ${
        isSubscribed ? "py-36" : "py-28"
      }`}
    >
      <div
        className={`mx-auto w-full md:w-3/5 lg:w-2/5 flex flex-col  items-center ${
          isSubscribed && `lg:w-3/5`
        }`}
      >
        <h5 className="text-nl_background text-5xl text-center">
          {isSubscribed
            ? "Thank you for joining our newsletter"
            : "Get Daily News in your inbox"}
        </h5>
        {!isSubscribed && (
          <SubscribeForm formClasses="mt-8 pb-2 flex w-4/5 flex-col gap-2" />
        )}
        {/* <form className="pt-4 pb-4 flex max-w-md mt-8 px-2">
          <input
            style={{
              border: "1px solid",
              padding: ".5rem 1rem",
              border: "1px solid hsl(0 4.76% 83.53%)",
              // width: "60%",
            }}
            type="email"
            placeholder="Enter your email..."
            className="flex-1"
          />
          <button
            style={{
              padding: ".5rem 1rem",
              // border: "1px solid #000000",
              backgroundColor: "rgba(0,0,0)",
              color: "white",
              marginLeft: "5px",
            }}
            type="submit"
          >
            Join Free
          </button>
        </form>
        <p className="text-sm self-start px-2">
          100% free. No spam. Unsubscribe anytime.
        </p> */}
      </div>
    </div>
  );
}
