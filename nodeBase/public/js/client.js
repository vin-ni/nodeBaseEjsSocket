'use strict'

//  Node Base Vinbert
//	Contact: vinzenz@sansho.studio

//connection to socket
const socket = io.connect();

//================= CONFIG =================



//================= SOCKET IO =================
socket.on('connect', function (data) {
	socket.emit('join', 'Server Connected to Client');
});


socket.on('messages', function (data) {
	console.log(data);
});



window.onbeforeunload = function () {

};

//================= SANTAS HELPERS =================
