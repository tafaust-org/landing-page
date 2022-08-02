import Link from 'next/link';

import {Background} from '../background/Background';
import {HeroOneButton} from '../hero/HeroOneButton';
import {Section} from '../layout/Section';
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns';
import {Logo} from './Logo';

const Hero = () => (
  <Background color={"wave bg-gradient-to-r from-red-200 via-red-500 to-yellow-400 background-animate"}
  >
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="#features">
            <a className={`hover:bg-white p-3 rounded-md`}>Features</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={`hover:bg-white p-3 rounded-md`}>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'A smarter construction site with\n'}
            <span>Buildin</span><span className="text-primary-500">X</span>
          </>
        }
        description="We enable direct human-construction component interaction to foster efficiency and embrace data ownership in BIM digital twins."
        button={''}
        // button={
        //   <Link href="https://creativedesignsguru.com/category/nextjs/">
        //     <a>
        //       <Button xl>Download Your Free Theme</Button>
        //     </a>
        //   </Link>
        // }
      />
    </Section>
  </Background>
);

export { Hero };
