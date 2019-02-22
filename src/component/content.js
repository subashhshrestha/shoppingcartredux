import React from 'react';
import items from '../item.json';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {add} from '../action';
class Content extends React.Component{
    state={
        item:[]
    }

    componentWillMount(){
        this.setState({
            item:items.items
        })
        // console.log(this.props)
    }
    render(){
        return(
            <div className="content">
                {this.state.item.map(item=><Cards item={item} add={this.props.add}/>
                )}
            </div>
        )
    }
}

const Cards =(props)=>{
    // console.log("Card",props)
    return(
        <>
        <Card className="mycard">
            <CardContent>
                <img src={props.item.image} width='100%'/>
                <Typography style={{color:'gray'}}>{props.item.name}</Typography>
                <Typography style={{color:'tomato'}}><h3>{props.item.price}</h3></Typography>
            </CardContent>
            <CardActions>
                <Button style={{width:'95%',backgroundColor:'tomato',color:'white'}} onClick={()=>props.add(props.item)}>
                    Add To Cart
                </Button>
            </CardActions>
        </Card>
        </>
    )
}
const mapStateToProps=(state)=>({
    cart:state.cart
})

const mapActionToProps=(dispatch)=>({
    add:(data)=>dispatch(add(data))
})
export default connect(mapStateToProps,mapActionToProps)(Content);