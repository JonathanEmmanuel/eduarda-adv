
import './PhotoCard.css';

export function PhotoCard(props: any) {
  return (
    <div className="photo-card">
      <img
        className="photo"
        src={props.image}
        alt="Foto"
      />
      <div className="card-info">
        <div className="card-title">{props.title}</div>
        <div className="card-name">{props.name}</div>
        <div className="icons">
          {props.instagram && (
            <a href={props.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {props.whatsapp && (
            <a href={props.whatsapp} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          )}
          {props.linkedin && (
            <a href={props.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          )}
        </div>
        <div>(83) 98649-1905</div>
      </div>
    </div>
  );
}