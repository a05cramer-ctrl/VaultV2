// THE VAULT site config — edit this file on GitHub at each step, Vercel redeploys in ~1 min.
window.VAULT_CFG = {
  CA:    "",                      // contract address
  CHAIN: "robinhood",             // "solana" (OTC desk / pump.fun) | "robinhood" (Pons)
  PAD:   "pons",                  // "pumpfun" | "pons" | "stonkfun"
  X:     "https://x.com/",        // your X profile URL
  BUY:   "",                      // optional: override the buy link
  CHART: "",                      // optional: override the chart link

  // ---- THE VAULT ----
  VAULT_ADDR: "",                 // PUBLIC address of the vault wallet (dev rewards + bonus). Shown with live balance.
  LEVELS: [50000, 100000, 500000, 1000000, 5000000, 10000000],   // market cap that releases digit 1..6
  DIGITS: "",                     // digits released so far, left to right. "5" after level 1, "54" after level 2 ... "543854" after level 6.
  KEY:    "",                     // the private key. Set ONLY when DIGITS has all six. Whoever dials the code first takes it.
  CODE_HASH: "67213ff176dc35ecbb32d6aec299bd552084206478c761270ef738b049b94fd5",   // sha256("<code>|<salt>") sealed at launch
  SALT:   "",                     // post the salt at the end so anyone can verify the hash
};
