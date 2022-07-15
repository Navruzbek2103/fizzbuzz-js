var elValueInput = document.querySelector("#valueInput");
var elForm = document.querySelector("#Form");
var elValueOutput = document.querySelector("#valueOutput");
var elValueColor = document.querySelector("#valueBgColor");
var elBody = document.querySelector("#body")

// elBody.style.backgroundColor = "#FFF"
// alert(elBody.value)


elForm.addEventListener("submit", function(res){
  res.preventDefault()


  if(!isNaN(elValueInput.value)){
    if(elValueInput.value.length > 0){
      if(elValueInput.value % 3 == 0 && elValueInput.value % 5 == 0){
        // alert(elValueInput.value)

        elValueOutput.value = "FizzBuzz";
      }
      else if(elValueInput.value % 3 == 0){
        elValueOutput.value = "Fizz";
      }
      else if(elValueInput.value % 5 == 0){
        elValueOutput.value = "Buzz";
      }
      else{
        elValueOutput.value = elValueInput.value + " soni 3, yoki 5 ga bo'linmaydi";
      }
    }
    else{
      alert("Ayyorlik qilmang, ma'lumot kiriting")
    }
  }
  else{
    alert("Iltimos, raqamli ma'lumot kiriting!")
  }



})
// alert(elValueColor.value)

elForm.addEventListener("input", function(result){
  result.preventDefault()

  elBody.style.backgroundColor = elValueColor.value

})
