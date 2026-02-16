from config import app
from helpers.AddResource import add_resource

from resources.TeamMembers import TeamMember, SpecificTeamMember
from resources.Pillars import Pillar, SpecificPillar

add_resource(TeamMember, "/members")
add_resource(SpecificTeamMember, "/members/<int:id>")

add_resource(Pillar, "/pillars")
add_resource(SpecificPillar, "/pillars/<int:id>")

if __name__ == "__main__":
    app.run(port = 5555, debug = True)