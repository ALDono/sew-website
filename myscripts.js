// 1710356692528
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '35664b-50.myshopify.com',
      storefrontAccessToken: '4f3e113ef2d32be81a2e010442c9e625',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8776900772174',
        node: document.getElementById('product-component-1710356692528'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Avant Garde, sans-serif",
        "font-weight": "normal",
        "color": "#e84855"
      },
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "price": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      },
      "compareAt": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      },
      "unitPrice": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px"
      },
      "title": {
        "color": "#e84855"
      },
      "header": {
        "color": "#e84855"
      },
      "lineItems": {
        "color": "#e84855"
      },
      "subtotalText": {
        "color": "#e84855"
      },
      "subtotal": {
        "color": "#e84855"
      },
      "notice": {
        "color": "#e84855"
      },
      "currency": {
        "color": "#e84855"
      },
      "close": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855"
        }
      },
      "empty": {
        "color": "#e84855"
      },
      "noteDescription": {
        "color": "#e84855"
      },
      "discountText": {
        "color": "#e84855"
      },
      "discountIcon": {
        "fill": "#e84855"
      },
      "discountAmount": {
        "color": "#e84855"
      },
      "cart": {
        "background-color": "#f1cb6c"
      },
      "footer": {
        "background-color": "#f1cb6c"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ebb42c",
        ":hover": {
          "background-color": "#d4a228"
        },
        ":focus": {
          "background-color": "#d4a228"
        }
      },
      "count": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855"
        }
      },
      "iconPath": {
        "fill": "#e84855"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#e84855"
      },
      "title": {
        "color": "#e84855"
      },
      "price": {
        "color": "#e84855"
      },
      "fullPrice": {
        "color": "#e84855"
      },
      "discount": {
        "color": "#e84855"
      },
      "discountIcon": {
        "fill": "#e84855"
      },
      "quantity": {
        "color": "#e84855"
      },
      "quantityIncrement": {
        "color": "#e84855",
        "border-color": "#e84855"
      },
      "quantityDecrement": {
        "color": "#e84855",
        "border-color": "#e84855"
      },
      "quantityInput": {
        "color": "#e84855",
        "border-color": "#e84855"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/

// 1710357168853
/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: '35664b-50.myshopify.com',
      storefrontAccessToken: '4f3e113ef2d32be81a2e010442c9e625',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '8776900968782',
        node: document.getElementById('product-component-1710357168853'),
        moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "title": {
        "font-family": "Avant Garde, sans-serif",
        "font-weight": "normal",
        "color": "#e84855"
      },
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "price": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      },
      "compareAt": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      },
      "unitPrice": {
        "font-family": "Avant Garde, sans-serif",
        "color": "#e84855"
      }
    },
    "contents": {
      "img": false,
      "title": false,
      "price": false
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px",
        "padding-left": "64px",
        "padding-right": "64px"
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#4c4c4c"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#4c4c4c"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#4c4c4c"
      }
    },
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {},
  "cart": {
    "styles": {
      "button": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855",
          "background-color": "#d4a228"
        },
        "background-color": "#ebb42c",
        ":focus": {
          "background-color": "#d4a228"
        },
        "border-radius": "8px"
      },
      "title": {
        "color": "#e84855"
      },
      "header": {
        "color": "#e84855"
      },
      "lineItems": {
        "color": "#e84855"
      },
      "subtotalText": {
        "color": "#e84855"
      },
      "subtotal": {
        "color": "#e84855"
      },
      "notice": {
        "color": "#e84855"
      },
      "currency": {
        "color": "#e84855"
      },
      "close": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855"
        }
      },
      "empty": {
        "color": "#e84855"
      },
      "noteDescription": {
        "color": "#e84855"
      },
      "discountText": {
        "color": "#e84855"
      },
      "discountIcon": {
        "fill": "#e84855"
      },
      "discountAmount": {
        "color": "#e84855"
      },
      "cart": {
        "background-color": "#f1cb6c"
      },
      "footer": {
        "background-color": "#f1cb6c"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "background-color": "#ebb42c",
        ":hover": {
          "background-color": "#d4a228"
        },
        ":focus": {
          "background-color": "#d4a228"
        }
      },
      "count": {
        "color": "#e84855",
        ":hover": {
          "color": "#e84855"
        }
      },
      "iconPath": {
        "fill": "#e84855"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#e84855"
      },
      "title": {
        "color": "#e84855"
      },
      "price": {
        "color": "#e84855"
      },
      "fullPrice": {
        "color": "#e84855"
      },
      "discount": {
        "color": "#e84855"
      },
      "discountIcon": {
        "fill": "#e84855"
      },
      "quantity": {
        "color": "#e84855"
      },
      "quantityIncrement": {
        "color": "#e84855",
        "border-color": "#e84855"
      },
      "quantityDecrement": {
        "color": "#e84855",
        "border-color": "#e84855"
      },
      "quantityInput": {
        "color": "#e84855",
        "border-color": "#e84855"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/


const products = `
{
  "products": [
  {
      "id": 1710343682790,
      "title": "Small Seasonal Blanket",
      "description": "Seasonal Blanket with soft brushed cotton backing. 125cm x 175cm",
      "price": 65.99,
      "imagePath":[
          "images/blankets/bl-sm-1-1.jpg",
          "images/blankets/bl-sm-1-2.jpg",
          "images/blankets/bl-sm-1-3.jpg"
      ]
  },
  {
      "id": 1710343736699,
      "title": "Small Minion Blanket",
      "description": "Minion themed Blanket with soft brushed cotton backing. 125cm x 175cm",
      "price": 59.99,
      "imagePath":[
          "images/blankets/bl-sm-2-1.jpg",
          "images/blankets/bl-sm-2-2.jpg",
          "images/blankets/bl-sm-2-3.jpg"
      ]
  }
  ]
}`

const productsJson = JSON.parse(products);



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

      /////////////////////
      // Product Preview //
      /////////////////////




        document.getElementById("prev-close").addEventListener("click",function(){
          document.getElementsByClassName("product-preview")[0].style.display = "none";
        })

        var productName = 0;
        var id = 0;
        const mainImage = document.getElementById("product-image-main");
        const secImage = document.getElementById("product-image-secondary");
        const title = document.getElementById("product-title");
        const price = document.getElementById("product-price");
        const description = document.getElementById("product-description");
        const productPreview = document.getElementById("prod-prev");
        const productComponent = document.getElementById("product-component");
        console.log(productsJson.products[0]);


        document.getElementById("1710356692528").addEventListener("click",function(){
          let id = this.id;
          // displayBuyButton(id);
          displayProductPreview();
          displayPreviewImages(0);
          // displayPreviewText(0);
        })

        document.getElementById("1710357168853").addEventListener("click",function(){
          let id = this.id;
          displayBuyButton(id);
          displayProductPreview();
          displayPreviewImages(1);
          // displayPreviewText(1);
        })

        function displayProductPreview(){
          productPreview.style.display = "flex";
        }

        function displayPreviewImages(index){
          let z = index;
          currentProd = productsJson.products[z];
          //clear images first
          secImage.innerHTML = "<img src='' alt=''>";
          mainImage.innerHTML = "<img src='' alt=''>";
          
          for(i = 0; i < 3; i++){
            //display main image
            if(i == 0){
              mainImage.innerHTML = "<img src='"+currentProd.imagePath[i]+"' alt=''>";  
            }
            //display secondary images
            secImage.innerHTML += "<img src='"+currentProd.imagePath[i]+"' alt=''>";           
          }
        }

        function displayBuyButton(num){
          let z = num;
          console.log(z);
          productComponent.innerHTML = "<div id='product-component-"+z+"'></div>";
        }
