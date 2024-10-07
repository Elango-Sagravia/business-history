"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

const UnsubscribeContent = () => {
  const params = useSearchParams();
  const email = params.get("email");
  const userId = params.get("user_id"); // Assuming user_id is also part of the query parameters
  const campaignId = params.get("campaign_id"); // Assuming campaign_id is part of the query parameters

  useEffect(() => {
    if (email && userId && campaignId) {
      // Call the unsubscribe GET function
      const unsubscribeUrl = `https://${window.location.hostname}/api/emails/unsubscribe?user_id=${userId}&campaign_id=${campaignId}&email=${email}`;
      try {
        fetch(unsubscribeUrl)
          .then((response) => response.json())
          .then((data) => {
            console.log("Unsubscribe result:", data);
          })
          .catch((error) => {
            console.error("Error during unsubscribe:", error);
          });
      } catch (error) {
        console.error("Error:", error);
      }

      // Call the Zapier webhook
      try {
        fetch(`https://hooks.zapier.com/hooks/catch/11976044/2t02mgc/`, {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            domain: window.location.hostname,
          }),
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }, [email, userId, campaignId]);

  return (
    <h1 className="text-3xl text-nl_background w-full md:w-1/2">
      {email
        ? `Your email (${email}) has been successfully removed from our subscriber list.`
        : "Email not found."}
    </h1>
  );
};

const Unsubscribe = () => {
  return (
    <div className="bg-nl_sec_background min-h-svh md:min-h-[1050px] flex justify-center items-center px-4 md:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <UnsubscribeContent />
      </Suspense>
    </div>
  );
};

export default Unsubscribe;
