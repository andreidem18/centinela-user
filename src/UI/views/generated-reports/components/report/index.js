import React, { useState } from 'react';

import './styles.scss';

export const Report = ({report}) => {

    const [ showReport, setShowReport ] = useState(true);
    report.title = report.title.length > 26 ? report.title.substring(0, 24) + '...' : report.title;

    return (
        <div className='report' style={{background: report.answer ? '#00A807' : '#BCBCBC'}} >
            <button className="header" onClick={() => setShowReport(!showReport)}>
                <span className='descriptive-text'>{report.title}</span>
                <i className={report.answer ? 'fas fa-check' : 'far fa-clock'}></i>
            </button>
            <div className="content" style={{maxHeight: showReport ? '1000px' : '0'}}>
                <div className="text-space">
                    <p className="title">Descripción</p>
                    <p className="text">
                        {report.incident}
                    </p>
                </div>
                {   report.answer ? (
                        <>
                            <div className="header">
                                <span className="descriptive-text">
                                    Respuesta del administrador
                                </span>
                                <div></div>
                            </div>
                            <div className="text-space">
                                <p className="text">
                                    {report.answer}
                                </p>
                            </div>
                        </>
                    ) : (
                        <span className="descriptive-text waiting-admin-text">
                            Esperando respuesta del administrador
                        </span>
                    )
                }
                <div className="button-hide" onClick={() => setShowReport(false)}>
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    );
};
