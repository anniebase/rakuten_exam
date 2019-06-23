window.onload = pageLoadeHandler;

function pageLoadeHandler(){
	
	var add_btn = document.getElementById('enter_btn');
	add_btn.onclick = add_todo;	
	
};

var name_arr = [];	
var real_count = 0

function add_todo(){
	var todo_list = document.getElementById('list_box');
	var input_0 = document.getElementById('input_box_name');
	var input_1 = document.getElementById('input_box_phone');
	var input_2 = document.getElementById('input_box_mail');
	var count = todo_list.getElementsByTagName("tr").length;
		
//檢查空欄	
    if(footer.input_box_name.value == ""){
      alert("請填寫姓名");
                return false;
            }else if(footer.input_box_mail.value == ""){
                alert("請填寫e-mail");
                return false;
            }	
//表單物件	
	var newLi=document.createElement("tr");            
	var new_input= document.createElement('input');	
	
		var input_val0 = input_0.value;	
		var input_val1 = input_1.value;	
		var input_val2 = input_2.value;		

if(footer.input_box_phone.value!=""){
if(checkPhone( input_val1 ) == false){
	return false;
}//電話驗證			
}

	
if(checkEmail( input_val2 ) == false){
	return false;
}//mail驗證	
  		
if(checkName( input_val0 ) == false){
	return false;
}//name重複驗證	
	
	real_count ++;	
	
	var txtInput=document.createTextNode(input_val0);	

	    todo_list.appendChild(newLi);
	    count =  todo_list.getElementsByTagName("tr").length;
	    newLi.setAttribute("id","a"+ real_count );
	
//tr>td	
	for(var i=0; i<6 ; i++){
		
		var new_div=document.createElement("td");
		newLi.appendChild(new_div);
		new_div.setAttribute("id","td_"+ i );
		if(i<4){
		var new_span=document.createElement('span');
		var input_box=document.createElement('input');
				
		new_div.appendChild(new_span);
		new_span.setAttribute("id","new_span"+real_count+"_"+i );
		if(i==0){
			new_div.setAttribute("id","td_"+ i );
			new_span.textContent = real_count;
		}
			else{
				new_div.appendChild(input_box);
				input_box.setAttribute("style","display:none" );
				input_box.setAttribute("id","input_box"+real_count+"_"+i );
			if(i==1){	
				new_span.textContent = input_val0;
				input_box.value = input_val0;
		       
			}
			if(i==2){
				new_span.textContent = input_val1;
				input_box.value = input_val1;
			}
			if(i==3){
				new_span.textContent = input_val2;
				input_box.value = input_val2;
			}	}
		}
		else if(i==4){
		var save_btn= document.createElement('input'); 	
		var update_btn= document.createElement('input');
			
		//更改內容
	    update_btn.value = 'Modify';
	    update_btn.setAttribute("id","update_btn"+real_count);
	    update_btn.setAttribute("num", real_count);
		update_btn.setAttribute("type","button" );
			
	    new_div.append(update_btn);
    	update_btn.onclick = update_todo;
		
	    //儲存內容
	    save_btn.value = 'Save';
	    save_btn.setAttribute("id","save_btn"+real_count);
		save_btn.setAttribute("type","button" );
	    save_btn.setAttribute("style","display:none");
	    save_btn.setAttribute("num", real_count);
			
	    new_div.append(save_btn);
    	save_btn.onclick = save_todo;
				}
		else if(i==5) {
	
		var del_btn= document.createElement('input'); 
		//新增刪除按鈕
	    del_btn.value = 'Delete';
	    del_btn.setAttribute("type","button" );
	    del_btn.setAttribute("num",real_count );
	    del_btn.setAttribute("Class","del_btn"+real_count );
			
	    new_div.append(del_btn);
    	del_btn.onclick = remove_todo;
				}
		
		input_0.value="";
		input_1.value="";
		input_2.value="";
		}
	console.log(name_arr);
	
function update_todo(){

var index_num = this.getAttribute("num");
var trElement = document.getElementById('a'+index_num);
var btnrElement = document.getElementById('update_btn'+index_num);
var btnsElement = document.getElementById('save_btn'+index_num);	
	
for(var i=1; i<4; i++){
var inputElement = document.getElementById('input_box'+index_num+'_'+i);
var spanElement = document.getElementById("new_span"+index_num+'_'+i);
	
inputElement.setAttribute("style","");
spanElement.setAttribute("style","display:none");
	
}	

this.setAttribute("style","display:none");
btnsElement.setAttribute("style","");

}

function save_todo(){

var index_num = this.getAttribute("num");
var trElement = document.getElementById('a'+index_num);
var btnrElement = document.getElementById('update_btn'+index_num);
var btnsElement = document.getElementById('save_btn'+index_num);	

for(var i=1; i<4; i++){
var inputElement = document.getElementById('input_box'+index_num+'_'+i);
var spanElement = document.getElementById("new_span"+index_num+'_'+i);

inputElement.setAttribute("style","display:none");
spanElement.setAttribute("style","");
	
	//檢查空欄	
		if(inputElement.value==""){			 
			if(i==1){
			   alert("姓名為必填欄位");
                inputElement.value=spanElement.textContent;
			   }			
	        else if(i==3){
				   alert("e-mail為必填欄位");
                inputElement.value=spanElement.textContent; 
		    }
			var new_input = inputElement.value;	
			spanElement.textContent = new_input;
		}
	
		else{
			if(i==1){
				var strName = 	inputElement.value	
				
				if(strName!=spanElement.textContent){
					if(checkName(strName) == false){
					inputElement.value=spanElement.textContent;
				}//重複驗證
				else{
						//刪除陣列儲存
	for(var k=0; k<name_arr.length; k++){
				var namelib = name_arr[k];
				if(spanElement.textContent == namelib){
				  name_arr.splice(k,1);
				  }		
			}	
				}
					console.log(name_arr);
				}
				}	
			var new_input = inputElement.value;	
			spanElement.textContent = new_input;
		}
}	
	
btnrElement.setAttribute("style","");
this.setAttribute("style","display:none");
//alert(update_btn);
}

function remove_todo(){
var index_num = this.getAttribute("num");
var spanElement = document.getElementById("new_span"+index_num+'_1');	
var liElement = document.getElementById("a"+index_num);	
var todo_list = document.getElementById("todo_list");	

	//刪除陣列儲存
	for(var k=0; k<name_arr.length; k++){
				var namelib = name_arr[k];
				if(spanElement.textContent == namelib){
				  name_arr.splice(k,1);
				  }		
	}

	liElement.remove();
console.log(name_arr);
}	
	
}

