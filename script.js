


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       
        entry.target.classList.add('visible');
      } else {
        
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1,
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  



 

// =====skills部分の動き＝＝＝＝＝＝

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.bounce-image');

  const observer = new IntersectionObserver((entries) => {
    let delay = 100; // 1枚目も少し遅らせると確実にアニメする

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('show');
        setTimeout(() => {
          entry.target.classList.add('show');
        }, delay);

        delay += 200;
      }
    });
  }, {
    threshold: 0.1
  });

  targets.forEach(target => observer.observe(target));
});








  
  document.addEventListener("DOMContentLoaded", function () {
    const target = document.querySelector(".strength-line");

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // 一度だけ発動
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (target) {
      observer.observe(target);
    }
  });








  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const logoImgPC = document.querySelector(".logo img.pc");


    // ヘッダーの高さを取得
    const headerHeight = header.offsetHeight;

    // ヘッダーよりスクロールしていたら画像を切り替える
    if (window.scrollY > headerHeight) {

      logoImgPC.src = "Photo/logo_blue.png";

     
    } else {
    
      logoImgPC.src = "Photo/logo_white.png";

    }
  });




  // document.addEventListener("DOMContentLoaded", function () {
  //   const buttons = document.querySelectorAll(".works_top_inner");
  //   const web = document.querySelector(".web");
  //   const graphic = document.querySelector(".graphic");

  //   buttons.forEach((button) => {
  //     button.addEventListener("click", function () {
  //       const target = this.getAttribute("data-filter");

  //       if (target === "web") {
  //         web.style.display = "block";
  //         graphic.style.display = "none";
  //       } else if (target === "graphic") {
  //         web.style.display = "none";
  //         graphic.style.display = "block";
  //       } else {
  //         web.style.display = "block";
  //         graphic.style.display = "block";
  //       }
  //     });
  //   });
  // });


// src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"




  $(function(){
    $('.backtoall_wrap').hover(
      function() {
        $(this).find('.back_to_all_yazirushi img').stop().animate({ marginRight: '5px' }, 200);
      },
      function() {
        $(this).find('.back_to_all_yazirushi img').stop().animate({ marginRight: '0px' }, 200);
      }
    );
  });




  function checkScroll() {
    $('.fade-in').each(function () {
      const rect = this.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        $(this).addClass('show');
      }
    });
  }

  $(window).on('load scroll', checkScroll);


  function checkScroll() {
      const images = document.querySelectorAll('.fade-in');
    
      images.forEach(image => {
        const rect = image.getBoundingClientRect(); 
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          
          image.classList.add('show');
        }
      });
    }



