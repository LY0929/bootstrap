function use(str){
		return typeof  str==='string'?document.getElementById(str):str;
	}
	window.onload=function(){
		var yes=use('box').getElementsByTagName('a');
		 var y=document.getElementsByName('box1');
		 	console.log(y);
		 for(var i=0;i<yes.length;i++){
		 	yes[i].name=i;
		 	 yes[i].onmouseover=function(){

		 	 	for(var j=0;j<yes.length;j++){
		 	 		y[j].style.display='none'
		 	 	}
		 	 	y[this.name].style.display='block'
		 	 }
		 }
		
		 
	}

 window.onload=function(){
 	var b=document.getElementById('an');
 	var m=document.getElementById('collapse_main');
 	b.onclick=function(){
 		if(m.style.display=='none'){
 			m.style.display='block'
 		}else{
 			m.style.display='none'
 		}
 	}
 }	