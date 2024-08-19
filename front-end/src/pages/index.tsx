//COMPONENTS
import { Seo } from "@/ui/components/seo/seo";
import { Navigation } from "@/ui/components/navigation/navigation";
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";
import { Footer } from "@/ui/components/navigation/footer";

const Home = () => {
  
  return (
    <>
    <Seo
      title="Portfolio Julie Garvi"
      description="Je suis Julie Garvi, développeuse web fullstack. Je vous accompagne dans toutes les étapes de la création de votre site vitrine, portfolio ou boutique en ligne, du maquettage jusqu'à l'hébergement de votre application."
    />
      <Navigation />

      <LandingPageContainer />

      <Footer />

    </>

  );
}
export default Home;
