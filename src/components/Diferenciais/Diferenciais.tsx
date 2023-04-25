import './Diferenciais.css';
import  hrs from '../../common/images/24-hr.png';
import atendimentoOnline from '../../common/images/atendimento-online.png';
import brasil from '../../common/images/brasil.png';

export function Diferenciais() {
    return (
        <section id="diferenciais">
          <div className='container'>
            <h2 className="borda">Diferenciais</h2>
          </div>
          <div className="container">
            <div className="diferenciais-container">
              <div className="diferencial-item">
                <img src={hrs} alt="Icone Atendimento Personalizado" />
                <h3>Atendimento personalizado e 24 horas</h3>
                <p>Nosso escritório oferece atendimento personalizado a cada um de nossos clientes, garantindo que suas necessidades sejam sempre atendidas.</p>
              </div>
              <div className="diferencial-item">
              <img src={brasil} alt="Icone Resultados" />
                <h3>Atendemos em todo o Brasil</h3>
                <p>Com atuação em todo o território nacional, nosso escritório de advocacia oferece um atendimento diferenciado e personalizado para clientes de todas as regiões do Brasil.</p>
              </div>
              <div className="diferencial-item">
                <img src={atendimentoOnline} alt="Icone Resultados" />
                <h3>Atendimento online</h3>
                <p>Nosso escritório de advocacia está sempre disponível para atendê-lo, seja pessoalmente ou online, garantindo assim a comodidade e agilidade que você merece.</p>
              </div>
            </div>
          </div>
        </section>
      );

}