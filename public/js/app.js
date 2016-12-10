"use strict";

class App{
	constructor(){
		this.shoes = [
		{
			"id": 1,
			"name": "Adidas Samoa",
			"description": `As one of the most iconic retro sneakers on the market today, Adidas Originals Samoa is one of the few styles that become more and more beautiful.`,
			"picture": "img/nike1.jpg",
			
		},
		{
			"id": 2,
			"name": "Nike Hyperdunk",
			"description": `Nike Hyperdunk 2016 Performance Review. Sometimes, companies swing and miss. It's not really a problem, every one does it`,
			"picture": "img/nike2.jpg",
			
		},
		{
			"id": 3,
			"name": "Nike Air Jordan 1",
			"description": `It was designed by Peter C. Moore. The red and black colorway of the Nike Air Ship, the prototype for the Jordan 1, was later outlawed by NBA Commissioner David Stern for having very little white on them. It is a common misconception that the Jordan 1 was banned however, it was indeed the Nike Air Ship`,         
			"picture": "img/nike3.jpg",
		},

		{
			"id": 4,
			"name": "Nike Air Yeezy 2",
			"description": `The Nike Air Yeezy 2 was the second model of the Air Yeezy series by Nike. The Yeezy 2 would also be the last model between Kanye West and NikeNIKE Air Yeezy 2 Red October size 11. Comes with original box and dust bag. Dust bag does have some faint dirt spots on it and is missing one of the gold tabs`,
			"picture": "img/nike4.jpg",
		},
		{
			"id": 5,
			"name": "Adidas adicolor Hi",
			"description": `Adidas Adicolor H The Adicolor H came with eight different colored markers, which allowed consumers to fill in the white stripes on the side panel of the shoe`,
			"picture": "img/nike5.jpg",
		},
		{
			"id": 6,
			"name": "Adidas Rivalry",
			"description": ` The first rubber-soled shoes, known as plimsolls, were produced. 1920. Adolph "Adi" Dassler manufactures his first sports shoes Adidas Rivalry`,
			"picture": "img/nike6.jpg",
		},
		{
			"id": 7,
			"name": "Nike Air Max 90",
			"description": ` Known for his work with Michael Jordan, designer Tinker Hatfield created 1990's Air Max 90 — formerly known as the Air Max III`,
			"picture": "img/n7.jpg",
		},
		{
			"id": 8,
			"name": "Adidas Dave Mirra",
			"description": `A lot of shoe companies work with riders on developing signature shoes, and Adidas has been working with Haro's Dave Mirra for a long time`,
			"picture": "img/n8.jpg",
		},
		{
			"id": 9,
			"name": "Nike SB Janoski",
			"description": `With that classic laid-back style and trademark switchstance prowess, Nike SB professional skateboarder Stefan Janoski has nonchalantly built this legendary shoes .`,
			"picture": "img/n9.jpg",
		},
		{
			"id": 10,
			"name": "Nike LeBron 10",
			"description": `The Nike Zoom LeBron Soldier 10 Men’s Basketball Shoe celebrates a decade of dominance in a fresh silhouette that delivers lightweight lockdown and responsive . `,
			"picture": "img/n10.jpg",
		},
		
		
		];


		this.slide = [
		{
			"img":"img/kobe0.jpg ",
		},

		{
			"img":" img/kobe2.jpg",
		},


		{
			"img":"img/kobee.jpg ",
		},


		{
			"img":" img/kobe1.jpg",

		},

		];

		this.brand = [
		{
			"name2":"Nike",
			"pc2":"img/nkie.jpg",
			"link2":"http://www.nike.com/us/en_us/?ref=https%253A%252F%252Fwww.google.com.ph%252F",
			"linkname2":"Visit Nike",

		},
		{
			"name2":"Adidas",
			"pc2":"img/add.png",
			"link2":"http://www.adidas.com.ph/",
			"linkname2":"Visit Adidas",

		},
		{
			"name2":"Reebok.",
			"pc2":"img/rb.jpg",
			"link2":"http://fitness.reebok.com/international/",
			"linkname2":"Visit Reebok",

		},
		{
			"name2":"Clarks.",
			"pc2":"img/clark.jpg",
			"link2":"http://www.clarks.com/",
			"linkname2":"Visit Clarks",

		},
		{
			"name2":"New Balance",
			"pc2":"img/nb.jpg",
			"link2":"http://www.newbalance.com/",
			"linkname2":"Visit New Balance",

		},
		{
			"name2":"Dr. Martens.",
			"pc2":"img/dr.png",
			"link2":"http://www.drmartens.com/choose-your-country",
			"linkname2":"Visit Dr. Martens",

		},
		

		],



		this.first =[


		{
			"img1":"img/shoes1.png",
			"detail1":"Welcome to Shoes App. This is how you upload shoes in webpage",
			"link1":"component.createShoes()",
			"linkname1":"Create Shoes",	

		},
		{

			"img1":"img/shoes2.png",
			"detail1":`Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing and worldwide marketing and sales of footwear, apparel, equipment, accessories and services. The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area. It is one of the world's largest suppliers of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$24.1 billion in its fiscal year 2012 (ending May 31, 2012). As of 2012, it employed more than 44,000 people worldwide. In 2014 the brand alone was valued at $19 billion, making it the most valuable brand among sports businesses`,
			"link1":"component.ShoeList()",
			"linkname1":"View Shoes",	
		},
		

		






		];

		
	}



