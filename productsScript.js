


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
  },
  {
    "id": 1710358274685,
    "title": "Small Minion Blanket",
    "description": "Minion themed Blanket with soft brushed cotton backing. 125cm x 175cm",
    "price": 59.99,
    "imagePath":[
        "images/blankets/bl-sm-3-1.jpg",
        "images/blankets/bl-sm-3-2.jpg",
        "images/blankets/bl-sm-3-3.jpg"
    ]
  },
  {
    "id": 1710358430761,
    "title": "Small Minion Blanket",
    "description": "Minion themed Blanket with soft brushed cotton backing. 125cm x 175cm",
    "price": 59.99,
    "imagePath":[
        "images/blankets/bl-sm-4-1.jpg",
        "images/blankets/bl-sm-4-2.jpg",
        "images/blankets/bl-sm-4-3.jpg"
    ]
  },
  {
    "id": 1710358499994,
    "title": "Small Minion Blanket",
    "description": "Minion themed Blanket with soft brushed cotton backing. 125cm x 175cm",
    "price": 59.99,
    "imagePath":[
        "images/blankets/bl-sm-5-1.jpg",
        "images/blankets/bl-sm-5-2.jpg",
        "images/blankets/bl-sm-5-3.jpg"
    ]
  },
  {
    "id": 1710358536734,
    "title": "Small Minion Blanket",
    "description": "Minion themed Blanket with soft brushed cotton backing. 125cm x 175cm",
    "price": 59.99,
    "imagePath":[
        "images/blankets/bl-sm-6-1.jpg",
        "images/blankets/bl-sm-6-2.jpg",
        "images/blankets/bl-sm-6-3.jpg"
    ]
  }
  ]
}`

const productsJson = JSON.parse(products);


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

        // Small Blankets

        document.getElementById("1710515422061").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,0)
        })

        document.getElementById("1710515815052").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,1)
        })

        document.getElementById("1710517199796").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,2)
        })

        document.getElementById("1710517532913").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,3)
        })

        document.getElementById("1710517654931").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,4)
        })

        document.getElementById("1710517728347").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })



        // Medium Blankets

        document.getElementById("1710517856285").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        document.getElementById("1710517907431").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        document.getElementById("1710517985031").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        document.getElementById("1710518052059").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        document.getElementById("1710518097818").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        // Large Blankets

        document.getElementById("1710518166285").addEventListener("click",function(){
          let id = this.id;
          initialisePrev(id,5)
        })

        function initialisePrev(id,index){
          displayBuyButton(id);
          displayProductPreview();
          displayPreviewImages(index);
          // displayPreviewText(0);
          youwhat(id);

        }

        function displayProductPreview(){
          productPreview.style.display = "flex";
        }

        function displayPreviewImages(index){
          let z = index;
          currentProd = productsJson.products[z];
          //clear images first
          secImage.innerHTML = " ";
          mainImage.innerHTML = " ";
          
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

// This pairs the 2 ID's that come with a shopify buy button.
// Allowing me to just run 1 block of shopify code, instead of an block per
// instance of button
// I just need to grab the 2 pairs of id's and return the 2nd one
function pairedId(id){
  if(id==1710515422061){
    return '8776900772174';
  }
  if(id==1710515815052){
    return '8776900968782';
  }
  if(id==1710517199796){
    return '8776901329230';
  }
  if(id == 1710517532913){
    return '8776901624142';
  }
  if(id == 1710517654931 ){
    return '8776902312270';
  }
  if(id == 1710517728347 ){
    return '8776902672718';
  }
  if(id == 1710517856285 ){
    return '8776898543950';
  }
  if(id == 1710517907431 ){
    return '8776898904398';
  }
  if(id == 1710517985031 ){
    return '8776899199310';
  }
  if(id == 1710518052059 ){
    return '8776899592526';
  }
  if(id == 1710518097818 ){
    return '8776900215118';
  }
  if(id == 1710518166285 ){
    return '8776897921358';
  }
}

function youwhat(num){/*<![CDATA[*/
let id = num;
let pid = pairedId(id);

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
        id: pid,
        node: document.getElementById('product-component-'+id),
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
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#ebb42c",
        ":hover": {
          "color": "#ebb42c",
          "background-color": "#024944"
        },
        "background-color": "#012b28",
        ":focus": {
          "background-color": "#024944"
        },
        "border-radius": "8px",
        "padding-left": "100px",
        "padding-right": "100px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
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
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#ebb42c",
        ":hover": {
          "color": "#ebb42c",
          "background-color": "#024944"
        },
        "background-color": "#012b28",
        ":focus": {
          "background-color": "#024944"
        },
        "border-radius": "8px",
        "padding-left": "100px",
        "padding-right": "100px"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
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
        "font-weight": "bold",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        "color": "#ebb42c",
        ":hover": {
          "color": "#ebb42c",
          "background-color": "#024944"
        },
        "background-color": "#012b28",
        ":focus": {
          "background-color": "#024944"
        },
        "border-radius": "8px"
      },
      "title": {
        "color": "#ebb42c"
      },
      "header": {
        "color": "#ebb42c"
      },
      "lineItems": {
        "color": "#ebb42c"
      },
      "subtotalText": {
        "color": "#ebb42c"
      },
      "subtotal": {
        "color": "#ebb42c"
      },
      "notice": {
        "color": "#ebb42c"
      },
      "currency": {
        "color": "#ebb42c"
      },
      "close": {
        "color": "#ebb42c",
        ":hover": {
          "color": "#ebb42c"
        }
      },
      "empty": {
        "color": "#ebb42c"
      },
      "noteDescription": {
        "color": "#ebb42c"
      },
      "discountText": {
        "color": "#ebb42c"
      },
      "discountIcon": {
        "fill": "#ebb42c"
      },
      "discountAmount": {
        "color": "#ebb42c"
      },
      "cart": {
        "background-color": "#012b28"
      },
      "footer": {
        "background-color": "#012b28"
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "contents": {
      "note": true
    }
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-weight": "bold",
        "background-color": "#012b28",
        ":hover": {
          "background-color": "#024944"
        },
        ":focus": {
          "background-color": "#024944"
        }
      },
      "count": {
        "font-size": "14px",
        "color": "#ebb42c",
        ":hover": {
          "color": "#ebb42c"
        }
      },
      "iconPath": {
        "fill": "#ebb42c"
      }
    }
  },
  "lineItem": {
    "styles": {
      "variantTitle": {
        "color": "#ebb42c"
      },
      "title": {
        "color": "#ebb42c"
      },
      "price": {
        "color": "#ebb42c"
      },
      "fullPrice": {
        "color": "#ebb42c"
      },
      "discount": {
        "color": "#ebb42c"
      },
      "discountIcon": {
        "fill": "#ebb42c"
      },
      "quantity": {
        "color": "#ebb42c"
      },
      "quantityIncrement": {
        "color": "#ebb42c",
        "border-color": "#ebb42c"
      },
      "quantityDecrement": {
        "color": "#ebb42c",
        "border-color": "#ebb42c"
      },
      "quantityInput": {
        "color": "#ebb42c",
        "border-color": "#ebb42c"
      }
    }
  }
},
      });
    });
  }
})();
/*]]>*/
}