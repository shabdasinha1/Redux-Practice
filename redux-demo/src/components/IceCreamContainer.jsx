import { connect } from "react-redux"
import { buyIceCream } from "../redux/Index"



function IceCreamContainer(props){
    return(
        <>
        <div>
            <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
        </>
    )
}

const mapStateToProps = state=>{
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
} 

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)




// import { useDispatch, useSelector } from "react-redux"
// import { buyIceCream } from "../redux/Index";

// function HooksIceCreamContainer(){
//     const numOfIceCreams = useSelector(state=>state.iceCream.numOfIceCreams);
//     const dispatch = useDispatch()
//     return(
//         <>
//         <div>
//             <h2>Number of Cakes - {numOfIceCreams} </h2>
//             <button onClick={()=>dispatch(buyIceCream())}>Buy Cake</button>
//         </div>
//         </>
//     )
// }

// export default HooksIceCreamContainer