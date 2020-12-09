const chai = require('chai');

const { response } = require ('express');
const expect = require ('chai').expect
const fetch = require("node-fetch");
const chaiHttp = require('chai-http')
const should = chai.should();

chai.use(chaiHttp)


describe("test", ()=> { //den tester for kode 200, altså at vi får fat i 200
    it("beskriv testen", (done)=> {
        chai
        .request("http://localhost:3000")
        .get('/')
        .end((err, res)=> {
            res.should.have.status(200);
            done();
        })
    })
})



// describe("test", function(){
//     it ('beskriv hvad der sker', function(done){
//         fetch("http://localhost:3000")
//         .then(response => {
//             console.log(response)
//             response.should.have.status(200)
//             done()    
//         })
//         .catch(e=> console.log(e.message))
// }


// );
// })

