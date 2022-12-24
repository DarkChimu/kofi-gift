import { DialogueCardProps, charSprite } from "../models/Dialogue.model";

function DialogueCard(props: DialogueCardProps) {
  return (
    <div data-aos="fade-up" className="dialogue-card">
      <div className="dialogue-card__message">
        <div>
          {props.message &&
            props.message.map((item, index) => {
              return <h2 key={index}>{item}</h2>;
            })}
        </div>
        {props.children}
        <div className="dialogue-card__options">
          <button onClick={props.goFoward}></button>
          <button onClick={props.goBack}></button>
        </div>
      </div>
      <div className="dialogue-card__character">
        {props.characterSprite && (
          <img
            src={charSprite[props.characterSprite]}
            alt={`Sebastian ${props.characterSprite}`}
            width={150}
            height={150}
          />
        )}
        <h2>{props.name}</h2>
      </div>
    </div>
  );
}

export default DialogueCard;
