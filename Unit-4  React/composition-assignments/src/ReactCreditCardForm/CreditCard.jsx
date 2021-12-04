import  styled from "styled-components"

const Card = styled.div`
border:1px solid #F64A61;
border-radius:10px;
color:white;
width:300px;
height:180px;
background-color:#F64A61;
box-shadow: 35px 35px 2px 1px rgb(245,244,241);
margin:auto;
`
const CardName = styled.div`
float:right;
font-weight:bold;
font-size:25px;
margin-right:25px;
margin-top:10px;
`
const Chip = styled.div`
max-height:50px;
width:150px;
margin-top:40px;
margin-left:20px;


`
const CardNo = styled.div`
    display:flex;
    margin-left:20px;
    font-size:20px;
    *{
        padding-right:15px;
        padding-bottom:5px;
        padding-top:5px;
        
    }
`
const CardDetail = styled.div`
    display:flex;
    margin-left:20px;
    
    >p{
        padding-right:35px;
        font-weight:bold;
        font-size:8px;   
    }
    >div:nth-child(1){
        padding-right:63px;
    }
    >div:nth-child(2){
        padding-right:35px;
    }
`
const CreditCard = () => {
    return(
        <Card>
            <CardName>Visa</CardName>
            <Chip><img style={{height:"35px",width:"35px"}}src="https://cdn.iconscout.com/icon/premium/png-128-thumb/credit-card-chip-1522262-1288452.png" alt="chip"/></Chip>
            <CardNo>
                <div>1234</div>
                <div>5678</div>
                <div>0145</div>
                <div>2879</div>
            </CardNo>
            <CardDetail>
                <p>CARD HOLDER</p>
                <p>EXPIRES</p>
                <p>cvc</p>
            </CardDetail>
            <CardDetail>
                <div>Raja</div>
                <div>09/29</div>
                <div>345</div>
            </CardDetail>
        </Card>
    )
}
export default CreditCard;