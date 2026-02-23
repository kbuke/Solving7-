from resources.BaseResource import BaseResource
from models.ProductModel import ProductModel

from config import db 

class Products(BaseResource):
    model = ProductModel

    field_map = {
        "productName": "name",
        "productInfo": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificProduct(BaseResource):
    model = ProductModel

    field_map = {
        "productName": "name",
        "productInfo": "info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)