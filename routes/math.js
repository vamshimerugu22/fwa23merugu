var express = require('express');
var router = express.Router();
var value;
/* GET home page. */
router.get('/', function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
      const url = new URL(fake_url)
      const search_params = url.searchParams
     value =Number(search_params.get("x"))
    if(value == 0)
    value=Math.random()
    res.write("Computes the values for Math.atan and math.exp function."+"\n")
    res.write('Math.atan applied to '+value+" is "+Math.hypot(value)+"\n");
    res.write('Math.atan applied to '+value+" is "+Math.ceil(value)+"\n");
    res.end('Math.exp applied to '+value+" is "+Math.clz32(value));
 });

module.exports = router;