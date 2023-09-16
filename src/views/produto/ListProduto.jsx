import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table , Modal, Header } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListProduto () {

   const [lista, setLista] = useState([]);
   const [openModal , setOpenModal] = useState(false);
   const [idRemover , setIdRemover] = useState();

   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8082/api/produto")
       .then((response) => {
           setLista(response.data)
       })
   }
   function confirmaRemover(id) {
    setOpenModal(true)
    setIdRemover(id)
}

async function remover() {

    await axios.delete('http://localhost:8082/api/produto/' + idRemover)
    .then((response) => {

        console.log('produto removido com sucesso.')

        axios.get("http://localhost:8082/api/produto")
        .then((response) => {
            setLista(response.data)
        })
    })
    .catch((error) => {
        console.log('Erro ao remover um produto.')
    })
    setOpenModal(false)
}
  
return(
    <div>
        <MenuSistema />
        <div style={{marginTop: '3%'}}>

            <Container textAlign='justified' >

                <h2> Produto </h2>
                <Divider />

                <div style={{marginTop: '4%'}}>
                    <Button
                        label='Novo'
                        circular
                        color='orange'
                        icon='clipboard outline'
                        floated='right'
                        as={Link}
                        to='/form-produto'
                    />
      
      <br/><br/><br/>
                  
                  <Table color='orange' sortable celled>

                      <Table.Header>
                          <Table.Row>
                              <Table.HeaderCell>Titulo</Table.HeaderCell>
                              <Table.HeaderCell>Codigo</Table.HeaderCell>
                              <Table.HeaderCell>Descrição</Table.HeaderCell>
                              <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                              <Table.HeaderCell>Tempo minino de entrega</Table.HeaderCell>
                              <Table.HeaderCell>Tempo maximo de entrega</Table.HeaderCell>
                              <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>
                 
                      <Table.Body>

                          { lista.map(produto => (

                              <Table.Row key={produto.id}>
                                  <Table.Cell>{produto.titulo}</Table.Cell>
                                  <Table.Cell>{produto.codigo}</Table.Cell>
                                  <Table.Cell>{produto.descricao}</Table.Cell>
                                  <Table.Cell>{produto.valorUnitario}</Table.Cell>
                                  <Table.Cell>{produto.tempoEntregaMinino}</Table.Cell>
                                  <Table.Cell>{produto.tempoEntregaMaximo}</Table.Cell>
                                  <Table.Cell textAlign='center'>

                                <Button
                                    inverted
                                    circular
                                    color='green'
                                    title='Clique aqui para editar os dados deste cliente'
                                    icon>
                                        <Link to="/form-produto" state={{id: produto.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                </Button>
                            &nbsp;
                                      <Button
                                               inverted
                                               circular
                                               color='red'
                                               title='Clique aqui para remover este produto'
                                               icon>
                                                   <Icon name='trash' />
                                           </Button>

                                       </Table.Cell>
                                   </Table.Row>
                               ))}

                           </Table.Body>
                       </Table>
                   </div>
               </Container>
           </div>

       </div>
   )
}

