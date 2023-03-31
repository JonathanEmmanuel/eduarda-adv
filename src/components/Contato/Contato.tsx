import { PhotoCard } from '../PhotoCard/PhotoCard';
import perfil from '../../common/images/perfil.jpg'
import './Contato.css';

export function Contato(){
    return (
        <div className="contato-cointainer">
            <PhotoCard
                image={perfil}
                title="Contato"
                name="Eduarda Xavier"
                instagram="https://www.instagram.com/eduardaaxavieradv"
                whatsapp="https://wa.me/83986491905"
                linkedin="https://www.linkedin.com/in/maria-eduarda-silva-xavier-b20028227"
            />
        </div>
    )
}