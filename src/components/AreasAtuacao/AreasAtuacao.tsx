import './AreasAtuacao.css';

import { FaBalanceScale, FaBriefcase, FaBuilding , FaGavel  } from 'react-icons/fa';

export function AreasAtuacao() {
    return (
        <section className="atuacao">
                <h2 className="borda">Atuação</h2>
            <div className="container">
                <div className="areas">
                    <div className="area">
                        <FaBalanceScale className="icon" />
                        <h3>Direito Civil</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                        Conte com ajuda especializada para solucionar problemas referentes a Contratos, Direito de família, Inventários, Responsabilidade civil, entre outros. Posso orientá-lo sobre seus direitos e deveres, bem como representá-lo em processos judiciais ou extrajudiciais, garantindo seus direitos e protegendo seus interesses.
                        </p>
                    </div>
                    <div className="area">
                        <FaBriefcase className="icon" />
                        <h3>Direito do Trabalho</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                        Conheça seus direitos trabalhistas e garanta uma relação saudável com sua empresa. Saiba mais sobre férias, FGTS, jornada de trabalho e muito mais. Proteja-se e valorize seu trabalho!
                        </p>
                    </div>
                    <div className="area">
                        <FaBuilding className="icon" />
                        <h3>Direito Empresarial</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                        Se você é um empresário e precisa de ajuda com assuntos relacionados a contratos comerciais, sociedades empresariais e falência, um advogado especializado pode ajudá-lo a tomar as melhores decisões para o seu negócio, proteger seus interesses e evitar problemas legais. Não deixe de buscar ajuda profissional para garantir o sucesso da sua empresa.
                        </p>
                    </div>
                    <div className="area">
                        <FaGavel className="icon" />
                        <h3>Direito Criminal</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                        Com especialidade em Direito criminal, posso ajudá-lo a entender seus direitos e opções legais, ajudando-o a obter resultados favoráveis em acusações criminais, processos em fase de execução, bem como em recursos de condenação. Não arrisque sua liberdade ou futuro tentando enfrentar sozinho o sistema de justiça criminal.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
