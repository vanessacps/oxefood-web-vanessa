import axios from "axios";
import React, { useState } from "react";
import InputMask from 'react-input-mask';
import { Container, Icon, Divider, Form, TextArea, Button } from "semantic-ui-react";

import MenuSistema from "../../MenuSistema";


export default function FormProduto() {


    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinino, setTempoEntregaMinino] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
    
    function salvar() {
    
    	let produtoRequest = {
 	    titulo: titulo,
 	    codigo: codigo,
 	    descricao: descricao,
        valorUnitario: valorUnitario,
        tempoEntregaMinino: tempoEntregaMinino,
        tempoEntregaMaximo: tempoEntregaMaximo
    	}
    	
    	axios.post("http://localhost:8082/api/produto", produtoRequest)
    	     .then((response) => {
    	     	console.log("Produto cadastrado com sucesso.")
    	     })
    	     .catch((error) => {
    	     	console.log("Erro ao incluir o produto.")
    	     })
    }

    return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2> <span style={{ color: 'darkgrey' }}>Produto &nbsp; <Icon name='angle double right' size="small" /> </span> Cadastro</h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Título'
                                    maxLength="100"
                                    placeholder='Informe o título do produto'
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    maxLength="100"
                                    placeholder='Informe o código do produto'
                                    value={codigo}
                                    onChange={e => setCodigo(e.target.value)}
                                />



                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    label='Descrição'
                                    fluid
                                    cols='600'
                                    placeholder='Informe a descrição do produto'
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>

                                <Form.Input
                                    required
                                    fluid
                                    label="Valor Unitário"
                                    maxLength="100"
                                    width={6}
                                    value={valorUnitario}
                                    onChange={e => setValorUnitario(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Tempo de Entrega Mínimo em Minutos"
                                    maxLength="100"
                                    placeholder='30'
                                    width={6}
                                    value={tempoEntregaMinino}
                                    onChange={e => setTempoEntregaMinino(e.target.value)}
                                />

                                <Form.Input
                                    fluid
                                    label="Tempo de Entrega Máximo em Minutos"
                                    maxLength="100"
                                    placeholder='40'
                                    width={6}
                                    value={tempoEntregaMaximo}
                                    onChange={e => setTempoEntregaMaximo(e.target.value)}
                                />

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="orange"
                            >
                                <Icon name='reply' />
                                Voltar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition="left"
                                color="blue"
                                floated="right"
                                onClick={() => salvar()}
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
