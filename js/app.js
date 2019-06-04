const add = ()=>{
    document.getElementById("result").value=(+document.getElementById("num1").value)+(+document.getElementById("num2").value);
}

const divide = ()=>{
    document.getElementById("result").value=(+document.getElementById("num1").value)/(+document.getElementById("num2").value);
}

const multiply = ()=>{
    document.getElementById("result").value=(+document.getElementById("num1").value)*(+document.getElementById("num2").value);
}

const subtract = ()=>{
    document.getElementById("result").value=(+document.getElementById("num1").value)-(+document.getElementById("num2").value);
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