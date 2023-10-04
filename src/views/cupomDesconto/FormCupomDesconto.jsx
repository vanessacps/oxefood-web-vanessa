import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";


export default function FormCupomDesconto () {

    const [idCupomDesconto, setIdCupomDesconto] = useState();
    const [codigoDesconto, setCodigoDesconto] = useState();
    const [percentualDesconto, setPercentualDesconto] = useState();
    const [valorDesconto, setValorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setValorMinimoPedidoPermitido] = useState();
    const [quantidadeMaximaUso, setQuantidadeMaximaUso] = useState();
    const [inicioVigencia, setInicioVigencia] = useState();
    const [fimVigencia, setFimVigencia] = useState();

    const { state } = useLocation();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/cupomDesconto/" + state.id)
        .then((response) => {
                                setIdCupomDesconto(response.data.id)
                                setCodigoDesconto(response.data.codigoDesconto)
                                setPercentualDesconto(response.data.percentualDesconto)
                                setValorDesconto(response.data.valorDesconto)
                                setValorMinimoPedidoPermitido(response.data.valorMinimoPedidoPermitido)
                                setQuantidadeMaximaUso(response.data.quantidadeMaximaUso)
                                setInicioVigencia(formatarData(response.data.inicioVigencia))
                                setFimVigencia(formatarData(response.data.fimVigencia))
                    })
                }
        }, [state])


    function salvar() {

		let cupomDescontoRequest = {
		    codigoDesconto: codigoDesconto,
            percentualDesconto: percentualDesconto,
            valorDesconto: valorDesconto,
            valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
            quantidadeMaximaUso: quantidadeMaximaUso,
            inicioVigencia:inicioVigencia,
            fimVigencia:fimVigencia

		}
        if (idCupomDesconto != null) { //Alteração:
            axios.put("http://localhost:8082/api/cupomDesconto/" + idCupomDesconto, cupomDescontoRequest)
            .then((response) => { console.log('Cupom desconto alterado com sucesso.') })
            .catch((error) => { console.log('Erro ao alter um cupom desconto.') })
        } else { //Cadastro:
            axios.post("http://localhost:8082/api/cupomDesconto", cupomDescontoRequest)
            .then((response) => { console.log('Cupom desconto cadastrado com sucesso.') })
            .catch((error) => { console.log('Erro ao incluir o cupom desconto.') })
        }
 
	}

    function formatarData(dataParam) {

        if (dataParam === null || dataParam === '' || dataParam === undefined) {
             return ''
        }
    
       
    
        return dataParam[2] + '/' + dataParam[1] + '/' + dataParam[0]
    
      
    
    }

    return (

        <div>

        <MenuSistema />


            <div style={{marginTop: '3%'}}>

            <Container textAlign='justified'>
                { idCupomDesconto === undefined &&
                        <h2> <span style={{color: 'darkgray'}}>Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idCupomDesconto !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />
                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Código'
                                    maxLength="100"
                                    value={codigoDesconto}
			                        onChange={e => setCodigoDesconto(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Percentual Desconto'
                                    value={percentualDesconto}
                                   onChange={e => setPercentualDesconto(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Desconto'
                                    value={valorDesconto}
                                   onChange={e => setValorDesconto(e.target.value)}
                                />

                                

                            </Form.Group>
                            
                            <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Valor Minimo Permitido para o Pedido'
                                    maxLength="100"
                                    value={valorMinimoPedidoPermitido}
				                    onChange={e => setValorMinimoPedidoPermitido(e.target.value)}
                                    /> 
                               

                               <Form.Input
                                    fluid
                                    label='Quantidade Máxima de Uso por Cliente'
                                    maxLength="100"
                                    value={quantidadeMaximaUso}
				                    onChange={e => setQuantidadeMaximaUso (e.target.value)}
                                    /> 

                                </Form.Group>  

                                <Form.Group>

                                <Form.Input
                                    fluid
                                    label='Inicio da Vigência'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={inicioVigencia}
				                        onChange={e => setInicioVigencia(e.target.value)}
                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fim da Vigência'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={fimVigencia}
				                        onChange={e => setFimVigencia(e.target.value)}
                                    /> 
                                </Form.Input>

                            </Form.Group>
                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                               
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                <Link to={'/list-cupomDesconto'}>Voltar</Link>
                            </Button>
                                
                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar ()}
                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>
                    
                </Container>
            </div>
        </div>

    );

}
