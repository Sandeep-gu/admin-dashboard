import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from "../state/api";
function Headers({ title, subtitle }) {
  const theme = useTheme();

  const { data, isLoading } = useGetProductsQuery();
  console.log("data", data);
  return (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[100]}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Headers;
