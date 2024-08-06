import ComplainceHeader from "@/components/ui/complainceHeader/complainceHeader";
import ComplianceContentPrivacyPolicy from "@/components/ui/ComplianceContentPrivacyPolicy/ComplianceContentPrivacyPolicy";

export default function Home() {
  return (
    <main>
      <ComplainceHeader title={"Privacy Policy"} date={"30 Jul, 2024"} />
      <ComplianceContentPrivacyPolicy />
    </main>
  );
}
