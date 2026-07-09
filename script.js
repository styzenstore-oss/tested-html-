*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Poppins,Arial;
}


body{

background:#f5f7fb;
color:#222;

}



header{

height:80px;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 8%;

background:#12306b;
color:white;

}



.logo{

display:flex;
align-items:center;
gap:10px;

}


.logo img{

width:45px;
height:45px;
border-radius:50%;

}



nav a{

color:white;
text-decoration:none;
margin:15px;

}



.hero{

height:90vh;
position:relative;
overflow:hidden;

}



.slider img{

position:absolute;

width:100%;
height:90vh;

object-fit:cover;

opacity:0;

transition:.8s;

}



.slider .active{

opacity:1;

}



.hero-text{

position:absolute;

top:40%;
left:10%;

color:white;

}



.hero-text h1{

font-size:45px;

}



button{

padding:12px 25px;

border:none;

border-radius:30px;

background:#f59e0b;

color:white;

cursor:pointer;

}




#prev,#next{

position:absolute;

top:50%;

background:white;

color:#12306b;

font-size:25px;

}



#prev{

left:20px;

}



#next{

right:20px;

}




section{

padding:50px 8%;

}



h2{

text-align:center;

margin-bottom:30px;

}




.cards{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:20px;

}



.card{

background:white;

border-radius:20px;

overflow:hidden;

box-shadow:0 10px 30px #ddd;

}



.card img{

width:100%;

height:200px;

object-fit:cover;

}



.card h3,
.card p{

padding:15px;

}



.agenda{

background:#12306b;

color:white;

}



footer{

text-align:center;

padding:30px;

background:#111;

color:white;

}




@media(max-width:768px){

header{

flex-direction:column;

height:auto;

padding:20px;

}


nav{

margin-top:15px;

}


.cards{

grid-template-columns:1fr;

}


.hero-text h1{

font-size:30px;

}


}
