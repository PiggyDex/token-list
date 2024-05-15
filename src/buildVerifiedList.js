const espace = require("./tokens/espace.json");
const epsace_testnet = require("./tokens/espace_testnet.json");
let verified_tokens = require("./tokens/verified.json");

async function buildVerifiedList() {
	const tokens = [...espace, ...epsace_testnet].sort((t1, t2) => {
		if (t1.chainId === t2.chainId) {
			return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
		}
		return t1.chainId < t2.chainId ? -1 : 1;
	});
	verified_tokens = verified_tokens.map((token) => token.address.toLowerCase());
	tokens.filter((token) => {
		if (verified_tokens.includes(token.address.toLowerCase())) {
			return token;
		}
	});
	return tokens;
}

buildVerifiedList().then((data) => console.log(JSON.stringify(data, null, 2)));
