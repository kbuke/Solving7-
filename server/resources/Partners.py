from resources.BaseResource import BaseResource
from models.PartnerModel import PartnerModel

from config import db 

class Partners(BaseResource):
    model = PartnerModel

    field_map = {
        "partnerName": "name",
        "partnerLogo": "logo"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificPartner(BaseResource):
    model = PartnerModel

    field_map = {
        "partnerName": "name",
        "partnerLogo": "logo"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)
    