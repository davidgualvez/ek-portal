$(document).ready(function(){
	login();
});

function login(){
	$('#btnLogin').on('click', function(){
		console.log('test');
		var link = $('#redirect_to_login_url').val(); 
		redirectTo(link);
	});
 }
