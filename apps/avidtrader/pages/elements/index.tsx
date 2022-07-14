import { Button } from '@avidtrader/shared-elements';
import './index.module.css';

/* eslint-disable-next-line */
export interface ElementsProps {
  outlined?: boolean;
}

export function Elements(props: ElementsProps) {
  return (
    <>
    <div className='flex flex-col items-center justify-center p-4'>
      <h1>Welcome to Elements!</h1>
      <p className='m-xl'>
        This is page for listing all the elements that are available in the app.
      </p>
    </div>
    <div className='flex flex-col items-center justify-center p-5'>
      <ul>
        <li className='flex flex-col justify-center items-center p-2'>
          <span className='font-bold p-2'>Buttons </span>
        <Button onClick={clickHandler.bind(this)} label={'Button Element 1'} outlined={true} />
        </li>
        <li className='flex flex-col justify-center items-center p-2'>
        <Button onClick={clickHandler.bind(this)} label={'Button Element 2'} outlined={false} />
        </li>
      </ul>
    </div>
    </>
  );
}

export const clickHandler = () => {
  alert('Button Clicked');
}

export default Elements;
