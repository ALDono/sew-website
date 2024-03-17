        ////////////////////////////////////
      // Hamburger Button Open and Close//
      ////////////////////////////////////
      let navigation = document.getElementById("nav-links");
      let nav_btn_opn = document.getElementById("nav-btn-opn");
      let nav_btn_cls = document.getElementById("nav-btn-cls");


      document.getElementById("nav-btn-opn").addEventListener("click", function(){
          nav_btn_opn.style.display = "none";
          nav_btn_cls.style.display = "block"
          navigation.style.display = "block";
      })

      document.getElementById("nav-btn-cls").addEventListener("click", function(){
        nav_btn_opn.style.display = "block";
        nav_btn_cls.style.display = "none"
        navigation.style.display = "none";
      })

      // Discount Close Button //
      document.getElementById("discountClose").addEventListener("click", function(){
        document.getElementById("discountBanner").style.display = "none";
      })