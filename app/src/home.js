function userinput(){
	var uniname = document.getElementById("name").value
	var unicountry = document.getElementById("country").value
	fetch(`http://universities.hipolabs.com/search?name=${uniname}&country=${unicountry}`)
	.then((response) => response.json())
	.then((data) => {
	   console.log(data)
  
	   //var header = document.getElementById("display")
	   //header.innerHTML = data[0].web_pages[0];
	for (let count=0 ; count < 5 ; count++ ){
	  var lists = document.createElement("li")
	  var place = document.getElementById("testing")
	  let random = (Math.floor(Math.random() * data.length))
	  lists.innerHTML = data[random].web_pages[0];
	  place.appendChild(lists)
  
  
	}
  })
  }
  
  


		