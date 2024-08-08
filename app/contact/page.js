import ContactForm from "@/components/ui/contactForm/contactForm";
import Faq from "@/components/ui/faq/faq";
import Subscribe from "@/components/ui/subscribe/subscribe";
import libre from "@/components/libre-font";

export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto">
      <header className="px-4 md:px-16 py-20">
        <h1 className={`text-5xl text-nl_background ${libre.className}`}>
          Contact us
        </h1>
      </header>
      <ContactForm />
      <Faq />
      <Subscribe />
    </main>
  );
}
