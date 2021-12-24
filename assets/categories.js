export const categories = {
    dairy_products :  { 
    id:1,
    name: "Dairy products",
    products: [
      { 
        id:1,
        name: "Milk",
        price: "30-180",
        options : [
          {
            optionTitle : "Marks",
            optionValues :[ 
          {
             value :"candia",
             label :"candia"
          },
           {
             value :"soummam",
             label :"Soummam"
          },
           {
             value :"loya",
             label :"Loya"
          },
        ]
      },
      {
        optionTitle :"liters",
        optionValues :[
           {
             value :"1L",
             label :"1L"
          },
           {
             value :"2L",
             label :"2L"
          },
        ]
      },
           {
        optionTitle :"liters4",
        optionValues :[
           {
             value :"1L",
             label :"1L"
          },
           {
             value :"2L",
             label :"2L"
          },
        ]
      }
      ,
           {
        optionTitle :"lite5rs",
        optionValues :[
           {
             value :"1L",
             label :"1L"
          },
           {
             value :"2L",
             label :"2L"
          },
        ]
      }
      ],
        tag: "Dzd",
         image: require("../assets/categories/DairyProducts/milk_candia.png"),
      },
      { 
        id:2,
        name: "cheese",
        price: "30-180",
        options : [
       {   
         optionTitle :"Marks",
         optionValues :[
              {
             value :"La_vache_quirit",
             label :"La Vache Quirit"
           },
           {
             value :"tartino",
             label :"Tartino"
           },
             {
             value :"kiri",
             label :"Kiri"
           },
          ]},

       {  
         optionTitle :"Weight / Number Of Pieces",
         optionValues :
         [
          {
             value :"8p",
             label :"8 Pieces"
          },
           {
             value :"16p",
             label :"16 Pieces"
          },
          {
             value :"1kg",
             label :"1 KG"
          },
          ]},
        ],
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/cheese.jpg"),
      },
      { id:3,
        name: "Yogurt",
        price: "30-180",
        options : [
          {
            optionTitle:"Marks",
            optionValues :[
              {
               value :"soummam_dyalna",
               label :"Soummam Dyalna"
              },
                 {
            value :"metidja",
            label :"Metidja"
                 },
             {
            value :"danone_activia",
            label :"Danone Activia"
             },
             {
            value :"danette_flan",
            label :"Danette Flan"
          },
            ]
          },
        ],
        tag: "Dzd",
        image: require("../assets/categories/DairyProducts/Yogurt.jpg"),
      },
    ],
  },
  candies :
  {
    id:2,
    name: "candies",
    products: [
        {
          id:1,
        name: "jolly rancher candy",
        price: "30-180",
        options : [
          {
            optionTitle :"Flavor",
            optionValues : [
              {
                value : "orange",
                label : "Orange"
              },
                {
                value : "cocktail",
                label : "Cocktail"
              },
                {
                value : "mint",
                label : "Mint"
              },
            ]
          }
        ] ,

        tag: "Dzd",
        image: require("../assets/categories/candies/jolly-rancher-candy.png"),
      },
       {
         id:2,
        name: "milky-way",
        price: "30-180",
        options : [
          {
            optionTitle:"Marks",
            optionValues :[
          {
            value :"milky_way",
            label :"milky way"
          },
           {
            value :"snickers",
            label :"Snickers"
          },
            {
            value :"mandoline",
            label :"Mandoline"
          },
            ]
          }
        ],
        tag: "Dzd",
        image:require("../assets/categories/candies/milky-way.png"),
      },
        {
          id:3,
        name: "nestle smarties candy",
        price: "30-180",
        options : [
          {
            optionTitle : "Marks",
            optionValues : [
                {
            value :"smarties",
            label :"Smarties"
          },
               {
            value :" nestle_smarties",
            label :"Nestle Smarties"
          },
            ]
          }
        ],
        tag: "Dzd",
        image:require("../assets/categories/candies/nestle-smarties-candy.png"),
      },
     
     
    ],
  },
  qachir :
  { 
    id:3,
    name: "qachir",
    products: [
          { 
        id:1,
        name: "Qachir normal",
        price: "30-180",
        options : [
          {
            optionTitle:"Marks",
            optionValues :[
               {
            value :"ballete",
            label :"Ballete Qachir"
              },
            {
            value :"ballete",
            label :"Ballete Qachir"
          },
            ]
          },
             {
            optionTitle:"Weight",
            optionValues :[
               {
            value :"1kg",
            label :"1KG"
              },
            {
            value :"2kg",
            label :"2KG"
          },
            ]
          },
        ],
        tag: "Dzd",
         image: require("../assets/categories/qachir/qachir.jpeg"),
      },
          { 
        id:2,
        name: "Pati Poulet",
        price: "30-180",
          options : [
          {
            optionTitle:"Marks",
            optionValues :[
               {
            value :"ballete",
            label :"Ballete Pati"
              },
            {
            value :"ballete",
            label :"Ballete Pati"
          },
            ]
          },
             {
            optionTitle:"Weight",
            optionValues :[
               {
            value :"1kg",
            label :"1KG"
              },
            {
            value :"2kg",
            label :"2KG"
          },
            ]
          },
        ],
        tag: "Dzd",
         image: require("../assets/categories/qachir/pati_poulet.jpg"),
      },
    ],
  },
  wheat_products :
  {
    id:4,
    name: "Wheat Products",
    products: [
            { 
        id:1,
        name: "Farine",
        price: "30-180",
        options : [
                {
            optionTitle: "Marks",
            optionValues : [
                {
            value :"sim",
            label :"Sim"
          },
          {
            value :"labelle",
            label :"labelle"
          },
          {
            value :"safina",
            label :"Safina"
          },
            ]
          },
          {
            optionTitle: "Weight",
            optionValues : [
                {
            value :"1kg",
            label :"1KG"
          },
          {
            value :"2kg",
            label :"2KG"
          },
            ]
          }
        ] ,
        tag: "Dzd",
         image: require("../assets/categories/wheat/farine.jpg"),
      },
            { 
        id:2,
        name: "Samide",
        price: "30-180",
             options : [
                {
            optionTitle: "Marks",
            optionValues : [
                {
            value :"sim",
            label :"Sim"
          },
          {
            value :"labelle",
            label :"labelle"
          },
          {
            value :"safina",
            label :"Safina"
          },
            ]
          },
          {
            optionTitle: "Weight",
            optionValues : [
                {
            value :"1kg",
            label :"1KG"
          },
          {
            value :"2kg",
            label :"2KG"
          },
            ]
          }
        ] ,
        tag: "Dzd",
         image: require("../assets/categories/wheat/samide.jpg"),
      },
            { 
        id:3,
        name: "Khamira",
        price: "30-180",
        options : [
          {
            optionTitle : "Marks",
            optionValues : [
              {
                value :"nawara",
                label :"Nawara"
              },
            ]
          },

        ],
        tag: "Dzd",
         image: require("../assets/categories/wheat/khamira.jpg"),
      },
    ],
  },
  drinks : 
  {
    id:5,
    name: "drinks",
    products: [
            { 
        id:1,
        name: "jus",
        price: "30-180",
        options : [
          {
            optionTitle :"Marks",
            optionValues : [
              {
                value :"ifruit",
                label :"ifruit"
              },
                {
                value :"vitajus",
                label :"Vitajus"
              },
                {
                value :"bonjos",
                label :"Bonjos"
              },
                  {
                value :"ramy",
                label :"Ramy"
              },
                    {
                value :"rouiba",
                label :"Rouiba"
              },
                     {
                value :"toudja",
                label :"Toudja"
              },
            ]
          }
        ] ,
        tag: "Dzd",
         image: require("../assets/categories/drinks/jus.jpg"),
      },
            { 
        id:2,
        name: "Soft drinks",
        price: "30-180",
        options : [
          {
            optionTitle :"Marks",
            optionValues : [
              {
                value :"hamoud",
                label :"Hamoud"
              },
                   {
                value :"ifri",
                label :"Ifri"
              },
                   {
                value :"coca_kola",
                label :"Coca Cola"
              },
                   {
                value :"fanta",
                label :"Fanta"
              },
            ]
          },
          {
           optionTitle :"liters",
           optionValues :[
           {
             value :"1L",
             label :"1L"
           },
           {
             value :"2L",
             label :"2L"
           },
           ]
          }
        ] ,
        tag: "Dzd",
         image: require("../assets/categories/drinks/soft_drinks.jpg"),
      },
            { 
        id:3,
        name: "Water",
        price: "30-180",
        options :[
          {
            optionTitle:"Marks",
            optionValues : [
              {
                value : "neslie",
                label :"neslie"
              },
                   {
                value : "lalla_khedidja",
                label :"Lalla khedidja"
              },
                   {
                value : "ifri",
                label :"ifri"
              },
            ]
          },
             {
        optionTitle :"liters",
        optionValues :[
           {
             value :"1L",
             label :"1L"
          },
           {
             value :"2L",
             label :"2L"
          },
            {
             value :"5L",
             label :"5L"
          },
        ]
      }
        ],
        tag: "Dzd",
         image: require("../assets/categories/drinks/water.jpg"),
      },
    ],
  },
  
};

