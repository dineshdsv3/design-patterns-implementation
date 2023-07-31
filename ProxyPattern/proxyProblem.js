class Vault {
    secret = new Map();

    setSecret(key, value) {
        this.secret.set(key, value);
    }

    getSecret(key) {
        return this.secret.get(key);
    }
}

const vault = new Vault();
vault.setSecret("Swiss Bank Account", "11928001838");
console.log(vault.getSecret("Swiss Bank Account"));
