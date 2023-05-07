import { getResultFromLS, getMaxResultFromLS, resetLS } from "./localStorage";
import ButtonBig from './ButtonBig';

export default function Finish({restartGame}) {
  const max = getMaxResultFromLS();
  const result = getResultFromLS();

  return (
    <div className="Finish">
      <h1>Ваш результат</h1>
      <p>{result} з {max}</p>
      <ButtonBig action={() => {resetLS(); restartGame();}}>Почати знову</ButtonBig>
    </div>
  );
}
