import './Game.css';
import { useState } from 'react';
import { questions } from './questions';
import Scene from './Scene';

export default function Game({finishGame}) {
  const [page, setPage] = useState(0);
  const question = questions[page];

  function nextPage() {
    if (page < questions.length - 1) {
      setPage(page + 1);
    } else {
      finishGame();
    }
  }

  return (
    <div className="Game">
      <Scene content={question} nextPage={nextPage} isLast={page === questions.length - 1} finish={finishGame} />
    </div>
  );
}
