import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { logout } from './views/util/AuthenticationService';


class MenuSistema extends React.Component{

   state = {
       activeItem: 'home'
   }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

   logout = () => {
    logout()
   }

   render(){
       return(
           <>
               <Menu inverted>
                  
               <Menu.Item
                    name='home'
                    active={this.state.activeItem === 'home'}
                    onClick={this.handleItemClick}
                    as={Link}
                    to='/home'
                />
                
                <Menu.Item
                    className='navbar__item--mobile'
                    onClick={this.logout}
                    content='Sair'
                    as={Link}
                    to='/'
                />


                    <Menu.Item
                       name='cliente'
                       active={this.state.activeItem === 'cliente'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-cliente'
                   />

                   <Menu.Item
                       name='produto'
                       active={this.state.activeItem === 'produto'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-produto'
                   />

                   <Menu.Item
                       name='entregador'
                       active={this.state.activeItem === 'entregador'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-entregador'
                   />

                    <Menu.Item
                       name='Categoria Produto'
                       active={this.state.activeItem === 'Categoria Produto'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-categoria-produto'
                   />

                    <Menu.Item
                       name='Cupom Desconto'
                       active={this.state.activeItem === 'Cupom Desconto'}
                       onClick={this.handleItemClick}
                       as={Link}
                       to='/list-cupomDesconto'
                   />

               </Menu>
           </>
       )
   }
}

export default MenuSistema;
