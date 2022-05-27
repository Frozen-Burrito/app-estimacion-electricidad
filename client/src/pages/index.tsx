import React, { useEffect, useState } from "react";

import Layout from "../components/layout";

const IndexPage = (): JSX.Element => {

  const API_URL = "/api/v1";

  const [message, setMessage] = useState("Sin datos :(");

  useEffect(() => {
    async function getMensaje() {
      const url = `${API_URL}/hola`;
      const response = await fetch(url);

      console.log(response);

      const data = await response.json();

      setMessage(data.message);
    }

    getMensaje();

  }, []);

  return (
    <Layout>
      <>
        <h1>Pagina de Inicio</h1>

        <p>Mensaje desde API: { message }</p>
      </>
    </Layout>
  );
}

export default IndexPage
