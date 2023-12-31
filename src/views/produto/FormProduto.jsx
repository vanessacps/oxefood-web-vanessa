import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Icon } from "semantic-ui-react";


import MenuSistema from "../../MenuSistema";


export default function FormProduto() {


    const {state} = useLocation();

    const [idProduto , setIdProduto] = useState();
    const [titulo, setTitulo] = useState();
    const [codigo, setCodigo] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoEntregaMinino, setTempoEntregaMinino] = useState();
    const [tempoEntregaMaximo, setTempoEntregaMaximo] = useState();
    const [idCategoria, setIdCategoria] = useState();
    const [listaCategoria, setListaCategoria] = useState([]);


    useEffect(() => {
        if (state != null && state.id != null) {
            axios.get("http://localhost:8082/api/produto/" + state.id)
        .then((response) => {
            setIdProduto(response.data.id)
            setTitulo(response.data.titulo)
            setCodigo(response.data.codigo)
            setDescricao(response.data.descricao)
            setValorUnitario(response.data.valorUnitario)
            setTempoEntregaMinino(response.data.tempoEntregaMinino)
            setTempoEntregaMaximo(response.data.tempoEntregaMaximo)
            setIdCategoria(response.data.categoria.id)

            })
        }

        axios.get("http://localhost:8082/api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

}, [state])

function salvar() {

    let produtoRequest = {
        idCategoria: idCategoria,
        titulo: titulo,
        codigo: codigo,
        descricao: descricao,
       valorUnitario: valorUnitario,
       tempoEntregaMinino: tempoEntregaMinino,
       tempoEntregaMaximo: tempoEntregaMaximo
      
    }

    if (idProduto != null) { //Alteração:
        axios.put("http://localhost:8082/api/produto/" + idProduto, produtoRequest)
        .then((response) => { console.log('Produto alterado com sucesso.') })
        .catch((error) => { console.log('Erro ao alter um produto.') })
    } else { //Cadastro:
        axios.post("http://localhost:8082/api/produto", produtoRequest)
        .then((response) => { console.log('Produto cadastrado com sucesso.') })
        .catch((error) => { console.log('Erro ao incluir o produto.') })
    }
}

   return (
        <div>

            <MenuSistema />

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified'>
                { idProduto === undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro</h2>
                    }
                    { idProduto !== undefined &&
                        <h2> <span style={{color: 'darkgray'}}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
                    }

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
                            <Form.Select
                                required
                                fluid
                                tabIndex='3'
                                placeholder='Selecione'
                                label='Categoria'
                                options={listaCategoria}
                                value={idCategoria}
                                onChange={(e,{value}) => {
                                    setIdCategoria(value)
                                }}
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
                                <Link to={'/list-produto'}>Voltar</Link>
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
