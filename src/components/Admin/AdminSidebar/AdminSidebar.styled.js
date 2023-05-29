import styled from "styled-components"


export const SidebarContainer = styled.div`
.Sidebar{
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 2rem;
    transition: all 300ms ease;
    overflow-y: scroll;

}

.logo{
  background-color: #ffcfd1!important;
}
.logo>span{
    margin-left: 2em;
}
/* menu */

.menu{
    /* margin-top: 1rem; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #ffcfd1!important;
   
}
a{
    text-decoration: none!important;
    color: black !important;
}
.menuItem{
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 2.5rem;
  margin-left: 1rem;
  position: relative;
  transition: all 300ms ease;
  font-size: 16px;
  border-radius: 0.7rem;
}
.menuItem > span {
  margin-top: 0.4rem; /* Adjust this value as needed */
}

.menuItem > .icon {
  display: flex;
  align-items: center;
  flex-shrink: 0; /* Add this line */
}
.menuItem:hover{
    cursor: pointer;
}

.dropdownMenu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.dropdownMenuItem {
  display: block;
  padding: 0.5rem;
  color: #000;
  text-decoration: none !important;
}
.active{
 
    background: #f799a354;
    margin-left: -1rem;
   
}
.active::before{
    content:'';
    width:8px;
    height:100%;
    background: #FF919D;
   
}
.menu .menuItem:last-child{
   margin-bottom: 2rem;
    width: 100%;
}
.bars{
    display: none;
}
@media screen and (max-width: 1200px) {
    .menuItem>span{
      display: none;
    }
    .logo{
      display: none;
    }
    .icon{
        font-size: 30px;
    }
  }
  
  @media screen and (max-width: 768px) {
    .sidebar{
      position: fixed;
      z-index: 9;
      background: #ffe0e0;
      width: 55%;
      padding-right: 1rem;
      height: 100%;
      overflow-y: scroll;
    }
    .menuItem>span{
      display: block;
    }
    .logo{
      display: flex;
    }
    .menu .menuItem:last-child {
      position: relative;
      margin-top: 6rem;
    }
    .bars{
      display: flex;
      position: fixed;
      top: 2rem;
      left:60%;
      background:#ffe0e0;
      padding:10px;
      border-radius: 10px;
      z-index: 9;
    }
    .close{
      left: -60%;
    }
  }
`;