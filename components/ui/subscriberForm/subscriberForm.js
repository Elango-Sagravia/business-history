"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAppContext } from "@/context/appContext";
import LoadingSpinner from "@/components/ui/loading-spinner";

function detectBrowser() {
  let userAgent = navigator.userAgent;

  if (userAgent.includes("Chrome") && !userAgent.includes("Edge")) {
    return "Chrome";
  } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    return "Safari";
  } else if (userAgent.includes("Firefox")) {
    return "Mozilla Firefox";
  } else if (userAgent.includes("Edg")) {
    return "Microsoft Edge";
  } else {
    return "Other Browser";
  }
}

function detectDevice() {
  let userAgent = navigator.userAgent;

  if (userAgent.includes("iPhone") || userAgent.includes("Android")) {
    return "Mobile";
  } else if (userAgent.includes("iPad")) {
    return "Tablet";
  } else {
    return "Desktop";
  }
}
function detectPlatform() {
  let platform = navigator.platform;

  if (platform.includes("Win")) {
    return "Windows";
  } else if (platform.includes("Mac")) {
    return "MacOS";
  } else if (platform.includes("Linux")) {
    return "Android";
  } else if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    return "iOS";
  } else if (/Android/.test(navigator.userAgent)) {
    return "Android";
  } else {
    return "Other Platform";
  }
}
function SubscriberForm({ formClasses }) {
  const { setEmail, setMessage } = useAppContext();
  const [inputEmail, setInputEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      // const response = await fetch(
      //   `/api/add-user?email=${inputEmail}&browser=${detectBrowser()}&device=${detectDevice()}&platform=${detectPlatform()}`,
      //   {
      //     method: "GET",
      //   }
      // );
      fetch(`https://hooks.zapier.com/hooks/catch/11976044/2u8hsu9/`, {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputEmail.toLowerCase().trim(),
          domain: window.location.hostname,
        }),
      });

      // const data = await response.json();

      if (true) {
        setEmail(inputEmail);

        setMessage("Successfully subscribed!");
      } else {
        setMessage(data.error.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={formClasses} onSubmit={handleSubmit}>
      <div className="flex w-full gap-2">
        <Input
          className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
          type="email"
          placeholder="Enter your email"
          value={inputEmail}
          disabled={loading}
          onChange={(e) => setInputEmail(e.target.value)}
          required={true}
        />
        <Button className="rounded-none">
          {loading ? <LoadingSpinner /> : "Subscribe"}
        </Button>
      </div>
      <p className="text-[12px]">100% free. No spam. Unsubscribe anytime.</p>
    </form>
  );
}

export default SubscriberForm;
