class Vault {
  secret = new Map();

  setSecret(key, value) {
    return this.secret.set(key, value);
  }

  getSecret(key) {
    return this.secret.get(key);
  }
}

class AccessVault {
  constructor(secret) {
    this.setCount = 0;
    this.getCount = 0;
    this.ref = new Vault(secret);
  }

  setSecret(key, value) {
    this.setCount++;
    return this.ref.secret.set(key, value);
  }

  getSecret(key) {
    this.getCount++;
    return this.ref.secret.get(key);
  }
}

// const vault = new Vault();
const vault = new AccessVault();
console.log(vault.setSecret("Swiss Bank Account", "11928001838"));
console.log(vault.setSecret("Swiss Bank Account", "11928001838"));
console.log(vault.setSecret("Swiss Bank Account", "11928001838"));
console.log(vault.setCount, 'setSecret count')
console.log(vault.getSecret("Swiss Bank Account"));
console.log(vault.getCount, 'getSecret count')
