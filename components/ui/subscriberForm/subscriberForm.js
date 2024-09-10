"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAppContext } from "@/context/appContext";
import LoadingSpinner from "@/components/ui/loading-spinner";
function SubscriberForm({ formClasses }) {
  const { setEmail, setMessage } = useAppContext();
  const [inputEmail, setInputEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`/api/add-user?email=${inputEmail}`, {
        method: "GET",
      });
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

      const data = await response.json();

      if (response.ok) {
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
