import stylesImg from '../../scss/components/_images.module.scss';
import stylesTitle from '../../scss/components/_titles.module.scss';

export const About  = () => {
    return(
    <section>
        <div>
            <div className={stylesImg.imgAbout}>
                <h1 className={stylesTitle.titleAbout}>COLOMBIA VERDE</h1>
            </div>
        </div>
    </section>
    );
} 

export default About;