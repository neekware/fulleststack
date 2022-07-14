import './index.module.css';

/* eslint-disable-next-line */
export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <h2>
        Welcome To About Page
      </h2>
      
    </div>
    </>
  );
}

export const clickHandler = () => {
  console.log('clicked button', this);
}

export default About;
