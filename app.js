//dowload butonu
let downlaodPdf = document.querySelector(".download");
//cv sekli
let image = document.querySelector(".image");
//cv sekil tesdiq butonu
let sekil = document.querySelector(".sekil");

//secilen sekilin adresi
let url = ``;

//dogum tarixi
let birthday = document.querySelector(".birth");
let birthdayAccept = document.querySelector(".birthdayAccept");
birthdayAccept.addEventListener("click", function () {
  birthday.innerText = document.querySelector(".birthdayInput").value;
});

//cins secimi

let sex = document.querySelector(".male");

let sexSelect = document.querySelector(".sexSelect");

let sexAccept = document.querySelector(".sexAccept");

sexAccept.addEventListener("click", function () {
  sex.innerText = document.querySelector(".sexSelect").value;
});

//vetendaslig secimi

let nationality = document.querySelector(".azerbaijan");

let nationalityInput = document.querySelector(".nationalityInput");

let nationalityAccept = document.querySelector(".nationalityAccept");

nationalityAccept.addEventListener("click", function () {
  nationality.innerText = document.querySelector(".nationalityInput").value;
});

///Aile veziyyeti secimi

let relation = document.querySelector(".relation-type");
let relationInput = document.querySelector(".relationInput");
let relationAccept = document.querySelector(".relationAccept");

relationAccept.addEventListener("click", function () {
  relation.innerText = document.querySelector(".relationInput").value;
});

//herbi

let army = document.querySelector(".army-type");
let armyInput = document.querySelector(".armyInput");
let armyAccept = document.querySelector(".armyAccept");

armyAccept.addEventListener("click", function () {
  army.innerText = document.querySelector(".armyInput").value;
});

//suruculuk

let car = document.querySelector(".passport");
let carInput = document.querySelector(".carInput");
let carAccept = document.querySelector(".carAccept");

carAccept.addEventListener("click", function () {
  car.innerText = document.querySelector(".carInput").value;
});

//unvan

let address = document.querySelector(".unvan");
let addressInput = document.querySelector(".addressInput");
let addressAccept = document.querySelector(".addressAccept");

addressAccept.addEventListener("click", function () {
  address.innerText = document.querySelector(".addressInput").value;
});

//mobil nomre

let mobile = document.querySelector(".phone-number");
let mobileInput = document.querySelector(".mobileInput");
let mobileAccept = document.querySelector(".mobileAccept");

mobileAccept.addEventListener("click", function () {
  mobile.innerText = document.querySelector(".mobileInput").value;
});

//home number

let home = document.querySelector(".home-number");
let homeInput = document.querySelector(".homeInput");
let homeAccept = document.querySelector(".homeAccept");

homeAccept.addEventListener("click", function () {
  home.innerText = document.querySelector(".homeInput").value;
});

//cv adi tesdiqi
let nameAccept = document.querySelector(".name-accept");

//cv adi
let cvName = document.querySelector(".cv-name");

nameAccept.addEventListener("click", function () {
  cvName.innerText = document.querySelector(".personInfo").value;
});

//uni
let univer = document.querySelector(".univer");

//uni tesdiq
let uniAccept = document.querySelector(".uniAccept");

uniAccept.addEventListener("click", function () {
  univer.innerText = document.querySelector(".uni").value;
});

//ixtisas
let faculty = document.querySelector(".faculty");

///bitis tarixi
let uniDate = document.querySelector(".univer-date");

//bitis tarix tesdiqi
let uniDateAccept = document.querySelector(".uni-date-accept");

uniDateAccept.addEventListener("click", function () {
  uniDate.innerText = document.querySelector(".uni-tarix").value;
});

//ixtisas tesdiq butonu
let facultyAccept = document.querySelector(".facultyAccept");

facultyAccept.addEventListener("click", function () {
  faculty.innerText = document.querySelector(".ixtisas").value;
});

//sekil elave etmek eventi
sekil.addEventListener("click", function () {
  url = document.querySelector(".photo").files[0].name;

  image.style.backgroundImage = `url(${url})`;

  console.log(url);
});

///background  color

let left = document.querySelector(".left");

let backgroundInput = document.querySelector(".backgroundInput");

let backgroundAccept = document.querySelector(".backgroundAccept");

backgroundInput.addEventListener("change", function (event) {
  left.style.backgroundColor = event.target.value;
});

//bacariqlar

let skilMenu = document.querySelector(".skil-menu");

let skilsInput = document.querySelector(".skilsInput");

let skilsAccept = document.querySelector(".skilsAccept");
let skilList = [];
skilsAccept.addEventListener("click", function () {
  let skilItem = document.createElement("li");
  skilItem.classList.add("skil-item");
  skilMenu.appendChild(skilItem);
  skilItem.innerText = document.querySelector(".skilsInput").value;
  document.querySelector(".skilsInput").value = "";

  skilList.push(skilItem);

  skilList.forEach((list) => {
    list.addEventListener("click", function (event) {
      event.target.remove();
    });
  });
});

//is tecrubesi

let workMenu = document.querySelector(".work-menu");

let companyInput = document.querySelector(".companyInput");
let workInput = document.querySelector(".workInput");

let workEnterDate = document.querySelector(".workEnterDate");

let workFinalDate = document.querySelector(".workFinalDate");
let workAccept = document.querySelector(".workAccept");

workAccept.addEventListener("click", function () {
  let workItem = document.createElement("li");

  workItem.classList.add("works");
  let company = document.createElement("p");
  company.innerText = document.querySelector(".companyInput").value;
  company.classList.add("company");
  workItem.appendChild(company);
  let job = document.createElement("p");
  job.classList.add("job");
  job.innerText = document.querySelector(".workInput").value;
  workItem.appendChild(job);

  let workDate = document.createElement("p");
  workDate.classList.add("work-date");
  let enterDate = document.createElement("span");
  enterDate.classList.add("enter");

  let valEnter = "";
  for (
    let i = 0;
    i < document.querySelector(".workEnterDate").value.length;
    i++
  ) {
    valEnter += document
      .querySelector(".workEnterDate")
      .value[i].replace("-", ".");
  }

  console.log(valEnter);
  enterDate.innerText = valEnter;

  workDate.appendChild(enterDate);

  let endDate = document.createElement("span");
  endDate.classList.add("end");

  let valEnd = "";
  for (
    let i = 0;
    i < document.querySelector(".workFinalDate").value.length;
    i++
  ) {
    valEnd += document
      .querySelector(".workFinalDate")
      .value[i].replace("-", ".");
  }

  console.log(valEnd);
  endDate.innerText = "-" + valEnd;

  workDate.appendChild(endDate);

  workItem.appendChild(workDate);

  workMenu.appendChild(workItem);

  document.querySelector(".companyInput").value = "";
  document.querySelector(".workInput").value = "";
  document.querySelector(".workEnterDate").value = "";
  document.querySelector(".workFinalDate").value = "";
});

//pdf duzeltmek
function generatePdf() {
  const element = document.querySelector(".pdf");

  html2pdf()
    .from(element)
    .set({
      margin: 0,
      filename: "test.pdf",
      html2canvas: { scale: 2 },
      jsPDF: {
        orientation: "portrait",
        unit: "in",
        format: "letter",
        compressPDF: true,
      },
    })
    .save();
}

downlaodPdf.addEventListener("click", generatePdf);
