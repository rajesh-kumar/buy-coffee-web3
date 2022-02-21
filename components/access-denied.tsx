import { signIn } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
declare var window: any

export default function AccessDenied() {

  const [currentAccount, setCurrentAccount] = useState("");

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        toast.warn("Make sure you have MetaMask Connected", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Buy Me a Coffee</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-6">
            Buy Me A Coffee
          </h1>
          <div>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mt-3"
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}
            >
              Sign in with Web 2.0 Auth Providers
            </a>
          </div>

          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full mt-3"
              onClick={connectWallet}>
              Sign in with Web 3.0 Auth Providers
            </button>
          </div>
        </main>
      </div>
  )
}