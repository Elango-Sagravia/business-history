"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import LoadingSpinner from "../loading-spinner";
const quarters = ["Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025"];
const budgets = ["$10K - $25k", "$25K - $50k", "$50k+"];
export default function AdvertiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    email: "",
    job: "",
    company: "",
    quarter: quarters[0],
    message: "",
    budget: budgets[0],
  });

  function handleChange(e) {
    const { id, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  }

  function handleRadioChange(id, value) {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/11976044/2u8382s/",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  }

  const { quarter, budget, firstname, email, job, company, message } = details;
  return (
    <section className="px-0 lg:px-16 lg:py-16" id="advertise-form">
      <div
        className={`px-4 md:px-16 py-32 bg-nl_sec_background flex flex-col sm:flex-row ${
          submitted && "min-h-96"
        }`}
      >
        <div className="flex-1 relative">
          <h2 className="text-2xl w-full text-center sm:text-left sm:w-4/5 lg:w-2/3 mb-10 sm:mb-0 text-nl_background lg:sticky lg:top-28">
            {`Let's talk about how your brand can be seen by 100 thousand people across the globe.`}
          </h2>
        </div>
        {submitted ? (
          <div className="flex flex-1 mt-10">
            <h3 className="text-4xl text-nl_background text-center">
              We have received your form submission
            </h3>
          </div>
        ) : (
          <div className="flex-1">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="firstname">
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    type="text"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter name"
                    value={firstname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="job">
                    Job title
                  </Label>
                  <Input
                    id="job"
                    type="text"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter position"
                    value={job}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="company">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter company name"
                    value={company}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="quarter">
                    When are you looking to partner?
                  </Label>
                  <RadioGroup
                    defaultValue={quarter}
                    value={quarter}
                    className="flex"
                    id="quarter"
                    name="quarter"
                    onValueChange={(value) =>
                      handleRadioChange("quarter", value)
                    }
                  >
                    {quarters.map((el) => (
                      <div
                        key={el}
                        className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input"
                      >
                        <RadioGroupItem
                          className="w-3 h-3"
                          value={el}
                          id={el}
                        />
                        <Label
                          htmlFor={el}
                          className="font-normal cursor-pointer"
                        >
                          {el}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="message">
                    Overall goal of the partnership?
                  </Label>
                  <Textarea
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none h-40"
                    placeholder="Main goal of the partnership"
                    id="message"
                    value={message}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="budget">
                    What is your preferred budget?
                  </Label>
                  <RadioGroup
                    defaultValue={budget}
                    value={budget}
                    className="flex"
                    id="budget"
                    name="budget"
                    onValueChange={(value) =>
                      handleRadioChange("budget", value)
                    }
                  >
                    {budgets.map((el) => (
                      <div
                        key={el}
                        className="flex items-center space-x-2 flex-1 border px-2 py-2 border-input"
                      >
                        <RadioGroupItem
                          className="w-3 h-3"
                          value={el}
                          id={el}
                        />
                        <Label
                          htmlFor={el}
                          className="font-normal cursor-pointer"
                        >
                          {el}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
              <div className="flex mt-8">
                <div className="flex-1 flex justify-between items-center">
                  <p className="text-sm">
                    By submitting this form you agree to our{" "}
                    <Link
                      className="underline underline-offset-4"
                      href="/privacy-policy"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <Button
                    className="bg-black px-4 py-1 text-white rounded-none"
                    type="submit"
                  >
                    {isLoading ? <LoadingSpinner /> : "Send"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
