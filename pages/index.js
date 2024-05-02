// pages/index.js
import { useState } from 'react';
import CepInput from '../components/CepInput';
import CepResult from '../components/CepResult';
import axios from 'axios';
import Head from 'next/head';
import Notification, { notify } from '../components/Notification';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function Home() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setAddress(null);
        setError('CEP não encontrado.');
        notify('CEP não encontrado.', 'error');
      } else {
        setAddress(response.data);
        setError(null);
        notify('CEP encontrado com sucesso!', 'success'); // Adicione esta linha
      }
    } catch (err) {
      setAddress(null);
      setError('Preencha o CEP.');
      notify('Preencha o CEP.', 'error');
    }
  };
  

  // Construa o URL do IBGE com base nos resultados da consulta do CEP
  const ibgeUrl = address ? `https://cidades.ibge.gov.br/brasil/${address.uf.toLowerCase()}/${address.localidade.toLowerCase()}/panorama` : '';


  return (
    <>
      <Head>
        <title>Consulta CEP</title>
        <meta name="description" content="Consulte informações de endereços a partir do CEP. Encontre logradouro, bairro, cidade e estado no Brasil." />
        <meta name="keywords" content="CEP, consulta, endereço, logradouro, bairro, cidade, estado, Brasil" />
      </Head>
      <Header />
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
          {/* <h1 className="text-2xl font-semibold mb-4">Consultar CEP</h1> */}
          <CepInput cep={cep} setCep={setCep} handleSearch={handleSearch} />
          {address && <CepResult address={address} />}
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <Notification />
          {address && (
            <a
              href={ibgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              Mais informações sobre {address.localidade}, {address.uf}
            </a>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
