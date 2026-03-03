from resources.BaseResource import BaseResource
from models.ProductPictures import ProductPictureModel

class ProductImage(BaseResource):
    model = ProductPictureModel

    field_map = {
        "imgLink": "link",
        "productId": "product_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificProductImg(BaseResource):
    model = ProductPictureModel

    field_map = {
        "imgLink": "link",
        "productId": "product_id"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def delete(self, id):
        return self.delete_instance(id)