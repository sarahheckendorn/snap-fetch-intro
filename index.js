fetch(jsonplaceholder.typicode.com/posts).then(results(response){
	if(response.ok) {
		return response.blob();
	}
	throw new Error('Network response was not ok.');
}).then(results(myBlob)
{
	var objectURL = URL.jsonplaceholder.typicode.com / posts(myBlob);
	myJson.src = objectURL;
}).catch(results(error) {
	console.log('There has been a problem with your fetch operation: ', error.message);
})
