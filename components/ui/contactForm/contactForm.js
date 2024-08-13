"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";
import libre from "@/components/libre-font";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import countries from "@/data/countries";
import content from "@/content/content";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({
    fullname: "",
    market: "",
    email: "",
    company: "",
    message: "",
    phone: "",
    domain: "",
    countryCode: "US",
    dial_code: "+1",
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

  function handleChange(event) {
    setDetails({
      ...details,
      [event.target.id]: event.target.value,
    });
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
        "https://hooks.zapier.com/hooks/catch/11976044/2usq88d/",
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
            message: details.message.trim(),
            dial_code: details.dial_code.trim().replace(/[^a-zA-Z0-9]/g, ""),
            market: details.market.trim(),
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

  const { fullname, lastname, job, market, email, message, company, phone } =
    details;

  console.log("details :>> ", details);
  return (
    <div className="bg-nl_sec_background ">
      <section className={`px-0 lg:px-16 max-w-7xl mx-auto`}>
        <div
          className={`px-4 lg:px-0 py-28 bg-nl_sec_background flex flex-col sm:flex-row ${
            submitted && "min-h-96"
          }`}
        >
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
                className={`text-4xl text-nl_background md:text-center ${libre.className} leading-tight`}
              >
                We have received your form submission
              </h3>
            </div>
          ) : (
            <div className="flex-1 mt-16 sm:mt-0">
              <div>
                <h2
                  className={`text-2xl text-nl_background pb-4 ${libre.className} leading-tight font-bold`}
                >
                  Inquiry
                </h2>
                <p className="text-sm w-2/3 pb-8">
                  Leave us your details and a member of our team will get back
                  to you as soon as possible
                </p>
              </div>
              <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
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
                <div className="flex gap-3 mt-8">
                  <div className="flex-1">
                    <Label className="font-normal" htmlFor="company">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      required={false}
                      className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                      placeholder="Enter company name"
                      value={company}
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
                      required={false}
                      className="bg-nl_sec_background focus:outline-none focus-visible:ring-0 placeholder:text-gray-400 rounded-none"
                      placeholder="Enter target market"
                      value={market}
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
    </div>
  );
}
