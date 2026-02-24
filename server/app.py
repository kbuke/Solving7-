from config import app
from helpers.AddResource import add_resource

from resources.Members import Members, SpecificMember
from resources.Teams import Teams, SpecificTeam
from resources.Pillars import Pillar, SpecificPillar
from resources.Products import Products, SpecificProduct
from resources.SustainableGoals import SustainableGoals, SpecificSustainableGoal
from resources.SustainablePillar import SustainablePillar, SpecificSustainablePillar
from resources.ProductPillars import ProductPillar, SpecificProductPillar
from resources.AdminDashboard import AdminDashboard
from resources.CheckAdmin import CheckAdmin
from resources.Login import Login
from resources.Logout import Logout
from resources.Emails import EmailList

add_resource(Members, "/members")
add_resource(SpecificMember, "/members/<int:id>")

add_resource(Teams, "/teams")
add_resource(SpecificTeam, "/teams/<int:id>")

add_resource(Pillar, "/pillars")
add_resource(SpecificPillar, "/pillars/<int:id>")

add_resource(Products, "/products")
add_resource(SpecificProduct, "/products/<int:id>")

add_resource(SustainableGoals, "/sustainability")
add_resource(SpecificSustainableGoal, "/sustainability/<int:id>")

add_resource(SustainablePillar, "/sustainablepillar")
add_resource(SpecificSustainablePillar, "/sustainablepillar/<int:id>")

add_resource(ProductPillar, "/productpillar")
add_resource(SpecificProductPillar, "/productpillar/<int:id>")

add_resource(Login, "/login")
add_resource(Logout, "/logout")

add_resource(AdminDashboard, "/admin")
add_resource(CheckAdmin, "/check-admin")

add_resource(EmailList, "/emails")


if __name__ == "__main__":
    app.run(port = 5555, debug = True)