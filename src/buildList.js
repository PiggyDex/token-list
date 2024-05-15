const espace = require("./tokens/espace.json");
const epsace_testnet = require("./tokens/espace_testnet.json");

async function buildList() {
	const tokens = [...espace, ...epsace_testnet].sort((t1, t2) => {
		if (t1.chainId === t2.chainId) {
			return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
		}
		return t1.chainId < t2.chainId ? -1 : 1;
	});
	return tokens;
}

buildList().then((data) => console.log(JSON.stringify(data, null, 2)));
