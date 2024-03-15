        ////////////////////////////////////
      // Hamburger Button Open and Close//
      ////////////////////////////////////
      var navigation = document.getElementById("nav-links");
      var nav_btn_opn = document.getElementById("nav-btn-opn");
      var nav_btn_cls = document.getElementById("nav-btn-cls");


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