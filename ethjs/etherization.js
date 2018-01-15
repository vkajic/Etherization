var etherizationContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"rowcol","type":"uint256[2]"}],"name":"setRowcol","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepCommission","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"pushCity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"setBuilding","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils2","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"s","type":"uint256"}],"name":"setMsg","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"START_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"WAIT_TIME","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"previousID","type":"int256"}],"name":"setPreviousID","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"woodworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"i","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"setUnit","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getWwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"treasury","type":"uint256"}],"name":"setTreasury","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"BUILDING_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"MAINT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getQrLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cities","outputs":[{"name":"owner","type":"uint256"},{"name":"name","type":"string"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"metalworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"ind","type":"uint256"}],"name":"setMap","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"timestamp","type":"uint256"}],"name":"setLastTimestamp","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numUnits","type":"uint256"}],"name":"setNumUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"owner","type":"uint256"}],"name":"setOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numCities","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"nc","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"capitol","type":"uint256"}],"name":"setCapitol","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"stablesCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numPlayers","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getStLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerName","type":"string"},{"name":"cityName","type":"string"},{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"rowref","type":"uint256"},{"name":"colref","type":"uint256"}],"name":"start","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalBalances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"map","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"UNIT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyMsg","outputs":[{"name":"s","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"CITY_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFmLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyPlayerID","outputs":[{"name":"ID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"nextID","type":"int256"}],"name":"setNextID","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"MIN_WTH","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"playerID","type":"uint256"}],"name":"timePassed","outputs":[{"name":"tp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"cityID","type":"uint256"}],"name":"getCity","outputs":[{"name":"owner","type":"uint256"},{"name":"cityName","type":"string"},{"name":"buildings","type":"bool[5]"},{"name":"units","type":"uint256[10]"},{"name":"rowcol","type":"uint256[2]"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"playerMsgs","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getPlayerID","outputs":[{"name":"playerID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getCommission","outputs":[{"name":"com","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"treasury","type":"uint256"},{"name":"capitol","type":"uint256"},{"name":"numCities","type":"uint256"},{"name":"numUnits","type":"uint256"},{"name":"lastTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quarryCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherization = etherizationContract.at('0xb40d0312bac389ae0a05053020aac80c9237358b');

var etherizationutilsContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"moveUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"buyUnit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"buyBuilding","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils = etherizationutilsContract.at('0x72d48d0082fb0f7f01fc4b215651cc55cb25c81a');

var etherizationutils2Contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"attack","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityName","type":"string"},{"name":"rowcol","type":"uint256[2]"},{"name":"rowcolref","type":"uint256[2]"}],"name":"buildCity","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils2 = etherizationutils2Contract.at('0x3f593a15eb60672687c32492b62ed3e10e149ec6');



/*var etherizationContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"rowcol","type":"uint256[2]"}],"name":"setRowcol","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepCommission","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"pushCity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"setBuilding","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils2","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"s","type":"uint256"}],"name":"setMsg","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"START_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"WAIT_TIME","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"previousID","type":"int256"}],"name":"setPreviousID","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"woodworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"i","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"setUnit","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getWwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"treasury","type":"uint256"}],"name":"setTreasury","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"BUILDING_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"MAINT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getQrLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cities","outputs":[{"name":"owner","type":"uint256"},{"name":"name","type":"string"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"metalworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"ind","type":"uint256"}],"name":"setMap","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"timestamp","type":"uint256"}],"name":"setLastTimestamp","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numUnits","type":"uint256"}],"name":"setNumUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"owner","type":"uint256"}],"name":"setOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numCities","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"nc","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"capitol","type":"uint256"}],"name":"setCapitol","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"stablesCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numPlayers","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getStLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerName","type":"string"},{"name":"cityName","type":"string"},{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"rowref","type":"uint256"},{"name":"colref","type":"uint256"}],"name":"start","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalBalances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"map","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"UNIT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyMsg","outputs":[{"name":"s","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"CITY_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFmLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyPlayerID","outputs":[{"name":"ID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"nextID","type":"int256"}],"name":"setNextID","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"MIN_WTH","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"playerID","type":"uint256"}],"name":"timePassed","outputs":[{"name":"tp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"cityID","type":"uint256"}],"name":"getCity","outputs":[{"name":"owner","type":"uint256"},{"name":"cityName","type":"string"},{"name":"buildings","type":"bool[5]"},{"name":"units","type":"uint256[10]"},{"name":"rowcol","type":"uint256[2]"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"playerMsgs","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getPlayerID","outputs":[{"name":"playerID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getCommission","outputs":[{"name":"com","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"treasury","type":"uint256"},{"name":"capitol","type":"uint256"},{"name":"numCities","type":"uint256"},{"name":"numUnits","type":"uint256"},{"name":"lastTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quarryCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherization = etherizationContract.at('0xb1a6983c810ac7477d251dfe3bd038912eea458c');

var etherizationutilsContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"moveUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"buyUnit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"buyBuilding","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils = etherizationutilsContract.at('0xeb0006526da8560cf80acfbd081db5ced90ecfd0');

var etherizationutils2Contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"attack","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityName","type":"string"},{"name":"rowcol","type":"uint256[2]"},{"name":"rowcolref","type":"uint256[2]"}],"name":"buildCity","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils2 = etherizationutils2Contract.at('0x7763b99ad26c0a8443fe50bc54bde5e5540ec3df');*/



