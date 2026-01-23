import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Table,
  CircularProgress
} from "@mui/material";
import { Outlet } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const Prohile = () => {
     const { t } = useTranslation();

    return (
      <Box component={'section'}>
        <Typography>{t("My Profile")}</Typography>
        <Button component={NavLink} to=''>{t("Info")}</Button>
        <Button component={NavLink} to='orders'>{t("Orders")}</Button>
        <Outlet/>
      </Box>
        
    );
}

export default Prohile;
