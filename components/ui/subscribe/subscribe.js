"use client";

import SubscribeForm from "@/components/ui/subscriberForm/subscriberForm";
import { useAppContext } from "@/context/appContext";
import libre from "@/components/libre-font";
import content from "@/content/content";

export default function Subscribe() {
  const { isSubscribed } = useAppContext();
  return (
    <div className="bg-nl_sec_background">
      <div
        className={`bg-nl_sec_background px-4 md:px-16 max-w-7xl mx-auto ${
          isSubscribed ? "py-36" : "py-28"
        }`}
      >
        <div
          className={`mx-auto w-full md:w-3/5 lg:w-1/2 flex flex-col  items-center ${
            isSubscribed && `lg:w-3/5`
          }`}
        >
          {!isSubscribed && (
            <h5
              className={`text-nl_background text-4xl text-center ${libre.className} leading-tight`}
            >
              {content.subscribe.title}
            </h5>
          )}

          {isSubscribed && (
            <div className="flex flex-col sm:items-center">
              <h5
                className={`text-nl_background text-3xl sm:text-4xl ${libre.className} leading-tight`}
              >
                Thank you for subscribing.
              </h5>
              <p className="sm:w-2/3 mt-4 sm:text-center">
                We sent you a welcome email. If you don't see it, check your
                spam or junk folders.
              </p>
            </div>
          )}

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
    </div>
  );
}
