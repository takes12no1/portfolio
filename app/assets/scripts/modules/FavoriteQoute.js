class FavoriteQoute {
    constructor(qouteText, qouteAuthor) {
        this.qoute = qouteText;
        this.author = qouteAuthor;
    }

    sayIt() {
        console.log(this.qoute + " -" + this.author)
    }
}

// function FavoriteQoute(qouteText, qouteAuthor) {
//     this.qoute = qouteText;
//     this.author = qouteAuthor;
//     this.sayIt = function() {
//         console.log(this.qoute + " -" + this.author)
//     }
// }

// module.exports = FavoriteQoute; //PreBabel
export default FavoriteQoute;