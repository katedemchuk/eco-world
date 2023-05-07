import './Option.css';

export default function Option({content, selectable=false, select, isSelected=false}) {
  let optionClassName = 'Option';
  if (selectable) optionClassName += ' Option-selectable';
  if (content.status) optionClassName += ` Option-${content.status}`;
  if (isSelected) optionClassName += ' Option-chosen';

  return (
    <div className={optionClassName} onClick={select}>

      {content.image &&
        <div className="Option-image" style={{backgroundImage: `url(/images/${content.image})`}}></div>
      }

      {content.description &&
        <p className="Option-description">{content.description}</p>
      }
    </div>
  );
}
