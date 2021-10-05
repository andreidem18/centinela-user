import React, { useState, useRef, useEffect } from 'react';
import { InfoModal } from 'UI/modals';
import { getSpanishMonth } from 'utils';

import './styles.scss';

export const PaymentDetail = ({ payment, comeback }) => {

    const [ showWarning, setShowWarning ] = useState(false)
    const [ comments, setComments ] = useState('');
    const [ files, setFiles ] = useState([]);
    // Array de archivos a visualizar debido a que filelist no permite hacer .map
    const [ filesArray, setFilesArray ] = useState([]);


    // useEffect para añadir los archivos al array de archivos
    useEffect(() => {
        // Condicional para evitar que renderice de más
        if(files.length !== filesArray.length){
            const newFiles = [];
            for(let i = 0; i < files?.length; i++){
                // Condicional para evitar un bucle infinito
                if(!newFiles.find(f => f.lastModified === files[i].lastModified)){
                    newFiles.push({name: files[i].name, lastModified: files[i].lastModified})
                }
            }
            setFilesArray(newFiles)
        }
    }, [files, filesArray]);

    // Función para eliminar un archivo del filelist
    const deleteFile = lastModified => {
        const newFiles = []
        for(let i = 0; i < files.length; i++){
            if(files[i].lastModified !== lastModified) newFiles.push(files[i]);
        }
        setFiles(newFiles)
    }

    let defaultBtn = useRef(null);
    const date = getSpanishMonth(payment.date);

    return (
        <div className='payment-detail'>

            {/* Título */}
            <h4 className="title-payment">
                <button 
                    onClick={ files.length > 0 ? () => setShowWarning(true) : comeback} 
                    className='comeback-button'
                >
                    <i className="icon-arrow-left"></i>
                </button>
                {date.month} {date.year}
            </h4>

            {/* Lista de motivos de pago */}
            <ul className="reasons">
                {
                    payment.reasons.map(r => (
                        <li key={r.id}>
                            <span className='reason'>{r.reason}</span>
                            <span className="amount">$ {r.amount}</span>
                        </li>
                    ))
                }
                <div className='total'>
                    <span className='text'>Total</span>
                    <span className='amount'>$ {payment.amount}</span>
                </div>
            </ul>


            {/* Botón para cargar comprobante */}
            <button onClick={() => defaultBtn.click()} className='upload-button'>
                <i className="icon-upload-file"></i>
                <span>Cargar comprobante</span>
                <input 
                    type="file" 
                    id="default-btn" 
                    ref={el => defaultBtn=el} 
                    onChange={e => setFiles(e.target.files)} 
                    multiple 
                />
            </button>

            {/* Lista de archivos cargados */}
            <ul className='files'>
                {
                    filesArray.map(file => {
                        // Para evitar nombres muy largos
                        if(file.name.length > 10) file.name = file.name.slice(0, 10) + '...'
                        return(
                            <li key={file.lastModified}>
                                {file.name} 
                                <button onClick={() => deleteFile(file.lastModified)}>
                                    <i className='fas fa-times'></i>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            {/* La sección de comentarios con el botón de enviar sólo se mostrará cuando hayan archivos cargados */}
            { files.length > 0 &&
                <>
                    <textarea 
                        value={comments} 
                        onChange={e => setComments(e.target.value)} 
                        rows='4' 
                        placeholder='Comentarios (opcional)' 
                    />
                    <button className='main-button'>Enviar</button>
                </>
            }
            { showWarning && 
                <InfoModal 
                    type='warning'
                    handleClose={() => setShowWarning(false)}
                    action={comeback}
                    title='Advertencia'
                    message='¿Seguro que deseas salir? Se perderá toda la información cargada'
                />
            }
        </div>
    );
};
