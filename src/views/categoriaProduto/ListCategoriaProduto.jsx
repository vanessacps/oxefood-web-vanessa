import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Header, Icon, Modal, Table } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

export default function ListCategoriaProduto () {

   const [lista, setLista] = useState([]);
   const [openModal , setOpenModal] = useState(false);
   const [idRemover , setIdRemover] = useState();

   useEffect(() => {
       carregarLista();
   }, [])

   function carregarLista() {

       axios.get("http://localhost:8082/api/categoriaproduto")
       .then((response) => {
           setLista(response.data)
       })
   }
   function confirmaRemover(id) {
    setOpenModal(true)
    setIdRemover(id)
}

async function remover() {

    await axios.delete('http://localhost:8082/api/categoriaproduto/' + idRemover)
    .then((response) => {

        console.log('categoria removida com sucesso.')

        axios.get("http://localhost:8082/api/categoriaproduto")
        .then((response) => {
            setLista(response.data)
        })
    })
    .catch((error) => {
        console.log('Erro ao remover uma categoria.')
    })
    setOpenModal(false)
}
  
return(
    <div>
        <MenuSistema />
        <div style={{marginTop: '3%'}}>

            <Container textAlign='justified' >

                <h2> Categoria de Produto </h2>
                <Divider />

                <div style={{marginTop: '4%'}}>
                    <Button
                        label='Novo'
                        circular
                        color='orange'
                        icon='clipboard outline'
                        floated='right'
                        as={Link}
                        to='/form-categoria-produto'
                    />
      
      <br/><br/><br/>
                  
                  <Table color='orange' sortable celled>

                      <Table.Header>
                          <Table.Row>
                              
                              
                              <Table.HeaderCell>Descrição</Table.HeaderCell>
                              
                              <Table.HeaderCell textAlign='center'>Ações</Table.HeaderCell>
                          </Table.Row>
                      </Table.Header>
                 
                      <Table.Body>

                          { lista.map(categoria => (

                              <Table.Row key={categoria.id}>
                                                        
                                  <Table.Cell>{categoria.descricao}</Table.Cell>
                                
                                  <Table.Cell textAlign='center'>

                                <Button
                                    inverted
                                    circular
                                    color='green'
                                    title='Clique aqui para editar os dados desta categoria'
                                    icon>
                                        <Link to="/form-categoria-produto" state={{id:categoria.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                </Button>
                            &nbsp;
                                      <Button
                                               inverted
                                               circular
                                               color='red'
                                               title='Clique aqui para remover esta categoria '
                                               icon
                                               onClick={e => confirmaRemover(categoria.id)}>
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
           <Modal
               basic
               onClose={() => setOpenModal(false)}
               onOpen={() => setOpenModal(true)}
               open={openModal}
         >
               <Header icon>
                   <Icon name='trash' />
                   <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse registro? </div>
               </Header>
               <Modal.Actions>
                   <Button basic color='red' inverted onClick={() => setOpenModal(false)}>
                       <Icon name='remove' /> Não
                   </Button>
                   <Button color='green' inverted onClick={() => remover()}>
                       <Icon name='checkmark' /> Sim
                   </Button>
               </Modal.Actions>
         </Modal>


       </div>
   )
}

