import './AreasAtuacao.css';

import { FaBalanceScale, FaGavel, FaBookOpen, FaMoneyCheckAlt } from 'react-icons/fa';

export function AreasAtuacao() {
    return (
        <section className="atuacao">
            <div className="container">
                <h2 className="borda">Atuação</h2>
                <div className="areas">
                    <div className="area">
                        <FaBalanceScale className="icon" />
                        <h3>Direito Civil</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vitae ligula sed libero tristique finibus. Sed justo velit,
                            pharetra ac augue a, consequat consectetur metus.
                        </p>
                    </div>
                    <div className="area">
                        <FaGavel className="icon" />
                        <h3>Direito do Trabalho</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vitae ligula sed libero tristique finibus. Sed justo velit,
                            pharetra ac augue a, consequat consectetur metus.
                        </p>
                    </div>
                    <div className="area">
                        <FaBookOpen className="icon" />
                        <h3>Direito Previdenciário</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vitae ligula sed libero tristique finibus. Sed justo velit,
                            pharetra ac augue a, consequat consectetur metus.
                        </p>
                    </div>
                    <div className="area">
                        <FaMoneyCheckAlt className="icon" />
                        <h3>Direito Tributário</h3>
                        <br />
                        <br />
                        <br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                            vitae ligula sed libero tristique finibus. Sed justo velit,
                            pharetra ac augue a, consequat consectetur metus.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
