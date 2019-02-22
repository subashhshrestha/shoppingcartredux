import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Badge } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
class Header extends React.Component{
    render(){
        console.log(this.props)
        let count=0;
        this.props.cart.cartItem.forEach(item => {
            count=count+item.quantity;
            
        });
        return(
            <div>
                <AppBar position="sticky" className="appbar">
                <Toolbar className="mytoolbar">
                <Link className="mylink" to="/">
                <Typography style={{color:'white'}}>
                    Home
                </Typography>
                </Link>
                <Link className="mylink" to='/cart'>
                <Badge badgeContent={count} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                </Link>
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
export default connect(mapStateToProps)(Header);