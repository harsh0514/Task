import frappe
def create_licence_record(doc,method):
    if doc.status == ("Approve") :
        data = frappe.new_doc('Licence')
        data.name1=doc.name1
        data.last_name = doc.last_name
        data.gender = doc.gender
        data.date_of_birth = doc.date_of_birth
        data.age = doc.age
        data.user_image = doc.user_image
        data.save()