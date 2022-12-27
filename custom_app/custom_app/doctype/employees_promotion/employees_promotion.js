// Copyright (c) 2022, harsh and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Employees Promotion', {
	frappe.ui.form.on("Employees Promotion", "refresh", function(frm) {
		cur_frm.fields_dict["below_date"].grid.get_field("epm").get_query = function (
		  doc
		) {
		  let employee = cur_frm.doc.below_date || [];
		  let employee_list = [];
		  for (let x in employee) {
			if (employee[x]["epm"]) {
			  employee_list.push(employee[x]["epm"]);
			}
			console.log(x)
		  }
		  return {
			query:
			  "custom_app.custom_app.doctype.employees_promotion.employees_promotion.get_employees",
			filters: {
			  employee_list: employee_list,
			},
		  };
		};
		
	  });
// });
