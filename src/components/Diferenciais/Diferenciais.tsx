import './Diferenciais.css';

export function Diferenciais() {
    return (
        <section id="diferenciais">
            <div className="container">
                <h2>Nossos Diferenciais</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="diferencial-item">
                            {/* <img src="icone1.png" alt="Ícone 1"> */}
                                <h3>Atendimento Personalizado</h3>
                                <p>Nossa equipe está pronta para atender todas as suas necessidades e oferecer soluções personalizadas para cada caso.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="diferencial-item">
                            {/* <img src="icone2.png" alt="Ícone 2"> */}
                                <h3>Experiência de Mercado</h3>
                                <p>Com anos de experiência no mercado jurídico, estamos preparados para lidar com as mais diversas situações e oferecer as melhores soluções para nossos clientes.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="diferencial-item">
                            {/* <img src="icone3.png" alt="Ícone 3"> */}
                                <h3>Resultados Comprovados</h3>
                                <p>Nossos clientes contam com um histórico de sucesso em casos de diversos segmentos, o que confirma a nossa expertise na área.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}