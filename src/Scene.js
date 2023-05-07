import './Scene.css';
import ButtonBig from './ButtonBig';
import Option from './Option';
import { useState } from 'react';
import { updateResultInLS } from './localStorage';

export default function Scene({content, nextPage, isLast, finish}) {
  const [selected, setSelected] = useState(null);
  const [showOptions, setShowOptions] = useState(!content.image);
  const [showResults, setShowResults] = useState(false);

  const options = content.options.map((o, index) => <Option key={`option-${index}`} content={o} selectable select={() => setSelected(index)} isSelected={index === selected} />);

  const results = content.results.map((r, index) => <Option key={`result-${index}`} content={r} isSelected={index === selected} />);

  return (
    <div className="Scene">
      <p className="Scene-description">{content.description}</p>
      <p className="Scene-question"><b>{content.question}</b></p>

      {content.image && !showOptions && !showResults &&
        <div className="Scene-image" style={{backgroundImage: `url(https://katedemchuk.github.io/eco-world/images/${content.image})`}}></div>
      }

      {showOptions && !showResults && <div className="Scene-options">{options}</div>}

      {showResults && <div className="Scene-options">{results}</div>}

      {!showOptions && <ButtonBig action={() => setShowOptions(true)} >Показати варіанти</ButtonBig>}

      {showOptions && !showResults && <ButtonBig action={() => {setShowResults(true); if (content.results[selected].status === 'green') updateResultInLS()}} disabled={selected === null}>Підтвердити вибір</ButtonBig>}

      {showResults && !isLast && <ButtonBig action={() => {setSelected(null); setShowResults(false); nextPage((hasImage) => {setShowOptions(hasImage)});}}>Наступне запитання</ButtonBig>}

      {showResults && isLast && <ButtonBig action={finish}>Закінчити</ButtonBig>}
    </div>
  );
}
