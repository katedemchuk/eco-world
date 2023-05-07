import './ButtonBig.css';

export default function ButtonBig({children, action, doBlink=false}) {
  return (
    <button onClick={action} className={'ButtonBig ' + (doBlink ? 'ButtonBig-blink' : '')}>{children}</button>
  );
}