	render(html, component){

		component.innerHTML += html;
	}

	reRender(html, component){

		component.innerHTML = html;
	}

	shoeDesign(){
		let id = document.getElementById('id1');	
		let name = document.getElementById('nameshoes');
		let description = document.getElementById('descriptionshoes');
		let picture = document.getElementById('pictureshoes');
		

		let shoes = {      
			
			"id": id.value,
			"name": name.value,
			"description": description.value,
			"picture": picture.value,
			
			
		};


		this.shoes.push(shoes);

		
		id.value = name.value = description.value = picture.value = ''; 
	} 

	deleteShoes(key){
		let r = this.shoes;
		for(let i=0;i<r.length;i++){
			if(r[i].id == key){
				this.shoes.splice(i,1);
				break;
			}
		}   
		this.ShoeList();
	}

	shoeId(id){
		let r = this.shoes;
		for(let i=0;i<r.length;i++){
			if(id==r[i].id){
				return r[i];
			}
		}
	} 

	shoeSearch(name){
		let objects = [];
		let r = this.shoes;
		for(let i=0;i<r.length;i++){
			let expr = (r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1);
			if(expr){
				objects.push(r[i]);
			}
		}
		return objects;
	}

	


}

class Component extends App{
	constructor(){
		
		super();
	}

	shoeLayout(){
		let html = `
		
		<nav>
		<div class="nav-wrapper black">
		<a href="#" onclick="component.ShoeList()" class="brand-logo"><i class="material-icons right">dashboard</i>&nbspShoes App </a>
		<ul id="nav-mobile" class="right hide-on-med-and-down">
		<li>
		<li><a href="#" onclick="component.Home()"><i class="material-icons right">store</i>Home</a></li>
		<li><a href="#" onclick="component.ShoeList()"><i class="material-icons right">search</i>View Shoes</a></li>  
		<li><a href="#" onclick="component.createShoes()"><i class="material-icons right">queue</i>Create Shoes</a></li>
		<li><a href="#" onclick="component.shoepage()"><i class="material-icons right">reorder</i>Shoe Brands</a></li>
		

		
		</ul>

		
		</div>
		</nav>


		</div>
		<div class="slider">
		<ul class="slides">
		
		`;
		for(let i=0;i<this.slide.length;i++){
			html+=`
			<li>
			<img src="${this.slide[i].img}"> 
			<div class="caption center-align">
			</div>
			</li>
			
			`;
		}

		html+=`
		</ul>
		
		
		
		

		<div id="Home"></div>
		<div id="RecentActivity"></div>
		<div id="viewShoes"></div>
		<div id="updateShoes"></div>
		<div id="ShoeList"></div>
		<div id="createShoes"></div>
		<div id="shoepage "></div>
		
		
		<footer class="page-footer black">
		<div class="container">
		<div class="row">
		<img src="img/lymref.jpg">
		
		

		<div class="col l6 s12">
		
		
		<h5 class="white-text">Shoes App</h5>
		<p class="grey-text text-lighten-4">@ Lymref Escandor 2016</p>
		</div>
		
		
		
		</div>
		</div>
		<div class="footer-copyright">
		<div class="container">
		
		</div>
		</div>
		</footer>

		`;

		this.reRender(`
			${html}

			`,document.getElementById("app"));
		this.RecentActivity();    
	}

