import React from "react";
import { Button } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const DownloadButton = () => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href="https://github.com/msrdeepu/visitingcardappreact"
    >
      <Button startIcon={<CodeIcon />} variant="contained">
        Get source Code
      </Button>
    </a>
  );
};

export default DownloadButton;
