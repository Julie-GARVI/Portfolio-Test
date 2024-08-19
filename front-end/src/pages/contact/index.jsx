//COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { ContactContainer } from "@/ui/modules/contact/contact.container";
import { Footer } from "@/ui/components/navigation/footer";

const Contact = () => {
  
  return (
    <>
    <Seo
      title="Page contact"
      description="Contactez moi pour toute question ou demande d'information. Remplissez le formulaire de contact, ou joingnez-moi par email ou téléphone."
    />
      <Navigation />

      <ContactContainer />

      <Footer />

    </>

  );
}
export default Contact;
