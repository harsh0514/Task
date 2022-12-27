# Copyright (c) 2022, harsh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EmployeesPromotion(Document):
	pass
@frappe.whitelist()
def get_employees(doctype, txt, searchfield, page_len, start, filters):
	employee_list = filters.get('employee_list')
	value = ""
	for index, i in enumerate(employee_list):
		if index >= 1:
			value = value+"'"+","+"'"+i
		else:
			value = value+i
	sql = """
		select name
		from `tabEmployee`
		where name NOT IN ('{0}')  
		""".format(value)
	emp_data= frappe.db.sql(sql)
	print(sql)
	return emp_data
    