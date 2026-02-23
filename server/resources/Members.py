from models.MemberModel import MemberModel
from resources.BaseResource import BaseResource

class Members(BaseResource):
    model = MemberModel

    field_map = {
        "memberName": "name",
        "memberPosition": "position",
        "memberIntro": "intro",
        "teamId": "team_id"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificMember(BaseResource):
    model = MemberModel

    field_map = {
        "memberName": "name",
        "memberPosition": "position",
        "memberIntro": "intro",
        "teamId": "team_id"
    }

    def get(self, id):
        return self.get_specific(id)

    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)