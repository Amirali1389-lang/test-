let copy = null
let copy2 = null
let selectt = "name"
let ss = 0
let elementRole = [];
let elementName = [];
let yyyyyyy = 0
const conName = document.getElementById("names");
const conRole = document.getElementById("roles");
document.getElementById("home").onclick = () => {
    location.href = "../mafi bot.html"
}
    let Names = localStorage.getItem("name");
    let roless = localStorage.getItem("role");
    
window.onload = function () {
    const con = document.getElementById("continer")
    
  
    let nameList = [];
    try {
      let parsed = JSON.parse(Names);
      nameList = Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      nameList = Names ? Names.split(",") : [];
    }

    let rolelist = [];
    try {
        let parsede = JSON.parse(roless);
        rolelist = Array.isArray(parsede) ? parsede : [];
    } catch (e) {
        rolelist = roless ? roless.split(",") : [];
    }

    

    nameList.forEach((name) => {
        const box = document.createElement("div");
        box.className = "box";

        const selectBtn = document.createElement("button");
        selectBtn.className = "selectBtn1";
        selectBtn.textContent = name;

        selectBtn.onclick = () => {
            copy=name;
            selectBtn.remove(selectBtn);
            showPopup(copy + " selected")
            selectt = "role"
            select();
            
        }

        box.appendChild(selectBtn);
        conName.appendChild(box);
    });
    
    rolelist.forEach(() => {
        ss++
        const box = document.createElement("div");
        box.className = "box 2";

        const selectBtn = document.createElement("button");
        selectBtn.className = "selectBtn";
        selectBtn.textContent = ss;

        selectBtn.onclick = () => {
            if (roless.length === 0) {
                showPopup("همه نقش‌ها استفاده شده‌اند!");
            return;
            }
            if (selectBtn.textContent!=="✖") {

                // اگر roles هنوز تبدیل به آرایه نشده، اینجا تبدیلش کن
                if (typeof roless === "string") {
                roless = roless.split(",");
                }
            
                if (roless.length === 0) {
                    showPopup("همه نقش‌ها استفاده شده‌اند!");
                return;
                }
                
                const randomIndex = Math.floor(Math.random() * roless.length);
                const randomRole = roless.splice(randomIndex, 1)[0]; // انتخاب و حذف نقش تصادفی
                console.log(randomRole)
                copy2 = randomRole;
                console.log(copy2)
                selectBtn.textContent = "✖"
                selectBtn.style.backgroundColor = "#750000"
                selectt = "name"
                console.log(copy2 + "op")
                elementRole.push(copy2);
                showPopup(copy2);
                select();
                
            }else{
                showPopup("این دکمه قبلا انتخاب شده");
            }
        };

        box.appendChild(selectBtn);
        conRole.appendChild(selectBtn);
    });

    
  
    select();

    function select (){
        yyyyyyy++
        console.log("start select")
        if(roless.length !== 0){
            if(selectt==="role"){
                console.log("role")
                stopen("role");
            }else if (selectt==="name"){
                console.log("name")
                stopen("name");
            }
        }else{
            elementName.push(copy);
            console.log("END");
            console.log(elementName);
            console.log(elementRole);
            localStorage.setItem("names", JSON.stringify(elementName));
            localStorage.setItem("roles", JSON.stringify(elementRole));
            const Names = JSON.parse(localStorage.getItem("names") || "[]");
            const rolest = JSON.parse(localStorage.getItem("roles") || "[]");
            alert(Names + rolest)
            window.location.href = "./blind.html"
            
        }
    }
    function stopen (sd) {
        console.log("start stopen")
        const interval = setInterval(() => {  
            console.log("cecking")        
            if (selectt === sd) {
              clearInterval(interval); // توقف بررسی
                if (sd==="name") {
                    conName.style.display = "block"
                    console.log("end + "+ roles)
                    
                    console.log(elementName)
                    console.log(elementRole)
                    
                }else{
                    conRole.style.display = "block"
                }
                


            }
            
        }, 1);
        
        
        
        conName.style.display = "none"
        conRole.style.display = "none"
        if(yyyyyyy>1){
            if (sd==="name") {
                elementName.push(copy);
            }else{
                
            }
            return ;
        }
        
        
    }
    function Next (){
        conName.style.display = "none"
        conRole.style.display = "none"
        const btnNext = document.createElement("button")
        btnNext.className = "qwer"
        btnNext.textContent = "Next"
        con.appendChild(btnNext)
        let erer = elementName.split(",");
        let oror = elementRole.split(",");
        console.log("---")
        localStorage.JSON.parse(setItem("roles",oror))
        localStorage.JSON.parse(setItem("names",erer))
    }

    document.getElementsByClassName("qwer").onclick = () => {
        window.location.href = ""
    }
    function filterUniqueStrings(arr) {
        const seen = new Set();
        const result = [];
      
        arr.forEach(item => {
          if (typeof item === "string" && !seen.has(item)) {
            seen.add(item);
            result.push(item);
          }
        });
      
        return result;
      }


};
  



  /*let elementRole = [];
  let elementName = [];
  void tt
  for(tt=0;tt<roles.length ; plasplas() ){
    conName.style.display = "block"
  }
  function plasplas (){
    if(copy!==null && copy2!==null){
        elementName.push(copy);
        elementRole.push(copy2);
        tt++
    }
  }
  alert(elementName + "\n" + elementRole)*/


































