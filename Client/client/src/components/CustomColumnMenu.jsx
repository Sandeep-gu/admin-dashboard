import React from "react";
import { GridColumnMenuContainer } from "@mui/x-data-grid";
// import { GridFilterMenuItem } from "@mui/x-data-grid";
export default function CustomColumnMenu(props) {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      {/* <GridFilterMenuItem onClick={hideMenu} column={currentColumn} /> */}
      {/* <HideGridColMenuItem onClick={hideMenu} column={currentColumn} /> */}
    </GridColumnMenuContainer>
  );
}
