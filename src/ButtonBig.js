import './ButtonBig.css';

export default function ButtonBig({children, action, doBlink=false, disabled}) {
  return (
    <button onClick={action} className={'ButtonBig ' + (doBlink ? 'ButtonBig-blink' : '')} disabled={disabled}>{children}</button>
  );
}
