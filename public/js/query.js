// var config = {
// 	apiKey: "AIzaSyAd-sKH5USIlYL7-GWzP7g8EPMyE3PF17o",
// 	authDomain: "trafficwebapp.firebaseapp.com",
// 	databaseURL: "https://trafficwebapp.firebaseio.com",
// 	storageBucket: "trafficwebapp.appspot.com",
// 	messagingSenderId: "563780534539"
// };
// firebase.initializeApp(config);

// Get elements
var accountUsername = document.getElementById('account-username');
var roadsDiv = document.getElementById('roads');


// QUERY 1. Time of congestion && rush hour roads to avoid
firebase.database().ref('alerts').orderByChild('timestamp').once('value', snap =>{
	snap.forEach(alertSnap =>{
		if (alertSnap.val().roadState == 'congestion') {
			var date = new Date(alertSnap.val().timestamp);
		// console.log(date);

		switch(date.getHours()){
			case 8:
			case 9:
			case 10:
				var ul = document.createElement('ul');
				var el = document.createElement('li');
				ul.innerText = 'Morning';
				el.innerText = alertSnap.val().roadName;
				ul.appendChild(el);
				roadsDiv.appendChild(ul);
				return;
			case 16:
			case 17:
			case 18:
				var ul = document.createElement('ul');
				var el = document.createElement('li');
				ul.innerText = 'Evening';
				el.innerText = alertSnap.val().roadName;
				ul.appendChild(el);
				roadsDiv.appendChild(ul);
				return;
			default:
				// var ul = document.createElement('ul')
				// var el = document.createElement('li');
				// ul.innerText = "None at the moment";
				// ul.appendChild(el);
				// roadsDiv.appendChild(ul);
				return;
	}
		}
	});
});




// 4. Users that are admins 
// firebase.database().ref('users').orderByChild('isAdmin').equalTo(true).on('value', snap => {
// 	divAdmins.innerText = "Administrators:\n";	
// 	snap.forEach(admin =>{
// 		var el = document.createElement('li');
// 		el.innerText = admin.val().username;
// 		divAdmins.appendChild(el);
// 	});
// });


