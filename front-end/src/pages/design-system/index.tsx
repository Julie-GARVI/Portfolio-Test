//SEO
import { Container } from '@/ui/components/container/container';
import { Navigation } from '@/ui/components/navigation/navigation';
import { Seo } from '@/ui/components/seo/seo';


//DESIGN SYSTEM
import { Button } from '@/ui/design-system/button/button';
import { Logo } from '@/ui/design-system/logo/logo';
import { Spinner } from '@/ui/design-system/spinner/spinner';
import { Typography } from '@/ui/design-system/typographie/typography';

const designSystem = () => {
  return (
    <Container className='mt-10 flex-row justify-center items-center space-y-6'>
      
        <Seo 
         title="Design system" 
         description="On retrouve ici tous mes composants de design system qui illustre la charte graphique de mon application" 
         />

        <Navigation />

        <Typography
          variant="heading1"
          component="h1"
          weight="semiBold"
      >
        Hello world
      </Typography>

      <Typography
          variant="heading2"
          component="h2"
          weight="semiBold"
      >
        Hello world
      </Typography>

      <Typography
          variant="heading2"
          component="h2"
          weight="medium"
      >
        Hello world
      </Typography>

      <Typography
          variant="heading3"
          component="h3"
          weight="medium"
      >
        Hello world
      </Typography>

      <Typography
          variant="heading3"
          component="h3"
          weight="regular"
      >
        Hello world
      </Typography>

      <Typography
          variant="subtitle"
          component="h4"
      >
        Hello world
      </Typography>

      <Typography
          variant="subtitle"
          component="div"
      >
        Hello world
      </Typography>

      <Typography
          variant="caption"
          component="div"
      >
        Hello world
      </Typography>

      <Typography
          variant="body"
          component="p"
      >
        Hello world
      </Typography>

      <Button >Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="disabled">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ico">Button</Button>

      <Spinner />

      <Spinner variant="secondary" />

      <Logo />

    </Container>
       
  
  );
}
export default designSystem;