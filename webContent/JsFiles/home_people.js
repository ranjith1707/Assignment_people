


function profile(){
	var a=document.getElementById("zp_user_information").style.right = 0;
	getProfile();
	
}

function closeProfile(){
	var a=document.getElementById("zp_user_information").style.right =-350;
}

function getProfile()
{
    $.ajax({url: "./ProfileDetails", success: function(result){
	console.log(result);
     var obj = $.parseJSON(result);
setProfileValue(obj);
    }});      
}

 function setProfileValue(obj){
	var name=document.getElementById('userName_h').innerHTML=obj.userName;
	var id=document.getElementById('userId_a').innerHTML=obj.userId;
	var company=document.getElementById('ZPChangeOrg').innerHTML=obj.organization;
    $('#profimg').attr('src',obj.image);
} 
   
 function setFavorites()
{
	
	$.ajax({url: "./FavoritesList", success: function(result){
	console.log(result);
	var sub_ul = $('<ul/>').addClass("sst-edt dash-body Dfav listView").attr("id", "favoritLs");
	$("#favoritLs").replaceWith(sub_ul);
     var obj = $.parseJSON(result);
for(let i=0; i<obj.length; i++){
	createFavorites(obj[i].name,obj[i].empId,obj[i].phone,obj[i].cell,obj[i].image);
}
     
    }});      
}	

function createFavorites(name,emId,mobile,phone,imgpath){
	//var flist=document.getElementById('favoritLs');
	  

	 $("#favoritLs").append("<li>"+"<a><img class='Usrimg FL' src="+imgpath+"></img><div class='ZPUsrDt'><span class='usrDts'><span class='usrEmpID'>"+emId+"-</span>"+name+"</span><span class='sse-mn  IC-mobi'>"+phone+"</span><span class='sse-mn IC-phone'>"+mobile+"</span></div></a>"+"</li>");
     
}

function showNewHiersList(){
	$.ajax({url:"./NewHiers", success:function(response){
		var sub_div=$("<div/>").addClass("dtls").attr("id","newHrs");
		$("#newHrnodata").replaceWith((sub_div));
	    var obj=$.parseJSON(response);
		console.log(obj);
		for(let i=0; i<obj.length; i++){
			setNweHiers(obj[i].name,obj[i].userID,obj[i].posting,obj[i].location,obj[i].cell,obj[i].mobile,obj[i].image)
		}
	}});
}

function setNweHiers(name,userid,posting,location,cell,mobile,image){
	$("#newHrs").append("<div class='Uinfo'><div class='Bd-usrimg'><img class='Usrimg' src="+image+"><div cstus='true' uid='-1'></div></div><div class='Udts'><h6 class='CP'><br><span class='usrID'>"+userid+" - </span>"+name+"</br></h6><span>"+posting+"</span><span>"+location+"</span><div class='usr_cl'><span class='MR20'><i class='IC-phone'>"+cell+"</i></span><span class=''><i class='IC-mobi'></i>"+mobile+"</span></div></div></div></div>");
}
