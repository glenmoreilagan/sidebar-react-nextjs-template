import React from "react";
import { Typography } from "@mui/material";

export default function ExtraNavLabelComponent({ label, ...rest }) {
  return (
    <div
      style={{
        padding: "0 24px",
        marginBottom: "8px",
        marginTop: rest.marginTop,
      }}
    >
      <Typography
        variant="caption"
        fontWeight={600}
        style={{
          display: rest.collapsed ? "none" : "block",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </Typography>
    </div>
  );
}
