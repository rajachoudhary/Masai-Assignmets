import styled from "styled-components";

const Card = styled.div`
width:300px;
margin:auto;
margin-top:150px;
`
const PaymentHeading = styled.div`
font-size:25px;
padding-bottom:30px;
`
const PaymentD = props => <PaymentHeading {...props}/>

const InputDiv = styled.div`
padding-top:5px;
border:none;
border-bottom: 1.5px solid #F6556B;
width:250px;
margin-bottom:40px;
`
const Inputheading =styled.div`
font-size:10px;
font-weight:bold;
`
const ImgDiv = styled.div`
`
const Input = styled.input`
border:none;
margin-left:5px;
height:20px;
font-size:15px;

`
const InputImg = styled.img`
height:20px;


`
const Form = ()=> {
    return(
        <Card>
            <PaymentHeading as={PaymentD}>Payment Details</PaymentHeading>
            <Inputheading>CARDHOLDER NAME</Inputheading>
            <InputDiv style={{display:"flex"}}>
                <ImgDiv>
                <InputImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvPasPbrVe2Txcc4aGbZkCddJkVTaj8uyb7A&usqp=CAU" alt="logo"/>
                </ImgDiv>
                <Input placeholder="Name"/>
            </InputDiv>
            <Inputheading>CARD NUMBER</Inputheading>
            <InputDiv style={{display:"flex"}}>
                <ImgDiv>
                <InputImg src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-credit-card-ecommerce-vitaliy-gorbachev-blue-vitaly-gorbachev.png" alt="logo"/>
                </ImgDiv>
                <Input placeholder="xxxx xxxx xxxx xxxx"/>
            </InputDiv>
            
            <div style={{display:"flex"}}>
            <InputDiv style={{display:"flex",width:"80px",marginRight:"20px"}}>
                <ImgDiv>
                <InputImg src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-date-law-and-crime-icongeek26-flat-icongeek26.png"alt="logo"/>
                </ImgDiv>
                <Input type="number" placeholder="month"/>
            </InputDiv>
            <InputDiv style={{display:"flex",width:"80px",marginRight:"20px"}}>
                <ImgDiv>
                <InputImg src="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-date-law-and-crime-icongeek26-flat-icongeek26.png"alt="logo"/>
                </ImgDiv>
                <Input type="number" placeholder="month"/>
            </InputDiv>
            <InputDiv style={{display:"flex",width:"80px",marginRight:"20px"}}>
                <ImgDiv>
                <InputImg src="https://img.icons8.com/material-outlined/48/000000/lock--v1.png" alt="logo"/>
                </ImgDiv>
                <Input type="number" placeholder="CVC"/>
            </InputDiv>
            
            </div>
        </Card>
    )
}
export default Form;