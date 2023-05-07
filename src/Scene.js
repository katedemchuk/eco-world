import './Scene.css';
import ButtonBig from './ButtonBig';
import Option from './Option';
import { useState } from 'react';

export default function Scene({content, nextPage, isLast, finish}) {
  const [selected, setSelected] = useState(null);
  const options = content.options.map((o, index) => <Option content={o} selectable select={() => setSelected(index)} isSelected={index === selected} />);
  const results = content.results.map((r, index) => <Option content={r} isSelected={index === selected} />);
  const [showOptions, setShowOptions] = useState(!content.image);
  const [showResults, setShowResults] = useState(false);

  return (
    <div className="Scene">
      <p className="Scene-description">{content.description}</p>
      <p className="Scene-question"><b>{content.question}</b></p>

      {showOptions && !showResults && <div className="Scene-options">{options}</div>}

      {showResults && <div className="Scene-options">{results}</div>}

      {!showOptions && <ButtonBig action={() => setShowOptions(true)} >Показати варіанти</ButtonBig>}

      {selected !== null && !showResults && <ButtonBig action={() => setShowResults(true)}>Підтвердити вибір</ButtonBig>}

      {showResults && !isLast && <ButtonBig action={() => {setSelected(null); setShowResults(false); nextPage();}}>Наступне запитання</ButtonBig>}

      {showResults && isLast && <ButtonBig action={finish}>Закінчити</ButtonBig>}
    </div>
  );
}
