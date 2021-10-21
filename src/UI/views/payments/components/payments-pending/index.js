import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { PaymentDetail, PaymentRejectedReasons } from './components';
import { PaymentsPendingView } from './payments-pending-view';


import './styles.scss';

export const PaymentsPending = ({ setShowBottomMenu, payments }) => {

    const [ paymentSelected, setPaymentSelected ] = useState(null);
    const [ comments, setComments ] = useState([]);
    const [ showDetail, setShowDetail ] = useState(false);

    const paymentsPending = payments.filter(p => p.status === 'pending');
    const paymentsRejected = payments.filter(p => p.status === 'rejected');

    

    // ******* LÓGICA DE ARCHIVOS SUBIDOS ********* //
    const [ selectedFiles, setSelectedFiles ] = useState([]);
    // Array de archivos a visualizar debido a que filelist no permite hacer .map
    const [ filesArray, setFilesArray ] = useState([]);

    const handleSelectedFiles = e => {
        const files = Array.from(selectedFiles).concat(Array.from(e.target.files));
        setSelectedFiles(files);
        getFilesArray(files);
    }
    
    const getFilesArray = files => {
        const array = Array.from(files).map(file => {
            return {name: file.name, lastModified: file.lastModified}
        });
        setFilesArray(array);
    }

    
    const deleteFile = index => {
        const newFileArray = [];
        for(let i = 0; i < selectedFiles.length; i++){
            if(i !== index) newFileArray.push(selectedFiles[i]);
        }
        setSelectedFiles(newFileArray);
        getFilesArray(newFileArray);
    }
    



    // En caso de que venga desde params
    const { id } = useParams();
    useEffect(() => setPaymentSelected(payments.find(p => p.id === parseInt(id))), [ id, payments ]);


    useEffect(() => setShowBottomMenu(Boolean(!paymentSelected)), [ paymentSelected, setShowBottomMenu ]);

    return (
        !paymentSelected ? (
            <PaymentsPendingView 
                paymentsPending={paymentsPending} 
                paymentsRejected={paymentsRejected}
                setPaymentSelected={setPaymentSelected} 
            />
        ) : (
            paymentSelected.status === 'pending' || showDetail ? (
                <PaymentDetail  
                    payment={paymentSelected} 
                    comeback={() => setPaymentSelected(null)} 
                    comments={comments}
                    setComments={setComments} 
                    handleSelectedFiles={handleSelectedFiles}
                    filesArray={filesArray}
                    deleteFile={deleteFile}
                />
            ) : (
                <PaymentRejectedReasons  
                    payment={paymentSelected} 
                    comeback={() => setPaymentSelected(null)} 
                    setShowDetail={setShowDetail}
                />
            )
        )
    );
};
