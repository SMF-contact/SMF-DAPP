let web3;

if (typeof window !== "undefined" && window.ethereum) {
  // eslint-disable-next-line global-require

  const Web3 = require("web3");
  web3 = new Web3(window.ethereum);
} else {
  const Web3 = require("web3");
  web3 = new Web3(new Web3.providers.HttpProvider(""));
}

if (typeof window !== "undefined") {
  if (window.ethereum) {
    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });

    window.ethereum.on("accountsChanged", function (accounts) {
      document.location.reload();
      localStorage.clear();
    });
  }
}

export const getNetwork = async () => {
  return web3.eth.net.getId().then((res) => {
    if (res !== 56) {
      /* return window.ethereum.request({
        method: "wallet_switchEthereumChain",

        params: [{ chainId: supportedNetworkIdInHex }],
      }); */

      window.ethereum
        .request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x38",
              chainName: "Binance Smart chain",
              nativeCurrency: {
                name: "Ether",
                symbol: "ETH",
                decimals: 18,
              },
              rpcUrls: ["https://bsc-dataseed.binance.org/"],
              blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io"],
            },
          ],
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      return Promise.resolve(res);
    }
  });
};

export const getAccount = async () => {
  return web3.eth.getAccounts().then((accounts) => {
    return Promise.resolve(accounts[0]);
  });
};

export const enableEthereum = async () => {
  if (window.ethereum) {
    const Web3 = require("web3");

    try {
      await window.ethereum.send("eth_requestAccounts");
      /*   const web3Modal = new Web3Modal({
        network: 'arbitrum-rinkeby',

        cacheProvider: false,
        disableInjectedProvider: false,
        providerOptions: {
          walletconnect: {
            package: WalletConnectProvider,
            options: {
              rpc: {
                421611: 'https://rinkeby.arbitrum.io/rpc',
              },
            },
          },
        },

        theme: 'dark',
      }) */
      //provider = await web3Modal.connect()
      web3 = new Web3(window.ethereum);
    } catch (e) {
      return;
    }
  } else {
    const Web3 = require("web3");
    web3 = new Web3(new Web3.providers.HttpProvider(""));
  }

  return Promise.resolve(web3);
};

export const loadAccount = async (showError = false) => {
  try {
    await enableEthereum();
    await getNetwork();
  } catch (err) {
    if (showError) {
      throw Error(err);
    }
  }
};
export const disconnectAccount = async () => {
  //alert('Please make sure to disconnect your wallet on Metamask!')
  localStorage.clear();
  document.location.reload();
};