/*
  alert(nameList.join(", ") + " - " + role);
  
    const container = document.getElementById("persons");
  
    nameList.forEach((name) => {
      const box = document.createElement("div");
      box.className = "box";
  
      const nameSpan = document.createElement("span");
      nameSpan.textContent = name;
  
      const copyBtn = document.createElement("button");
      copyBtn.textContent = "کپی";
      copyBtn.onclick = () => {
        copiedName = name;
        navigator.clipboard.writeText(name)
          .then(() => {
            alert(`"${name}" با موفقیت کپی شد!`);
          })
          .catch((err) => {
            alert("خطا در کپی: " + err);
          });
      };
  
      box.appendChild(nameSpan);
      box.appendChild(copyBtn);
      container.appendChild(box);
    });


    const randomIndex = Math.floor(Math.random() * fruits.length);
    const randomFruit = fruits[randomIndex];


  */

    function showPopup(message) {
        // ایجاد پوشش کدر برای پس‌زمینه
        const overlay = document.createElement('div');
        overlay.id = 'f'
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // شدت کدری
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';
      
        // ایجاد پاپ‌آپ
        const popup = document.createElement('div');
        popup.style.position = 'relative';
        popup.style.backgroundColor = '#333333'; // رنگ پس‌زمینه پاپ‌آپ
        popup.style.padding = '20px';
        popup.style.borderRadius = '10px';
        popup.style.textAlign = 'center';
        popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        popup.style.margin = '0px 200px 0px 200px';
      
        // افزودن پیام
        const messageText = document.createElement('h1');
        messageText.textContent = message;
        messageText.style.margin = '0 0 50px'; // افزایش فاصله به 30px
        messageText.style.padding = '10px';
        messageText.style.color = 'white'; // متن سفید
        messageText.style.fontSize = '18px';
        messageText.style.borderRadius = '10px'; // گوشه‌های گرد برای متن
        messageText.style.backgroundColor = '#4a4a4a'; // رنگ پس‌زمینه برای متن
        popup.appendChild(messageText);
      
        // ایجاد دکمه "OK"
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.padding = '10px 20px';
        okButton.style.fontSize = '16px';
        okButton.style.cursor = 'pointer';
        okButton.style.backgroundColor = '#4a4a4a'; // رنگ دکمه
        okButton.style.color = 'white';
        okButton.style.border = 'none';
        okButton.style.borderRadius = '5px';
        okButton.style.position = 'absolute';
        okButton.style.bottom = '10px'; // فاصله از پایین پاپ‌آپ
        okButton.style.right = '10px'; // فاصله از سمت راست پاپ‌آپ
        okButton.onclick = function () {
          document.body.removeChild(overlay);
          if(roless.length === 0){
            console.log("yu")
            
              //window.location.href = "./blind.html"
            
          }
        };
    
      
        // افزودن دکمه و پیام به پاپ‌آپ
        popup.appendChild(okButton);
        overlay.appendChild(popup);
      
        // افزودن پوشش به بدنه
        document.body.appendChild(overlay);
      }
      // جلوگیری از زوم لمسی و حرکات چند انگشتی
    document.addEventListener("wheel", function(event) {
        if (event.ctrlKey) {
            event.preventDefault(); // جلوگیری از زوم با چرخ ماوس و کلید Ctrl
        }
    }, { passive: false });
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // جلوگیری از زوم با چند انگشت
        }
    }, { passive: false });
    

   