import { Apresentacao } from "../../components/Apresentacao/Apresentacao"
import { AreasAtuacao } from "../../components/AreasAtuacao/AreasAtuacao"
import { Contato } from "../../components/Contato/Contato";
import { Footer } from "../../components/Footer/Footer"
import { Topo } from "../../components/Topo/Topo"
import './Home.css';

export function Home() {
    return (
        <>
            <main>
                <Topo />
                <section id="apresentacao">
                    <Apresentacao />
                </section>
                <section id="atuacao">
                    <AreasAtuacao />
                </section>
                <section id="contato">
                    <Contato />
                </section>
                <Footer></Footer>
            </main>
        </>

    )
}