const BookArray = [
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    description:
      "Introducing one of the most famous characters in literature, Jean Valjean—the noble peasant imprisoned for stealing a loaf of bread—Les Misérables ranks among the greatest novels of all time.",
    genres: "Classics, Fiction, Historical",
    image: "https://images.gr-assets.com/books/1525303092l/24280.jpg",
    price: "99",
  },
  {
    title: "Divergent",
    author: "Veronica Roth",
    description:
      "In Beatrice Prior's dystopian Chicago world, society is divided into five factions, each dedicated to the cultivation of a particular virtue.",
    genres: "Young Adult, Science Fiction, Dystopia",
    image: "https://images.gr-assets.com/books/1328559506l/13335037.jpg",
    price: "79",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description:
      "Fiery love, shocking twists of fate, and tragic mysteries put a lonely governess in jeopardy in JANE EYRE. Orphaned as a child, Jane has felt an outcast her whole young life.",
    genres: "Classics, Fiction, Romance",
    image: "https://images.gr-assets.com/books/1327867269l/10210.jpg",
    price: "120",
  },
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    description:
      "In Romeo and Juliet, Shakespeare creates a world of violence and generational conflict in which two young people fall in love and die because of that love.",
    genres: "Classics, Plays, Fiction",
    image: "https://images.gr-assets.com/books/1327872146l/18135.jpg",
    price: "85",
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. Their freedom is something to celebrate; this far from civilization, the boys can do anything they want.",
    genres: "Classics, Fiction, Young Adult",
    image: "https://images.gr-assets.com/books/1327869409l/7624.jpg",
    price: "65",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure.",
    genres: "Fiction, Classics, Fantasy",
    image: "https://images.gr-assets.com/books/1483412266l/865.jpg",
    price: "95",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoyevsky",
    description:
      "Raskolnikov, an impoverished student living in the St. Petersburg of the tsars, is determined to overreach his humanity and assert his untrammeled individual will.",
    genres: "Fiction, Classics",
    image: "https://images.gr-assets.com/books/1382846449l/7144.jpg",
    price: "75",
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    description:
      'Andrew "Ender" Wiggin thinks he is playing computer simulated war games; he is, in fact, engaged in something far more desperate.',
    genres: "Fiction, Science Fiction",
    image: "https://images.gr-assets.com/books/1408303130l/375802.jpg",
    price: "105",
  },
  {
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    description:
      "The critically acclaimed debut novel from Stephen Chbosky, Perks follows observant “wallflower” Charlie as he charts a course through the strange world between adolescence and adulthood.",
    genres: "Fiction, Young Adult",
    image: "https://images.gr-assets.com/books/1520093244l/22628.jpg",
    price: "88",
  },
  {
    title: "City of Bones",
    author: "Cassandra Clare",
    description:
      "When fifteen-year-old Clary Fray heads out to the Pandemonium Club in New York City, she hardly expects to witness a murder committed by three teenagers covered with strange tattoos and brandishing bizarre weapons.",
    genres: "Fiction, Fantasy, Young Adult",
    image: "https://images.gr-assets.com/books/1432730315l/256683.jpg",
    price: "70",
  },
  {
    title: "The Help",
    author: "Kathryn Stockett",
    description:
      "Be prepared to meet three unforgettable women: Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss.",
    genres: "Fiction",
    image: "https://images.gr-assets.com/books/1346100365l/4667024.jpg",
    price: "82",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A true classic of twentieth-century literature, this edition has been updated by Fitzgerald scholar James L.W. West III to include the author’s final revisions.",
    genres: "Classics, Fiction",
    image: "https://images.gr-assets.com/books/1490528560l/4671.jpg",
    price: "105",
  },
  {
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    description:
      "A funny, often poignant tale of boy meets girl with a twist: what if one of them couldn't stop slipping in and out of time?",
    genres: "Fiction, Fantasy, Romance",
    image: "https://images.gr-assets.com/books/1380660571l/18619684.jpg",
    price: "99",
  },
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    description:
      "One of the most beloved children's books of all time, Charlotte's Web tells the story of a friendship between a pig named Wilbur and a spider named Charlotte, who saves Wilbur from a dire fate with her clever web-writing skills.",
    genres: "Children's, Fiction",
    image: "https://images.gr-assets.com/books/1437760011l/24178.jpg",
    price: "45",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "Bilbo Baggins, a hobbit who enjoys a peaceful life, is unexpectedly thrust into an epic adventure when he joins a group of dwarves on a quest to reclaim their homeland from the fearsome dragon Smaug.",
    genres: "Fantasy, Fiction",
    image: "https://images.gr-assets.com/books/1372847500l/5907.jpg",
    price: "68",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "Set in the American South during the 1930s, this novel explores themes of racial injustice, moral growth, and empathy through the eyes of young Scout Finch as she observes her father, Atticus, defending an innocent black man accused of rape.",
    genres: "Classics, Fiction",
    image: "https://images.gr-assets.com/books/1553383690l/2657.jpg",
    price: "92",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "Narrated by the troubled teenager Holden Caulfield, this novel is a classic exploration of teenage angst and alienation as Holden embarks on a journey through New York City after being expelled from his prep school.",
    genres: "Classics, Fiction",
    image: "https://images.gr-assets.com/books/1398034300l/5107.jpg",
    price: "76",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description:
      "The first book in the iconic Harry Potter series introduces young Harry as he discovers his magical heritage and begins his journey at Hogwarts School of Witchcraft and Wizardry.",
    genres: "Fantasy, Young Adult",
    image: "https://images.gr-assets.com/books/1474154022l/3.jpg",
    price: "105",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "In a dystopian future, Katniss Everdeen volunteers to take her sister's place in the Hunger Games—a televised fight to the death among teenagers from different districts. She must fight for survival and resist the oppressive Capitol.",
    genres: "Young Adult, Science Fiction, Dystopia",
    image: "https://images.gr-assets.com/books/1447303603l/2767052.jpg",
    price: "82",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    description:
      "In a post-apocalyptic world, a father and his young son embark on a perilous journey to find safety and survive in a desolate landscape filled with danger and despair.",
    genres: "Fiction, Science Fiction",
    image: "https://images.gr-assets.com/books/1442064588l/6288.jpg",
    price: "90",
  },
];

module.exports = BookArray;
