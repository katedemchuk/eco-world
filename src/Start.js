import './Start.css';
import ButtonBig from './ButtonBig';

export default function Start({startGame}) {
  return (
    <div className="Start">
      <h1 className="Start-title">Еко вибір</h1>
      <p className="Start-description">Ви потрапили в альтернативну реальність, де правлять екоактивісти. <b>Чи зможете стати частиною общини та асимілюватися?</b></p>
      <ButtonBig action={startGame} doBlink>Почати гру</ButtonBig>
    </div>
  );
}
