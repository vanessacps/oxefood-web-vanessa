import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";


import MenuSistema from "../../MenuSistema";


export default function FormCategoriaProduto() {


    const {state} = useLocation();

    const [idCategoria , setIdCategoria] = useState();
    const [descricao, setDescricao] = useState();


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/categoriaproduto/" + state.id)
        .then((response) => {
            setIdCategoria(response.data.id)
            setDescricao(response.data.descricao)
            
            })
        }
}, [state])

function salvar() {

    let CategoriaProdutoRequest = {
        
       
        descricao: descricao,
       
      
    }

    if (idCategoria != null) { //Alteração:
        axios.put("http://localhost:8082/api/categoriaproduto/" + idCategoria, CategoriaProdutoRequest)
        .then((response) => { console.log('Categoria alterada com sucesso.') })
        .catch((error) => { console.log('Erro ao altera uma categoria.') })
    } else { //Cadastro:
        axios.post("http://localhost:8082/api/categoriaproduto", CategoriaProdutoRequest)
        .then((response) => { console.log('Categoria cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir a categoria.') })
    }
}

   return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>
                { idCategoria === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idCategoria !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Categoria Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Descrição'
                                    maxLength="100"
                                    placeholder='Informe a descrição da categoria do produto'
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
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
                                <Link to={'/list-categoria-produto'}>Voltar</Link>
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
