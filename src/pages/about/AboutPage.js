import React from "react";
import styles from "./AboutPage.module.css";
import SildeShow from "../../components/Sildeshow/Sildeshow";

const AboutPage = () => {
    return (
        <>
            <SildeShow/>
            <div className={styles["about-wrapper"]}>
                <section>
                    <h1>About</h1>
                    <p>Atisuto helpt ondernemers en particulieren met het bedenken, ontwerpen, realiseren en uitvoeren van hun website, webshop. Daarbij zijn wij ook gespecialiseerd in website fotografie, fotobewerking en portretfotografie. Wij zijn gevestigd in de regio Eindhoven, onze fotostudio staat in Veldhoven.</p>
                    </section>
            </div>
        </>
    )
}

export default AboutPage;