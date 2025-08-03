
const isMobile = window.innerWidth <= 768;
if (isMobile) {
    function showPopup(message) {
      const overlay = document.createElement('div');
      overlay.id = 'f';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '1000';
  
      const popup = document.createElement('div');
      popup.style.position = 'relative';
      popup.style.backgroundColor = '#333333';
      popup.style.padding = '20px';
      popup.style.borderRadius = '10px';
      popup.style.textAlign = 'center';
      popup.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
      popup.style.width = '90vw'; // عرض واکنش‌گرا
      popup.style.maxWidth = '400px'; // محدودیت عرض
      popup.style.boxSizing = 'border-box';
  
      const messageText = document.createElement('h1');
      messageText.textContent = message;
      messageText.style.margin = '0 0 30px';
      messageText.style.padding = '10px';
      messageText.style.color = 'white';
      messageText.style.fontSize = '20px'; // فونت خوانا
      messageText.style.borderRadius = '10px';
      messageText.style.backgroundColor = '#4a4a4a';
      messageText.style.wordWrap = 'break-word';
      popup.appendChild(messageText);
  
      const okButton = document.createElement('button');
      okButton.textContent = 'باشه';
      okButton.style.padding = '10px 20px';
      okButton.style.fontSize = '16px';
      okButton.style.cursor = 'pointer';
      okButton.style.backgroundColor = '#4a4a4a';
      okButton.style.color = 'white';
      okButton.style.border = 'none';
      okButton.style.borderRadius = '5px';
      okButton.style.marginTop = '10px';
      okButton.onclick = function () {
        document.body.removeChild(overlay);
        if (roless.length === 0) {
          console.log("yu");
          // window.location.href = "./blind.html";
        }
      };
  
      popup.appendChild(okButton);
      overlay.appendChild(popup);
      document.body.appendChild(overlay);
    }
  
    // جلوگیری از زوم لمسی و چند انگشتی
    document.addEventListener("wheel", function(event) {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    }, { passive: false });
  
    document.addEventListener("touchstart", function(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }, { passive: false });
  }else{
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
        
      document.addEventListener("DOMContentLoaded", function() {
          const cardData = {
              u1: "پدرخوانده رئیس تیم مافیاست و توانایی شلیک شبانه یا استفاده از حس ششم را دارد.",
              u2: "ساول گودمن می‌تواند یک شهر ساده را وارد تیم مافیا کند و فقط یک بار فرصت دارد.",
              u3: "ماتادور می‌تواند هر شب قابلیت یک نفر را برای همان شب غیرفعال کند.",
              u4: "مافیای ساده عضو تیم مافیاست و توانایی خاصی ندارد.",
              u5: "همشهری کین تنها یک استعلام دارد و اگر درست بگیرد، توسط گرداننده اعلام می‌شود.",
              u6: "کنستانتین می‌تواند یک نفر را به بازی برگرداند.",
              u7: "لئون می‌تواند هر شب یک نفر را شلیک کند.",
              u8: "دکتر واتسون می‌تواند هر شب یک نفر را درمان کند.",
              u9: "شهروند ساده هیچ توانایی خاصی ندارد.",
              u10: "نوستراداموس نقش مستقل است و می‌تواند تصمیم بگیرد به کدام تیم کمک کند.",
              u11: "بازیکن اخراجی با کارت دستبند هرکس را نشان کند، توانمندی‌های آن شب را از وی می‌گیرد.",
              u12: "بازیکن قبل از خروج کارت نقش خود را با یکی از بازیکنان عوض می‌کند.",
              u13: "بازیکن اخراجی با نشان کردن دو نفر، آنان را به مدت یک روز سایلنت می‌کند.",
              u14: "اگر بازیکن اخراجی این کارت را انتخاب کند، نقش او فاش می‌شود و امکان بازگشت ندارد.",
              u15: "اگر بتواند نوستراداموس را شناسایی کند، به بازی برمی‌گردد."
          };
      
          for (const id in cardData) {
              const origImg = document.getElementById(id);
              if (origImg) {
                  // ایجاد عنصر کانتینر کارت
                  const cardContainer = document.createElement("div");
                  cardContainer.classList.add("card-container");
      
                  // ایجاد قسمت جلویی کارت
                  const cardFront = document.createElement("div");
                  cardFront.classList.add("card", "card-front");
                  cardFront.appendChild(origImg.cloneNode(true));
      
                  // ایجاد قسمت پشتی کارت با توضیحات
                  const cardBack = document.createElement("div");
                  cardBack.classList.add("card", "card-back");
                  cardBack.textContent = cardData[id];
                  cardBack.textContent.style = '5px';
      
                  // اضافه کردن قسمت‌ها به کانتینر کارت
                  cardContainer.appendChild(cardFront);
                  cardContainer.appendChild(cardBack);
      
                  // جایگزینی تصویر اصلی با کانتینر کارت
                  origImg.parentNode.replaceChild(cardContainer, origImg);
              }
          }
      });
  }
