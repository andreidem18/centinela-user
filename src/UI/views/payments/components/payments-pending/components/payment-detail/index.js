import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentDetail = props => {


    const date = getSpanishMonth(props.payment.date);

    return (
        <div className='payment-detail'>

            {/* Título */}
            <h4 className="title-payment">
                <button 
                    onClick={ props.comeback } 
                    className='comeback-button'
                >
                    <i className="icon-arrow-left"></i>
                </button>
                {date.month} {date.year}
            </h4>

            {/* Lista de motivos de pago */}
            <ul className="reasons">
                {
                    props.payment.reasons.map(r => (
                        <li key={r.id}>
                            <span className='reason'>{r.reason}</span>
                            <span className="amount">$ {r.amount}</span>
                        </li>
                    ))
                }
                <div className='total'>
                    <span className='text'>Total</span>
                    <span className='amount'>$ {props.payment.amount}</span>
                </div>
            </ul>


            {/* Botón para cargar comprobantes */}
            <label className='input-upload'>
                <i className="icon-upload-file"></i>
                <span>Cargar comprobante</span>
                <input 
                    type="file" 
                    id="default-btn"
                    onChange={e => props.handleSelectedFiles(e)} 
                    multiple 
                />
            </label>

            {/* Lista de archivos cargados */}
            <ul className='files'>
                {
                    props.filesArray.map((file, i) => {
                        // Para evitar nombres muy largos
                        if(file.name.length > 10) file.name = file.name.slice(0, 10) + '...'
                        return(
                            <li key={file.lastModified}>
                                {file.name} 
                                <button onClick={() => props.deleteFile(i)}>
                                    <i className='fas fa-times'></i>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            {/* La sección de comentarios con el botón de enviar sólo se mostrará cuando hayan archivos cargados */}
            { props.filesArray.length > 0 &&
                <>
                    <textarea 
                        value={props.comments} 
                        onChange={e => props.setComments(e.target.value)} 
                        rows='4' 
                        placeholder='Comentarios (opcional)' 
                    />
                    <button className='main-button'>Enviar</button>
                </>
            }
        </div>
    );
};
