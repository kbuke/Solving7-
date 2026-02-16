from models.TeamMemberModel import TeamMemberModel
from resources.BaseResource import BaseResource

class TeamMember(BaseResource):
    model = TeamMemberModel

    field_map = {
        "memberName": "name",
        "memberPosition": "position",
        "memberIntro": "intro"
    }

    def get(self):
        return self.get_all()
    
    def post(self):
        return self.post_instance()

class SpecificTeamMember(BaseResource):
    model = TeamMemberModel

    field_map = {
        "memberName": "name",
        "memberPosition": "position",
        "memberIntro": "intro"
    }

    def get(self, id):
        return self.get_specific(id)

    def patch(self, id):
        return self.patch_instance(id)
    
    def delete(self, id):
        return self.delete_instance(id)