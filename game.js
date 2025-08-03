let Names = localStorage.getItem("names");
let roles = localStorage.getItem("roles");
let SaidON = localStorage.getItem("said on");
console.log(Names+roles+SaidON)
function findAndMapValue(array1, array2, value) {
  // اعتبارسنجی ورودی‌ها
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    showMessage('ورودی‌ها باید آرایه باشند.');
    logAction('خطای ورودی findAndMapValue', { array1, array2, value });
    return null;
  }
  if (array1.length !== array2.length) {
    showMessage('طول آرایه‌ها باید برابر باشد.');
    logAction('خطای طول آرایه‌ها', { array1Length: array1.length, array2Length: array2.length });
    return null;
  }

  // پیدا کردن ایندکس مقدار در آرایه اول
  const index = array1.indexOf(value);

  // بررسی وجود مقدار در آرایه اول
  if (index === -1) {
    showMessage(`مقدار ${value} در آرایه اول یافت نشد.`);
    logAction('مقدار یافت نشد', { value, array1 });
    return null;
  }

  // برگرداندن مقدار متناظر از آرایه دوم
  const result = array2[index];
  showMessage(`مقدار متناظر: ${result}`, true);
  logAction('نتیجه findAndMapValue', { value, index, result });
  return result;
}
const items = ['خونه ۱', 'خونه ۲', 'خونه ۳', 'خونه ۴', 'خونه ۵', 'خونه ۶', 'خونه ۷'];

// مقادیری که نمی‌خواهیم نمایش داده شوند
const excludeItems = ['خونه ۵', 'خونه ۶'];

function fillSelect() {
  const select = document.getElementById('mySelect');
  // فیلتر کردن مقادیر برای حذف موارد مشخص شده
  items.filter(item => !excludeItems.includes(item)).forEach(item => {
    select.innerHTML += `<option value="${item}">${item}</option>`;
  });
  // لاگ‌گیری (با فرض وجود تابع logAction از کد اصلی)
  logAction('پر کردن select', { items: items.filter(item => !excludeItems.includes(item)) });
}

// فراخوانی تابع هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', fillSelect);

// رویداد انتخاب (اختیاری)
document.getElementById('mySelect').addEventListener('change', function() {
  showMessage(`گزینه انتخاب شده: ${this.value}`, true);
  logAction('انتخاب گزینه', { value: this.value });
});






































const isMobile = window.innerWidth <= 768;
if (isMobile) {
  function popup(message) {
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
  function popup(message) {
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


