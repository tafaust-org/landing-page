import {ReactNode} from 'react';
import {Button} from "../button/Button";

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-16 mix-blend-difference">{props.description}</div>

    {/*{props.button}*/}
    <input type={'text'} className={'shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'} placeholder={'your@email.com'} /> <Button>Learn more</Button>
  </header>
);

export { HeroOneButton };
