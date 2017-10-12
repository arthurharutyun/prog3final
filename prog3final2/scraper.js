var jsonfile = require('jsonfile')
var file = 'dataX.json'
const scrapeIt = require("scrape-it");


scrapeIt("http://www.billboard.com/charts/hot-100", {
     articles: {
                listItem: ".chart-row__main-display",
                data: {
                  
                    
                    title: ".chart-row__song",

                    Name:{
                        selector:"a",                       
                    },
                    lastweek:".chart-row__last-week",
                    place:".chart-row__current-week"
                    

                }
            }
}, (err, page) => {
         jsonfile.writeFile(file,page,{spaces:2},    function (err) {
  console.error(err)
})
});
