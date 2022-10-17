import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Web3Modal from "web3modal";
import swal from "sweetalert";
import { contract_address, contract_abi, speedy_nodes } from "../config.js";

const Mint = () => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch_data();
  }, []);
  const [connected, setConnected] = useState(false);
  const [mintNumber, setMintNumber] = useState(1);
  const [mintingcount, setmintingcount] = useState(1);
  const [totalsupply, settotalsupply] = useState(0);
  const [price, set_price] = useState(0);
  // const [total, set_total] = useState(0.2);
  // set_total(mintNumber*price);
  let total = mintNumber * price + 0.000000000000001;

  const mintButtonClickHandler = () => {
    sale_controller();
  };
  const [walletstatus, set_walletstatus] = useState("Connect Wallet");

  async function connect_wallet() {
    if (Web3.givenProvider) {
      const providerOptions = {
        /* See Provider Options Section */
      };

      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions, // required
      });

      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);

      web3.eth.net.getId().then((result) => {
        console.log("Network id: " + result);
        if (result !== 1) {
          swal("Wrong Network Selected. Select Ethereum Mainnet");
        }
      });
      set_walletstatus("Wallet Connected");
      setConnected(true);
    } else {
      swal("Web3 Not Found");
    }
  }

  async function fetch_supply() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.totalSupply().call((err, result) => {
      console.log("error: " + err);
      if (result != null) {
        settotalsupply(result);
      }
    });
  }

  async function fetch_data() {
    fetch_supply();
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()

    contract.methods.Presale_status().call((err, result) => {
      console.log("error: " + err);
      if (result === true) {
        set_price(0.075);
      } else {
        set_price(0.085);
      }
    });
  }

  async function show_error_alert(error) {
    let temp_error = error.message.toString();
    console.log(temp_error);
    let error_list = [
      "It's not time yet",
      "Sent Amount Wrong",
      "Max Supply Reached",
      "You have already Claimed Free Nft.",
      "Presale have not started yet.",
      "You are not in Presale List",
      "Presale Ended.",
      "You are not Whitelisted.",
      "Sent Amount Not Enough",
      "Max 20 Allowed.",
      "insufficient funds",
      "Sale is Paused.",
      "mint at least one token",
      "max per transaction 2",
      "Not enough tokens left",
      "incorrect ether amount",
      "2 tokens per wallet allowed in pre sale",
      "10 tokens per wallet allowed in publicsale",
      "Invalid merkle proof",
      "Not enough tokens allowed in current phase",
      "Sold Out",
      "No more tokens left in current phase",
      "Wallet limit Reached",
    ];

    for (let i = 0; i < error_list.length; i++) {
      if (temp_error.includes(error_list[i])) {
        // set ("Transcation Failed")
        // alert(error_list[i]);
        swal("Alert!", error_list[i], "warning");
      }
    }
  }
  function sale_controller() {
    const web3 = new Web3(speedy_nodes);
    const contract = new web3.eth.Contract(contract_abi, contract_address);
    //await Web3.givenProvider.enable()
    console.log("error: i am in fetch ");
    contract.methods.Presale_status().call((err, result) => {
      console.log("error: " + err);
      console.log(result);
      if (result === true) {
        presalemint_nft();
      } else {
        mint_nft();
      }
    });
  }

  async function presalemint_nft() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(contract_abi, contract_address);
      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      console.log("addresses[0]: " + addresses[0]);
      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)

      let res = await fetch(
        "https://5p0p11988e.execute-api.us-east-1.amazonaws.com/proof/" +
          address
      );

      console.log(res, "birthali");
      let proof = await res.json();
      console.log(proof);

      try {
        const estemated_Gas = await contract.methods
          .buy_presale(mintNumber, proof)
          .estimateGas({
            from: address,
            value: web3.utils.toWei(total.toString(), "ether"),
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
          });
        console.log(estemated_Gas);

        const result = await contract.methods
          .buy_presale(mintNumber, proof)
          .send({
            from: address,
            value: web3.utils.toWei(total.toString(), "ether"),
            gas: estemated_Gas,
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
          });
      } catch (error) {
        show_error_alert(error);
      }
    }
  }
  async function mint_nft() {
    if (Web3.givenProvider) {
      const web3 = new Web3(Web3.givenProvider);
      await Web3.givenProvider.enable();
      const contract = new web3.eth.Contract(contract_abi, contract_address);

      const addresses = await web3.eth.getAccounts();
      const address = addresses[0];
      console.log("addresses[0]: " + addresses[0]);
      // console.log("addresses[1]: "+addresses[1])
      // console.log("Default address: "+await web3.eth.defaultAccount)
      try {
        const estemated_Gas = await contract.methods
          .buy(mintNumber)
          .estimateGas({
            from: address,
            value: web3.utils.toWei(total.toString(), "ether"),
            maxPriorityFeePerGas: null,
            maxFeePerGas: null,
          });
        console.log(estemated_Gas);
        const result = await contract.methods.buy(mintNumber).send({
          from: address,
          value: web3.utils.toWei(total.toString(), "ether"),
          gas: estemated_Gas,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        });
      } catch (error) {
        show_error_alert(error);
      }

      // await contract.methods.tokenByIndex(i).call();
    }
  }

  // const decrementCount = () => {
  //   if (quantity > 1) setQuantity(quantity - 1);
  // };

  // const incrementCount = () => {
  //   setQuantity(quantity + 1);
  // };

  // useEffect(() => {}, []);

  return (
    <div className="col-sm-12 text-center">
      {/* <img
        className="paint-splash"
        src="/paint_splash1.png"
        alt="paint_splash1"
      /> */}
      <div className="left-right">
        {/* <div className="left">
          <img className="coming-soon" src="/Mint_Live.gif" alt="collection" />
        </div> */}

        <div className="right">
          <h1 className="inner-container">Minting Soon</h1>
          <div className="number-container">
            <h3 style={{color: "white"}}>{totalsupply}/7000</h3>
            {/* <h3>{totalsupply}/7000</h3> */}
          </div>
          <div className="counter-container" style={{ color: "black" }}>
            <div className="counter">
              <select
                onChange={(e) => {
                  setMintNumber(e.currentTarget.value);
                }}
                name="cars"
                id="cars"
                style={{
                  padding: "5px 24px",
                  fontSize: "25px",
                  marginBottom: "100px",
                  borderRadius: "5px",
                }}
              >
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
              </select>
            </div>
            {connected ? (
              <button
                type="button"
                className="btn btn-lg btn-secondary"
                style={{ padding: "15px 50px" }}
                onClick={mintButtonClickHandler}
                // onChange={(e) => setQuantity(e.target.value)}
              >
                Mint
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-lg btn-secondary"
                style={{ padding: "15px 50px" }}
                onClick={connect_wallet}
                // onChange={(e) => setQuantity(e.target.value)}
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mint;
