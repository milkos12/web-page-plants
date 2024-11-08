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
                <div className={stylesConteiner.conteinerAboutThreeLogo}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path d="m17.979,23.359c.078.265-.073.542-.339.62-.047.014-.094.021-.141.021-.217,0-.416-.141-.479-.359-.631-2.144-2.695-3.641-5.021-3.641s-4.39,1.497-5.021,3.641c-.077.266-.357.416-.62.339-.266-.078-.417-.355-.339-.62.754-2.567,3.213-4.359,5.979-4.359s5.226,1.792,5.979,4.359Zm6-9c-.754-2.567-3.213-4.359-5.979-4.359-.276,0-.5.224-.5.5s.224.5.5.5c2.325,0,4.39,1.497,5.021,3.641.063.219.263.359.479.359.047,0,.094-.007.141-.021.266-.078.417-.355.339-.62Zm-17.479-3.859c0-.276-.224-.5-.5-.5C3.233,10,.774,11.792.021,14.359c-.078.265.073.542.339.62.047.014.094.021.141.021.217,0,.416-.141.479-.359.631-2.144,2.695-3.641,5.021-3.641.276,0,.5-.224.5-.5Zm5.5-1.5c2.206,0,4,1.794,4,4s-1.794,4-4,4-4-1.794-4-4,1.794-4,4-4Zm-3,4c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm5-9c0-2.206,1.794-4,4-4s4,1.794,4,4-1.794,4-4,4-4-1.794-4-4Zm1,0c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Zm-13,0C2,1.794,3.794,0,6,0s4,1.794,4,4-1.794,4-4,4-4-1.794-4-4Zm1,0c0,1.654,1.346,3,3,3s3-1.346,3-3-1.346-3-3-3-3,1.346-3,3Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path d="m22.973,1.024c-.756-.755-1.798-1.114-2.867-1.003C14.881.599,7.76,2.292,4.889,5.164c-3.726,3.726-3.83,9.709-.336,13.576L.146,23.146c-.195.195-.195.512,0,.707.098.098.226.146.354.146s.256-.049.354-.146l4.407-4.407c1.872,1.692,4.234,2.548,6.602,2.548,2.525,0,5.051-.961,6.974-2.884,3.724-3.724,4.938-13.336,5.143-15.225.116-1.064-.251-2.108-1.006-2.862Zm-4.844,17.38c-3.336,3.336-8.686,3.441-12.162.336l9.886-9.886c.195-.195.195-.512,0-.707s-.512-.195-.707,0l-9.886,9.886c-3.106-3.476-3.001-8.826.336-12.162,2.875-2.875,10.824-4.42,14.901-4.871.663,0,1.295.259,1.769.732.54.539.802,1.285.719,2.046-.55,5.057-2.151,11.922-4.856,14.626Z" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                            <path d="M23.106,16.354l-5.209,4.903c-1.944,1.771-4.455,2.743-7.077,2.743H0v-1H10.82c2.372,0,4.645-.88,6.397-2.478l5.192-4.887c.547-.547,.651-1.407,.23-1.991-.266-.37-.658-.594-1.104-.63-.438-.03-.87,.123-1.183,.435l-4.011,3.776-.018-.019c-.456,.488-1.105,.793-1.825,.793h-5.5v-1h5.5c.827,0,1.5-.673,1.5-1.5v-1.5h-7.188c-2.537,0-4.923,.988-6.718,2.782l-1.322,1.323-.707-.707,1.322-1.323c1.984-1.983,4.621-3.075,7.425-3.075h8.188v2.233l2.657-2.502c.509-.509,1.239-.775,1.959-.713,.732,.059,1.402,.438,1.836,1.042,.704,.977,.555,2.393-.346,3.293ZM4,.5V0h.5c3.846,0,6.078,1.201,7,3.904,.922-2.703,3.154-3.904,7-3.904h.5V.5c0,5.087-2.101,7.352-7,7.493v3.007h-1v-3.007c-4.899-.141-7-2.406-7-7.493ZM12.007,6.993c4.192-.121,5.865-1.794,5.986-5.986-4.192,.121-5.865,1.794-5.986,5.986ZM5.007,1.007c.121,4.192,1.794,5.865,5.986,5.986-.121-4.192-1.794-5.865-5.986-5.986Z" />
                        </svg>
                    </div>
                </div>
                <div className={stylesConteiner.conteinerAboutTwo}>
                    <br></br>
                    <span className={stylesTitle.titleAboutTwoWelcome}>Productos</span>
                </div>
            </div>
        </section>
    );
}

export default About;