
import logo from '../../common/images/logo2.png';
import './Topo.css';

export function Topo() {
    return (
        <>
            <header>
                <div className="header-container">
                    <img src={logo} alt="Logo"  width="176"/>

                        <nav>
                            <ul>
                                <li><a href="#apresentacao">Apresentação</a></li>
                                <li><a href="#atuacao">Atuação</a></li>
                                <li><a href="#contato">Contato</a></li>
                            </ul>
                        </nav>
                </div>
            </header>
        </>
    )
}