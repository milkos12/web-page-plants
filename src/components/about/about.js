import stylesImg from '../../scss/components/_images.module.scss';
import stylesTitle from '../../scss/components/_titles.module.scss';
import stylesShape from '../../scss/components/_shapes.module.scss';
import stylesConteiner from '../../scss/components/_conteiners.module.scss';
import stylesOther from '../../scss/components/_others.module.scss';

export const About = () => {
    return (
        <section>

            <div className={stylesImg.imgAbout}>
                <h1 className={stylesTitle.titleAbout}>COLOMBIA VERDE</h1>
            </div>
            <div className={stylesConteiner.conteinerAboutMain}>
                <div className={stylesConteiner.conteinerAboutOne}>
                    <span className={stylesShape.cicleAbout}></span>
                    <span className={stylesTitle.titleAboutOne}>Colombia, Cundinamarca</span>
                </div>
                <div className={stylesConteiner.conteinerAboutTwo}>
                    <span className={stylesTitle.titleAboutTwoWelcome}>Welcome to Colombia Verde, our passion is quality!</span>
                </div>
                <div>
                    <p className={stylesOther.aobutParagraph}>
                        Our history began with a clear and defined purpose, “To make a difference” and thanks to this purpose and our dedication, innovation and commitment to excellence, we have evolved and grown to become a benchmark in our region and our industry.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;