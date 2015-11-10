if (Meteor.isClient) {
  Template.body.helpers({
    experts: [
      // name, image, abilities, contact
      {name: "Jane",
       image: "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/wolly-bear-caterpillar-400.jpg",
       abilities: ["java", "html", "cooking", "whistle"],
       contact: "jane@doe.com"
      },
      {name: "Tarzana",
       image: "http://t00.deviantart.net/9bzMvL9HcA47X8eEPn7FWBV7D-A=/fit-in/300x900/filters:no_upscale():origin()/pre01/05f9/th/pre/f/2014/016/1/0/tarzan_and_numa_by_bumpman321-d72h2p8.jpg",
       abilities: ["swinging", "screaming", "dancing"],
       contact: "scream@thejung.le",
      },
    ],
  });
}
