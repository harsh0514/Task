# Copyright (c) 2022, harsh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EmployeesPromotion(Document):
	pass
@frappe.whitelist()
def get_employees(doctype, txt, searchfield, page_len, start, filters):
	employee_list = filters.get('employee_list')
	check_new=str(employee_list) 
	sql = ''' 
		select name from `tabEmployee` where  name NOT IN ('{0}') 
		'''.format(check_new[2:-2])

	emp_data= frappe.db.sql(sql)
	return emp_data 