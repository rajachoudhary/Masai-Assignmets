import styled from "styled-components"

const Drawer = styled.div`
width:150px;
margin-left:20px;
max-height:400px;
`;
const DrawerItem = styled.p`

`;
const Icon = styled.img`
margin-right:30px
`

const ReactSideBar = ()=> {
    return(
    <div style={{border:"1px solid black",maxHeight:"400px",overflow:"auto",width:"200px"}}>
      <Drawer>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="inbox"/>Inbox</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Starred"/>Starred</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Email"/>Email</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Draft"/>Draft</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="AllMail"/>All mail</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Trash"/>Setting</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Trash"/>Trash</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Trash"/>Log Out</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Trash"/>Privacy</DrawerItem>
      <DrawerItem><Icon src="https://img.icons8.com/material/24/000000/inbox.png" alt="Trash"/>Certificate</DrawerItem>
      </Drawer>
    </div>
    )
}
export default ReactSideBar;