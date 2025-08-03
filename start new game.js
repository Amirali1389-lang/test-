let jk ;
let po = 0 
let poo = 0
{
const a = document.getElementById("1o")
const b = document.getElementById("2o")
a.textContent = ("person count = " + 0)
b.textContent = ("role count = " + 11);

document.getElementById("btnstart").onclick = rr;
function rr () {
    location.href = "../mafi bot.html" ;
}
const roles = {
    "پدرخوانده": "پدرخوانده رئیس تیم مافیاست و توانایی شلیک شبانه یا استفاده از حس ششم را دارد.",
    "ساول گودمن": " ساول گودمن می تواند یک شهر ساده را وارد تیم مافیا کند و فقط یک بار فرست دارد.",
    "ماتادور": "ماتادور می‌تواند هر شب قابلیت یک نفر را برای همان شب غیرفعال کند.",
    "مافیای ساده": "مافیای ساده عضو تیم مافیاست و توانایی خاصی ندارد، اما در تصمیم‌گیری‌های تیمی شرکت می‌کند.",
    "دکتر واتسون": "دکتر واتسون می‌تواند هر شب یک نفر را درمان کند.",
    "همشهری کین": "همشهری کین تنها یک استعلام دارد و اگر درست بگیرد، توسط گرداننده اعلام می‌شود.",
    "لئون حرفه‌ای": "لئون می‌تواند هر شب یک نفر را شلیک کند.",
    "کنستانتین": "کنستانتین می‌تواند یک نفر را به بازی برگرداند.",
    "شهروند ساده": "شهروند ساده هیچ توانایی خاصی ندارد اما باید با استدلال خود مافیا را پیدا کند.",
    "نوستراداموس": "نوستراداموس نقش مستقل است و می‌تواند تصمیم بگیرد به کدام تیم کمک کند."
};




function calculateLevenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // جایگزینی
                    matrix[i][j - 1] + 1,     // درج
                    matrix[i - 1][j] + 1      // حذف
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

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

document.addEventListener("touchmove", function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // جلوگیری از حرکت چند انگشتی که ممکن است زوم شود
    }
}, { passive: false });

document.addEventListener("DOMContentLoaded", function () {
    const roleCountSpan = document.getElementById("roleCount");
    const roleListDiv = document.getElementById("roleList");
    const addRoleButton = document.getElementById("addRole");
    const removeRoleButton = document.getElementById("removeRole");
    const saveRolesButton = document.getElementById("saveRoles");
    
    let roleCount = 0;
    let roles = [];
    let selectedRoles = []; // لیست نقش‌های انتخاب‌شده

    // افزودن نقش
    addRoleButton.addEventListener("click", function () {
        if (roleCount<15) {
            roleCount++;
            roleCountSpan.textContent = roleCount;
            a.textContent = ("person count = " + roleCount);

            const roleInput = document.createElement("input");
            roleInput.className = "role-input";
        
            // استفاده از کلمات فارسی با پشتیبانی صحیح
            const placeholderText = "نام بازیکن " + roleCount; // بدون استفاده از علامت دلار
            roleInput.setAttribute("placeholder", placeholderText); // تنظیم placeholder
            roleListDiv.appendChild(roleInput);
        }
    });

    // حذف نقش
    removeRoleButton.addEventListener("click", function () {

        if (roleCount > 0) {
            roleListDiv.lastChild.remove();
            roleCount--;
            roleCountSpan.textContent = roleCount;
        }
        a.textContent = ("person count = " + roleCount);

    });

    // تغییر وضعیت نقش‌ها
    const roleToggleButtons = document.querySelectorAll(".role-toggle");
    roleToggleButtons.forEach((button) => {
        if (button.dataset.selected === "true") {
            selectedRoles.push(button.previousElementSibling.textContent.trim());
        }

        button.addEventListener("click", function () {
            const roleName = button.previousElementSibling.textContent.trim();
            if (button.dataset.selected === "true") {
                button.textContent = "✖";
                button.dataset.selected = "false";
                selectedRoles = selectedRoles.filter((role) => role !== roleName);
            } else {
                button.textContent = "✔";
                button.dataset.selected = "true";
                selectedRoles.push(roleName);
            }
            console.log("نقش‌های انتخاب‌شده:", selectedRoles);
            b.textContent = ("role count = " + selectedRoles.length);

            

        });
    });

    // ذخیره نام‌ها و نقش‌ها
    saveRolesButton.addEventListener("click", function () {
        roles = [];
        const inputs = document.querySelectorAll(".role-input");
        let allValid = true;
    
        // جمع‌آوری نام بازیکنان
        inputs.forEach((input) => {
            if (input.value.trim() === "") {
                allValid = false;
            } else {
                roles.push(input.value.trim());
            }
        });
    
        // شرط برای جلوگیری از ذخیره در شرایط نامناسب
        if (roleCount < 7) {
            showPopup("تعداد بازیکنان باید حداقل 7 نفر باشد");
            return;
        }

        if (!allValid){
            showPopup(" همه نام‌ها وارد شده باشند.");
            return;
        }
    
        if (roles.length !== selectedRoles.length) {
            showPopup("تعداد نقش‌ها با تعداد بازیکنان همخوانی ندارد. لطفاً بررسی کنید.");
            return;
        }
  
        if (check(selectedRoles,"پدرخوانده",selectedRoles.length)===1){
            if (check(selectedRoles,"ماتادور",selectedRoles.length)===1){
                if (check(selectedRoles,"ساول گودمن",selectedRoles.length)===1){
                    if (check(selectedRoles,"مافیای ساده ۱",selectedRoles.length)===1){
                        if (check(selectedRoles,"مافیای ساده ۲",selectedRoles.length)===1){
                            if (check(selectedRoles,"مافیای ساده ۳",selectedRoles.length)===1){
                                showPopup(".حد اقل یک مافیا نیاز است");
                                return;
                            }
                        }
                    }
                }
            }
        }
        selectedRoles.forEach((ass) =>{
            
            if(ass === "پدرخوانده" || ass === "ماتادور" || ass === "ساول گودمن" || ass === "مافیای ساده ۱" || ass === "مافیای ساده ۲" || ass === "مافیای ساده ۳"  ){
                poo++
            }else{
                po++
            }
        });
        if(poo>=po){
            return;
        }
    
        // ذخیره بازیکنان و نقش‌ها در localStorage
        localStorage.setItem("players", JSON.stringify(roles));
        localStorage.setItem("selectedRoles", JSON.stringify(selectedRoles));
    
        showPopup("اطلاعات با موفقیت ذخیره شدند!");
        console.log({
            بازیکنان: roles,
            نقش‌های_انتخاب‌شده: selectedRoles,
        });
        localStorage.setItem("role",selectedRoles)
        localStorage.setItem("name",JSON.stringify(roles))
        window.location.href = "./selectedRoles.html"
        
    });
});

}
//
//
//
function check (akk,fh,yyu) {
let a = 0
for (a=0;a<=yyu;a++) {
    if (akk[a]!==fh){
        if(a===yyu){
            return 1;
        }
    }else{
        return 0;
    }
}

}
//
//
//
//
//
//
//
//game

  
