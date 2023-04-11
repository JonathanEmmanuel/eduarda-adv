import { PhotoCard } from '../PhotoCard/PhotoCard';
import perfil from '../../common/images/perfil.jpg'
import './Contato.css';

export function Contato(){
    const mensagem = `https://wa.me/+5583986491905?text=Olá! Como posso ajudar?`;
    return (
        <div className="contato-cointainer">
            <PhotoCard
                image={perfil}
                title="Contato"
                name="Eduarda Xavier"
                instagram="https://www.instagram.com/eduardaaxavieradv"
                whatsapp={mensagem}
                linkedin="https://www.linkedin.com/in/maria-eduarda-silva-xavier-b20028227"
            />
        </div>
    )
}