import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import CloseIcon from "@mui/icons-material/Close";

export default function TransientDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const {
    anchor,
    button,
    className,
    fullWidth,
    isDrawerShowAbove,
    setEmailValue,
    id,
    commissionFees,
  } = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    if (!open) {
      let data = document.getElementById(id);
      let data1 = data && data.getAttribute("role");
      if (data1 && id === "tooltipWithdrawDashboard") {
        document.getElementById("tooltipClose")?.click();
        // document.getElementById("tooltipClose1")?.click();
      } else if (data1) {
        document.getElementById(`${id}R`)?.click();
      }
    }

    setState({ ...state, [anchor]: open });
    setEmailValue ? setEmailValue("") : "";
  };

  const list = (anchor) => (
    <div
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
      className="bg-[#0d111d] border border-[#1e2331] w-[340px] h-full"
    >
      <div
        id={props.commissionFees ? "commissionDrawer" : "closeTransient"}
        className={`flex justify-between items-center p-2`}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div>{props.wallet}</div>
        <CloseIcon className="text-gray-400 cursor-pointer" />
      </div>
      <div>{props.content}</div>
    </div>
  );

  return (
    <div className={className}>
      <div onClick={toggleDrawer(anchor, true)}>{button}</div>
      <Drawer
        id="transientDrawer"
        anchor={anchor}
        open={
          props.content && state[anchor]
            ? props.content && state[anchor]
            : false
        }
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
