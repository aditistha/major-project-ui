import styled from "styled-components"


export const AdminDashboardcontainer = styled.div`
.background{
    background-image: linear-gradient(106.37deg, #ffe1bc,#ffcfd1,#f3c6f1);
       height:auto;
       display: flex;
       justify-content: center;
       align-items: center;
       font-family: 'Inter', sans-serif;
}
.glass-bg{
    display: grid;
    
    width: 97%;
    border-radius: 2rem;
    background-color: rgba(255, 255, 255, 0.54);
    overflow: hidden;
    grid-template-columns: 14rem auto;
    box-shadow: black;
}
@media screen and (max-width: 600px) {
    .AppGlass{
      grid-template-columns: 10% 50% auto;
      overflow-y: scroll;
      height:100%;
    } 
  }
  
  @media screen and (max-width: 768px) {
    .AppGlass{
      grid-template-columns: 100%;
      height:100%;
    } 
   
  }
`;