	RecentActivity(){
		
		let html = `




		`;
		for(let i=0;i<this.first.length;i++){
			html+=`
			<div class="row">
			<div class="col s8 m6">
			<div class="card large hoverable">
			<div class="card-image">
			<img src="${this.first[i].img1}">
			</div>
			<div class="card-content">
			<p>${this.first[i].detail1}</p>
			
			</div>
			<div class="card-action">
			<a href="#"onclick="${this.first[i].link1}"><i class="material-icons left">list</i>${this.first[i].linkname1}</a>
			</div>
			</div>
			</div>
			




			`;
		}
		html+=`

		<div class="carousel carousel-slider">
		<a class="carousel-item" href="#one!"><img src="https://wallpaperscraft.com/image/shoes_shnurki_black_23618_1920x1080.jpg"></a>
		<a class="carousel-item" href="#two!"><img src="http://stuffpoint.com/adidas/image/263852-adidas-adidas-f50-adizero-shoes-background-hd-wallpaper-jpg-284-kb.jpg"></a>
		<a class="carousel-item" href="#three!"><img src="http://www.hbc333.com/data/out/134/47797515-jordan-shoes-wallpaper.jpeg"></a>
		<a class="carousel-item" href="#four!"><img src="http://roadmastershoes.yolasite.com/resources/shoes-wallpaper-desktop-black-background.jpg"></a>
		</div>
		<div class="row">
		`;

		let r = this.shoes;
		let count = 0;
		for(let i=(r.length-1);i>=0;i--){
			if(count++ === 4)break;
			html+= `
			<div class="col s6 m6">
			<div class="card large ">
			<div class="card-image">
			<img src="${r[i].picture}">
			<span class="card-title">${r[i].name}</span>
			</div>
			<div class="card-content">
			<p>${r[i].description}</p>
			
			</div>
			<div class="card-action">
			<a href="#" onclick="component.viewShoes(${r[i].id})"><i class="material-icons left">assignment</i>View Details</a>
			</div>
			</div>
			</div>
			`;
		}

		html += `</div>`;

		this.render(`   
			${html}
			`,document.getElementById("RecentActivity"));
	}

	viewShoes(id){
		let r = this.shoeId(id);

		let html = `
		
		<div class="row">       
		<div class="col s12 m12">
		<div class="card horizontal ">
		<div class="card-image">
		<img src="${r.picture}">
		</div>
		<div class="card-stacked">
		<div class="card-content">
		<h5 class="center-align">${r.name}</h5>
		<p>${r.description}</p>
		
		</div>
		<div class="card-action small">      
		<button onclick="component.updateShoes(${r.id})" class="btn waves-effect waves-light">Update Shoe</button>
		<button onclick="component.ShoeList()" class="btn waves-effect waves-light">Back To Shoe List</button>
		<button onclick="component.deleteShoes(${r.id})" class="btn waves-effect waves-light">Delete Shoe</button>
		</div>     
		</div>   
		
		</div>      
		</div>
		`;

		this.reRender(`   
			${html}     
			`,document.getElementById("viewShoes"));
		$('#viewShoes').show();
		$('#RecentActivity').hide();
		$('#ShoeList').hide();
		$('#updateShoes').hide();
		$('#createShoes').hide();
		$('#shoepage').hide();
		$('#Home').hide();
	}

	ShoeList(){
		let html = `

		

		<br/>
		<nav>
		<div class="nav-wrapper black">
		
		<div class="input-field">       
		<input onkeyup="component.shoesInventory(this.value)" id="search" type="search" placeholder="Search" required>
		<label for="search"><i class="material-icons">search</i></label>
		<i class="material-icons">close</i>
		</div>
		
		</div>
		</nav>
		<br/>

		`;

		html += `
		<div class="row" id="shoesInventory">
		`;
		let r = this.shoes;
		for(let i=0;i<r.length;i++){
			html+= `
			<div class="col s6 m6">
			<div class="card ">
			<div class="card-image">
			<img src="${r[i].picture}">
			<span class="card-title">${r[i].name}</span>
			</div>
			<div class="card-content">
			<p>${r[i].description}</p>
			
			</div>
			<div class="card-action">
			<a href="#" onclick="component.viewShoes(${r[i].id})"><i class="material-icons left">search</i>View Shoes</a>
			</div>
			</div>
			</div>
			`;
		}

		html += `</div>`;

		this.reRender(`
			${html}
			`,document.getElementById("ShoeList"));
		$('#ShoeList').show();
		$('#viewShoes').hide();
		$('#updateShoes').hide();
		$('#RecentActivity').hide();
		$('#createShoes').hide();    
		$('#shoepage').hide();    
		$('#Home').hide();
	}

