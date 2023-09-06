import React from "react";

import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from "../../MenuSistema";


export default function FormProduto() {

    return (

        <div>
            <MenuSistema />


            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="400" 
                                    placeholder='Informe o titulo do produto'
                                   />

                                <Form.Input
                                    required
                                    fluid
                                    label='Código do Produto'
                                    placeholder='Informe o código do produto'>
                                    
                                </Form.Input>

                            </Form.Group>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    fluid
                                    label='Descrição'
                                    maxLength="500"
                                    placeholder='Informe a descrição do produto'
                                     />


                            </Form.Group >

                            <Form.Group widths='equal' >
                                <Form.Input
                                    required
                                    fluid
                                    label='Valor Unitario'
                                    width={8}>
                                    
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Mínino em Minutos'                   
                                    width={8}
                                    placeholder='30'>
                                   
                                </Form.Input>
                                <Form.Input 
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={8}
                                    placeholder='40' />

                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
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
