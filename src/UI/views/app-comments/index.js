import { Link } from 'react-router-dom';
import { comentarios } from 'UI/assets';
import { HomeLink, StandarContainer } from 'UI/components';

import "./styles.scss";

export const AppComments = () => {

    return (
        <section className="comments">
            <StandarContainer>
                <HomeLink />
                <h3 className='comments-title'>Envíanos tu comentario</h3>
                <div className="standar-card-container">
                    <div className='comments-icon'>
                        <img src={comentarios} alt="Icono" />
                    </div>
                    <div className="info">
                        <h4>¿Cómo te has sentido con nuestra política de calidad?</h4>
                        <p>
                            Esta politica consiste en hacerlo cada día mejor que el anterior, 
                            por lo que nos encantaría saber, cuales son las funciones que te han 
                            gustado y en qué podemos mejorar.
                        </p>
                        <p>
                            Ten encuenta que esta seccion es para tu opinion sobre Centinela App. Si tienes un problema 
                            y necesitas comunicarte con nosotros, por favor dirigete a la seccion de ayuda.
                        </p>
                        <Link className='primary' to='/comentarios/enviar-comentario'>
                            Enviar un comentario
                        </Link>
                        <Link className='danger' to='/comentarios/reportar-error'>
                            Informar un error
                        </Link>
                    </div>
                </div>
            </StandarContainer>
        </section>
    );
};