/*var etherizationContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"rowcol","type":"uint256[2]"}],"name":"setRowcol","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"sweepCommission","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"pushCity","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"setBuilding","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils2","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"numCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"farmCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"sender","type":"address"},{"name":"s","type":"uint256"}],"name":"setMsg","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"START_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"WAIT_TIME","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"previousID","type":"int256"}],"name":"setPreviousID","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"woodworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"i","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"setUnit","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getWwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"treasury","type":"uint256"}],"name":"setTreasury","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"BUILDING_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"MAINT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"setUtils","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getQrLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cities","outputs":[{"name":"owner","type":"uint256"},{"name":"name","type":"string"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"metalworksCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"ind","type":"uint256"}],"name":"setMap","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"timestamp","type":"uint256"}],"name":"setLastTimestamp","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numUnits","type":"uint256"}],"name":"setNumUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"owner","type":"uint256"}],"name":"setOwner","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"numCities","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"nc","type":"uint256"}],"name":"setNumCities","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"playerID","type":"uint256"},{"name":"capitol","type":"uint256"}],"name":"setCapitol","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"stablesCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numPlayers","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getStLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"playerName","type":"string"},{"name":"cityName","type":"string"},{"name":"row","type":"uint256"},{"name":"col","type":"uint256"},{"name":"rowref","type":"uint256"},{"name":"colref","type":"uint256"}],"name":"start","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"totalBalances","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"map","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"UNIT_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyMsg","outputs":[{"name":"s","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"CITY_PRICE","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getFmLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMyPlayerID","outputs":[{"name":"ID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getMwLength","outputs":[{"name":"length","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"nextID","type":"int256"}],"name":"setNextID","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"MIN_WTH","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"playerID","type":"uint256"}],"name":"timePassed","outputs":[{"name":"tp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"cityID","type":"uint256"}],"name":"getCity","outputs":[{"name":"owner","type":"uint256"},{"name":"cityName","type":"string"},{"name":"buildings","type":"bool[5]"},{"name":"units","type":"uint256[10]"},{"name":"rowcol","type":"uint256[2]"},{"name":"previousID","type":"int256"},{"name":"nextID","type":"int256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"playerMsgs","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getPlayerID","outputs":[{"name":"playerID","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"getCommission","outputs":[{"name":"com","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"etherAddress","type":"address"},{"name":"name","type":"string"},{"name":"treasury","type":"uint256"},{"name":"capitol","type":"uint256"},{"name":"numCities","type":"uint256"},{"name":"numUnits","type":"uint256"},{"name":"lastTimestamp","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"quarryCities","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherization = etherizationContract.at('0xda57d13dd65d9c465ba7e265a4624c25c5e82b12');

var etherizationutilsContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"moveUnits","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"unitType","type":"uint256"}],"name":"buyUnit","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityID","type":"uint256"},{"name":"buildingType","type":"uint256"}],"name":"buyBuilding","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils = etherizationutilsContract.at('0xbe47b267e2c25d37c409037dff3c818ca20490fb');

var etherizationutils2Contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"a","type":"address"}],"name":"sete","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"source","type":"uint256"},{"name":"target","type":"uint256"},{"name":"unitIndxs","type":"uint256[]"}],"name":"attack","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"cityName","type":"string"},{"name":"rowcol","type":"uint256[2]"},{"name":"rowcolref","type":"uint256[2]"}],"name":"buildCity","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"e","outputs":[{"name":"","type":"address"}],"type":"function"},{"inputs":[],"type":"constructor"}]);
var etherizationutils2 = etherizationutils2Contract.at('0x66fdba94e2d6186e2a7e1aa03d5953b7eca476a3');*/

