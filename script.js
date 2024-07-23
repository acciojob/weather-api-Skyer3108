//your JS code here. If required.

const btn=document.getElementById('btn')

const display=document.getElementById('weatherData')



btn.addEventListener('click',async()=>{

	const apiKey='52cfc6f295dc14cb0448c43506812757'

	const city='London'

	const apiUrt=`https://api.openweathermap.org/data/2.5/weather?q=London&appid=52cfc6f295dc14cb0448c43506812757`

	
	try{

		console.log('llll')

		const res=await fetch(apiUrt)
		console.log('llll')

		const data=await res.json()
		console.log('llll')

		display.textContent=`Current weather in London: ${data.weather[0].main}`
		
	}catch(err){

		display.textContent=`Error: ${err.message}`
		
	}
	
})