	shoesInventory(name){
		let html = ``;
		let r = this.shoeSearch(name);
		for(let i=0;i<r.length;i++){
			html+= `
			<div class="col s12 m4">
			<div class="card small hoverable">
			<div class="card-image">
			<img src="${r[i].picture}">
			<span class="card-title">${r[i].name}</span>
			</div>
			<div class="card-content">
			<p>${r[i].description}</p>
			
			</div>
			<div class="card-action">
			<a href="#" onclick="component.viewShoes(${r[i].id})">More</a>
			</div>
			</div>
			</div>
			`;
		}   
		this.reRender(`
			${html}
			`,document.getElementById("shoesInventory"));
		$('#ShoeList').show();
		$('#viewShoes').hide();
		$('#updateShoes').hide();
		$('#RecentActivity').hide();  
		$('#createShoes').hide();
		$('#shoepage').hide();    
		$('#Home').hide();    
	}

	createShoes(){
		let html = `

		
		<br>
		<form>
		<div>
		<center><h1>Create Shoes</h1></center>
		<center><span >Shoes Stocks<span class="required">*</span></span><input disabled value="${this.shoes.length+1}" id="id1" type="text" ></label></center>
		<label for="nameshoes">  <span>Brand Name/ Shoes Name:</span><input type="email" id="nameshoes"/> </label>
		<label for="pictureshoes"><span>Shoe Pic</span><input type="email" id="pictureshoes" /> </label>
		<label for="descriptionshoes"><span>Shoe Description </span><textarea id="descriptionshoes" class="textarea-field"></textarea> </label>

		<div class="center-align">
		<br><button onclick="component.shoeDesign()" class="btn waves-effect waves-light">Submit</button></br>
		</div>
		</div>
		</form>
		</br>


		

		
		
		

		`;

		this.reRender(`
			${html}
			`,document.getElementById("createShoes"));
		$('#createShoes').show();
		$('#ShoeList').hide();
		$('#updateShoes').hide();
		$('#viewShoes').hide();
		$('#RecentActivity').hide();  
		$('#shoepage').hide(); 
		$('#Home').hide();    
	}

	shoepage(){
		let html =`
		





		`; 
		for(let i=0;i<this.brand.length;i++){
			html+=`
			<div class="row">
			<div class="col s8 m6">
			<div class="card ">
			<div class="card-image">
			<img src="${this.brand[i].pc2}">
			
			
			</div>
			<div class="card-content">
			<span class="card-title">${this.brand[i].name2}</span>
			
			
			</div>
			<div class="card-action">
			<a href="${this.brand[i].link2}"><i class="material-icons left">list</i>${this.brand[i].linkname2}</a>
			</div>
			</div>
			</div>
			




			`;
		}
		html+=`

		`;
		
		this.reRender(`
			${html}
			`,document.getElementById("createShoes"));
		$('#createShoes').show();
		$('#ShoeList').hide();
		$('#updateShoes').hide();
		$('#viewShoes').hide();
		$('#RecentActivity').hide(); 
		$('#Home').hide();  

		

	}

	

	updateShoeApp(id){

		id = id+1;
		let shoeDummy = {
			"id" :  id,
			"name" : $('#shoename').val(),
			"description" : $('#shoedes').val(),   
			"picture" : $('#image').val()

		}

		let r = this.shoes;
		for(let i=0;i<r.length;i++){
			if(r[i].id == id){
				r[i] = shoeDummy;
				break;
			}
		}

		this.ShoeList();
	}


	updateShoes(id){

		id = id - 1;
		let html = `
		<form>
		<div class="row">
		<div class="input-field col s12">
		<h5><B>Update Your Shoes:</B></h5>
		<tr>
		<p>Enter Shoe Name:</p>
		<input id="shoename" type="text" class="validate" value="${this.shoes[id].name}">
		<p>Enter Shoe Image:</p>
		<input id="image" type="text" class="validate" value="${this.shoes[id].picture}">

		<h5><B>Edit your Shoe Description!</B></h5>

		
		<input id="shoedes" type="text" class="validate" value="${this.shoes[id].description}"></div>
		</div>
		<a onclick="component.updateShoeApp(${id})" class="waves-effect blue waves-light btn">Update</a>
		</form>
		`;  
		this.reRender(`

			${html}

			`,document.getElementById("updateShoes"));   

		$('#viewShoes').hide();
		$('#RecentActivity').hide();
		$('#ShoeList').hide();
		$('#updateShoes').show();
		$('#createShoes').hide();
		$('#shoepage').hide();
		$('#Home').hide();
		
	}






	Home(){
		let html=`


		`;
		this.reRender(`
			${html}
			`,document.getElementById("createShoes"));
		$('#createShoes').hide();
		$('#ShoeList').hide();
		$('#updateShoes').hide();
		$('#viewShoes').hide();
		$('#RecentActivity').show(); 
		$('#Home').hide();  
		$('#shoepage').hide();  
		

	}


} 
let component = new Component();
component.shoeLayout();
