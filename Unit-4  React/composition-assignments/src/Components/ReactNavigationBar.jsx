import styled from "styled-components";

const Toolbar = styled.div`
display:flex;
width:800px;
justify-content:center;
margin:auto;
background-color:blue;
`
const SiteName = styled.div`
padding-right:200px;
font-size:20px;
`
const DrawerItem = styled.div`
font-size:20px;
padding:10px
`
const ReactNavigationBar = ()=>{
    return(
        <Toolbar>
            <SiteName>
                <DrawerItem>Site Name</DrawerItem>
            </SiteName>
            <DrawerItem>About Us</DrawerItem>
            <DrawerItem>Prices</DrawerItem>
            <DrawerItem>Start Page</DrawerItem>
            <DrawerItem>Offer</DrawerItem>
            <DrawerItem>Contact</DrawerItem>
        </Toolbar>
    )
}
export default ReactNavigationBar;