if (!isMobile) {
// ایجاد پوشش تار روی کل صفحه
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)"; // ← سیاه نزدیک به تاریکی کامل
overlay.style.zIndex = "9998";
document.body.appendChild(overlay);

// ایجاد پیام داخل overlay
const message = document.createElement("div");
message.textContent = "  را فشار دهید F11 برای ادامه دکمه ";
Object.assign(message.style, {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#444",
  color: "white",
  padding: "20px 40px",
  borderRadius: "10px",
  fontFamily: "sans-serif",
  fontSize: "20px",
  textAlign: "center",
  zIndex: "9999",
  boxShadow: "0 0 10px rgba(0,0,0,0.5)",
});
document.body.appendChild(message);

// مخفی کردن محتوای اصلی (اگر هست)
const main = document.getElementById("main");
if (main) main.style.visibility = "hidden";

// گوش دادن به F11
document.addEventListener("keydown", function (event) {
  if (event.key === "F11") {
    overlay.remove();
    message.remove();
    if (main) main.style.visibility = "visible";
  }
});

document.getElementById("btnAboutUs"). onclick = jj;
function jj () {
    showPopup("maker = amirali jafari -- maid in = iran");
}}


/*document.getElementById("u1").onclick = u1 ;
function u1 () {
    showPopup(     "پدرخوانده رئیس تیم مافیاست و توانایی شلیک شبانه یا استفاده از حس ششم را دارد.",
    );
}
document.getElementById("u2").onclick = u2 ;
function u2 () {
    showPopup(     " ساول گودمن می تواند یک شهر ساده را وارد تیم مافیا کند و فقط یک بار فرست دارد.",
    );
}
document.getElementById("u3").onclick = u3 ;
function u3 () {
    showPopup(     " ماتادور می‌تواند هر شب قابلیت یک نفر را برای همان شب غیرفعال کند.",
    );
}
document.getElementById("u4").onclick = u4 ;
function u4 () {
    showPopup(     " مافیای ساده عضو تیم مافیاست و توانایی خاصی ندارد، اما در تصمیم‌گیری‌های تیمی شرکت می‌کند.",    );
}
document.getElementById("u5").onclick = u5 ;
function u5 () {
    showPopup(     " همشهری کین تنها یک استعلام دارد و اگر درست بگیرد، توسط گرداننده اعلام می‌شود.",    );
}
document.getElementById("u6").onclick = u6 ;
function u6 () {
    showPopup(     " کنستانتین می‌تواند یک نفر را به بازی برگرداند.",    );
}
document.getElementById("u7").onclick = u7 ;
function u7 () {
    showPopup(     " لئون می‌تواند هر شب یک نفر را شلیک کند.",    );
}
document.getElementById("u8").onclick = u8 ;
function u8 () {
    showPopup(     " دکتر واتسون می‌تواند هر شب یک نفر را درمان کند.",    );
}
document.getElementById("u9").onclick = u9 ;
function u9 () {
    showPopup("شهروند ساده هیچ توانایی خاصی ندارد اما باید با استدلال خود مافیا را پیدا کند.");
}
document.getElementById("u10").onclick = u10 ;
function u10 () {
    showPopup("نوستراداموس نقش مستقل است و می‌تواند تصمیم بگیرد به کدام تیم کمک کند.");
}*/
document.getElementById("u111").onclick = u11 ;
function u11 () {
    showPopup("بازیکن اخراجی با کارت دستبند هرکس را نشان کند٬ توانمندی های ان شب را از وی میگیرد.نکته اگر تنها یک مافیا در بازی مانده باشد و کارت دسبتند دریافت کرده باشد٬ همچنان امکان شلیک خواهد داشت. شات مختص به یک مافیا نیست٬ یک توانایی تیمی است");

}
document.getElementById("u122").onclick = u12 ;
function u12 () {
    showPopup("بازیکن قبل از خروج کارت نقش خود را با یکی از بازیکنان عوض می کند.");
}
document.getElementById("u133").onclick = u13 ;
function u13 () {
    showPopup("بازیکن اخراجی با نشان کردن دو نفر٬ آنان را بمدت یک روز سایلنت کرده و افرادی که نشان شده باشند٬ فردا حتی در دفاع امکان صحبت کردن ندارند. اگر تعداد بازیکنان به نصف رسید٬ در سکوت بره ها یک نفر سایلنت خواهد شد.");
}
document.getElementById("u144").onclick = u14 ;
function u14 () {
    showPopup("گر بازیکن اخراجی این کارت را انتخاب کند٬ گرداننده بدون نیاز به استعالم جمعی نقش دقیق او را فاش میکند و او از بازی بیرون میرود. در این حالت امکان بازگشت به بازی توسط کنستانتین را ندارد.");
}
document.getElementById("u155").onclick = u15 ;
function u15 () {
    showPopup("اگر صاحب این کارت بتواند فقط نوستراداموس را از بین بازیکنان داخل بازی شناسایی کند. به بازی برمیگردد و نوستراداموس بجای او از بازی خارج میشود.");
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


document.getElementById("btnTraining").onclick = function () {
    const searchInput = document.getElementById("kkg").value.toLowerCase().trim();

    if (searchInput === "") {
        showPopup(". "+"متنی وارد نکردید ");

    } else {
        let matchFound = false;
        let closestMatch = null;
        let closestDistance = Infinity;

        for (const role in roles) {
            const distance = calculateLevenshteinDistance(searchInput, role);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestMatch = role;
            }
        }

        if (closestDistance <= 3) { // تنظیم حساسیت (۳ فاصله کافی است)
            showPopup(". "+"نقش: " + closestMatch + "\nتوضیحات: " + roles[closestMatch]);
            matchFound = true;
        } else {
            showPopup(". "+"متن وارد شده اشتباه است");
        }

        document.getElementById("kkg").value = ""; // پاک کردن متن باکس
    }
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


// ***
document.getElementById('btnDescription').onclick = ffgg;
function ffgg() {
    //location.href = "./mafiapage/discription.html";
    showPopup("این برنامه به شما کمک می‌کند تا راحت‌تر بازی مافیای خود را اجرا کنید همچنین باعث می‌شود که ذخیره اطلاعات راحت‌تر شود و حتیگرداننده بازیحتی اگر بازی را به خوبی بلد نباشد بازی پیش برود فقط کافیست شمادستورالعمل‌ها را به خوبی اجرا کنید .  بازی ادامه یابداین بازی بر اساس سناریوی بازی پدرخوانده تعریف شده است."+"\n"+" This program helps you to run your mafia game more easily .It also makes it easier to save information .and even if the game manager does not know the game well, the game will continue You just need to follow the instructions well and the game will continue This game is defined based on the Godfather game scenario .")
}

document.getElementById("t").onclick = p ;
function p () {
    location.href = "./mafi bot.html" ;
}
document.getElementById("btnstart").onclick = rr;
function rr () {
    location.href = "./mafiapage/start new game.html" ;
}