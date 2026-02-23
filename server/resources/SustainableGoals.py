from resources.BaseResource import BaseResource
from models.SustainableGoalModel import SustainableGoalModel

class SustainableGoals(BaseResource):
    model = SustainableGoalModel

    field_map = {
        "sustainableGoal": "goal",
        "sustainableInfo": "info"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()


class SpecificSustainableGoal(BaseResource):
    model = SustainableGoalModel

    field_map = {
        "sustainableGoal": "goal",
        "sustainableInfo": "info"
    }

    def get(self, id):
        return self.get_specific(id)
    
    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)