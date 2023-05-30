import styled from "styled-components"


export const TableContainer = styled`
 .Table{
    margin-top: 50px;
    width: 80%;
    margin-left: 5%;
}

.add{
  width: 10%;
  margin-left: 3%;
}
.delete{
  width: 10%;
  margin-left: 2%;
}
.MuiTableRow-root > * {
   
    padding: 10px;
  }
  
  .MuiTableRow-root.MuiTableRow-head > * {
    font-weight: bold !important;
  }
/*   
  .table-cell {
    border:1px solid #000;
  } */
  
  .Table:first-child {
    border-radius: 0.7rem !important;
  }
  .status {
    padding: 8px;
    border-radius: 9px;
  }
  

  /* menu image upload */


.upload-image-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}

.upload-image-input {
  display: none;
}

.upload-image-label {
  display: inline-block;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  cursor: pointer;
}

.upload-image-label:hover {
  background-color: #e0e0e0;
}

.upload-image-text {
  margin-left: 10px;
}

  
  @media screen and (max-width: 1200px) {
    .Table {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 40rem;
    }
  }
  
  
  @media screen and (max-width: 768px) {
    .Table{
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 23rem;
    }
  }
`;