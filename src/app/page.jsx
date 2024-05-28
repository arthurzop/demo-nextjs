import "./page.css";

import Button from "../components/button.jsx";
import Link from "next/link";

import axios from "axios";

export default function Home() {
  
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
        <div className="table-container"></div>
      </section>
    </main>
  );
}
