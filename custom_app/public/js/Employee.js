frappe.ui.form.on("Employee", {
  validate: function (frm) {
    if (frm.doc.date_of_birth) {
      var today = new Date();
      var birthDate = new Date(frm.doc.date_of_birth);
      var yearsDiff = today.getFullYear() - birthDate.getFullYear();
      if (yearsDiff >= 25) {
        console.log("cfghjgfcvghjhgfghj");
        frm.set_value("age_category", "Elite");
      } else if (yearsDiff >= 20 && yearsDiff <= 24) {
        console.log("under");
        frm.set_value("age_category", "Under 24");
      } else if (yearsDiff == 19 || yearsDiff == 18) {
        frm.set_value("age_category", "Under 20");
      } else if (yearsDiff == 17 || yearsDiff == 16) {
        frm.set_value("age_category", "Under 18");
      } else if (yearsDiff == 15 || yearsDiff == 14) {
        frm.set_value("age_category", "Under 16");
      } else if (yearsDiff <= 13) {
        frm.set_value("age_category", "Under 14");
      }
    }
  },
});
