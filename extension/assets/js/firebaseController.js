var db = firebase.database();

var rcfRef = db.ref();

rcfRef.once("value", function(data) {
    console.log(data.val())
});