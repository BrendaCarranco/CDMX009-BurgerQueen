import React, { Fragment, useState } from 'react';
import TipOption from './TipOption';
import './order-finished.css';

function OrderFinished({ orderFinished }) {
    const [visible, setVisible] = useState(true);

    const sendOrderFinished = () => {
        console.log('actualizar pago y metodo');
    };

    return (
        <Fragment>

            <div id="modal1" class="modal scroll mod-end-order">
                <div class="modal-content end-order ">
                    <div>
                        <p className='title-opt-end-order'> Método de pago </p>
                        <div className='opt text-black'>
                            <select className='opt black-text'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt text-red' value="1">Efectivo</option>
                                <option className='opt' value="2">Tarjeta de crédito</option>
                                <option className='opt' value="3">Tarjeta de regalo</option>
                            </select>
                        </div>
                        <div>
                            <p className='total-order-finished'>Total: {orderFinished.total}</p>
                        </div>
                    </div>
                    <div>
                        <p className='title-opt-end-order'> Agregar propina</p>
                        <div className='' >
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' onClick={() => setVisible(false)} >No</option>
                                <option className='opt' onClick={() => setVisible(true)}> Si</option>
                            </select>
                        </div>
                        <div>
                            {
                                visible ? (<TipOption orderFinished={orderFinished} />) : (<div>no se agrega propina</div>)
                            }
                        </div>
                    </div>
                    <div>
                        <p className='title-opt-end-order'>Obtener comprobante</p>
                        <div className=''>
                            <select className='options'>
                                <option value="" disabled selected>Elige una opción</option>
                                <option className='opt' value="1">Si</option>
                                <option className='opt' value="2">No</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer btn-accept">
                        <button className='btn-end-edit-order'>
                            <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={sendOrderFinished}>Aceptar</a>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment >
    );
}

export default OrderFinished;