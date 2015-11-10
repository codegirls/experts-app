Experts = new Mongo.Collection("experts");

if (Meteor.isClient) {
  Template.body.helpers({
    experts: function() {
      return Experts.find({});
    },
    /*
      db.experts.insert({name: "Jane", image: "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/wolly-bear-caterpillar-400.jpg", abilities: ["java", "html", "cooking", "whistle"], contact: "jane@doe.com", createdAt: new Date() },
      db.experts.insert({name: "Tarzana", image: "http://t00.deviantart.net/9bzMvL9HcA47X8eEPn7FWBV7D-A=/fit-in/300x900/filters:no_upscale():origin()/pre01/05f9/th/pre/f/2014/016/1/0/tarzan_and_numa_by_bumpman321-d72h2p8.jpg", abilities: ["swinging", "screaming", "dancing"],       contact: "scream@thejung.le", createdAt: new Date() });
    */
  });

  Template.body.events({
    'submit .new-expert': function(event) {
      event.preventDefault();

      var form = event.target;
      var expert = {
        name: form.name.value, // <script>alert('hahahaha');</script>
        // TODO: check that url is valid/exists/is an image
        image: form.image.value,
        // TODO: duplcates, sorting, ...
        abilities: form.abilities.value
          .split(/[ ,;]/)
          .filter(function(ability) {
            return ability != "";
          }),
        contact: form.contact.value,
        createdAt: new Date(),
      };
      Experts.insert(expert);

      form.name.value = "";
      form.image.value = "";
      form.abilities.value = "";
      form.contact.value = "";
    },
  });
}
