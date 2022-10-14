export default function initFetchBitcoin() {
  // FETCH PELA PROMISE
  // fetch('https://blockchain.info/ticker').then((response) => {
  //   response.json().then((bitcoin) => {
  //     const btcPreco = document.querySelector('.btc-preco')
  //     btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4 )
  //   })
  // }).catch((erro) => {
  //   console.log(Error(erro))
  // })

  // ASYNC AWAIT
  async function fetchBitcoin(url) {
    try {
      const bitcoinResponse = await fetch(url);
      const bitcoinJson = await bitcoinResponse.json();
      const btcPreco = document.querySelector('.btc-preco');

      btcPreco.innerText = (30 / bitcoinJson.BRL.buy).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin('https://blockchain.info/ticker');
}
