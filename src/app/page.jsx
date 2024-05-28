'use client'

import "./page.css";

import Button from "../components/button.jsx";
import Link from "next/link";

import axios from "axios";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function Home() {
  const [perfis, setPerfis]=useState([])

  // const VITE_API_ALL = process.env.VITE_API_ALL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://presencesenai.eastus.cloudapp.azure.com/presence/presence/all', {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setPerfis(response.data.reverse());
      })
      .catch((error) => console.log(error));
  };
  return (
    <main>
      <header>
        <div className="logo-container">
          <img src="./logo.svg" alt="a" />
          <div className="logo-line"></div>
          <div className="logo-text-container">
            <h1>Feira de Profissões</h1>
            <h2>Desenvolvimento Web</h2>
          </div>
        </div>
        <img src="./deco-right.svg" alt="" className="decoration" />
      </header>
      <section>
        <h1 className="title">
          Demonstração de Funcionalidade
          <div className="title-line"></div>
        </h1>
        <div className="top-container">
          <h2>Perfis Cadastrados</h2>
          <Link href="cadastro">
            <Button title="Cadastrar Novo Perfil" />
          </Link>
        </div>
        <div className="table-container">
        <TableContainer
            
            sx={{ maxHeight: 520 }}
            style={{ overflowY: "scroll" }}
          >
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Nome</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Data de Nascimento</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Email</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Profissão dos Sonhos</b>
                  </TableCell>
                  <TableCell style={{ backgroundColor: "#f0f0f0" }}>
                    <b className="table-header-text">Bairro</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {perfis.map((perfis) => (
                  <TableRow
                    key={perfis.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {perfis.name}
                    </TableCell>
                    <TableCell>{perfis.date_birth}</TableCell>
                    <TableCell>{perfis.email}</TableCell>
                    <TableCell>{perfis.professional_goal}</TableCell>
                    <TableCell>{perfis.neighborhood}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </section>
    </main>
  );
}
