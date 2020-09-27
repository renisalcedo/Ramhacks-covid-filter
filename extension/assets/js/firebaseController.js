var db = firebase.database();

var rcfRef = db.ref('ramhacks-covid-filter');
rcfRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });
});