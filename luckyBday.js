const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberBtn = document.querySelector("#check-number");
const output = document.querySelector(".output");



function checkNumberLucky()
{
  const dob = dateOfBirth.value;
  const sum1 = calculateSum(dob);
  console.log(sum1);
  compareValues(luckyNumber.value,sum1);
}

function calculateSum(dob)
{
  dob = dob.replaceAll("-","");
  let sum1=0;
  for(let i=0;i<dob.length;i++)
  {
    sum1 = sum1 + Number(dob[i]);
  }
  return sum1;
}

function compareValues(luckyNumber,sum1)
{
  if(sum1%luckyNumber === 0)
  {
    output.innerText = "Your Birthday is Lucky😎";
  }
  else
  {
    output.innerText = "Your Birthday is not Lucky🙃";
  }
}

checkNumberBtn.addEventListener("click",checkNumberLucky)


