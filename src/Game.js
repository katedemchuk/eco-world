import './Game.css';
import { useState } from 'react';
import { questions } from './questions';
import Scene from './Scene';
import { initializeLS, updatePageInLS, getPageFromLS } from './localStorage';

export default function Game({finishGame}) {
  initializeLS(questions.length);
  const savedPage = getPageFromLS();
  const [page, setPage] = useState(+savedPage);
  const question = questions[page];

  function nextPage(cb) {
    const newPage = page + 1;
    setPage(newPage);
    updatePageInLS(newPage);
    cb(!questions[newPage].image);
  }

  return (
    <div className="Game">
      <Scene content={question} nextPage={nextPage} isLast={page === questions.length - 1} finish={finishGame} />
    </div>
  );
}
