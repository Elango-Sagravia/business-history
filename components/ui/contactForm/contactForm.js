"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import libre from "@/components/libre-font";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    job: "",
    market: "",
    email: "",
    company: "",
    message: "",
  });

  function handleChange(event) {
    setDetails({
      ...details,
      [event.target.id]: event.target.value,
    });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/11976044/2usq88d/",
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

  const { firstname, lastname, job, market, email, message, company } = details;
  return (
    <section className={`px-0 lg:px-16`}>
      <div
        className={`px-4 lg:px-16 py-28 bg-nl_sec_background flex flex-col sm:flex-row ${
          submitted && "min-h-96"
        }`}
      >
        <div className="flex-1 flex flex-col">
          <div>
            <p className="text-sm text-nl_background font-bold mb-2">
              GENERAL INQUIRIES
            </p>
            <a
              className="underline underline-offset-8"
              href="mailto:hello@company.com"
            >
              hello@company.com
            </a>
          </div>
          <div className="mt-8">
            <p className="text-sm text-nl_background font-bold mb-2">
              WANT TO WORK/ADVERTISE WITH US
            </p>
            <a
              className="underline underline-offset-8"
              href="mailto:patnership@company.com"
            >
              patnership@company.com
            </a>
          </div>
        </div>
        {submitted ? (
          <div className="flex flex-1 mt-10">
            <h3
              className={`text-4xl text-nl_background md:text-center ${libre.className} leading-tight`}
            >
              We have received your form submission
            </h3>
          </div>
        ) : (
          <div className="flex-1 mt-5 sm:mt-0">
            <div>
              <h2
                className={`text-2xl text-nl_background pb-4 ${libre.className} leading-tight font-bold`}
              >
                Inquiry
              </h2>
              <p className="text-sm w-2/3 pb-8">
                Leave us your details and a member of our team will get back to
                you as soon as possible
              </p>
            </div>
            <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
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
                    placeholder="Enter first name"
                    value={firstname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="lastname">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    type="text"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter last name"
                    value={lastname}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
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
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="market">
                    Market
                  </Label>
                  <Input
                    id="market"
                    type="text"
                    required={true}
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    placeholder="Enter target market"
                    value={market}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8">
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

              <div className="flex mt-8 basis-40">
                <div className="flex-1">
                  <Label className="font-normal" htmlFor="message">
                    Message
                  </Label>
                  <Textarea
                    className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none h-32"
                    placeholder="Enter message text here"
                    id="message"
                    value={message}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>

              <div className="flex mt-8">
                <div className="flex-1 flex justify-between items-center">
                  <p className="text-sm">
                    By submitting this form you agree to our{" "}
                    <Link
                      className="underline underline-offset-4"
                      target="_blank"
                      href="/privacy-policy"
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
