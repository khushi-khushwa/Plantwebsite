import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApplyservicesService {

    
  constructor() { }

     data =  [
        {
          id:'1',
        image:'../assets/images/gardening/22.png',
        title:"Seed",
        description:"Our Seed Growing Service provides expert care to nurture your seeds into healthy plants. The base service charge is ₹100 when you provide the seeds. If you don't have seeds, we offer seed packages at an additional cost of ₹20 per package. Let us handle the growing process for you with precision and care.",
        charges:"Rs 100",
        apply:"Apply"
      },
      {
        id:'2',
        image:'assets/images/gardening/21.png',
        title:"maintenance",
        description:"Our Garden Maintenance Service ensures your garden stays lush and beautiful year-round. Our skilled professionals provide expert care for just ₹150 per person.team will handle everything your garden needs, including weeding, pruning, lawn care, and plant health checks. Whether it’s routine upkeep or a seasonal refresh, we’ll ensure your garden stays vibrant, tidy, and welcoming. Enjoy hassle-free maintenance and let us bring your outdoor space to life with professional care!",
        charges:"150/person for 1 hour",
        apply:"Apply"
      },
      {
        id:'3',
        image:'assets/images/gardening/23.png',
        title:"hedge",
        description:"Give your garden a neat, polished look with our Hedge Cutting Service. For just ₹700 per person, our skilled team will trim and shape your hedges, ensuring they are well-maintained and aesthetically pleasing. Whether it's a simple trim or a complete reshaping, we offer professional care to enhance the beauty of your outdoor space.",
        charges:"Rs 700/person",
        apply:"Apply"
      },
      {
        id:'4',
        image:'assets/images/gardening/22.png',
        title:"crafting",
        description:"Bring your plants to life with our expert Plant Crafting Service. For just ₹200, we will carefully nurture and craft your plants until they are fully grown and thriving. Our team ensures the proper care, environment, and attention to each plant's needs, guiding them through every stage of growth until they reach their full potential. Trust us to help your plants flourish and become a beautiful addition to your garden.",
        charges:"200/person for 2 hours",
        apply:"Apply"
      },
      {
        id:'5',
        image:'assets/images/gardening/20.png',
        title:"grass",
        description:"Enhance your garden with our Grass Provision and Care Service. We provide high-quality grass and take care of it for 3 days to ensure it roots well and thrives in your garden. Our team will ensure proper watering, maintenance, and care during this period, giving your lawn the best start for healthy, vibrant growth.",
        charges:"rs 6/foot, Rs 1000/person",
        apply:"Apply"
      },
      {
        id:'6',
        image:'assets/images/gardening/24.png',
        title:"consultant",
        description:"Plan your dream garden with our expert Garden Consultancy Service. Our professionals will work closely with you to understand your space, preferences, and needs, offering tailored advice to design and optimize your garden area. Charges will be finalized after the discussion, ensuring you receive value for your unique requirements. Let’s bring your garden vision to life together!",
        charges:"charges after discussion",
        apply:"Apply"
      },
     
      
    ];

  
    allProductData={
//       outdoor:[
//    {
//     id:"outdoor-1",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/bougainvilla.jpg",
//     price:'100',
//     detail:'It is double shaded Rose plant',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//    },
//    {
//     id:"outdoor-2",
//     name:"Banana",
//     height:"2 feet",
//     image:"assets/images/outdoor/banana.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     detail:'It is double shaded Rose plant',
//     dislike:'assets/images/dislike.jpg',
//    },
//    {
//     id:"outdoor-3",
//     name:"double-flower chandni",
//     height:"2 feet",
//     image:"assets/images/outdoor/chnadni.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-4",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/chmpa.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-5",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/chameli.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-6",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/chrishtna.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-7",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/desi-gudhel.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-8",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/doubleshade-rose.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-9",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/golden hadge.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-10",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/green-ficus.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-11",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/green-junipress.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-12",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/guchabougainvailla.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-13",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/kadam.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-14",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/kashmiri-rose.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-15",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/lavebdra-white.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-16",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/motiya-jasmin.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-17",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/muriya.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-18",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/narangi.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-19",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/panda.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-20",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/piple.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-21",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/red-hadge.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-22",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/red-lily.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//    {
//     id:"outdoor-23",
//     name:"bougainvailla",
//     height:"2 feet",
//     image:"assets/images/outdoor/red-rose.jpg",
//     price:'100',
//     like:'assets/images/red-icon.jpg',
//     dislike:'assets/images/dislike.jpg',
//     detail:'It is double shaded Rose plant'
//    },
//     {
//       id:"outdoor-24",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/regular-bougainvilla.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-25",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/round-morpankhi.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-26",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/sejpg.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-27",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/shtut.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-28",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/small-junipress.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-29",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/spider.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-30",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/tablebrush.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-31",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/variety-morphankhi.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-32",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/white-ficus.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-33",
//       name:"bougainvailla",
//       height:"2 feet",
//       image:"assets/images/outdoor/yellow-bougainvilla.jpg",
//       price:'100',
//       like:'assets/images/red-icon.jpg',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-34",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/outdoor/yellow-rose.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-35",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/flower/ixora.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },

//      {
//       id:"outdoor-36",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/flower/gudel.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-37",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/flower/alovera.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//       {
//       id:"outdoor-38",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/flower/kranchula.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
//      {
//       id:"outdoor-39",
//       name:"bougainvailla",
//       height:"2 feet",
//       like:'assets/images/red-icon.jpg',
//       image:"assets/images/flower/oxygenplant.jpg",
//       price:'100',
//       dislike:'assets/images/dislike.jpg',
//       detail:'It is double shaded Rose plant'
//      },
  
  
// ],
outdoor:[
  {
    id:"indoor-1",
    name:'Peace Lily, Spathiphyllum-plant',
    price:'169',
    image:"assets/images/indoor/5.png",
    detail:{
      description:['Peace Lily Plant is a very popular and very rare indoor flowering houseplant. It is also an excellent air purifier plant.'],
      
      item:[
        'WHY THIS PLANT? Peace Lily (Small size) (Botanical name: Peperomia obtusifolia) is an indoor plant believed to bring good luck and purifies air. It has heartSpathiphyllum Green) purifies indoor air, enhances levels of humidity. It has lovely white flowers with contrasting green leaves that add beauty to home decor and office decor.',
        'HOW ARE PLANTS SHIPPED? Plants are shipped in sturdy packaging to ensure safety of the plant and prevent spillage of manure and coco peat. The shipping box has an air hole for ventilation and plants are adequately watered to stay alive and green for up to 7 days.',
         'HOW TO TAKE CARE OF PLANTS? Water watered once a week in summer and once every 2 weeks in winter. Keep in moderate to bright indirect sunlight. Avoid temperature shock by shifting plants between indoors and outdoors for better growth.Perfect low maintenance plant that can purify air in your home,office.',
         ''
      ],
      care:[
        'Sunlight: Natural indirect / artificial bright light is ideal for peace lily plant growth.',
        'soil: The soil should be well drained and fertile, rich in organic content.',
        'Watering: Poke your finger/plain small stick into the soil to check the moisture.',
        'Fertilizer: Before application of fertilizer loosen the topsoil without disturbing the roots of the plant so it can uptake the nutrients and moisture.'
      ],

    },
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    fakeprice:'199',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-2",
    name:'Elephant bush',
    image:"assets/images/indoor/3.png",
    price:'169',
    fakeprice:'100',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-3",
    name:'snack plant, air purifier and oxygrn enriching plant pack',
    image:"assets/images/indoor/4.png",

    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  // {
  //   id:"indoor-4",
  //   name:'Spider, Chlorophytum',
  //   images:"assets/images/indoor/1.jpg",
  //   price:'169',
  //   fakeprice:'199',
  //   reviews:'',
  //   off:'',
  //   sale:''

  // },
  {
    id:"indoor-5",
    name:'Money plant, Scindapsus',
    image:"assets/images/indoor/6.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-6",
    name:'Money plant marbel prince',
    image:"assets/images/indoor/7.png",
    price:'169',
    fakeprice:'199',
    reviews:'',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    off:'',
    sale:''

  },
  {
    id:"indoor-7",
    name:'Areca Plam- plant',
    image:"assets/images/indoor/8.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-8",
    name:'Ficus Lyrata Bambino',
    image:"assets/images/indoor/9.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-9",
    name:'syngonium Green - Plant',
    image:"assets/images/indoor/10.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-10",
    name:'Boston Fern, Nephrolepis exaltata bosteniensis',
    image:"assets/images/indoor/11.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-11",
    name:'Monestera obliqua',
    image:"assets/images/indoor/12.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-12",
    name:'Peperomia Magnoliifolia, Succulent Plant',
    image:"assets/images/indoor/13.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-13",
    name:'jade plant',
    image:"assets/images/indoor/15.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-14",
    name:'Christmas Cactus',
    image:"assets/images/indoor/anthurium.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-15",
    name:'Crassula ovata, Jade Plant - Succulent Plant',
    image:"assets/images/indoor/17.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-16",
    name:'Syngonium Cream allusion, Syngonium Cream (Pink veins) - Plant',
    image:"assets/images/indoor/arecapalm.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-17",
    name:'Snake Plant, Sansevieria trifasciata Golden Hahnii - Succulent Plant',
    image:"assets/images/indoor/19.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-18",
    name:'Poinsettia, Christmas Flower (Red) - Plant',
    image:"assets/images/indoor/christmas-cactus.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-19",
    name:'Anthurium (Red) - PlantAlocasia Hybrid - Plant',
    image:"assets/images/indoor/21.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-20",
    name:'Philodendron xanadu Green - Plant',
    image:"assets/images/indoor/22.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-21",
    name:'Haworthia truncata Green Rose - Succulent Plant',
    image:"assets/images/indoor/23.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-22",
    name:'Beautiful Table Top / Office Desk SucculentsAglaonema Jubilee Petite - Plant',
    image:"assets/images/indoor/24.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-23",
    name:'Haworthia attenuata - Succulent Plant',
    image:"assets/images/indoor/25.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-24",
    name:'Calathea ornata pinstripe, Calathea ornata (Pink stripes) - Plant',
    image:"assets/images/indoor/26.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-25",
    name:'Aglaonema Tiara, Aglaonema Pink Panther - Plant',
    image:"assets/images/indoor/27.png",
    price:'169',
    fakeprice:'199',
    reviews:'',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    off:'',
    sale:''

  },
  {
    id:"indoor-26",
    name:'Aglaonema Commutatum Malay Beauty - Plant',
    image:"assets/images/indoor/28.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-iconglaonem.webp.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-27",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/29.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  // {
  //   id:"indoor-28",
  //   name:'Philodendron, Selloum - Plant',
  //   image:"assets/images/indoor/elephant-bush.png",
  //   price:'169',
  //   fakeprice:'199',
  //   like:'assets/images/red-icon.jpg',
  //   dislike:'assets/images/dislike.jpg',
  //   reviews:'',
  //   off:'',
  //   sale:''

  // },
  {
    id:"indoor-29",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/money-plant.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-30",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/money_plant.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-31",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/pieacelili.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-32",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/salmonium.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-33",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/snack.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  {
    id:"indoor-34",
    name:'Philodendron, Selloum - Plant',
    image:"assets/images/indoor/tablebrush.png",
    price:'169',
    fakeprice:'199',
    like:'assets/images/red-icon.jpg',
    dislike:'assets/images/dislike.jpg',
    reviews:'',
    off:'',
    sale:''

  },
  
 
 ],
   indoor:[
    {
      id:"indoor-1",
      name:'Peace Lily, Spathiphyllum-plant',
      price:'169',
      image:"assets/images/indoor/5.png",
      detail:{
        description:['Peace Lily Plant is a very popular and very rare indoor flowering houseplant. It is also an excellent air purifier plant.'],
        
        item:[
          'WHY THIS PLANT? Peace Lily (Small size) (Botanical name: Peperomia obtusifolia) is an indoor plant believed to bring good luck and purifies air. It has heartSpathiphyllum Green) purifies indoor air, enhances levels of humidity. It has lovely white flowers with contrasting green leaves that add beauty to home decor and office decor.',
          'HOW ARE PLANTS SHIPPED? Plants are shipped in sturdy packaging to ensure safety of the plant and prevent spillage of manure and coco peat. The shipping box has an air hole for ventilation and plants are adequately watered to stay alive and green for up to 7 days.',
           'HOW TO TAKE CARE OF PLANTS? Water watered once a week in summer and once every 2 weeks in winter. Keep in moderate to bright indirect sunlight. Avoid temperature shock by shifting plants between indoors and outdoors for better growth.Perfect low maintenance plant that can purify air in your home,office.',
           ''
        ],
        care:[
          'Sunlight: Natural indirect / artificial bright light is ideal for peace lily plant growth.',
          'soil: The soil should be well drained and fertile, rich in organic content.',
          'Watering: Poke your finger/plain small stick into the soil to check the moisture.',
          'Fertilizer: Before application of fertilizer loosen the topsoil without disturbing the roots of the plant so it can uptake the nutrients and moisture.'
        ],

      },
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-2",
      name:'Elephant bush',
      image:"assets/images/indoor/3.png",
      price:'169',
      fakeprice:'100',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-3",
      name:'snack plant, air purifier and oxygrn enriching plant pack',
      image:"assets/images/indoor/4.png",

      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    // {
    //   id:"indoor-4",
    //   name:'Spider, Chlorophytum',
    //   images:"assets/images/indoor/1.jpg",
    //   price:'169',
    //   fakeprice:'199',
    //   reviews:'',
    //   off:'',
    //   sale:''

    // },
    {
      id:"indoor-5",
      name:'Money plant, Scindapsus',
      image:"assets/images/indoor/6.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-6",
      name:'Money plant marbel prince',
      image:"assets/images/indoor/7.png",
      price:'169',
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      off:'',
      sale:''

    },
    {
      id:"indoor-7",
      name:'Areca Plam- plant',
      image:"assets/images/indoor/8.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-8",
      name:'Ficus Lyrata Bambino',
      image:"assets/images/indoor/9.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-9",
      name:'syngonium Green - Plant',
      image:"assets/images/indoor/10.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-10",
      name:'Boston Fern, Nephrolepis exaltata bosteniensis',
      image:"assets/images/indoor/11.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-11",
      name:'Monestera obliqua',
      image:"assets/images/indoor/12.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-12",
      name:'Peperomia Magnoliifolia, Succulent Plant',
      image:"assets/images/indoor/13.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-13",
      name:'jade plant',
      image:"assets/images/indoor/15.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-14",
      name:'Christmas Cactus',
      image:"assets/images/indoor/anthurium.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-15",
      name:'Crassula ovata, Jade Plant - Succulent Plant',
      image:"assets/images/indoor/17.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-16",
      name:'Syngonium Cream allusion, Syngonium Cream (Pink veins) - Plant',
      image:"assets/images/indoor/arecapalm.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-17",
      name:'Snake Plant, Sansevieria trifasciata Golden Hahnii - Succulent Plant',
      image:"assets/images/indoor/19.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-18",
      name:'Poinsettia, Christmas Flower (Red) - Plant',
      image:"assets/images/indoor/christmas-cactus.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-19",
      name:'Anthurium (Red) - PlantAlocasia Hybrid - Plant',
      image:"assets/images/indoor/21.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-20",
      name:'Philodendron xanadu Green - Plant',
      image:"assets/images/indoor/22.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-21",
      name:'Haworthia truncata Green Rose - Succulent Plant',
      image:"assets/images/indoor/23.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-22",
      name:'Beautiful Table Top / Office Desk SucculentsAglaonema Jubilee Petite - Plant',
      image:"assets/images/indoor/24.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-23",
      name:'Haworthia attenuata - Succulent Plant',
      image:"assets/images/indoor/25.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-24",
      name:'Calathea ornata pinstripe, Calathea ornata (Pink stripes) - Plant',
      image:"assets/images/indoor/26.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-25",
      name:'Aglaonema Tiara, Aglaonema Pink Panther - Plant',
      image:"assets/images/indoor/27.png",
      price:'169',
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      off:'',
      sale:''

    },
    {
      id:"indoor-26",
      name:'Aglaonema Commutatum Malay Beauty - Plant',
      image:"assets/images/indoor/28.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-iconglaonem.webp.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-27",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/29.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    // {
    //   id:"indoor-28",
    //   name:'Philodendron, Selloum - Plant',
    //   image:"assets/images/indoor/elephant-bush.png",
    //   price:'169',
    //   fakeprice:'199',
    //   like:'assets/images/red-icon.jpg',
    //   dislike:'assets/images/dislike.jpg',
    //   reviews:'',
    //   off:'',
    //   sale:''

    // },
    {
      id:"indoor-29",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/money-plant.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-30",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/money_plant.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-31",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/pieacelili.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-32",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/salmonium.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-33",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/snack.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    {
      id:"indoor-34",
      name:'Philodendron, Selloum - Plant',
      image:"assets/images/indoor/tablebrush.png",
      price:'169',
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      reviews:'',
      off:'',
      sale:''

    },
    
   
   ],
   flowerplant:[
    {
      id:"flowerplant-1",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-2",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-3",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-4",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:"",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-5",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-6",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-7",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:"",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-8",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-9",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-10",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-11",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-12",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-13",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-14",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-15",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:"",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-16",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-17",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:"",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-18",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      Image:'',
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"flowerplant-19",
      name:'Philodendron, Selloum - Plant',
      price:'169',
      image:"",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
   ],
   seeds:[
    {
      id:"seed-1",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/alyssum.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-2",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/balsam.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-3",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/brinjal.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-4",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/california-poppy.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-5",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/carrot.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-6",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/cherry-tomato.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-7",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/chia.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-8",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/chia-seeds.jpg",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"seed-9",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/corn.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-10",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/cosmos.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-11",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/drumstick.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-12",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/gaillardia.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-13",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/green-chili.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-14",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/heirloom.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-15",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/hollyhock.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-16",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/karela.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-17",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/kochia.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-18",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/larkspurmix.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"seed-19",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/lecttus.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-20",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/lupins.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-21",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/methi.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-22",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/mint.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-23",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/mix-seeds.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-24",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/musturd.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-25",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/muttur.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-26",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/red-poppy.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-27",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/soya.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-28",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/stick.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }, {
      id:"seed-29",
      name:'carrot',
      price:'169',
      image:"assets/images/seeds/sulgum.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    }
   ],
   compost:[
    {
      id:"compost-1",
      name:'Bone Meal (abitec)',
      price:'Rs. 169',
      image:"assets/images/compost/abitec-bornmeal.jpg",
      fakeprice:'199',
      reviews:'',
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      off:'',
      details:{
      description:[
        'Bone meal is a organic source of nutrients for gardening. This rich source of phosphorous and calcium is best for fruit and flower development on your plant.',
        'Bone meal as name suggest is made from ground up animal bones. Bone meal is generally used by gardenenrs to increase phosphorous content in the soil. This ia also the good source of calcium.Bone meal also aids in balancing phosphorous content in nitrogen rich organic manure.'
      ],
      instruction:['Use gloves / mask if you are allergic to fertilizers'],
      benefits:[
        'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for approx 2 years',
        'Eco friendly No chemicalsEasy applicationBetter fruit and flower quality'
      ],
      use:[
        'You can use bone meal along with any nitrogen rich organic manure',
        'You can add it in soil mix before planting new plants in pots also',
        'You can use it in existing plants in pot directly',
      ]
      },
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      description:'Bone Meal Powder for Plants (1 KG) - Organic Fertilizer, Rich in Phosphorus and Calcium, Natural Plant Growth Fertilizer for Home Gardening.'
    
    },
    {
      id:"compost-2",
      name:'Bone Meal',
      price:'Rs. 169',
      image:"assets/images/compost/bone-meal.jpg",
      fakeprice:'199',
      reviews:'',
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Bone Meal Powder for Plants (1 KG) - Organic Fertilizer, Rich in Phosphorus and Calcium, Natural Plant Growth Fertilizer for Home Gardening.',
      details:{
        description:[
          'Bone meal is a organic source of nutrients for gardening. This rich source of phosphorous and calcium is best for fruit and flower development on your plant.',
          'Bone meal as name suggest is made from ground up animal bones. Bone meal is generally used by gardenenrs to increase phosphorous content in the soil. This ia also the good source of calcium.Bone meal also aids in balancing phosphorous content in nitrogen rich organic manure.'
        ],
        instruction:['Use gloves / mask if you are allergic to fertilizers'],
        benefits:[
          'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for approx 2 years',
          'Eco friendly No chemicalsEasy applicationBetter fruit and flower quality'
        ],
        use:[
          'You can use bone meal along with any nitrogen rich organic manure',
          'You can add it in soil mix before planting new plants in pots also',
          'You can use it in existing plants in pot directly',
        ],
       
        },
      off:'',
      sale:''
    },
    {
      id:"compost-3",
      name:'Cocopeat powder',
      price:'Rs. 169',
      image:"assets/images/compost/coco-powder.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:'',
      dislike:'assets/images/dislike.jpg',
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      like:'assets/images/red-icon.jpg',
      description:"To use cocopeat powder, rehydrate it with water, mix 1 part cocopeat powder with 2-3 parts soil or potting mix for better soil structure and water retention."
    },
    {
      id:"compost-4",
      name:'Potting Soil Mix',
      price:'Rs. 169',
      image:"assets/images/compost/soil-mix.jpeg",
      fakeprice:'199',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
      reviews:'',
      off:'',
      sale:'',
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash'
    },
    {
      id:"compost-5",
      name:'Organic Compost',
      price:'Rs. 500',
      image:"assets/images/compost/images.jpeg",
      fakeprice:'800',
      reviews:'',
      off:'',
      sale:'',
      details:{
    description:['Cow dung manure for plants. It is best organic fertilizers for home plants.It is 100% natural & organic with no mixing of any other substances.Contains microbial bio-stimulants to enhance disease resistance and establish beneficial microflora.'],
     use:['Loosen the soil around the plant.Sprinkle near root zone of the plant.Water the plant after application to mix.'],
    instruction: ["Keep this product away from the reach of the Children. If ingested, consult physician immediately"],
      },
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Organic compost is decomposed organic matter added to soil in order to improve its quality. Organic compost helps improve the texture of the soil, reduces compaction, and increases the amount of water and air that can be held by the soil.'
    },
    {
      id:"compost-6",
      name:'Vermi-compost',
      price:'Rs. 400',
      image:"assets/images/compost/vermicompost.jpeg",
      fakeprice:'600',
      reviews:'',
      off:'',
      sale:'',
      details:{
        description:['Vermigreen vermicompost is a high quality 100% organic product for gardening and organic farming. It is a humic-acid rich compost prepared by decomposition of organic waste by earthworms.',
          'Vermicompost is used as a soil additive, conditioner, and fertilizer. Vermicompost functions to add humus and organic matter to the soil providing bioavailable nutrients to the plants, increasing soil tilth. Vermicompost helps with water infiltration and retention, while buffering excessive acid or alkaline soil conditions.',
          'Vermicompost helps store nutrients and keeps them safe from leeching and irrigation.'
        ],
        instruction:[
          "Keep this product away from the reach of the Children. If ingested, consult physician immediately",
          "Store in cool and dry place"

        ],
       benefits:[
        'This pack is sufficient for a plant potted in a pot having 5-6 inch upper diameter for 1 year',
        'Improves soil quality',
        'Helps to balance soil pH',
        'Completely organic product',
        '100% Chemical free'

      ],
      use:['For potted plants, apply 150-250 g Vermicompost at the plant base away from main stem 3-4 times in a year',
        'Use in equal proportion with soil while filling pots',
      ]
      },
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Vermicomposting is the scientific method of making compost, by using earthworms. '
    },
    {
      id:"compost-7",
      name:'Seeds-Booster',
      price:'Rs. 130',
      image:"assets/images/compost/seeds-booster.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:'',
      details:{
       description:['Seed booster as a mixture of vegetable origin seaweed and animal origin products recommended for direct seed application and root dipping.'],
      use:[
        '2 Special Boosters in a single pack',
        'Products are organic and easy to use',
        'Can be added directly or can be dissolved in water before application.'
       ],
       instruction:['Keep this product away from the reach of the Children. If ingested, consult physician immediately']
      },
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      like:'assets/images/red-icon.jpg',
      dislike:'assets/images/dislike.jpg',
      description:'Seed booster as a mixture of vegetable origin seaweed and animal origin products recommended for direct seed application and root dipping.'
    },
    {
      id:"compost-8",
      name:'Neemkhali',
      price:'Rs. 169',
      image:"assets/images/compost/neemkhali.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:'',
      details:{
    description:[' neem khali powder naturally deters nematodes, whiteflies, and other garden invaders. Protect your plants from pests and diseases without compromising the environment. Its potent insecticidal and fungicidal properties make it your secret weapon for a lush, pest-free garden.'],
   use:["Transform tired soil into fertile ground with the power of neem. This organic fertilizer for plants home garden improves texture, boosts microbial activity, and enhances water retention. The result? Soil that nourishes your plants with every drop of water and nutrient absorbed."],
   instruction:['Keep this product away from the reach of the Children. If ingested, consult physician immediately'],   
},
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Enhance your garden with Neem Khali, an organic fertilizer rich in nutrients like nitrogen, phosphorus, and potassium.'
    },

    {
      id:"compost-9",
      name:'Plant Growth tonic',
      price:'Rs. 200',
      image:"assets/images/compost/plantgrwoth-tonic.jpg",
      fakeprice:'400',
      reviews:'',
      off:'',
      sale:'',
      details:{
      description:[
        'Jeevamrut is an excellent plant growth tonic with 100 % organic ingredients.',
        'Jeevamrut is a liquid organic manure popularly used as means of organic gardening. It is considered to be an excellent source of natural carbon, biomass, nitrogen, phosphorous potassium and lot of other micro nutrients required for the plants.',
        'Jeevamrut adds organic matter to the soil which improves soil structure, aeration, soil moisture-holding capacity, and water infiltration. Jeevamrut improves the quality and yield of fruits, vegetables and other crops.Organic ingredients of Jeevamrut Cow dung Cow urine Lentil powder Jaggery Organic soil Water.'
      ],
      instructions:[
        'Keep the bottle in the dry area',
        'Do not keep the bottle open for a long time',
        'The bottle should be tightly closed and stored in dry space after use',
        'Keep the bottle out of reach of children'
      ],
      benefits:[
        'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for 1',
        '5 months',
        'Increase plant growth',
        'Enrich the soil with nutrient',
        'Improves the PH of the soil',
        'Increase disease resistance of plant',
        'Provide balance nutrient to the plant',
      ],
      use:[
        'Shake the bottle well before opening it every time',
        'Take 100ml of Jeevamrut and add it to 1 liter of plain water',
        'Mix them thoroughly',
        'Pour the diluted liquid to the soil',
        'Repeat the process every 15 days'
      ]
      },
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
      like:'assets/images/red-icon.jpg',
      description:'Plant Tonic is a liquid essential magic tonic with micro-nutrients. It ensures the absorption of nutrients rapidly.'
    },
    
   ],
   pot:[
    {
      id:"fiberpot-1",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/1.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-2",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/2.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-3",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/6.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-4",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/7.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-5",
      name:'carrot',
      price:'169',
     image:"assets/images/pots/fiber/8.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-6",
      name:'carrot',
      price:'169',
    image:"assets/images/pots/fiber/9.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-7",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/10.webp",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },

    {
      id:"fiberpot-9",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/4.jpg",
      fakeprice:'199',
      reviews:'',
      like:'assets/images/red-icon.jpg',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-10",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/5.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
   
    {
      id:"fiberpot-12",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/11.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-13",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/12.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-14",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/9.avif",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
 
    {
      id:"mudpot-1",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/1.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-2",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/5.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-3",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/9.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-4",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/11.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-5",
      name:'carrot',
      price:'169',
     image:"assets/images/pots/mud/12.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-6",
      name:'carrot',
      price:'169',
    image:"assets/images/pots/mud/2.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-7",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/3.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-8",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/4.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-9",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/6.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-10",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/7.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-11",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/8.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-12",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/10.avif",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"mudpot-13",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/mud/5.avif",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"plasticpot-1",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/plastic/1.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"plasticpot-2",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/plastic/2.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"plasticpot-3",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/plastic/3.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"plasticpot-4",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/plastic/4.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    // {
    //   id:" cermicpot-5",
    //   name:'carrot',
    //   price:'169',
    //  image:"assets/images/pots/sermik/4.webp",
    //   fakeprice:'199',
    //   reviews:'',
    //   off:'',
    //   sale:''
    // },
    // {
    //   id:"cermicpot-6",
    //   name:'carrot',
    //   price:'169',
    // image:"assets/images/pots/sermik/5.webp",
    //   fakeprice:'199',
    //   reviews:'',
    //   off:'',
    //   sale:''
    // },
    {
      id:"cermicpot-7",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/7.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
  
    {
      id:"cermicpot-9",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/12.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-10",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/14.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-11",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/16.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-12",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/1.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-13",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/2.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-14",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/3.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-15",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/6.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-16",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/8.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-17",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/10.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-18",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/11.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-19",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/13.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-20",
      name:'carrot',
      price:'169',
     image:"assets/images/pots/surmik/14.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-21",
      name:'carrot',
      price:'169',
    image:"assets/images/pots/surmik/15.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"cermicpot-22",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/16.jpg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },  {
      id:"cermicpot-8",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/surmik/8.webp",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-15",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/8.avif",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"fiberpot-11",
      name:'carrot',
      price:'169',
      image:"assets/images/pots/fiber/10.jpeg",
      fakeprice:'199',
      like:'assets/images/red-icon.jpg',
      reviews:'',
      off:'',
      sale:''
    },
   ],
   tools:[
    
    {
      id:"tool-1",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-2",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/4.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-3",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/6.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-4",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-5",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/10.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-6",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/7.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-7",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-8",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/picAxe4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-9",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/7.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-10",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/9.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-11",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/9.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-12",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-13",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-14",
      name:'carrot',
      price:'169',
      image:"assets/images/tools/5.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
      
   ],
   seasonal:[
    {
     id:"seasonal-1",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/1.png",
     price:'100',
     detail:'It is double shaded Rose plant',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
    },
    {
     id:"seasonal-2",
     name:"Banana",
     height:"2 feet",
     image:"assets/seasonal/3.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     detail:'It is double shaded Rose plant',
     dislike:'assets/images/dislike.jpg',
    },
    {
     id:"seasonal-3",
     name:"double-flower chandni",
     height:"2 feet",
     image:"assets/seasonal/4.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-4",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/5.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-5",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/6.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-6",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/10.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-7",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/12.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-8",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/14.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-9",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/15.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-10",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/16.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-11",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/17.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-12",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/18.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-13",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/19.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-14",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/20.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-15",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/21.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-16",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/22.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-17",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/23.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-18",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/24.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-19",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/25.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-20",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/26.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-21",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/27.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-22",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/28.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
    {
     id:"seasonal-23",
     name:"bougainvailla",
     height:"2 feet",
     image:"assets/seasonal/29.png",
     price:'100',
     like:'assets/images/red-icon.jpg',
     dislike:'assets/images/dislike.jpg',
     detail:'It is double shaded Rose plant'
    },
     {
       id:"seasonal-24",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/30.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-25",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/31.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-26",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/32.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-27",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/34.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-28",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/desi-gudel.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-29",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/muriya.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-30",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/kadam.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-31",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/kashmiri-rose.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-32",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/lavebdra-white.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-33",
       name:"bougainvailla",
       height:"2 feet",
       image:"assets/seasonal/red-lily.png",
       price:'100',
       like:'assets/images/red-icon.jpg',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-34",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/small-junipress.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-35",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/spider.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
 
      {
       id:"seasonal-36",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/regular-bougainvilla.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-37",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/yellow-rose.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
       {
       id:"seasonal-38",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/goldenhadge.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
       id:"seasonal-39",
       name:"bougainvailla",
       height:"2 feet",
       like:'assets/images/red-icon.jpg',
       image:"assets/seasonal/piple.png",
       price:'100',
       dislike:'assets/images/dislike.jpg',
       detail:'It is double shaded Rose plant'
      },
      {
        id:"seasonal-40",
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/piple.png",
        price:'100',
        dislike:'assets/images/dislike.jpg',
        detail:'It is double shaded Rose plant'
       },

 ],

    }


 dataoffilter =[
  {
    id:"indoor-1",
    name:'Peace Lily, Spathiphyllum-plant',
    price:'169',
    catergory:'indoor',
    image:"assets/images/indoor/5.png",
    detail:{
      description:['Peace Lily Plant is a very popular and very rare indoor flowering houseplant. It is also an excellent air purifier plant.'],
      
      item:[
        'WHY THIS PLANT? Peace Lily (Small size) (Botanical name: Peperomia obtusifolia) is an indoor plant believed to bring good luck and purifies air. It has heartSpathiphyllum Green) purifies indoor air, enhances levels of humidity. It has lovely white flowers with contrasting green leaves that add beauty to home decor and office decor.',
        'HOW ARE PLANTS SHIPPED? Plants are shipped in sturdy packaging to ensure safety of the plant and prevent spillage of manure and coco peat. The shipping box has an air hole for ventilation and plants are adequately watered to stay alive and green for up to 7 days.',
         'HOW TO TAKE CARE OF PLANTS? Water watered once a week in summer and once every 2 weeks in winter. Keep in moderate to bright indirect sunlight. Avoid temperature shock by shifting plants between indoors and outdoors for better growth.Perfect low maintenance plant that can purify air in your home,office.',
         ''
      ],
      care:[
        'Sunlight: Natural indirect / artificial bright light is ideal for peace lily plant growth.',
        'soil: The soil should be well drained and fertile, rich in organic content.',
        'Watering: Poke your finger/plain small stick into the soil to check the moisture.',
        'Fertilizer: Before application of fertilizer loosen the topsoil without disturbing the roots of the plant so it can uptake the nutrients and moisture.'
      ],

  }
},
{
  id:"indoor-2",
  catergory:'indoor',
  name:'Elephant bush',
  image:"assets/images/indoor/3.png",
  price:'169',
  fakeprice:'100',
  like:'assets/images/red-icon.jpg',
  dislike:'assets/images/dislike.jpg',
  reviews:'',
  off:'',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
 
  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  sale:''

},
{
  id:"indoor-3",
  catergory:'indoor',
  name:'snack plant, air purifier and oxygrn enriching plant pack',
  image:"assets/images/indoor/4.png",

  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},

// {
//   id:"indoor-4",
//   name:'Spider, Chlorophytum',
//   images:"assets/images/indoor/1.jpg",
//   price:'169',
//   fakeprice:'199',
//   reviews:'',
//   off:'',
//   sale:''

// },
{
  id:"indoor-5",
  catergory:'indoor',
  name:'Money plant, Scindapsus',
  image:"assets/images/indoor/6.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-6",
  catergory:'indoor',
  name:'Money plant marbel prince',
  image:"assets/images/indoor/7.png",
  price:'169',
  fakeprice:'199',
  reviews:'',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  off:'',
  sale:''

},
{
  id:"indoor-7",
  catergory:'indoor',
  name:'Areca Plam- plant',
  image:"assets/images/indoor/8.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-8",
  catergory:'indoor',
  name:'Ficus Lyrata Bambino',
  image:"assets/images/indoor/9.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-9",
  catergory:'indoor',
  name:'syngonium Green - Plant',
  image:"assets/images/indoor/10.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-10",
  catergory:'indoor',
  name:'Boston Fern, Nephrolepis exaltata bosteniensis',
  image:"assets/images/indoor/11.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-11",
  catergory:'indoor',
  name:'Monestera obliqua',
  image:"assets/images/indoor/12.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-12",
  catergory:'indoor',
  name:'Peperomia Magnoliifolia, Succulent Plant',
  image:"assets/images/indoor/13.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-13",
  name:'jade plant',
  catergory:'indoor',
  image:"assets/images/indoor/15.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',
  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-14",
  catergory:'indoor',
  name:'Christmas Cactus',
  image:"assets/images/indoor/anthurium.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',
  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-15",
  catergory:'indoor',
  name:'Crassula ovata, Jade Plant - Succulent Plant',
  image:"assets/images/indoor/17.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-16",
  catergory:'indoor',
  name:'Syngonium Cream allusion, Syngonium Cream (Pink veins) - Plant',
  image:"assets/images/indoor/arecapalm.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-17",
  catergory:'indoor',
  name:'Snake Plant, Sansevieria trifasciata Golden Hahnii - Succulent Plant',
  image:"assets/images/indoor/19.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-18",
  catergory:'indoor',
  name:'Poinsettia, Christmas Flower (Red) - Plant',
  image:"assets/images/indoor/christmas-cactus.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-19",
  catergory:'indoor',
  name:'Anthurium (Red) - PlantAlocasia Hybrid - Plant',
  image:"assets/images/indoor/21.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-20",
  catergory:'indoor',
  name:'Philodendron xanadu Green - Plant',
  image:"assets/images/indoor/22.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-21",
  catergory:'indoor',
  name:'Haworthia truncata Green Rose - Succulent Plant',
  image:"assets/images/indoor/23.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-22",

  catergory:'indoor',
  name:'Beautiful Table Top / Office Desk SucculentsAglaonema Jubilee Petite - Plant',
  image:"assets/images/indoor/24.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-23",
  catergory:'indoor',
  name:'Haworthia attenuata - Succulent Plant',
  image:"assets/images/indoor/25.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-24",
  catergory:'indoor',
  name:'Calathea ornata pinstripe, Calathea ornata (Pink stripes) - Plant',
  image:"assets/images/indoor/26.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-25",
  catergory:'indoor',
  name:'Aglaonema Tiara, Aglaonema Pink Panther - Plant',
  image:"assets/images/indoor/27.png",
  price:'169',
  fakeprice:'199',
  reviews:'',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  off:'',
  sale:''

},
{
  id:"indoor-26",
  catergory:'indoor',
  name:'Aglaonema Commutatum Malay Beauty - Plant',
  image:"assets/images/indoor/28.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-iconglaonem.webp.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-27",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/29.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
//{
//   id:"indoor-28",
//   name:'Philodendron, Selloum - Plant',
//   image:"assets/images/indoor/elephant-bush.png",
//   price:'169',
//   fakeprice:'199',
//   like:'assets/images/red-icon.jpg',
//   dislike:'assets/images/dislike.jpg',
//   reviews:'',
//   off:'',
//   sale:''

// },
{
  id:"indoor-29",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/money-plant.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-30",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/money_plant.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-31",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/pieacelili.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-32",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/salmonium.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-33",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/snack.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
{
  id:"indoor-34",
  catergory:'indoor',
  name:'Philodendron, Selloum - Plant',
  image:"assets/images/indoor/tablebrush.png",
  price:'169',
  fakeprice:'199',
  like:'assets/images/red-icon.jpg',
  details:{
    description:[
      'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
      'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
    ],
    instruction:["Keep this product away from the reach of children below 3 years"],
    benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
    use:[
      'To fill pots/containers, vertical gardens, bio walls for growing Plants',
      'To prepare raised beds for growing Plants',
      'To repot plants',
      'To amend existing soil in pots'
    ],
    notes:[
      'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
      'Store this soil in cool & dry place.'
    ]
      },

  shippingCharges:'70',
  dispatch:"7 days",
  origin:"india",
  dislike:'assets/images/dislike.jpg',

  description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',


  reviews:'',
  off:'',
  sale:''

},
/// ---------------outdoor--------------------------
     {
      id:"outdoor-1",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/bougainvilla.jpg",
      price:'100',
      detail:'It is double shaded Rose plant',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
     },
     {
      id:"outdoor-2",
      catergory:'outdoor',
      name:"Banana",
      height:"2 feet",
      image:"assets/images/outdoor/banana.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      detail:'It is double shaded Rose plant',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
     },
     {
      id:"outdoor-3",
      catergory:'outdoor',
      name:"double-flower chandni",
      height:"2 feet",
      image:"assets/images/outdoor/chnadni.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-4",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/chmpa.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-5",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/chameli.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-6",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/chrishtna.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-7",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/desi-gudhel.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-8",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/doubleshade-rose.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-9",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/golden hadge.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-10",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/green-ficus.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-11",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/green-junipress.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-12",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/guchabougainvailla.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-13",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/kadam.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-14",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/kashmiri-rose.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-15",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/lavebdra-white.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-16",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/motiya-jasmin.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-17",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/muriya.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-18",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/narangi.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-19",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/panda.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-20",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/piple.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-21",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/red-hadge.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-22",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/red-lily.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"outdoor-23",
      catergory:'outdoor',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/images/outdoor/red-rose.jpg",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
      {
        id:"outdoor-24",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/regular-bougainvilla.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-25",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/round-morpankhi.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-26",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/sejpg.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-27",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/shtut.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-28",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/small-junipress.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-29",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/spider.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-30",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/tablebrush.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-31",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/variety-morphankhi.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-32",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/white-ficus.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-33",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/images/outdoor/yellow-bougainvilla.jpg",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-34",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/outdoor/yellow-rose.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-35",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/flower/ixora.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
  
       {
        id:"outdoor-36",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/flower/gudel.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-37",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/flower/alovera.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
        {
        id:"outdoor-38",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/flower/kranchula.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"outdoor-39",
        catergory:'outdoor',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/images/flower/oxygenplant.jpg",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       //////--------------- flower------------
       {
        id:"flowerplant-1",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-2",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-3",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-4",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:"",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-5",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-6",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-7",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:"",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-8",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-9",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-10",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-11",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-12",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-13",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-14",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-15",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:"",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-16",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-17",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:"",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-18",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        Image:'',
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"flowerplant-19",
        catergory:'flower',
        name:'Philodendron, Selloum - Plant',
        price:'169',
        image:"",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:''
      },

      //------------seeds-----
      {
        id:"seed-1",
        name:'carrot',
        catergory:'seeds',
        price:'169',
        image:"assets/images/seeds/alyssum.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-2",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/balsam.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-3",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/brinjal.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-4",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/california-poppy.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-5",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/carrot.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-6",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/cherry-tomato.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-7",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/chia.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-8",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/chia-seeds.jpg",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-9",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/corn.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-10",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/cosmos.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        off:'',
        sale:''
      },
      {
        id:"seed-11",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/drumstick.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        off:'',
        sale:''
      },
      {
        id:"seed-12",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/gaillardia.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-13",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/green-chili.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-14",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/heirloom.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-15",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/hollyhock.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-16",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/karela.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-17",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/kochia.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-18",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/larkspurmix.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"seed-19",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/lecttus.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-20",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/lupins.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-21",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/methi.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-22",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/mint.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-23",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/mix-seeds.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-24",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/musturd.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-25",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/muttur.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-26",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/red-poppy.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-27",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/soya.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-28",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/stick.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      }, {
        id:"seed-29",
        catergory:'seeds',
        name:'carrot',
        price:'169',
        image:"assets/images/seeds/sulgum.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },


      // ---------------------------compost ----------------------------------
      {
        id:"compost-1",
        catergory:'compost',
        name:'Bone Meal (abitec)',
        price:'169',
        image:"assets/images/compost/abitec-bornmeal.jpg",
        fakeprice:'199',
        reviews:'',
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        off:'',
        details:{
        description:[
          'Bone meal is a organic source of nutrients for gardening. This rich source of phosphorous and calcium is best for fruit and flower development on your plant.',
          'Bone meal as name suggest is made from ground up animal bones. Bone meal is generally used by gardenenrs to increase phosphorous content in the soil. This ia also the good source of calcium.Bone meal also aids in balancing phosphorous content in nitrogen rich organic manure.'
        ],
        instruction:['Use gloves / mask if you are allergic to fertilizers'],
        benefits:[
          'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for approx 2 years',
          'Eco friendly No chemicalsEasy applicationBetter fruit and flower quality'
        ],
        use:[
          'You can use bone meal along with any nitrogen rich organic manure',
          'You can add it in soil mix before planting new plants in pots also',
          'You can use it in existing plants in pot directly',
        ]
        },
        like:'assets/images/red-icon.jpg',
        dislike:'assets/images/dislike.jpg',
        description:'Bone Meal Powder for Plants (1 KG) - Organic Fertilizer, Rich in Phosphorus and Calcium, Natural Plant Growth Fertilizer for Home Gardening.'
      
      },
      {
        id:"compost-2",
        catergory:'compost',
        name:'Bone Meal',
        price:'169',
        image:"assets/images/compost/bone-meal.jpg",
        fakeprice:'199',
        reviews:'',
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Bone Meal Powder for Plants (1 KG) - Organic Fertilizer, Rich in Phosphorus and Calcium, Natural Plant Growth Fertilizer for Home Gardening.',
        details:{
          description:[
            'Bone meal is a organic source of nutrients for gardening. This rich source of phosphorous and calcium is best for fruit and flower development on your plant.',
            'Bone meal as name suggest is made from ground up animal bones. Bone meal is generally used by gardenenrs to increase phosphorous content in the soil. This ia also the good source of calcium.Bone meal also aids in balancing phosphorous content in nitrogen rich organic manure.'
          ],
          instruction:['Use gloves / mask if you are allergic to fertilizers'],
          benefits:[
            'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for approx 2 years',
            'Eco friendly No chemicalsEasy applicationBetter fruit and flower quality'
          ],
          use:[
            'You can use bone meal along with any nitrogen rich organic manure',
            'You can add it in soil mix before planting new plants in pots also',
            'You can use it in existing plants in pot directly',
          ],
         
          },
        off:'',
        sale:''
      },
      {
        id:"compost-3",
        catergory:'compost',
        name:'Cocopeat powder',
        price:'169',
        image:"assets/images/compost/coco-powder.jpg",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:'',
        dislike:'assets/images/dislike.jpg',
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        like:'assets/images/red-icon.jpg',
        description:"To use cocopeat powder, rehydrate it with water, mix 1 part cocopeat powder with 2-3 parts soil or potting mix for better soil structure and water retention."
      },
      {
        id:"compost-4",
        catergory:'compost',
        name:'Potting Soil Mix',
        price:'169',
        image:"assets/images/compost/soil-mix.jpeg",
        fakeprice:'199',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
            
        reviews:'',
        off:'',
        sale:'',
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash'
      },
      {
        id:"compost-5",
        catergory:'compost',
        name:'Organic Compost',
        price:'500',
        image:"assets/images/compost/images.jpeg",
        fakeprice:'800',
        reviews:'',
        off:'',
        sale:'',
        details:{
      description:['Cow dung manure for plants. It is best organic fertilizers for home plants.It is 100% natural & organic with no mixing of any other substances.Contains microbial bio-stimulants to enhance disease resistance and establish beneficial microflora.'],
       use:['Loosen the soil around the plant.Sprinkle near root zone of the plant.Water the plant after application to mix.'],
      instruction: ["Keep this product away from the reach of the Children. If ingested, consult physician immediately"],
        },
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Organic compost is decomposed organic matter added to soil in order to improve its quality. Organic compost helps improve the texture of the soil, reduces compaction, and increases the amount of water and air that can be held by the soil.'
      },
      {
        id:"compost-6",
        catergory:'compost',
        name:'Vermi-compost',
        price:'400',
        image:"assets/images/compost/vermicompost.jpeg",
        fakeprice:'600',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:['Vermigreen vermicompost is a high quality 100% organic product for gardening and organic farming. It is a humic-acid rich compost prepared by decomposition of organic waste by earthworms.',
            'Vermicompost is used as a soil additive, conditioner, and fertilizer. Vermicompost functions to add humus and organic matter to the soil providing bioavailable nutrients to the plants, increasing soil tilth. Vermicompost helps with water infiltration and retention, while buffering excessive acid or alkaline soil conditions.',
            'Vermicompost helps store nutrients and keeps them safe from leeching and irrigation.'
          ],
          instruction:[
            "Keep this product away from the reach of the Children. If ingested, consult physician immediately",
            "Store in cool and dry place"
  
          ],
         benefits:[
          'This pack is sufficient for a plant potted in a pot having 5-6 inch upper diameter for 1 year',
          'Improves soil quality',
          'Helps to balance soil pH',
          'Completely organic product',
          '100% Chemical free'
  
        ],
        use:['For potted plants, apply 150-250 g Vermicompost at the plant base away from main stem 3-4 times in a year',
          'Use in equal proportion with soil while filling pots',
        ]
        },
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Vermicomposting is the scientific method of making compost, by using earthworms. '
      },
      {
        id:"compost-7",
        catergory:'compost',
        name:'Seeds-Booster',
        price:'130',
        image:"assets/images/compost/seeds-booster.jpg",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:'',
        details:{
         description:['Seed booster as a mixture of vegetable origin seaweed and animal origin products recommended for direct seed application and root dipping.'],
        use:[
          '2 Special Boosters in a single pack',
          'Products are organic and easy to use',
          'Can be added directly or can be dissolved in water before application.'
         ],
         instruction:['Keep this product away from the reach of the Children. If ingested, consult physician immediately']
        },
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        like:'assets/images/red-icon.jpg',
        dislike:'assets/images/dislike.jpg',
        description:'Seed booster as a mixture of vegetable origin seaweed and animal origin products recommended for direct seed application and root dipping.'
      },
      {
        id:"compost-8",
        catergory:'compost',
        name:'Neemkhali',
        price:'169',
        image:"assets/images/compost/neemkhali.jpg",
        fakeprice:'199',
        reviews:'',
        off:'',
        sale:'',
        details:{
      description:[' neem khali powder naturally deters nematodes, whiteflies, and other garden invaders. Protect your plants from pests and diseases without compromising the environment. Its potent insecticidal and fungicidal properties make it your secret weapon for a lush, pest-free garden.'],
     use:["Transform tired soil into fertile ground with the power of neem. This organic fertilizer for plants home garden improves texture, boosts microbial activity, and enhances water retention. The result? Soil that nourishes your plants with every drop of water and nutrient absorbed."],
     instruction:['Keep this product away from the reach of the Children. If ingested, consult physician immediately'],   
  },
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Enhance your garden with Neem Khali, an organic fertilizer rich in nutrients like nitrogen, phosphorus, and potassium.'
      },
  
      {
        id:"compost-9",
        catergory:'compost',
        name:'Plant Growth tonic',
        price:'200',
        image:"assets/images/compost/plantgrwoth-tonic.jpg",
        fakeprice:'400',
        reviews:'',
        off:'',
        sale:'',
        details:{
        description:[
          'Jeevamrut is an excellent plant growth tonic with 100 % organic ingredients.',
          'Jeevamrut is a liquid organic manure popularly used as means of organic gardening. It is considered to be an excellent source of natural carbon, biomass, nitrogen, phosphorous potassium and lot of other micro nutrients required for the plants.',
          'Jeevamrut adds organic matter to the soil which improves soil structure, aeration, soil moisture-holding capacity, and water infiltration. Jeevamrut improves the quality and yield of fruits, vegetables and other crops.Organic ingredients of Jeevamrut Cow dung Cow urine Lentil powder Jaggery Organic soil Water.'
        ],
        instructions:[
          'Keep the bottle in the dry area',
          'Do not keep the bottle open for a long time',
          'The bottle should be tightly closed and stored in dry space after use',
          'Keep the bottle out of reach of children'
        ],
        benefits:[
          'This pack is sufficient for 1 plant potted in a pot having 5-6 inch diameter for 1',
          '5 months',
          'Increase plant growth',
          'Enrich the soil with nutrient',
          'Improves the PH of the soil',
          'Increase disease resistance of plant',
          'Provide balance nutrient to the plant',
        ],
        use:[
          'Shake the bottle well before opening it every time',
          'Take 100ml of Jeevamrut and add it to 1 liter of plain water',
          'Mix them thoroughly',
          'Pour the diluted liquid to the soil',
          'Repeat the process every 15 days'
        ]
        },
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
        like:'assets/images/red-icon.jpg',
        description:'Plant Tonic is a liquid essential magic tonic with micro-nutrients. It ensures the absorption of nutrients rapidly.'
      },

      // ------- pots---------------------------------

      {
        id:"fiberpot-1",
        catergory:'pots',
        type:"fiber pots",
        reviews:'',
        off:'',
        sale:'',
        name:'carrot',
        price:'169',
        like:'assets/images/red-icon.jpg',
        image:"assets/images/pots/fiber/1.webp",
        fakeprice:'199',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
  
       
   
      },
      {
        id:"fiberpot-2",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/2.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-3",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/6.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-4",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/7.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-5",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
       image:"assets/images/pots/fiber/8.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-6",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
      image:"assets/images/pots/fiber/9.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-7",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/10.webp",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
  
      {
        id:"fiberpot-9",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/4.jpg",
        fakeprice:'199',
        reviews:'',
        like:'assets/images/red-icon.jpg',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-10",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/5.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
     
      {
        id:"fiberpot-12",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/11.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-13",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/12.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"fiberpot-14",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/9.avif",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
   
      {
        id:"mudpot-1",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/1.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-2",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/5.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-3",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/9.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-4",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/11.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-5",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
       image:"assets/images/pots/mud/12.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-6",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
      image:"assets/images/pots/mud/2.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-7",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/3.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-8",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/4.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-9",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/6.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-10",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/7.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-11",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/8.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-12",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/10.avif",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"mudpot-13",
        catergory:'pots',
        type:"mud pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/mud/5.avif",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"plasticpot-1",
        catergory:'pots',
        type:"plastic pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/plastic/1.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"plasticpot-2",
        catergory:'pots',
        type:"plastic pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/plastic/2.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"plasticpot-3",
        catergory:'pots',
        type:"plastic pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/plastic/3.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"plasticpot-4",
        catergory:'pots',
        type:"plastic pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/plastic/4.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
    
      {
        id:"cermicpot-7",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/7.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
    
      {
        id:"cermicpot-9",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/12.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-10",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/14.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-11",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/16.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-12",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/1.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-13",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/2.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-14",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/3.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-15",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/6.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-16",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/8.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
      },
      {
        id:"cermicpot-17",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/10.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"cermicpot-18",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/11.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        sale:''
      },
      {
        id:"cermicpot-19",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/13.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"cermicpot-20",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
       image:"assets/images/pots/surmik/14.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"cermicpot-21",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
      image:"assets/images/pots/surmik/15.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"cermicpot-22",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/16.jpg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },  {
        id:"cermicpot-8",
        catergory:'pots',
        type:"cermicpot pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/surmik/8.webp",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"fiberpot-15",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/8.avif",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },
      {
        id:"fiberpot-11",
        catergory:'pots',
        type:"fiber pots",
        name:'carrot',
        price:'169',
        image:"assets/images/pots/fiber/10.jpeg",
        fakeprice:'199',
        like:'assets/images/red-icon.jpg',
        reviews:'',
        off:'',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        sale:''
      },

      // --------------------- tools -----------------------
        
    {
      id:"tool-1",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''

    },
    {
      id:"tool-2",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/4.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-3",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/6.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-4",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-5",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/10.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-6",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/7.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-7",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-8",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/picAxe4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-9",
      catergory:'tools',

      name:'carrot',
      price:'169',
      image:"assets/images/tools/7.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-10",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/9.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-11",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/9.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-12",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-13",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"tool-14",
      catergory:'tools',
      name:'carrot',
      price:'169',
      image:"assets/images/tools/5.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      sale:''
    },
    {
      id:"seasonal-1",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/1.png",
      price:'100',
      detail:'It is double shaded Rose plant',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
     },
     {
      id:"seasonal-2", 
        catergory:'seasonal',

      name:"Banana",
      height:"2 feet",
      image:"assets/seasonal/3.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      detail:'It is double shaded Rose plant',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
     },
     {
      id:"seasonal-3",
      catergory:'seasonal',
      name:"double-flower chandni",
      height:"2 feet",
      image:"assets/seasonal/4.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-4",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/5.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-5",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/6.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-6",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/10.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-7",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/12.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-8",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/14.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-9",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/15.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-10",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/16.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-11",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/17.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-12",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/18.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-13",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/19.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-14",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/20.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-15",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/21.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-16",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/22.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-17",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/23.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-18",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/24.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-19",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/25.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-20",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/26.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-21",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/27.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-22",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/28.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
     {
      id:"seasonal-23",
      catergory:'seasonal',
      name:"bougainvailla",
      height:"2 feet",
      image:"assets/seasonal/29.png",
      price:'100',
      like:'assets/images/red-icon.jpg',
      details:{
        description:[
          'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
          'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
        ],
        instruction:["Keep this product away from the reach of children below 3 years"],
        benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
        use:[
          'To fill pots/containers, vertical gardens, bio walls for growing Plants',
          'To prepare raised beds for growing Plants',
          'To repot plants',
          'To amend existing soil in pots'
        ],
        notes:[
          'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
          'Store this soil in cool & dry place.'
        ]
          },
   
      shippingCharges:'70',
      dispatch:"7 days",
      origin:"india",
      dislike:'assets/images/dislike.jpg',
 
      description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
    
   
      detail:'It is double shaded Rose plant'
     },
      {
        id:"seasonal-24",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/30.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-25",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/31.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-26",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/32.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-27",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/34.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-28",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/desi-gudel.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-29",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/muriya.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-30",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/kadam.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-31",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/kashmiri-rose.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-32",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/lavebdra-white.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-33",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        image:"assets/seasonal/red-lily.png",
        price:'100',
        like:'assets/images/red-icon.jpg',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-34",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/small-junipress.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-35",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/spider.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
  
       {
        id:"seasonal-36",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/regular-bougainvilla.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-37",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/yellow-rose.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
        {
        id:"seasonal-38", 
          catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/goldenhadge.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
        id:"seasonal-39",
        catergory:'seasonal',
        name:"bougainvailla",
        height:"2 feet",
        like:'assets/images/red-icon.jpg',
        image:"assets/seasonal/piple.png",
        price:'100',
        details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
        detail:'It is double shaded Rose plant'
       },
       {
         id:"seasonal-40",
         catergory:'seasonal',
         name:"bougainvailla",
         height:"2 feet",
         like:'assets/images/red-icon.jpg',
         image:"assets/seasonal/piple.png",
         price:'100',
         details:{
          description:[
            'Quality of the growing medium decides the quality of the plants. Soil in the pots/containers should be well drained and aerated. It should still retain moisture.',
            'Contents: Soil, Perlite, Vermiculite, Cocopeat, Vermicompost.'
          ],
          instruction:["Keep this product away from the reach of children below 3 years"],
          benefits:['Environment friendly Excellent water holding capacityOrganicProvides best environment to the plants rootsNo harmful chemicalsCan be used to grow all type of plantsSpecially formulatedExcellent air porosity'],
          use:[
            'To fill pots/containers, vertical gardens, bio walls for growing Plants',
            'To prepare raised beds for growing Plants',
            'To repot plants',
            'To amend existing soil in pots'
          ],
          notes:[
            'This soil does not contain any specialized fertilizer like flowering or fruiting booste',
            'Store this soil in cool & dry place.'
          ]
            },
     
        shippingCharges:'70',
        dispatch:"7 days",
        origin:"india",
        dislike:'assets/images/dislike.jpg',
   
        description:'Plant Potting Mix Soil for Plants 10kg, Soil Less All Purpose Ready to use Potting Mix Made with vermicompost/Neem Cake/Potash',
      
     
         detail:'It is double shaded Rose plant'
        },



         {
      id:"tool-1",
      name:'carrot',
      catergory:'tools',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-2",
      name:'carrot',
      price:'169',
       catergory:'tools',
      image:"assets/images/tools/4.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-3",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/6.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-4",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-5",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/10.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-6",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/7.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-7",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/8.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-8",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/picAxe4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-9",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/7.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-10",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/9.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-11",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/9.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-12",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/3.jpg",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-13",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/4.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
    {
      id:"tool-14",
      name:'carrot',
       catergory:'tools',
      price:'169',
      image:"assets/images/tools/5.webp",
      fakeprice:'199',
      reviews:'',
      off:'',
      sale:''
    },
 

 ]


    getallproducts(){
      return this.allProductData
    }

    filterdata(){
      return this.dataoffilter
    }

};

