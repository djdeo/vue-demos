const db = firebase.firestore();

new Vue({
  el: "#app",
  data: {
    feedback: "",
    content: "",
    disabled: false,
    details: [],
    license: null
  },
  created() {
    this.getEmails();
  },
  methods: {
    addEmail() {
      if (this.content) {
        this.disabled = true;
        db.collection("emails")
          .add({
            email: this.content
          })
          .then(() => {
            this.feedback = "New Email Added";
            this.content = "";
          })
          .catch(err => {
            this.feedback = err
          })
      } else {
        this.feedback = "Please input your valid email to continue";
      }
    },
    getEmails() {
      db.collection("emails")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let detail = doc.data();
            this.details.push(detail.email);
          });
        });
    },
    getLicense() {
      console.log("clicked");
      db.collection("license")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let licen = doc.data();
            this.license = licen.code;
          });
        });
    }
  }
});
