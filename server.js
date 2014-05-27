var connect = require('connect');
connect().use(connect.static(__dirname + "/dist")).listen(process.env.PORT || 8082);
