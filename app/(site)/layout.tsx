import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityTools from "../components/AccessibilityTools";
import { getSiteSettings } from "@/sanity/lib/content";

// Public website chrome (header, footer, accessibility tools). The Studio at /studio does not use this.
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const { general, contact, social } = await getSiteSettings();
  return (
    <>
      <Header navLinks={general.navLinks} donateLabel={general.donateLabel} donateUrl={general.donateUrl} />
      {children}
      <Footer general={general} contact={contact} social={social} />
      <AccessibilityTools />
    </>
  );
}
