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

  function preload_image(im_url) {
    let img = new Image();
    img.src = im_url;
  }

  if (question.image) preload_image(`https://katedemchuk.github.io/eco-world/images/${question.image}`);
  question.options.forEach((option) => {
    if (option.image) preload_image(`https://katedemchuk.github.io/eco-world/images/${option.image}`);
  });

  return (
    <div className="Game">
      <Scene content={question} nextPage={nextPage} isLast={page === questions.length - 1} finish={finishGame} />
    </div>
  );
}
