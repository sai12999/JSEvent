const add = ()=>{
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1+num2;
    if(Number.isNaN(result))
    {
    document.getElementById("result").value='';
    alert("please enter valid numbers");
    }
    else
    document.getElementById("result").value=result;
}

const divide = ()=>{
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1/num2;
    if(Number.isNaN(result))
    {
    document.getElementById("result").value='';
    alert("please enter valid numbers");
    }
    else
    document.getElementById("result").value=result;
}

const multiply = ()=>{
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1*num2;
    if(Number.isNaN(result))
    {
    document.getElementById("result").value='';
    alert("please enter valid numbers");
    }
    else
    document.getElementById("result").value=result;
}

const subtract = ()=>{
    let num1 = +document.getElementById("num1").value;
    let num2 = +document.getElementById("num2").value;
    let result = num1-num2;
    if(Number.isNaN(result))
    {
    document.getElementById("result").value='';
    alert("please enter valid numbers");
    }
    else
    document.getElementById("result").value=result;
}

const resetForm = ()=>{
    document.getElementById("num1").value='';
    document.getElementById("num2").value='';
    document.getElementById("result").value='';
}

document.getElementById("main").innerHTML =`
<div class="container">
<h2>Simple Calculator</h2>
<form>
<div class="form-group">
  <label for="number1">number1:</label>
  <input type="number1" class="form-control" id="num1"/>
</div>
<div class="form-group">
  <label for="number2">number2:</label>
  <input type="number2" class="form-control" id="num2"/>
</div>
<div class="form-group">
<label for="result">result:</label>
<input type="result" class="form-control" id="result" disabled/>
</div>
</form>
<br/>
<br/>
<button type="button" id="add" class="btn btn-primary" onclick="add()">add</button>
<button type="button" id="multiply" class="btn btn-primary" onclick="multiply()">multiply</button>
<button type="button" id="divide" class="btn btn-primary" onclick="divide()">divide</button>
<button type="button" id="subtract" class="btn btn-primary" onclick="subtract()">subtract</button>
<button type="button" id="clear" class="btn btn-primary" onclick="resetForm()">reset</button>
</div>`