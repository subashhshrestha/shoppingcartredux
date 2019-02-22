import React from 'react';
import {connect} from 'react-redux';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Badge } from '@material-ui/core';
// import 
class Cart extends React.Component{
    componentWillMount(){
        console.log(this.props.cart)
    }
    render(){
        return(
            <div>
                {this.props.cart.cartItem.map(item=><Cards item={item}/>)}
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    cart:state.cart
})
const Cards =(props)=>{
    // console.log("Card",props)
    return(
        <Badge badgeContent={props.item.quantity} color="secondary">
        <Card className="mycard">
            <CardContent>
                <img src={props.item.image} width='100%'/>
                <Typography style={{color:'gray'}}>{props.item.name}</Typography>
                <Typography style={{color:'tomato'}}><h3>{props.item.price}</h3></Typography>
            </CardContent>
        </Card>
        </Badge>
        
    )
}
export default connect(mapStateToProps)(Cart);