/*電話格式*/
function checkPhone(strPhone) {
var phoneRegWithArea = /^[09]{2}[1-9]{2}[0-9]{6}$/;
var prompt = "您輸入的電話號碼不正確!"

if( strPhone.length > 9 ) {
	if( strPhone.length < 11 ) {
	if( phoneRegWithArea.test(strPhone) ){
	return true;
	}
	else{
	alert( prompt );
	return false;
	}
	}
		else{
		alert( prompt );
		return false;
	}
}
	else{
		alert( prompt );
		return false;
	}

}	

/*Email驗證*/
function checkEmail(strEmail) {
var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
	if( emailReg.test(strEmail) ){
		return true;
	}
	else{
		alert("您輸入的Email地址格式不正確！");
		return false;
	}
}	
 
//檢查姓名重複
function checkName(strName) {
	if(name_arr.length==0){
			name_arr.push(strName);	 
	}
	else{
		for(var k=0; k<name_arr.length; k++){
				var namelib = name_arr[k];
				if(strName == namelib){
				  alert('此姓名已被使用');
				  return false;
				   }
	}
	name_arr.push(strName);
	}		
}

//清空輸入資料
function cancelForm(){
	var nameElement = document.getElementById("input_box_name");
	var phoneElement = document.getElementById("input_box_phone");
	var mailElement = document.getElementById("input_box_mail");
	
	nameElement.value='';
	phoneElement.value='';
	mailElement.value='';
}

