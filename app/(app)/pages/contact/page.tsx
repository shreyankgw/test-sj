import ContactForm from "../../ui/components/common/ContactForm";
import { Slide } from "../../ui/animation/Slide";
import  QuoteSingle  from "../../ui/components/common/Quote";
import PageHeading from "../../ui/components/common/PageHeading";

export default async function Home() {
    
    return (
      <main className="flex flex-col min-h-screen">
         <Slide>
            <QuoteSingle />
         </Slide>
         <Slide delay={0.1}>
            <PageHeading title="It All Starts With a Conversation." description="Now is the time to build or rebuild your brand today. Drop us a line and we promise we will get back to you within 24h." />
         </Slide>
         <Slide delay={0.2}>
            <ContactForm />
         </Slide>
      </main>
    );
  }
  