"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
import libre from "@/components/libre-font";

import LoadingSpinner from "../loading-spinner";
import content from "@/content/content";
import { cn } from "@/lib/utils";
import countries from "@/data/countries";
import { SelectItemIndicator, SelectItemText } from "@radix-ui/react-select";

const quarters = ["Q3 2024", "Q4 2024", "Q1 2025", "Q2 2025"];
const stages = [
  "Bootstrap",
  "Venture-backed",
  "Large enterprise",
  "Agency",
  "Other",
];

export default function AdvertiseForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    company: "",
    quarter: quarters[0],
    message: "",
    stage: stages[0],
    domain: "",
    countryCode: "US",
    dial_code: "+1", // initialize as empty string
  });

  // useEffect to update the domain once the component is mounted on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        domain: window.location.hostname,
      }));
    }
  }, []);

  useEffect(() => {
    const filteredDetails = countries.filter(
      (el) => el.code === details.countryCode
    );
    setDetails((prevDetails) => ({
      ...prevDetails,
      dial_code: filteredDetails[0].dial_code,
    }));
  }, [details.countryCode]);

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
          body: JSON.stringify({
            fullname: details.fullname.trim(),
            email: details.email.trim().toLowerCase(),
            phone: details.phone.trim().replace(/[^a-zA-Z0-9]/g, ""),
            company: details.company.trim(),
            quarter: details.quarter,
            message: details.message.trim(),
            dial_code: details.dial_code.trim().replace(/[^a-zA-Z0-9]/g, ""),
            stage: details.stage,
            domain: details.domain,
            countryCode: details.countryCode,
          }),
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSubmitted(true);
    }
  }

  const { quarter, stage, fullname, email, phone, company, message } = details;
  console.log("details :>> ", details);
  return (
    <div className="bg-nl_sec_background">
      <section
        className="px-4 md:px-16 lg:py-16 max-w-7xl mx-auto  bg-nl_sec_background"
        id="advertise-form"
      >
        <div
          className={`py-32 bg-nl_sec_background flex flex-col sm:flex-row ${
            submitted && "min-h-96"
          }`}
        >
          {/* <div className="flex-1 relative">
          <h2
            className={`text-2xl w-full text-center sm:text-left sm:w-4/5 lg:w-2/3 mb-10 sm:mb-0 text-nl_background lg:sticky lg:top-28 ${libre.className} leading-tight`}
          >
            {content.advertise.formSection.heading}
          </h2>
        </div> */}
          <div className="flex-1 flex flex-col">
            {content.advertise.formSection.left.map((el, index) => (
              <div key={el.title} className={`${cn(index > 0 && "mt-8")}`}>
                <p className="text-sm text-nl_background font-bold mb-2 uppercase">
                  {el.title}
                </p>
                {el.type === "email" && (
                  <a
                    className="underline underline-offset-8"
                    href={`mailto:${el.href}`}
                  >
                    {el.content}
                  </a>
                )}

                {el.type === "phone" && (
                  <a
                    className="underline underline-offset-8"
                    href={`tel:${el.href}`}
                  >
                    {el.content}
                  </a>
                )}
                {el.type === "link" && (
                  <a
                    className="underline underline-offset-8"
                    href={`${el.href}`}
                    target="_blank"
                  >
                    {el.content}
                  </a>
                )}
              </div>
            ))}
          </div>
          {submitted ? (
            <div className="flex flex-1 mt-32 sm:mt-10">
              <h3
                className={`text-4xl text-nl_background text-center leading-tight ${libre.className}`}
              >
                We have received your form submission
              </h3>
            </div>
          ) : (
            <div className="flex-1 mt-16 sm:mt-0">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Label className="font-normal" htmlFor="fullname">
                      Name*
                    </Label>
                    <Input
                      id="fullname"
                      type="text"
                      required={true}
                      className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                      placeholder="Enter full name"
                      value={fullname}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="flex mt-8">
                  <div className="flex-1">
                    <Label className="font-normal" htmlFor="email">
                      Email*
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
                <div className="flex gap-3 mt-8">
                  <div>
                    <Label className="font-normal" htmlFor="phone">
                      Phone number*
                    </Label>
                    <Select
                      className="placeholder:text-gray-400"
                      defaultValue={"US"}
                      name="countryCode"
                      onValueChange={(value) =>
                        handleRadioChange("countryCode", value)
                      }
                    >
                      <SelectTrigger className="w-[180px] bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none">
                        <SelectValue
                          className="placeholder:text-gray-40"
                          placeholder="Country code"
                        />
                      </SelectTrigger>
                      <SelectContent className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none">
                        <SelectGroup>
                          {countries
                            .filter((el) => !el.secondary)
                            .map((el, index) => (
                              <SelectItem key={el.code} value={el.code}>
                                {el.name} {el.flag} {el.dial_code}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label className="font-normal" htmlFor="phone">
                      <br />
                    </Label>
                    <Input
                      id="phone"
                      type="text"
                      required={true}
                      className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                      placeholder="Enter your number"
                      value={phone}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
                <div className="flex mt-8">
                  <div className="flex-1">
                    <Label className="font-normal" htmlFor="company">
                      Company*
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
                      Message
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
                    <Label className="font-normal" htmlFor="stage">
                      What stage is your company in?
                    </Label>
                    {/* <RadioGroup
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
                  </RadioGroup> */}

                    <Select
                      defaultValue={stage}
                      onValueChange={(value) =>
                        handleRadioChange("stage", value)
                      }
                      className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                    >
                      <SelectTrigger className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none">
                        <SelectValue placeholder="What stage is your company in?" />
                      </SelectTrigger>
                      <SelectContent className="focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none">
                        <SelectGroup>
                          {/* <SelectLabel>Fruits</SelectLabel> */}
                          {stages.map((el) => (
                            <SelectItem key={el} value={el}>
                              {el}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
    </div>
  );
}
